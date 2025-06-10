
// ===========================================
// КОМПОНЕНТ СЕКЦИИ ДАННЫХ
// ===========================================
const DataSection = ({ metrics, onMetricClick }: any) => {
    const handleMetricClick = (metricType: any, value: any) => {
        if (onMetricClick) {
            onMetricClick(metricType, value);
        }
    };

    return (
        <div className="data-section">
            <h3>Данные</h3>
            <div className="metrics-grid">
                <div 
                    className="metric-card kpi"
                    onClick={() => handleMetricClick('KPI', metrics.kpi)}
                >
                    <span className="value">KPI {metrics.kpi}</span>
                </div>
                <div 
                    className="metric-card okr"
                    onClick={() => handleMetricClick('OKR', metrics.okr)}
                >
                    <span className="value">OKR {metrics.okr}</span>
                </div>
                <div 
                    className="metric-card completion"
                    onClick={() => handleMetricClick('Укомплектованность', metrics.completion)}
                >
                    <span className="label">Укомплектованность</span>
                    <span className="value">{metrics.completion}</span>
                </div>
                <div 
                    className="metric-card employees"
                    onClick={() => handleMetricClick('Сотрудники', metrics.employees)}
                >
                    <span className="value">{metrics.employees}</span>
                </div>
                <div 
                    className="metric-card salary"
                    onClick={() => handleMetricClick('ФОТ', metrics.salary)}
                >
                    <span className="value">{metrics.salary}</span>
                </div>
            </div>
        </div>
    );
};

export default DataSection;