// ===========================================
// КОМПОНЕНТ ГРАФИКА ВСТРЕЧ
// ===========================================
const MeetingChartSection = ({ chartData, onBarClick, animated }: any) => {
    const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

    return (
        <div className="meeting-section">
            <h3>ГРАФИК ВСТРЕЧ С КОМАНДОЙ</h3>
            <div className="chart-container">
                <div className="bar-chart">
                    {chartData.map((meeting: any, index: any) => (
                        <div 
                            key={index}
                            className="chart-bar"
                            style={{ 
                                height: `${meeting.count}%`,
                                transform: animated ? 'translateX(0)' : 'translateX(-100%)',
                                opacity: animated ? '1' : '0',
                                transition: `all 0.5s ease ${index * 0.15}s`
                            }}
                            onClick={() => onBarClick(months[index], index)}
                        ></div>
                    ))}
                </div>
                <div className="chart-labels">
                    {months.map((month, index) => (
                        <span key={index}>{month}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MeetingChartSection;