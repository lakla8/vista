/*
===========================================
EMPLOYEE DASHBOARD - REACT COMPONENT
===========================================
Главный компонент Employee Dashboard на React.
Сохраняет весь оригинальный дизайн и функциональность.

ОСНОВНЫЕ ВОЗМОЖНОСТИ:
- Gantt диаграмма задач
- Аналитика производительности
- Flow диаграмма проектов  
- AI ассистент с drag & drop
- Модальные окна
- Анимации

TODO ДЛЯ BACKEND ИНТЕГРАЦИИ:
1. Подключить API endpoints через useEffect
2. Заменить mock данные на реальные
3. Добавить WebSocket для AI ассистента
4. Реализовать аутентификацию
==========================================
*/

import { useState, useEffect, useRef, createContext } from 'react';
import './EmployeeDashboard.css';
// import { DEPARTMENT_ANALYTICS_DATA } from '../../backend_constants/department_analytics';
import Modal from './Modal';
import FactorsSection from '../Fourth/FactorsSection';
import AIAssistant from './AIAssistant';
import AnalyticsSection from './AnalyticsSection';
import ChartSection from './ChartSection';
import EffectivenessSection from './EffectivenessSection';
import FlowDiagram from './FlowDiagram';
import ProfileSection from './ProfileSection';
import TasksGanttSection from '../App/Gantt';

type DepartmentAnalyticsDataContextType = {
    tasks_timeline: {
        group: string;
        name: string;
        start: string;
        end: string;
        status: 'completed' | 'in_process' | 'waiting';
        progress: number;
        level: number;
    }[];
    task_completion_trend: {
        period: string;
        value: number;
    }[];
    task_completion_threshold: number;
}

export const DepartmentAnalyticsDataContext = createContext<DepartmentAnalyticsDataContextType | undefined>(undefined);

// ===========================================
// ГЛАВНЫЙ КОМПОНЕНТ EMPLOYEE DASHBOARD
// ===========================================
const EmployeeDashboard = () => {
    // ===========================================
    // STATE УПРАВЛЕНИЕ
    // ===========================================
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState<any>({});
    const [selectedFactor, setSelectedFactor] = useState(null);
    const [aiPosition, setAiPosition] = useState({ bottom: '20px', top: 'auto', left: '20px' });

    const [data, setData] = useState<DepartmentAnalyticsDataContextType | undefined>(undefined);

    useEffect(() => {
        window.scrollTo(0, 0);
        // setData(DEPARTMENT_ANALYTICS_DATA as DepartmentAnalyticsDataContextType);
        fetch('/api/v1/department_analytics', { method: 'GET' })
            .then(response => response.json())
            .then(data => setData(data));
    }, [])


    // Refs для DOM элементов
    const aiAssistantRef = useRef(null);
    const isDragging = useRef(false);
    const dragStart = useRef({ x: 0, y: 0, left: 0, top: 0 });

    // ===========================================
    // MOCK DATA (TODO: Заменить на API)
    // ===========================================
    const [employeeData, _] = useState({
        user: {
            name: "Иванов Иван Иванович",
            role: "Руководитель"
        },
        tasks: [
            {
                id: 1,
                name: "Задача 1.1.",
                description: "Настройка системы мониторинга",
                status: "completed",
                progress: 100,
                position: { left: 140, width: 120 },
                color: "#4a7c59"
            },
            {
                id: 2,
                name: "Задача 1.2.",
                description: "Анализ данных производительности",
                status: "in_progress",
                progress: 45,
                position: { left: 200, width: 90 },
                color: "#2196F3"
            },
            {
                id: 3,
                name: "Задача 1.3.",
                description: "Создание отчетности",
                status: "waiting",
                progress: 10,
                position: { left: 270, width: 35 },
                color: "#d32f2f"
            }
        ],
        metrics: {
            corporatePrograms: 7,
            interactions: 161,
            totalContacts: 203,
            eventParticipation: 15
        },
        flowItems: [
            { id: 'reserve', name: 'РЕЗЕРВ', icon: 'fa-user-graduate', color: 'green' },
            { id: 'development', name: 'НАПРАВЛЕНИЯ\nРАЗВИТИЯ', icon: 'fa-chart-line', color: 'teal' },
            { id: 'projects', name: 'ПРОЕКТЫ', icon: 'fa-project-diagram', color: 'blue' },
            { id: 'mentoring', name: 'НАСТАВНИЧЕСТВО\nИ КОНКУРСЫ', icon: 'fa-chalkboard-teacher', color: 'olive' },
            { id: 'training', name: 'СИСТЕМА\nОБУЧЕНИЯ', icon: 'fa-graduation-cap', color: 'light-green' },
            { id: 'adaptation', name: 'АДАПТАЦИЯ', icon: 'fa-handshake', color: 'yellow-green' }
        ]
    });

    // ===========================================
    // LIFECYCLE HOOKS
    // ===========================================
    useEffect(() => {
        console.log('Employee Dashboard: Инициализация React компонента...');

        // TODO: Загрузка данных из API
        /*
        const loadData = async () => {
            try {
                const [userProfile, tasks, analytics, projects] = await Promise.all([
                    fetch('/api/user/profile').then(r => r.json()),
                    fetch('/api/employee/123/tasks').then(r => r.json()),
                    fetch('/api/employee/123/analytics').then(r => r.json()),
                    fetch('/api/employee/123/projects').then(r => r.json())
                ]);
                
                setEmployeeData({
                    user: userProfile,
                    tasks: tasks.tasks,
                    metrics: analytics.metrics,
                    flowItems: projects.flowItems
                });
            } catch (error) {
                console.error('Ошибка загрузки данных:', error);
            }
        };
        
        loadData();
        */

        // Восстановление позиции AI ассистента
        const savedPosition = localStorage.getItem('ai-assistant-pos');
        if (savedPosition) {
            try {
                const pos = JSON.parse(savedPosition);
                setAiPosition({ left: pos.left, top: pos.top, bottom: 'auto' });
            } catch (e) {
                console.error('Ошибка восстановления позиции AI:', e);
            }
        }

        // Анимации при загрузке
        initializeAnimations();

        console.log('Employee Dashboard: Готов к работе');
    }, []);

    // ===========================================
    // ФУНКЦИИ ОБРАБОТКИ СОБЫТИЙ
    // ===========================================

    // Показ модального окна
    const openModal = (title: any, content: any, icon = 'fa-tasks') => {
        setModalContent({ title, content, icon });
        setShowModal(true);
        console.log(`Открытие модального окна: ${title}`);
    };

    // Закрытие модального окна
    const closeModal = () => {
        setShowModal(false);
        console.log('Модальное окно закрыто');
    };

    // Strategic CoPilot
    const handleStrategicCoPilot = () => {
        console.log('Клик по Strategic CoPilot');

        // TODO: Заменить на AI API
        /*
        fetch('/api/ai/strategic-recommendations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                employeeId: '123',
                context: getCurrentEmployeeContext()
            })
        })
        .then(response => response.json())
        .then(recommendations => {
            const content = generateAIContent(recommendations);
            openModal('Strategic CoPilot', content, 'fa-robot');
        });
        */

        const content = (
            <div className="modal-ai-content">
                <p><strong>Рекомендации:</strong></p>
                <ul>
                    <li>Увеличить участие в корпоративных программах</li>
                    <li>Развивать навыки наставничества</li>
                    <li>Сосредоточиться на проектах с высоким приоритетом</li>
                </ul>
            </div>
        );

        openModal('Strategic CoPilot', content, 'fa-robot');
    };

    // Обработка факторов
    const handleFactorClick = (factorName: any) => {
        console.log(`Анализ фактора: ${factorName}`);
        setSelectedFactor(factorName);

        // TODO: Заменить на API вызов
        /*
        fetch(`/api/employee/123/factors/${factorName}`)
            .then(response => response.json())
            .then(data => {
                showFactorAnalysis(factorName, data);
            });
        */

        const content = (
            <div className="modal-loading-content">
                <p>Загрузка данных для категории: <strong>{factorName}</strong></p>
                <div className="loading-bar">
                    <div className="loading-progress"></div>
                </div>
            </div>
        );

        openModal('Анализ данных', content, 'fa-chart-bar');
    };

    // ===========================================
    // DRAG & DROP ДЛЯ AI АССИСТЕНТА
    // ===========================================
    const handleMouseDown = (e: any) => {
        isDragging.current = true;
        const assistant: any = aiAssistantRef.current;
        const rect = assistant.getBoundingClientRect();

        dragStart.current = {
            x: e.clientX,
            y: e.clientY,
            left: rect.left,
            top: rect.top
        };

        assistant.style.transition = 'none';
        e.preventDefault();
        console.log('Начало перетаскивания AI ассистента');
    };

    const handleMouseMove = (e: any) => {
        if (!isDragging.current) return;

        const assistant: any = aiAssistantRef.current;
        const newLeft = Math.max(0, Math.min(
            window.innerWidth - assistant.offsetWidth,
            dragStart.current.left + e.clientX - dragStart.current.x
        ));
        const newTop = Math.max(0, Math.min(
            window.innerHeight - assistant.offsetHeight,
            dragStart.current.top + e.clientY - dragStart.current.y
        ));

        setAiPosition({
            left: newLeft + 'px',
            top: newTop + 'px',
            bottom: 'auto'
        });
    };

    const handleMouseUp = () => {
        if (isDragging.current) {
            isDragging.current = false;
            const assistant: any = aiAssistantRef.current;
            assistant.style.transition = 'transform 0.1s ease';

            // Сохранение позиции
            localStorage.setItem('ai-assistant-pos', JSON.stringify(aiPosition));
            console.log('Позиция AI ассистента сохранена');
        }
    };

    // Подключение глобальных обработчиков мыши
    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [aiPosition]);

    // ===========================================
    // АНИМАЦИИ
    // ===========================================
    const initializeAnimations = () => {
        // Анимация чисел в метриках
        setTimeout(() => {
            const metricElements = document.querySelectorAll('.item span:last-child');
            metricElements.forEach((el: any) => {
                const value = parseInt(el.textContent);
                let current = 0;
                const increment = value / 30;

                const timer = setInterval(() => {
                    current += increment;
                    el.textContent = Math.floor(current);
                    if (current >= value) {
                        el.textContent = value;
                        clearInterval(timer);
                    }
                }, 50);
            });

            // Поэтапная анимация карточек
            const animatedElements = document.querySelectorAll('.card, .circle');
            animatedElements.forEach((el: any, i) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';

                setTimeout(() => {
                    el.style.transition = 'all 0.5s ease';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, i * 100);
            });
        }, 100);
    };

    // ===========================================
    // RENDER
    // ===========================================
    return (
        <DepartmentAnalyticsDataContext.Provider value={data}>
            <div className="employee-dashboard">
                {/* НАВИГАЦИОННАЯ ПАНЕЛЬ */}
                {/* <nav className="top-nav">
                <div className="logo">*ЛОГОТИП*</div>
                <div className="nav-center">
                    <a href="index.html" className="nav-link">Главный экран</a>
                    <a href="#" className="nav-link active">Кабинет Сотрудника</a>
                </div>
                <div className="nav-right">
                    <div className="user-info">
                        <span className="user-name">{employeeData.user.name}</span>
                        <span className="user-role">{employeeData.user.role}</span>
                    </div>
                    <div className="user-avatar">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
            </nav> */}

                {/* ОСНОВНОЙ КОНТЕНТ */}
                <div className="dashboard">
                    {/* <header className="header">
                    <h1>EMPLOYEE MONITOR</h1>
                    <h2>Аналитика по направлениям и подразделениям</h2>
                </header> */}

                    <div className="main-content" style={{ gridTemplateColumns: '1.5fr 1fr 1.2fr', minHeight: '0px', height: 'fit-content' }}>
                        {/* ЛЕВАЯ ПАНЕЛЬ */}
                        <div className="left-panel" style={{ gridRow: '1' }}>
                            {/* GANTT ДИАГРАММА */}
                            <TasksGanttSection tasks={data?.tasks_timeline || []} onTaskClick={() => { }} />

                            {/* ПРОФИЛЬ */}
                            <ProfileSection />

                            {/* ЭФФЕКТИВНОСТЬ */}
                            <EffectivenessSection />
                        </div>

                        {/* ЦЕНТРАЛЬНАЯ ПАНЕЛЬ */}
                        <div className="center-panel">
                            <h3>АНАЛИТИКА АКТИВНОСТИ</h3>

                            {/* МЕТРИКИ */}
                            <AnalyticsSection metrics={employeeData.metrics} />

                            {/* ГРАФИК */}
                            <ChartSection />

                            <button
                                className="btn-strategic"
                                onClick={handleStrategicCoPilot}
                            >
                                Strategic CoPilot <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>

                        {/* ПРАВАЯ ПАНЕЛЬ */}
                        <div className="right-panel">
                            <h3>РЕАЛИЗАЦИЯ ПРОЕКТОВ</h3>
                            <FlowDiagram />
                        </div>

                        {/* НИЖНЯЯ СЕКЦИЯ */}
                        <FactorsSection
                            selectedFactor={selectedFactor}
                            onFactorClick={handleFactorClick}
                        />
                    </div>



                    {/* AI АССИСТЕНТ */}
                    <AIAssistant
                        ref={aiAssistantRef}
                        position={aiPosition}
                        onMouseDown={handleMouseDown}
                    />
                </div>

                {/* МОДАЛЬНОЕ ОКНО */}
                {showModal && (
                    <Modal
                        title={modalContent.title}
                        content={modalContent.content}
                        icon={modalContent.icon}
                        onClose={closeModal}
                    />
                )}
            </div>
        </DepartmentAnalyticsDataContext.Provider>
    );
};


export default EmployeeDashboard; 