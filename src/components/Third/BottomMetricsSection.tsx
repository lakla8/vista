

// ===========================================
// КОМПОНЕНТ НИЖНИХ МЕТРИК
// ===========================================
const BottomMetricsSection = ({ metrics, onBottomMetricClick }: any) => {
    const handleBottomMetricClick = (metricLabel: any, value: any, color: any) => {
        if (onBottomMetricClick) {
            onBottomMetricClick(metricLabel, value, color);
        }
    };

    return (
        <div className="bottom-metrics">
            {metrics.map((metric: any, index: any) => (
                <div 
                    key={index} 
                    className="metric-group metric-group-interactive"
                    onClick={() => handleBottomMetricClick(metric.label, metric.value, metric.color)}
                >
                    <span className="metric-label">{metric.label}</span>
                    <span className={`metric-value ${metric.color}`}>{metric.value}</span>
                </div>
            ))}
        </div>
    );
};

export default BottomMetricsSection;