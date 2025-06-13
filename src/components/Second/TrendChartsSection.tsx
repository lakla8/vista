
// ===========================================
// КОМПОНЕНТ ТРЕНДОВЫХ ГРАФИКОВ (MANTINE)
// ===========================================
const TrendChartsSection = ({ trendData, animated }: any) => {
    const months = ['Сент', 'Окт', 'Нояб', 'Дек', 'Янв', 'Фев'];
    if (!trendData) return null;
    const chartData = [
        { name: trendData[0].category, color: "#DC2626", data: trendData[0].points?.map((item: any) => item.value).slice(0, 6) || [10, 8, 6, 24, 16, 20] },
        { name: trendData[1].category, color: "#2563EB", data: trendData[1].points?.map((item: any) => item.value).slice(0, 6) || [7, 14, 18, 25, 18, 15] },
        { name: trendData[2].category, color: "#EA580C", data: trendData[2].points?.map((item: any) => item.value).slice(0, 6) || [8, 15, 24, 19, 14, 21] },
        { name: trendData[3].category, color: "#16A34A", data: trendData[3].points?.map((item: any) => item.value).slice(0, 6) || [12, 11, 16, 24, 20, 17] },
        { name: trendData[4].category, color: "#6B7280", data: trendData[4].points?.map((item: any) => item.value).slice(0, 6) || [11, 10, 18, 17, 21, 24] }
    ];

    const maxValue = 25;
    const chartWidth = 680;
    const chartHeight = 250;
    const marginLeft = 35;
    const marginRight = 20;
    const marginTop = 15;
    const marginBottom = 30;
    const plotWidth = chartWidth - marginLeft - marginRight;
    const plotHeight = chartHeight - marginTop - marginBottom;
    
    const xStep = plotWidth / (months.length - 1);
    const yScale = plotHeight / maxValue;

    return (
        <div className="trend-charts">
            <div style={{ 
                background: 'white', 
                borderRadius: '8px', 
                padding: '10px', 
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '0',
                gridRow: '3',
                gridColumn: '3'
            }}>
                {/* Легенда */}
                <div style={{ 
                    display: 'flex', 
                    gap: '12px', 
                    marginBottom: '5px',
                    fontSize: '16px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: '10px'
                }}>
                    {chartData.map((series, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <div style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                backgroundColor: series.color
                            }}></div>
                            <span style={{ color: '#374151' }}>{series.name}</span>
                        </div>
                    ))}
                </div>
                
                {/* График */}
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '10px' }}>
                    <svg width={chartWidth} height={chartHeight} viewBox={`0 0 ${chartWidth} ${chartHeight}`} style={{ overflow: 'visible' }}>
                        {/* Горизонтальные линии сетки */}
                        {[0, 5, 10, 15, 20, 25].map(value => {
                            const y = chartHeight - marginBottom - (value * yScale);
                            return (
                                <g key={value}>
                                    <line 
                                        x1={marginLeft} 
                                        y1={y} 
                                        x2={chartWidth - marginRight} 
                                        y2={y} 
                                        stroke="#E5E7EB" 
                                        strokeWidth="1"
                                    />
                                    <text 
                                        x={marginLeft - 8} 
                                        y={y + 4} 
                                        textAnchor="end" 
                                        fontSize="11" 
                                        fill="#6B7280"
                                    >
                                        {value}
                                    </text>
                                </g>
                            );
                        })}
                        
                        {/* Вертикальные линии и подписи месяцев */}
                        {months.map((month, index) => {
                            const x = marginLeft + (index * xStep);
                            return (
                                <g key={month}>
                                    <line 
                                        x1={x} 
                                        y1={marginTop} 
                                        x2={x} 
                                        y2={chartHeight - marginBottom} 
                                        stroke="#F3F4F6" 
                                        strokeWidth="1"
                                    />
                                    <text 
                                        x={x} 
                                        y={chartHeight - marginBottom + 14} 
                                        textAnchor="middle" 
                                        fontSize="11" 
                                        fill="#6B7280"
                                    >
                                        {month}
                                    </text>
                                </g>
                            );
                        })}
                        
                        {/* Линии данных */}
                        {chartData.map((series, seriesIndex) => {
                            const pathData = series.data.map((value: number, index: number) => {
                                const x = marginLeft + (index * xStep);
                                const y = chartHeight - marginBottom - (value * yScale);
                                return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                            }).join(' ');
                            
                            return (
                                <g key={seriesIndex}>
                                    <path
                                        d={pathData}
                                        fill="none"
                                        stroke={series.color}
                                        strokeWidth="2"
                                        opacity={animated ? 1 : 0}
                                        style={{
                                            animation: animated ? `drawLine 1s ease-out ${seriesIndex * 0.15}s forwards` : 'none'
                                        }}
                                    />
                                    {/* Точки данных */}
                                    {series.data.map((value: number, pointIndex: number) => {
                                        const x = marginLeft + (pointIndex * xStep);
                                        const y = chartHeight - marginBottom - (value * yScale);
                                        return (
                                            <circle
                                                key={pointIndex}
                                                cx={x}
                                                cy={y}
                                                r="4"
                                                fill={series.color}
                                                opacity={animated ? 1 : 0}
                                                style={{
                                                    animation: animated ? `fadeIn 0.3s ease-out ${seriesIndex * 0.15 + pointIndex * 0.05}s forwards` : 'none'
                                                }}
                                            />
                                        );
                                    })}
                                </g>
                            );
                        })}
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default TrendChartsSection;