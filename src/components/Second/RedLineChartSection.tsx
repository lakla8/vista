
// ===========================================
// КОМПОНЕНТ ГРАФИКА С КРАСНОЙ ЛИНИЕЙ
// ===========================================
const RedLineChartSection = ({ data, animated, threshold }: any) => {
    const months = ['Сент', 'Окт', 'Нояб', 'Дек', 'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг'];
    if (!data) return null;
    return (
        <div className="red-line-chart" style={{gridColumn: '2', gridRow: '3'}}>
            <div className="chart-container" style={{ background: 'white', marginTop: '-20px' }}>
                <svg width="100%" height="300" viewBox="0 0 700 300">
                    {/* Сетка */}
                    <defs>
                        <pattern id="redGrid" width="33" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 33 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="1"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="#fff" />
                    
                    {/* Оси */}
                    <line x1="40" y1="280" x2="680" y2="280" stroke="#333" strokeWidth="2"/>
                    <line x1="40" y1="280" x2="40" y2="20" stroke="#333" strokeWidth="2"/>
                    
                    {/* Горизонтальные линии сетки */}
                    {[0, 10, 20, 30, 40].map((value) => {
                        const y = 280 - (value * 8);
                        return (
                            <g key={value}>
                                <line x1="35" y1={y} x2="680" y2={y} stroke="#e0e0e0" strokeWidth="1"/>
                                <text x="30" y={y + 3} textAnchor="end" fontSize="10" fill="#666">{value}</text>
                            </g>
                        );
                    })}
                    
                    {/* Зеленая линия тренда */}
                    <path
                        d={`M 50 ${280 - data[0].value * 8} ${data.map((point: any, index: number) => 
                            `L ${50 + index * 112} ${280 - point.value * 8}`
                        ).join(' ')}`}
                        fill="none"
                        stroke="#4CAF50"
                        strokeWidth="3"
                        opacity={animated ? 1 : 0}
                        style={{
                            animation: animated ? 'drawLine 1.5s ease-out forwards' : 'none'
                        }}
                    />
                    
                    {/* Точки на линии */}
                    {data.map((value: any, index: number) => (
                        <circle
                            key={index}
                            cx={50 + index * 112}
                            cy={280 - value.value * 8}
                            r="4"
                            fill="#4CAF50"
                            opacity={animated ? 1 : 0}
                            style={{
                                animation: animated ? `fadeIn 0.3s ease-out ${index * 0.1}s forwards` : 'none'
                            }}
                        />
                    ))}
                    
                    {/* Красная пунктирная линия */}
                    <line 
                        x1="40" 
                        y1={280 - threshold * 8} 
                        x2="680" 
                        y2={280 - threshold * 8} 
                        stroke="#d32f2f" 
                        strokeWidth="2" 
                        strokeDasharray="8,4"
                        opacity={animated ? 1 : 0}
                        style={{
                            animation: animated ? 'fadeIn 1s ease-out 0.5s forwards' : 'none'
                        }}
                    />
                    
                    {/* Подписи месяцев */}
                    {months.slice(0, 6).map((month, index) => (
                        <text 
                            key={month} 
                            x={50 + index * 112} 
                            y="295" 
                            textAnchor="middle" 
                            fontSize="10" 
                            fill="#666"
                        >
                            {month}
                        </text>
                    ))}
                </svg>
            </div>
        </div>
    );
};

export default RedLineChartSection;