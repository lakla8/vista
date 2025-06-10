
const FactorsSection = ({ selectedFactor, onFactorClick }: any) => {
    const factors = [
        'Команда', 'Soft/Hardware - логи', 'Техника - логи', 'Руководство',
        'Проф. надёжность', 'Обучение, допуски', 'Мероприятия', 'Смежные службы'
    ];

    return (

            <div style={{ gridColumn: '1 / span 3', height: 'fit-content' }}>
                <div className="bottom-section">
                    <div></div>
                    <h3>АНАЛИТИКА КОМПОНЕНТОВ ЧЕЛОВЕЧЕСКОГО ФАКТОРА</h3>
                    <div className="factors">
                        {factors.map((factor, index) => (
                            <button
                                key={index}
                                className={selectedFactor === factor ? 'active' : ''}
                                onClick={() => onFactorClick(factor)}
                            >
                                {factor} <i className="fas fa-arrow-right"></i>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

    );
};

export default FactorsSection;