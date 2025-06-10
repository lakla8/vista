
// ===========================================
// КОМПОНЕНТ ВЗАИМОСВЯЗИ КОМПОНЕНТОВ
// ===========================================
const ComponentRelationsSection = ({ data, animated }: any) => {
    const getCategoryColor = (category: string) => {
        switch (category) {
            case "Состояние системы ЧФ": return '#4a7c59';
            case "Персонал": return '#8e24aa';
            default: return '#757575';
        }
    };

    const getRiskSize = (risk: string) => {
        switch (risk) {
            case 'низкий': return 6;
            case 'средний': return 10;
            case 'высокий': return 14;
            case 'критический': return 18;
            default: return 8;
        }
    };

    return (
        <div className="component-relations">
            <div className="scatter-chart">
                <svg width="100%" height="300" viewBox="0 0 700 300">
                    {/* Сетка */}
                    <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e0e0e0" strokeWidth="1"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    
                    {/* Оси */}
                    <line x1="40" y1="280" x2="680" y2="280" stroke="#333" strokeWidth="2"/>
                    <line x1="40" y1="280" x2="40" y2="20" stroke="#333" strokeWidth="2"/>
                    
                    {/* Подписи осей */}
                    <text x="360" y="295" textAnchor="middle" fontSize="12" fill="#666">Время</text>
                    <text x="20" y="150" textAnchor="middle" fontSize="12" fill="#666" transform="rotate(-90 20 150)">Интенсивность</text>
                    
                    {/* Данные */}
                    {data && data.map((point: any, index: number) => (
                        <circle
                            key={index}
                            cx={40 + (point.x * 24)}
                            cy={280 - (point.y * 1.2)}
                            r={10}
                            fill={point.color}
                            opacity={animated ? 0.8 : 0}
                            className="scatter-point"
                            style={{
                                animation: animated ? `fadeInScale 0.6s ease-out ${index * 0.1}s forwards` : 'none',
                                cursor: 'pointer'
                            }}
                        />
                    ))}
                    
                    {/* Горизонтальная красная линия */}
                    <line x1="40" y1="160" x2="680" y2="160" stroke="#d32f2f" strokeWidth="2" strokeDasharray="5,5"/>
                </svg>
                
                {/* Легенда */}
                {/* <div className="chart-legend">
                    <div className="legend-item">
                        <div className="legend-color" style={{backgroundColor: '#4a7c59'}}></div>
                        <span>Состояние системы ЧФ</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-color" style={{backgroundColor: '#8e24aa'}}></div>
                        <span>Персонал</span>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ComponentRelationsSection;