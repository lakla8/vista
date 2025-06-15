export const REAL_TIME_DATA = {
  "stream": [
    {
      "employee_id": "01927453",
      "date": "2025-04-12",
      "start_time": "12:02:53",
      "breaks": {"long": 1, "short": 5},
      "logs": [{"count": 3, "description": "снижения"}],
      "additional_info": ["Доп. анализ"]
    },
    {
      "employee_id": "4632412",
      "date": "2025-04-12",
      "start_time": "14:33:16",
      "breaks": {"long": 1, "short": 4},
      "logs": [{"count": 1, "description": "снижение"}],
      "additional_info": ["Обр. внимание"]
    },
    {
      "employee_id": "26575234",
      "date": "2025-04-12",
      "start_time": "12:02:53",
      "breaks": {"long": 0, "short": 8},
      "logs": [{"count": 3, "description": "раза"}, {"count": 1, "description": "ошибка"}],
      "additional_info": ["Нужен отпуск"]
    },
    {
      "employee_id": "05308972",
      "date": "2025-04-12",
      "start_time": "12:02:53",
      "breaks": {"long": 1, "short": 5},
      "logs": [{"count": 1, "description": "Норма"}],
      "additional_info": ["Проф. прогноз"]
    },
    {
      "employee_id": "0146745",
      "date": "2025-04-12",
      "start_time": "12:02:53",
      "breaks": {"long": 1, "short": 3},
      "logs": [{"count": 1, "description": "Норма"}],
      "additional_info": ["Проф. прогноз"]
    },
    {
      "employee_id": "01235346",
      "date": "2025-04-12",
      "start_time": "12:02:53",
      "breaks": {"long": 0, "short": 10},
      "logs": [{"count": 1, "description": "Внимание"}],
      "additional_info": ["Команда"]
    },
    {
      "employee_id": "01097852",
      "date": "2025-04-12",
      "start_time": "12:02:53",
      "breaks": {"long": 0, "short": 12},
      "logs": [{"count": 1, "description": "Software"}],
      "additional_info": ["Обр. внимание"]
    },
    {
      "employee_id": "0235433",
      "date": "2025-04-13",
      "start_time": "12:02:53",
      "breaks": {"long": 1, "short": 2},
      "logs": [{"count": 1, "description": "Техника"}],
      "additional_info": ["Команда"]
    },
    {
      "employee_id": "56753896",
      "date": "2025-04-14",
      "start_time": "12:02:53",
      "breaks": {"long": 1, "short": 6},
      "logs": [{"count": 1, "description": "Норма"}],
      "additional_info": ["Проф. прогноз"]
    },
    {
      "employee_id": "0203424",
      "date": "2025-04-14",
      "start_time": "12:02:53",
      "breaks": {"long": 1, "short": 5},
      "logs": [{"count": 1, "description": "Норма"}],
      "additional_info": ["Команда"]
    },
    {
      "employee_id": "01099028",
      "date": "2025-04-14",
      "start_time": "12:02:53",
      "breaks": {"long": 0, "short": 0},
      "logs": [{"count": 1, "description": "Конфликт"}],
      "additional_info": ["Проф. прогноз"]
    },
    {
      "employee_id": "363893",
      "date": "2025-04-14",
      "start_time": "12:02:53",
      "breaks": {"long": 0, "short": 3},
      "logs": [{"count": 1, "description": "Нарушение"}],
      "additional_info": ["RCA - сводка"]
    },
    {
      "employee_id": "24965494",
      "date": "2025-04-14",
      "start_time": "12:02:53",
      "breaks": {"long": 2, "short": 2},
      "logs": [{"count": 1, "description": "Норма"}],
      "additional_info": ["Проф. прогноз"]
    },
    {
      "employee_id": "10483409",
      "date": "2025-04-14",
      "start_time": "12:02:53",
      "breaks": {"long": 1, "short": 0},
      "logs": [{"count": 1, "description": "Давление"}],
      "additional_info": ["Мед. осмотр"]
    },
    {
      "employee_id": "3465434",
      "date": "2025-04-14",
      "start_time": "12:02:53",
      "breaks": {"long": 1, "short": 2},
      "logs": [{"count": 1, "description": "Норма"}],
      "additional_info": ["Команда"]
    }
  ],
  "early_warning": [
    {
      "code": "delay",
      "label": "Delay",
      "severity": "medium"
    },
    {
      "code": "exec_error",
      "label": "Exec Error",
      "severity": "high"
    },
    {
      "code": "conflict",
      "label": "Conflict",
      "severity": "high"
    },
    {
      "code": "deadline",
      "label": "Deadline Miss",
      "severity": "medium"
    },
    {
      "code": "sop_violation",
      "label": "SOP Violation",
      "severity": "high"
    },
    {
      "code": "overload",
      "label": "Overload",
      "severity": "low"
    }
  ],
  "profile": {
    "full_name": "Ivanov I.I.",
    "employee_id": "363893",
    "shift": "Shift 3",
    "department": "Dept X",
    "position": "Senior Manager",
    "manager": "Petrov P.P.",
    "contact": "ivanov@example.com",
    "hrv": "120/80",
    "prognosis_group": "4",
    "tasks": [
      {
        "group": "default_group",
        "name": "Task 1.1",
        "start": "2025-06-02",
        "end": "2025-06-05",
        "status": "completed",
        "progress": 100,
        "level": 1
      },
      {
        "group": "default_group",
        "name": "Task 2.1",
        "start": "2025-06-06",
        "end": "2025-06-10",
        "status": "in_process",
        "progress": 60,
        "level": 2
      },
      {
        "group": "default_group",
        "name": "Task 3.1",
        "start": "2025-06-09",
        "end": "2025-06-14",
        "status": "waiting",
        "progress": 10,
        "level": 3
      }
    ]
  },
  "performance_bar": [
    {
      "category": "Productive Tasks",
      "value": 5,
      "color_code": "#00A000"
    },
    {
      "category": "Activity",
      "value": 4,
      "color_code": "#CCCC00"
    },
    {
      "category": "Errors",
      "value": 3,
      "color_code": "#E00000"
    }
  ]
}