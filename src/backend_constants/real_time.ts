export const REAL_TIME_DATA = {
  "stream": [
    {
      "employee_id": "363893",
      "date": "2025-06-06",
      "start_time": "10:05:12",
      "breaks": {
        "long": 2,
        "short": 2
      },
      "logs": [
        {
          "count": 2,
          "description": "drop"
        },
        {
          "count": 3,
          "description": "drop"
        }
      ],
      "additional_info": [
        "Extra attention"
      ]
    },
    {
      "employee_id": "785156",
      "date": "2025-06-07",
      "start_time": "10:36:08",
      "breaks": {
        "long": 2,
        "short": 6
      },
      "logs": [
        {
          "count": 1,
          "description": "drop"
        }
      ],
      "additional_info": [
        "Extra attention"
      ]
    },
    {
      "employee_id": "278776",
      "date": "2025-06-08",
      "start_time": "09:34:23",
      "breaks": {
        "long": 2,
        "short": 4
      },
      "logs": [
        {
          "count": 1,
          "description": "overload"
        },
        {
          "count": 1,
          "description": "drop"
        },
        {
          "count": 3,
          "description": "attention"
        }
      ],
      "additional_info": []
    },
    {
      "employee_id": "954934",
      "date": "2025-06-09",
      "start_time": "11:51:04",
      "breaks": {
        "long": 1,
        "short": 5
      },
      "logs": [
        {
          "count": 1,
          "description": "conflict"
        },
        {
          "count": 1,
          "description": "drop"
        }
      ],
      "additional_info": [
        "Prof. prognosis needed"
      ]
    },
    {
      "employee_id": "996281",
      "date": "2025-06-10",
      "start_time": "09:35:50",
      "breaks": {
        "long": 0,
        "short": 3
      },
      "logs": [
        {
          "count": 2,
          "description": "overload"
        }
      ],
      "additional_info": [
        "Extra attention"
      ]
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
    "employee_id": "6725473",
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