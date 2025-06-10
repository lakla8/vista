// ===========================================
// КОМПОНЕНТ ЭФФЕКТИВНОСТИ
// ===========================================
const EffectivenessSection = () => {
    return (
        <section className="effectiveness-section">
            <h3>Эффективность</h3>
            <div className="grid">
                <div className="card primary">
                    <div className="metric">KPI, OKR</div>
                    <div className="row">
                        <div className="metric">Идеи</div>
                        <div className="metric">Развитие</div>
                    </div>
                </div>
                <div className="card secondary">
                    <div className="metric">Риски</div>
                    <div className="metric">Потенциал</div>
                </div>
            </div>
        </section>
    );
};

export default EffectivenessSection;