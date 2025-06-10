

// ===========================================
// КОМПОНЕНТ АНАЛИТИКИ ФАКТОРОВ
// ===========================================
const FactorAnalyticsSection = ({ factors, selectedFactor, onFactorClick }: any) => {
    return (
        <div className="bottom-section" style={{ height: 'auto' }}>
            <h3>АНАЛИТИКА КОМПОНЕНТОВ ЧЕЛОВЕЧЕСКОГО ФАКТОРА</h3>
            <div className="factor-categories">
                {factors.map((factor: any, index: any) => (
                    <button 
                        key={index}
                        className={`factor-btn ${selectedFactor === factor ? 'active' : ''}`}
                        data-factor={factor}
                        onClick={() => onFactorClick(factor)}
                    >
                        {factor} <i className="fas fa-arrow-right"></i>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FactorAnalyticsSection;