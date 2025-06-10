
// ===========================================
// КОМПОНЕНТ ПРОИЗВОДИТЕЛЬНОСТИ КОМАНДЫ
// ===========================================
const TeamPerformanceSection = ({ teamData, onSegmentHover, onSegmentLeave }: any) => {
    const maxValue = 50; // Максимальное значение по шкале
    
    return (
        <div className="team-performance">
            <div className="legend" style={{ marginLeft: '115px', width: 'calc(100% - 115px)', justifyContent: 'space-between' }}>
                <span className="legend-item productive">
                    <i className="fas fa-circle"></i> Продуктивное время
                </span>
                <span className="legend-item active">
                    <i className="fas fa-circle"></i> Активное
                </span>
                <span className="legend-item unproductive">
                    <i className="fas fa-circle"></i> Непродуктивное
                </span>
            </div>
            
            {/* Полоски */}
            <div className="performance-bars">
                {teamData.map((person: any, index: number) => {
                    const [productiveVal, activeVal, unproductiveVal] = [person.productive, person.active, person.unproductive];
                    
                    // Вычисляем проценты относительно максимального значения 50
                    const productivePercent = (productiveVal / maxValue) * 100;
                    const activePercent = (activeVal / maxValue) * 100;
                    const unproductivePercent = (unproductiveVal / maxValue) * 100;
                    
                    return (
                        <div key={index} className="person-bar">
                            <span className="name">{person.employee_name}</span>
                            <div className="bar">
                                {productiveVal > 0 && (
                                    <div 
                                        className="productive segment-interactive" 
                                        style={{ 
                                            width: `${productivePercent}%`,
                                            left: '0%'
                                        }}
                                        onMouseEnter={(e) => onSegmentHover(person.employee_name, 'productive', productiveVal, e)}
                                        onMouseLeave={onSegmentLeave}
                                    >
                                        <span className="bar-value">{productiveVal}</span>
                                    </div>
                                )}
                                {activeVal > 0 && (
                                    <div 
                                        className="active segment-interactive" 
                                        style={{ 
                                            width: `${activePercent}%`,
                                            left: `${productivePercent}%`
                                        }}
                                        onMouseEnter={(e) => onSegmentHover(person.employee_name, 'active', activeVal, e)}
                                        onMouseLeave={onSegmentLeave}
                                    >
                                        <span className="bar-value">{activeVal}</span>
                                    </div>
                                )}
                                {unproductiveVal > 0 && (
                                    <div 
                                        className="unproductive segment-interactive" 
                                        style={{ 
                                            width: `${unproductivePercent}%`,
                                            left: `${productivePercent + activePercent}%`
                                        }}
                                        onMouseEnter={(e) => onSegmentHover(person.employee_name, 'unproductive', unproductiveVal, e)}
                                        onMouseLeave={onSegmentLeave}
                                    >
                                        <span className="bar-value">{unproductiveVal}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
            
            {/* Шкала с нулем */}
            <div className="chart-scale">
                <span>0</span>
                <span>10</span>
                <span>20</span>
                <span>30</span>
                <span>40</span>
                <span>50</span>
            </div>
        </div>
    );
};

export default TeamPerformanceSection;