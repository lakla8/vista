/*
===========================================
HUMAN FACTOR MONITOR - REACT COMPONENT
===========================================
Компонент для мониторинга человеческого фактора.
Матрица рисков, анализ ошибок системы.

ОСНОВНЫЕ ЭЛЕМЕНТЫ:
- Аналитика рисков
- Диаграмма взаимосвязи компонентов
- Матрица реализации рисков
- Графики и тренды
==========================================
*/

import React, { useState, useEffect } from 'react';
import AnalyticsSection from './AnalyticsSection';
import ComponentRelationsSection from './ComponentRelationsSection';
import RedLineChartSection from './RedLineChartSection';
import RightPanelMatrixSection from './RightPanelMatrixSection';
import TrendChartsSection from './TrendChartsSection';
import Modal from '../Fourth/Modal';
import { Stack } from '@mantine/core';
import { MATRIX_RISKS_DATA } from '../../backend_constants/matrix_risks';

type MatrixRisksType = typeof MATRIX_RISKS_DATA

const HumanFactorMonitor = () => {
    // ===========================================
    // STATE УПРАВЛЕНИЕ
    // ===========================================
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState<any>({});
    const [animationTrigger, setAnimationTrigger] = useState(false);

    const [data, setData] = useState<MatrixRisksType | undefined>(undefined);
    
    useEffect(() => {
        window.scrollTo(0, 0);
        setData(MATRIX_RISKS_DATA as MatrixRisksType);
        // fetch('/api/v1/matrix_risks', { method: 'GET' })
        //     .then(response => response.json())
        //     .then(data => setData(data));
    }, [])

    // ===========================================
    // MOCK DATA
    // ===========================================
    const [humanFactorData, setHumanFactorData] = useState({
        user: {
            name: "Иванов Иван Иванович",
            role: "Руководитель"
        },
        analytics: {
            risks: 78,
            period: "1 м.",
            predictability: "~91%"
        },
        riskIdentification: {
            retrospective: 3,
            proactive: 12,
            prognostic: 61
        },
        riskResponse: {
            forecast: 95,
            reduction: 37,
            avoidance: 6,
            adoption: 10,
            potential: 8
        },
        // Данные для точечной диаграммы взаимосвязи компонентов
        componentRelations: [
            // Состояние системы ЧФ - зеленые точки
            { x: 1, y: 50, category: "Состояние системы ЧФ", risk: "низкий" },
            { x: 4, y: 60, category: "Состояние системы ЧФ", risk: "низкий" },
            { x: 7, y: 30, category: "Состояние системы ЧФ", risk: "низкий" },
            { x: 10, y: 40, category: "Состояние системы ЧФ", risk: "низкий" },
            { x: 13, y: 80, category: "Состояние системы ЧФ", risk: "низкий" },
            { x: 16, y: 120, category: "Состояние системы ЧФ", risk: "средний" },
            { x: 19, y: 110, category: "Состояние системы ЧФ", risk: "средний" },
            { x: 22, y: 140, category: "Состояние системы ЧФ", risk: "средний" },
            { x: 25, y: 200, category: "Состояние системы ЧФ", risk: "высокий" },

            // Персонал - фиолетовые точки
            { x: 2, y: 30, category: "Персонал", risk: "низкий" },
            { x: 5, y: 25, category: "Персонал", risk: "низкий" },
            { x: 8, y: 45, category: "Персонал", risk: "низкий" },
            { x: 11, y: 20, category: "Персонал", risk: "низкий" },
            { x: 14, y: 35, category: "Персонал", risk: "низкий" },
            { x: 17, y: 180, category: "Персонал", risk: "высокий" },
            { x: 20, y: 190, category: "Персонал", risk: "высокий" },
            { x: 23, y: 160, category: "Персонал", risk: "высокий" },
            { x: 26, y: 200, category: "Персонал", risk: "высокий" }
        ],
        // Данные для графика с красной линией
        redLineData: [7, 8, 7, 11, 14, 12, 18, 8, 7, 8, 9, 11],
        // Матрица для правой панели (5x5)
        rightMatrix: [
            [7, null, null, null, null],
            [null, 3, null, 4, null],
            [null, null, null, null, null],
            [null, 4, null, null, 1],
            [null, null, null, null, null]
        ],
        // Данные для линейных графиков
        trendData: {
            personnel: [10, 11, 6, 5, 23, 15, 14, 22, 19, 15, 18, 22],
            teams: [6, 8, 5, 15, 22, 14, 16, 20, 18, 13, 17, 19],
            culture: [11, 10, 14, 20, 16, 17, 15, 14, 16, 18, 14, 15],
            processes: [12, 15, 17, 25, 20, 16, 22, 17, 15, 23, 18, 16],
            equipment: [10, 12, 11, 13, 15, 14, 12, 16, 15, 17, 16, 22]
        }
    });

    // ===========================================
    // ЭФФЕКТЫ
    // ===========================================
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationTrigger(true);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    // ===========================================
    // ОБРАБОТЧИКИ СОБЫТИЙ
    // ===========================================
    const handleRiskClick = (riskLevel: string, value: number) => {
        setModalContent({
            title: `Анализ рисков: ${riskLevel}`,
            content: (
                <div className="modal-risk-content">
                    <p><strong>Уровень риска:</strong> {riskLevel}</p>
                    <p><strong>Значение:</strong> {value}</p>
                    <p><strong>Рекомендации:</strong> Системный анализ и разработка мер по снижению рисков</p>
                </div>
            ),
            icon: "fas fa-exclamation-triangle"
        });
        setShowModal(true);
    };

    const handleMatrixClick = (row: number, col: number, value: number, risk: string) => {
        setModalContent({
            title: `Матрица рисков [${row + 1}, ${col + 1}]`,
            content: (
                <div className="modal-matrix-content">
                    <p><strong>Позиция:</strong> Строка {row + 1}, Столбец {col + 1}</p>
                    <p><strong>Значение:</strong> {value}</p>
                    <p><strong>Уровень риска:</strong> {risk}</p>
                    <p><strong>Описание:</strong> Детальный анализ компонента человеческого фактора</p>
                </div>
            ),
            icon: "fas fa-th"
        });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalContent({});
    };

    // ===========================================
    // ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
    // ===========================================
    const getRiskColor = (risk: string) => {
        switch (risk) {
            case 'низкий': return '#4a7c59';
            case 'средний': return '#ffa726';
            case 'высокий': return '#ef5350';
            case 'критический': return '#d32f2f';
            default: return '#757575';
        }
    };

    const getMatrixCellColor = (value: number, risk: string) => {
        if (typeof value === 'number') {
            if (value >= 7) return '#4a7c59'; // зеленый
            if (value >= 4) return '#ffa726'; // оранжевый
            if (value >= 2) return '#ef5350'; // красный
            return '#d32f2f'; // темно-красный
        }
        return getRiskColor(risk);
    };

    // ===========================================
    // РЕНДЕР КОМПОНЕНТА
    // ===========================================
    return (
        <div className="human-factor-monitor" style={{ width: "100%", background: 'rgb(246, 246, 246)' }}>
            {/* НАВИГАЦИОННАЯ ПАНЕЛЬ */}
            {/* <nav className="top-nav">
                <div className="logo">*ЛОГОТИП*</div>
                <div className="nav-center">
                    <button 
                        className="nav-link"
                        onClick={() => {}}
                    >
                        Главный экран
                    </button>
                    <button 
                        className="nav-link active"
                        onClick={() => {}}
                    >
                        Кабинет Сотрудника
                    </button>
                </div>
                <div className="nav-right">
                    <div className="user-info">
                        <span className="user-name">{humanFactorData.user.name}</span>
                        <span className="user-role">{humanFactorData.user.role}</span>
                    </div>
                    <div className="user-avatar">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
            </nav> */}

            {/* ОСНОВНОЙ КОНТЕНТ */}
            <div className="dashboard">
                {/* <header className="header">
                    <h1>HUMAN FACTOR MONITOR</h1>
                    <h2>Матрица рисков, анализ ошибок системы</h2>
                </header> */}

                <div className="main-content">
                    {/* Левая панель - Аналитика */}
                    <Stack gap={0} w='100%'>
                        <div className="section-header">
                            <h3>АНАЛИТИКА</h3>
                        </div>
                        <div className="left-panel">
                            <AnalyticsSection
                                analytics={humanFactorData.analytics}
                                riskIdentification={humanFactorData.riskIdentification}
                                riskResponse={humanFactorData.riskResponse}
                                onRiskClick={handleRiskClick}
                            />
                        </div>
                    </Stack>


                    {/* Центральная панель */}
                    <div className="center-panel" style={{gap: '8px', padding: '0', background: 'none', boxShadow: 'none' }}>
                        <div className="section-header" style={{marginBottom: '0px'}}>
                            <h3 style={{margin: 0, padding: 0, fontSize: '1.17em'}}>ВЗАИМОСВЯЗЬ КОМПОНЕНТОВ ЧЕЛОВЕЧЕСКОГО ФАКТОРА</h3>
                        </div>
                        <ComponentRelationsSection
                            data={data?.scatter_data}
                            animated={animationTrigger}
                        />
                        <RedLineChartSection
                            data={data?.risk_trend}
                            animated={animationTrigger}
                            threshold={data?.risk_trend_threshold}
                        />
                    </div>

                    {/* Правая панель */}
                    <div className="right-panel" style={{gap: '8px', padding: '0', background: 'none', boxShadow: 'none' }}>
                        <div className="section-header" style={{marginBottom: '0px'}}>
                            <h3 style={{margin: 0, padding: 0, fontSize: '1.17em'}}>РЕАЛИЗАЦИЯ РИСКОВ ЧЕЛОВЕЧЕСКОГО ФАКТОРА</h3>
                        </div>
                        <RightPanelMatrixSection
                            matrix={humanFactorData.rightMatrix}
                            onMatrixClick={handleMatrixClick}
                        />
                        <TrendChartsSection
                            trendData={data?.category_trends}
                            animated={animationTrigger}
                        />
                    </div>
                </div>

                {/* Модальное окно */}
                {showModal && (
                    <Modal
                        title={modalContent.title}
                        content={modalContent.content}
                        icon={modalContent.icon}
                        onClose={closeModal}
                    />
                )}
            </div>
        </div>
    );
};


const getRiskColor = (risk: string) => {
    switch (risk) {
        case 'низкий': return '#4a7c59';
        case 'средний': return '#ffa726';
        case 'высокий': return '#ef5350';
        case 'критический': return '#d32f2f';
        default: return '#757575';
    }
};

export default HumanFactorMonitor; 