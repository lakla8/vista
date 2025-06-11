
// ===========================================
// КОМПОНЕНТ АНАЛИТИКИ
// ===========================================
const AnalyticsSection = ({ analytics, riskIdentification, riskResponse, onRiskClick }: any) => {
    return (
        <div className="analytics-section" style={{gridRow: '1 / span 2'}}>
            
            {/* Основные показатели */}
            <div className="main-metrics">
                <div className="metric-group metric-group-interactive" onClick={() => onRiskClick('Анализ рисков', analytics.risks)}>
                    <div className="metric-label">Риски</div>
                    <div className="metric-value large">{analytics.risks}</div>
                </div>
                <div className="metric-group metric-group-interactive" onClick={() => onRiskClick('Период анализа', analytics.period)}>
                    <div className="metric-label">Период</div>
                    <div className="metric-value medium">{analytics.period}</div>
                </div>
                <div className="metric-group predictability metric-group-interactive" onClick={() => onRiskClick('Прогнозируемость рисков', analytics.predictability)}>
                    <div className="metric-label">Прогнозируемость рисков</div>
                    <div className="metric-value large">{analytics.predictability}</div>
                </div>
            </div>

            {/* Идентификация рисков */}
            <div className="risk-identification">
                <h4>ИДЕНТИФИКАЦИЯ РИСКОВ</h4>
                <div className="risk-metrics">
                    <div className="risk-metric" onClick={() => onRiskClick('Ретроспективные', riskIdentification.retrospective)}>
                        <div className="risk-label">Ретроспективные</div>
                        <div className="risk-value">{riskIdentification.retrospective}</div>
                    </div>
                    <div className="risk-metric" onClick={() => onRiskClick('Проактивные', riskIdentification.proactive)}>
                        <div className="risk-label">Проактивные</div>
                        <div className="risk-value">{riskIdentification.proactive}</div>
                    </div>
                    <div className="risk-metric" onClick={() => onRiskClick('Прогностические', riskIdentification.prognostic)}>
                        <div className="risk-label">Прогностические</div>
                        <div className="risk-value large">{riskIdentification.prognostic}</div>
                    </div>
                </div>
            </div>

            {/* Реагирование на риски */}
            <div className="risk-response">
                <h4>РЕАГИРОВАНИЕ НА РИСКИ</h4>
                <div className="response-metrics">
                    <div className="response-item response-item-interactive" onClick={() => onRiskClick('Прогноз', `${riskResponse.forecast}%`)}>
                        <div className="response-label">Прогноз</div>
                        <div className="response-value">{riskResponse.forecast}%</div>
                    </div>
                    <div className="response-item response-item-interactive" onClick={() => onRiskClick('Сокращение', riskResponse.reduction)}>
                        <div className="response-label">Сокращение</div>
                        <div className="response-value">{riskResponse.reduction}</div>
                    </div>
                    <div className="response-item response-item-interactive" onClick={() => onRiskClick('Уклонение', riskResponse.avoidance)}>
                        <div className="response-label">Уклонение</div>
                        <div className="response-value">{riskResponse.avoidance}</div>
                    </div>
                    <div className="response-item response-item-interactive" onClick={() => onRiskClick('Принятие', riskResponse.adoption)}>
                        <div className="response-label">Принятие</div>
                        <div className="response-value">{riskResponse.adoption}</div>
                    </div>
                    <div className="response-item response-item-interactive" onClick={() => onRiskClick('Потенциал', riskResponse.potential)}>
                        <div className="response-label">Потенциал</div>
                        <div className="response-value">{riskResponse.potential}</div>
                    </div>
                </div>
            </div>

            {/* Strategy Simulator */}
            <div className="strategy-simulator">
                <button className="simulator-btn">
                    <i className="fas fa-chart-line"></i>
                    Strategy Simulator
                </button>
            </div>
        </div>
    );
};

export default AnalyticsSection;