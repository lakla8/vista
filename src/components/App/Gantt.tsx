import React, { useMemo } from 'react'
import { parseISO, differenceInMilliseconds, min, max, format } from 'date-fns'
import { Box, Table, Badge, Text } from '@mantine/core'

// Возможные статусы задачи
export type Status = 'completed' | 'in_process' | 'waiting'

// Описание задачи для диаграммы
export interface GanttTask {
  group: string          // Название группы/фазы
  name: string           // Название задачи
  start: string          // Дата начала в формате ISO, например '2025-05-25'
  end: string            // Дата окончания в формате ISO
  status: Status         // Статус задачи
  progress: number       // Процент выполнения от 0 до 100
  level: number          // Уровень вложенности (для сортировки при необходимости)
}

interface TasksGanttSectionProps {
  tasks: GanttTask[]
  onTaskClick: (task: GanttTask) => void
}

const TasksGanttSection: React.FC<TasksGanttSectionProps> = ({ tasks, onTaskClick }) => {
  // Если нет задач — не рендерим диаграмму
  if (!tasks || tasks.length === 0) {
    return <Box className="tasks-chart-mantine">Нет задач для отображения</Box>
  }

  // 1. Вычисляем границы диаграммы (ранняя и поздняя даты)
  const { chartStart, chartEnd } = useMemo(() => {
    const starts = tasks.map(t => parseISO(t.start))
    const ends   = tasks.map(t => parseISO(t.end))
    return {
      chartStart: min(starts)!,  // гарантированно хотя бы одна дата
      chartEnd:   max(ends)!,
    }
  }, [tasks])

  const totalDuration = differenceInMilliseconds(chartEnd, chartStart)

  // 2. Группируем задачи по полю group
  const tasksByGroup = useMemo(() => {
    return tasks.reduce<Record<string, GanttTask[]>>((acc, t) => {
      (acc[t.group] = acc[t.group] || []).push(t)
      return acc
    }, {})
  }, [tasks])

  // Определяем цвет бейджа и бара по статусу
  const getColorByStatus = (status: Status): string => {
    switch (status) {
      case 'completed': return '#3b692f'
      case 'in_process': return '#228be6'
      case 'waiting': return '#fa5252'
      default: return 'gray'
    }
  }

  // Текстовое отображение статуса
  const getStatusText = (status: Status): string => {
    const map: Record<Status, string> = {
      completed:   'Выполнена',
      in_process: 'В процессе',
      waiting:     'Ожидает',
    }
    return map[status]
  }

  // 3. Собираем массив строк с подсчетом позиций
  const allRows: any[] = []
  Object.entries(tasksByGroup).forEach(([groupName, groupTasks]) => {
    // Заголовок группы
    allRows.push({ id: `group-${groupName}`, type: 'header', name: groupName })

    groupTasks.forEach(task => {
      const startOffset = differenceInMilliseconds(parseISO(task.start), chartStart)
      const endOffset   = differenceInMilliseconds(parseISO(task.end),   chartStart)
      const leftPercent = (startOffset / totalDuration) * 100
      const widthPercent = ((endOffset - startOffset) / totalDuration) * 100

      allRows.push({
        ...task,
        type: 'task',
        id: `${groupName}-${task.name}`,
        position: { left: leftPercent, width: widthPercent }
      })
    })
  })

  return (
    <Box className="tasks-chart-mantine">
      <div className="gantt-container">
        {/* Левый столбец с таблицей */}
        <div className="gantt-table-section">
          <Table striped highlightOnHover withTableBorder withColumnBorders className="gantt-table-left">
            <Table.Tbody>
              {allRows.map(row => (
                row.type === 'header'
                  ? (
                    <Table.Tr key={row.id} className="level-header-row">
                      <Table.Td colSpan={3}>
                        <Badge color="gray" variant="filled" size="md">
                          {row.name}
                        </Badge>
                      </Table.Td>
                    </Table.Tr>
                  )
                  : (
                    <Table.Tr
                      key={row.id}
                      className="task-row-mantine"
                      onClick={() => onTaskClick(row)}
                      style={{ cursor: 'pointer' }}
                    >
                      <Table.Td>
                        <Text size="sm" fw={500} style={{ color: '#4a7c59' }}>
                          {row.name}
                        </Text>
                      </Table.Td>
                      <Table.Td>
                        <Badge color={getColorByStatus(row.status)} variant="filled" size="sm">
                          {getStatusText(row.status)}
                        </Badge>
                      </Table.Td>
                      <Table.Td>
                        <Text size="sm" fw={600} ta="center">
                          {row.progress}%
                        </Text>
                      </Table.Td>
                    </Table.Tr>
                  )
              ))}
            </Table.Tbody>
          </Table>
        </div>

        {/* Правая часть — Gantt-диаграмма */}
        <div className="gantt-chart-section">
          <div className="gantt-rows">
            <div className="current-date-line-full" />
            {allRows.map(row => (
              row.type === 'task' && (
                <div
                  key={row.id}
                  className="gantt-row task"
                  onClick={() => onTaskClick(row)}
                >
                  <div
                    className="task-bar"
                    style={{
                      left:  `${row.position.left}%`, 
                      width: `${row.position.width}%`, 
                      backgroundColor: getColorByStatus(row.status)
                    }}
                  >
                    <div className="task-bar-content">
                      <span className="task-status-text">{getStatusText(row.status)}</span>
                      <span className="task-percent-text">{row.progress}%</span>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Динамическая временная шкала */}
          <div className="timeline-section">
            <Text size="xs" fw={400} mb={5} style={{ color: '#666' }}>Период</Text>
            <div className="timeline-dates">
              {Array.from({ length: 6 }).map((_, i) => {
                const date = new Date(chartStart.getTime() + totalDuration * (i / 5))
                return <span key={i}>{format(date, 'dd MMM')}</span>
              })}
            </div>
            <div className="timeline-bottom-line" />
          </div>
        </div>
      </div>
    </Box>
  )
}

export default TasksGanttSection;
