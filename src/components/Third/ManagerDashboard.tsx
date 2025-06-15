/*
===========================================
MANAGER DASHBOARD - REACT COMPONENT
===========================================
Главный компонент Manager Dashboard на React.
Сохраняет весь оригинальный дизайн и функциональность.

ОСНОВНЫЕ ВОЗМОЖНОСТИ:
- Таблица задач с Gantt диаграммой
- График производительности команды
- Метрики и аналитика
- График встреч с командой
- Реализация проектов
- AI ассистент с drag & drop
- Модальные окна с деталями
- Анимации и интерактивность

TODO ДЛЯ BACKEND ИНТЕГРАЦИИ:
1. Подключить API endpoints через useEffect
2. Заменить mock данные на реальные
3. Добавить WebSocket для AI ассистента
4. Реализовать аутентификацию
==========================================
*/

import { useState, useEffect, useRef, createContext } from 'react';
import './ManagerDashboard.css';
import Modal from '../Fourth/Modal';
import TasksGanttSection, { type GanttTask } from '../App/Gantt';
import BottomMetricsSection from './BottomMetricsSection';
import DataSection from './DataSection';
import FactorAnalyticsSection from './FactorAnalyticsSection';
import MeetingChartSection from './MeetingChartSection';
import ProjectRealizationSection from './ProjectRealizationSection';
import TeamPerformanceSection from './TeamPerformanceSection';
import { HR_ANALYTICS_DATA } from '../../backend_constants/hr_analytics';
import { FETCHES } from '../../App';
import { Stack } from '@mantine/core';

type HrAnalyticsDataType = typeof HR_ANALYTICS_DATA;
const HrAnalyticsDataContext = createContext<HrAnalyticsDataType | undefined>(undefined);

// ===========================================
// ГЛАВНЫЙ КОМПОНЕНТ MANAGER DASHBOARD
// ===========================================
const ManagerDashboard = () => {
    // ===========================================
    // STATE УПРАВЛЕНИЕ
    // ===========================================
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState<any>({});
    const [selectedFactor, setSelectedFactor] = useState('Культура команды');
    const [tooltip, setTooltip] = useState({ show: false, content: '', x: 0, y: 0 });
    const [chartAnimated, setChartAnimated] = useState(false);


    const [data, setData] = useState<HrAnalyticsDataType | undefined>(undefined);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (FETCHES) {
            fetch('/api/v1/hr_analytics', { method: 'GET' })
                .then(response => response.json())
                .then(data => setData(data));
        }
        else {
            setData(HR_ANALYTICS_DATA as HrAnalyticsDataType);
        }

    }, [])


    // ===========================================
    // MOCK DATA (TODO: Заменить на API)
    // ===========================================
    const [managerData, _] = useState({
        user: {
            name: "Иванов Иван Иванович",
            role: "Руководитель"
        },
        tasks: [
            // Level 1
            { id: 1, level: 1, name: "Задача 1.1", status: "completed", percent: 100, left: 10, width: 25 },
            { id: 2, level: 1, name: "Задача 1.2", status: "completed", percent: 100, left: 15, width: 25 },
            { id: 3, level: 1, name: "Задача 1.3", status: "completed", percent: 100, left: 20, width: 30 },
            // Level 2
            { id: 4, level: 2, name: "Задача 2.1", status: "completed", percent: 100, left: 25, width: 25 },
            { id: 5, level: 2, name: "Задача 2.2", status: "in-progress", percent: 90, left: 30, width: 35 },
            { id: 6, level: 2, name: "Задача 2.3", status: "waiting", percent: 75, left: 35, width: 25 },
            // Level 3
            { id: 7, level: 3, name: "Задача 3.1", status: "in-progress", percent: 75, left: 40, width: 30 },
            { id: 8, level: 3, name: "Задача 3.2", status: "waiting", percent: 45, left: 45, width: 25 },
            { id: 9, level: 3, name: "Задача 3.3", status: "waiting", percent: 40, left: 50, width: 20 }
        ],
        teamPerformance: [
            { name: "Пульнев Е.В.", productive: 20, active: 28, unproductive: 12, values: "10 14 6" },
            { name: "Юриничев В.А.", productive: 30, active: 28, unproductive: 22, values: "15 14 11" },
            { name: "Савичева Е.С.", productive: 48, active: 32, unproductive: 20, values: "24 16 10" },
            { name: "Турничева Р.Н.", productive: 60, active: 12, unproductive: 26, values: "30 6 13" },
            { name: "Филев Л.О.", productive: 40, active: 40, unproductive: 4, values: "20 20 2" }
        ],
        metrics: {
            kpi: "102%",
            okr: "78%",
            completion: "93%",
            employees: "658 сотрудников",
            salary: "ФОТ 487,850,000"
        },
        meetingChart: [40, 60, 35, 80, 55, 45, 70, 50, 65, 75, 40, 85],
        bottomMetrics: [
            { label: "Количество команд", value: "27", color: "green" },
            { label: "Норма управляемости", value: "122%", color: "red" },
            { label: "Абсентизм в команде", value: "14,3%", color: "green" },
            { label: "Нестандартные действия", value: "10,1%", color: "green" },
            { label: "Ошибки", value: "10,1%", color: "red" },
            { label: "Нарушения", value: "17,8%", color: "red" }
        ],
        projects: [
            { team: "Команда 1", incomplete: 25, complete: 75 },
            { team: "Команда 2", incomplete: 20, complete: 80 },
            { team: "Команда 3", incomplete: 15, complete: 85 },
            { team: "Команда 4", incomplete: 35, complete: 65 }
        ],
        factors: [
            "Культура команды",
            "Soft/Hardware",
            "Техника, состояние",
            "Потенциал",
            "Проф. прогнозы",
            "Обучение, допуски",
            "Мероприятия",
            "Риски"
        ]
    });

    // ===========================================
    // ЭФФЕКТЫ
    // ===========================================
    useEffect(() => {
        // Анимация загрузки компонентов
        const timer = setTimeout(() => {
            setChartAnimated(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    // ===========================================
    // ОБРАБОТЧИКИ СОБЫТИЙ
    // ===========================================
    const handleTaskClick = (task: any) => {
        setModalContent({
            title: task.name,
            content: (
                <div className="modal-task-content">
                    <p><strong>Статус:</strong> {getStatusText(task.status)}</p>
                    <p><strong>Прогресс:</strong> {task.percent}%</p>
                    <p><strong>Описание:</strong> Детальная информация о задаче {task.name}</p>
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{
                                width: `${task.percent}%`,
                                backgroundColor: getStatusColor(task.status)
                            }}
                        ></div>
                    </div>
                </div>
            ),
            icon: "fas fa-tasks"
        });
        setShowModal(true);
    };

    const handleChartBarClick = (_: any, index: any) => {
        const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
        setModalContent({
            title: `Детали за ${months[index]}`,
            content: (
                <div className="modal-meeting-content">
                    <p><strong>Количество встреч:</strong> {Math.floor(Math.random() * 20) + 5}</p>
                    <p><strong>Средняя продолжительность:</strong> {Math.floor(Math.random() * 60) + 30} мин</p>
                    <p><strong>Участников:</strong> {Math.floor(Math.random() * 15) + 8}</p>
                    <p><strong>Процент выполнения планов:</strong> {managerData.meetingChart[index]}%</p>
                </div>
            ),
            icon: "fas fa-calendar-alt"
        });
        setShowModal(true);
    };

    const handleFactorClick = (factor: any) => {
        setSelectedFactor(factor);

        // Анимация нажатия
        const button: any = document.querySelector(`[data-factor="${factor}"]`);
        if (button) {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'translateY(-2px)';
            }, 150);
        }

        // Показать индикатор загрузки
        setModalContent({
            title: `Анализ: ${factor}`,
            content: (
                <div className="modal-loading-content">
                    <p>Загрузка данных по компоненту "{factor}"...</p>
                    <div className="loading-bar">
                        <div className="loading-progress"></div>
                    </div>
                    <p style={{ marginTop: '15px', fontSize: '0.9em', color: '#666' }}>
                        Система анализирует показатели и готовит отчет
                    </p>
                </div>
            ),
            icon: "fas fa-analytics"
        });
        setShowModal(true);

        // Автоматически закрыть через 3 секунды
        setTimeout(() => {
            setShowModal(false);
        }, 3000);
    };

    const handleMetricClick = (metricType: any, value: any) => {
        setModalContent({
            title: `Детали: ${metricType}`,
            content: (
                <div className="modal-metric-content">
                    <p><strong>Показатель:</strong> {metricType}</p>
                    <p><strong>Текущее значение:</strong> {value}</p>
                    <p><strong>Статус:</strong> {metricType === 'KPI' && parseInt(value) > 100 ? 'Превышает план' :
                        metricType === 'OKR' && parseInt(value) > 80 ? 'В пределах нормы' :
                            metricType === 'Укомплектованность' && parseInt(value) > 90 ? 'Хорошо укомплектовано' :
                                'Требует внимания'}</p>
                    <p><strong>Рекомендации:</strong> {
                        metricType === 'KPI' ? 'Поддерживать текущий уровень эффективности' :
                            metricType === 'OKR' ? 'Работать над достижением ключевых результатов' :
                                metricType === 'Укомплектованность' ? 'Планировать найм при необходимости' :
                                    metricType === 'Сотрудники' ? 'Оптимизировать распределение нагрузки' :
                                        'Контролировать расходы и планировать бюджет'
                    }</p>
                </div>
            ),
            icon: "fas fa-chart-line"
        });
        setShowModal(true);
    };

    const handleBottomMetricClick = (metricLabel: any, value: any, color: any) => {
        const getMetricAnalysis = (label: any, val: any, colorType: any) => {
            switch (label) {
                case 'Количество команд':
                    return {
                        status: parseInt(val) > 25 ? 'Высокая нагрузка на управление' : 'Нормальная нагрузка',
                        recommendation: 'Оптимизировать структуру команд для повышения эффективности'
                    };
                case 'Норма управляемости':
                    return {
                        status: colorType === 'red' ? 'Превышает норму' : 'В пределах нормы',
                        recommendation: colorType === 'red' ? 'Рассмотреть перераспределение ответственности' : 'Поддерживать текущий уровень'
                    };
                case 'Абсентизм в команде':
                    return {
                        status: colorType === 'green' ? 'Низкий уровень' : 'Требует внимания',
                        recommendation: colorType === 'green' ? 'Поддерживать мотивацию сотрудников' : 'Анализировать причины отсутствий'
                    };
                case 'Нестандартные действия':
                    return {
                        status: colorType === 'green' ? 'Низкий уровень' : 'Повышенный риск',
                        recommendation: 'Усилить контроль процессов и обучение персонала'
                    };
                case 'Ошибки':
                    return {
                        status: colorType === 'red' ? 'Высокий уровень' : 'Приемлемый уровень',
                        recommendation: colorType === 'red' ? 'Внедрить дополнительные проверки качества' : 'Поддерживать качество процессов'
                    };
                case 'Нарушения':
                    return {
                        status: colorType === 'red' ? 'Критический уровень' : 'Контролируемый уровень',
                        recommendation: colorType === 'red' ? 'Срочно пересмотреть процедуры и обучение' : 'Продолжать мониторинг'
                    };
                default:
                    return {
                        status: 'Анализ показателя',
                        recommendation: 'Регулярно отслеживать динамику показателя'
                    };
            }
        };

        const analysis = getMetricAnalysis(metricLabel, value, color);

        setModalContent({
            title: `Анализ: ${metricLabel}`,
            content: (
                <div className="modal-metric-content">
                    <p><strong>Показатель:</strong> {metricLabel}</p>
                    <p><strong>Текущее значение:</strong> {value}</p>
                    <p><strong>Статус:</strong> {analysis.status}</p>
                    <p><strong>Рекомендации:</strong> {analysis.recommendation}</p>
                    <p><strong>Уровень важности:</strong> {color === 'red' ? 'Высокий' : color === 'green' ? 'Нормальный' : 'Средний'}</p>
                </div>
            ),
            icon: "fas fa-analytics"
        });
        setShowModal(true);
    };

    // ===========================================
    // TOOLTIP ОБРАБОТЧИКИ
    // ===========================================
    const handleSegmentHover = (personName: any, segmentType: any, value: any, event: any) => {
        const segmentTypeText: any = {
            productive: 'Продуктивное',
            active: 'Активное',
            unproductive: 'Непродуктивное'
        };

        setTooltip({
            show: true,
            content: `${personName}\n${segmentTypeText[segmentType]}: ${value}`,
            x: event.clientX + 15,
            y: event.clientY - 10
        });
    };

    const handleSegmentLeave = () => {
        setTooltip({ show: false, content: '', x: 0, y: 0 });
    };

    const handleProjectSegmentHover = (teamName: any, segmentType: any, value: any, event: any) => {
        setTooltip({
            show: true,
            content: `${teamName}\n${segmentType}: ${value}%`,
            x: event.clientX + 15,
            y: event.clientY - 10
        });
    };

    const handleProjectSegmentLeave = () => {
        setTooltip({ show: false, content: '', x: 0, y: 0 });
    };

    // ===========================================
    // HELPER ФУНКЦИИ
    // ===========================================
    const getStatusText = (status: any) => {
        switch (status) {
            case 'completed': return 'Выполнена';
            case 'in-progress': return 'В процессе';
            case 'waiting': return 'Ожидает';
            default: return status;
        }
    };

    const getStatusColor = (status: any) => {
        switch (status) {
            case 'completed': return '#4a7c59';
            case 'in-progress': return '#2196F3';
            case 'waiting': return '#d32f2f';
            default: return '#666';
        }
    };

    // ===========================================
    // RENDER
    // ===========================================
    return (
        <HrAnalyticsDataContext.Provider value={data}>
            {/* <div className="manager-dashboard"> */}
            {/* НАВИГАЦИОННАЯ ПАНЕЛЬ */}
            {/* <nav className="top-nav">
                <div className="logo">*ЛОГОТИП*</div>
                <div className="nav-center">
                    <button 
                        className={`nav-link ${currentView === 'manager' ? 'active' : ''}`}
                        onClick={() => {}} // уже на этой странице
                    >
                        Главный экран
                    </button>
                    <button 
                        className={`nav-link ${currentView === 'employee' ? 'active' : ''}`}
                        onClick={onSwitchToEmployee}
                    >
                        Кабинет Сотрудника
                    </button>
                </div>
                <div className="nav-right">
                    <div className="user-info">
                        <span className="user-name">{managerData.user.name}</span>
                        <span className="user-role">{managerData.user.role}</span>
                    </div>
                    <div className="user-avatar">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
            </nav> */}

            {/* ОСНОВНОЙ КОНТЕНТ */}
            <div className="dashboard" style={{ width: '100%' }}>
                {/* <header className="header">
                    <h1>MANAGER'S MONITOR</h1>
                    <h2>Аналитика по направлениям и персоналу</h2>
                </header> */}

                <div className="main-content" style={{ gridTemplateColumns: '1.4fr 0.8fr 1.2fr', minHeight: '0px', height: 'fit-content' }}>
                    {/* ЛЕВАЯ ПАНЕЛЬ */}
                    <div className="left-panel" style={{ height: '100%', gridRow: '1' }}>
                        {/* ТАБЛИЦА ЗАДАЧ И GANTT ДИАГРАММА */}
                        <TasksGanttSection
                            tasks={data?.tasks_timeline as GanttTask[] || []}
                            onTaskClick={handleTaskClick}
                        />

                        {/* ПРОИЗВОДИТЕЛЬНОСТЬ КОМАНДЫ */}
                        <div className="team-performance-container">
                            <TeamPerformanceSection
                                teamData={data?.employee_time_usage || []}
                                onSegmentHover={handleSegmentHover}
                                onSegmentLeave={handleSegmentLeave}
                            />
                        </div>
                    </div>

                    {/* ЦЕНТРАЛЬНАЯ ПАНЕЛЬ */}
                    <div className="center-panel" style={{ height: '100%' }}>
                        {/* МЕТРИКИ */}
                        <DataSection
                            metrics={managerData.metrics}
                            onMetricClick={handleMetricClick}
                        />

                        {/* ГРАФИК ВСТРЕЧ */}
                        <MeetingChartSection
                            chartData={data?.team_meetings || []}
                            onBarClick={handleChartBarClick}
                            animated={chartAnimated}
                        />
                    </div>

                    {/* ПРАВАЯ ПАНЕЛЬ */}
                    <div className="right-panel" style={{ height: '100%', justifyContent: 'space-between' }}>
                        <Stack gap={10}>
                            <h3>РЕАЛИЗАЦИЯ ПРОЕКТОВ</h3>
                            <ProjectRealizationSection
                                projects={data?.project_realization || []}
                                onProjectSegmentHover={handleProjectSegmentHover}
                                onProjectSegmentLeave={handleProjectSegmentLeave}
                            />
                        </Stack>


                        {/* НИЖНИЕ МЕТРИКИ */}
                        <BottomMetricsSection
                            metrics={managerData.bottomMetrics}
                            onBottomMetricClick={handleBottomMetricClick}
                        />
                    </div>
                </div>

                {/* НИЖНЯЯ СЕКЦИЯ */}
                <div style={{ display: 'flex', gap: '8px', alignItems: 'stretch' }}>
                    {/* СТАТИЧЕСКИЙ AI АССИСТЕНТ СЛЕВА */}
                    <div 
                        className="ai-assistant-static"
                        style={{
                            width: '25%',
                            background: 'white',
                            borderRadius: '20px',
                            padding: '15px',
                            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                            marginBottom: '8px'
                        }}
                    >
                        <div 
                            className="ai-avatar"
                            style={{
                                position: 'absolute',
                                top: '-12px',
                                left: '15px',
                                background: '#4a7c59',
                                color: 'white',
                                width: '35px',
                                height: '35px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '.9em',
                                fontWeight: 'bold'
                            }}
                        >
                            AI
                        </div>
                        <div 
                            className="ai-conversation"
                            style={{ marginTop: '12px' }}
                        >
                            <div 
                                className="ai-message"
                                style={{
                                    background: '#f0f0f0',
                                    padding: '10px 12px',
                                    borderRadius: '15px',
                                    marginBottom: '8px',
                                    fontSize: '.85em',
                                    lineHeight: '1.3'
                                }}
                            >
                                <p>Сотрудник Савичева Е.С. переработала за неделю на 25% в часах.</p>
                                <p>Проанализировать её данные?</p>
                            </div>
                            <div 
                                className="user-response"
                                style={{
                                    background: '#4a7c59',
                                    color: 'white',
                                    padding: '10px 12px',
                                    borderRadius: '15px',
                                    fontSize: '.85em',
                                    lineHeight: '1.3'
                                }}
                            >
                                <p>Да. Подготовь отчет по проф. прогнозу и текущей нагрузке</p>
                            </div>
                        </div>
                        <div 
                            className="expand-indicator"
                            style={{
                                textAlign: 'center',
                                marginTop: '8px',
                                color: '#4a7c59',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease'
                            }}
                        >
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>

                    {/* БЛОК АНАЛИТИКИ КОМПОНЕНТОВ СПРАВА */}
                    <FactorAnalyticsSection
                        factors={managerData.factors}
                        selectedFactor={selectedFactor}
                        onFactorClick={handleFactorClick}
                    />
                </div>
            </div>

            {/* МОДАЛЬНОЕ ОКНО */}
            {showModal && (
                <Modal
                    title={modalContent.title}
                    content={modalContent.content}
                    icon={modalContent.icon}
                    onClose={() => setShowModal(false)}
                />
            )}

            {/* TOOLTIP */}
            {tooltip.show && (
                <div
                    className="team-tooltip"
                    style={{
                        left: tooltip.x,
                        top: tooltip.y
                    }}
                >
                    {tooltip.content.split('\n').map((line, index) => (
                        <div key={index}>{line}</div>
                    ))}
                </div>
            )}
            {/* </div> */}
        </HrAnalyticsDataContext.Provider>
    );
};



export default ManagerDashboard; 