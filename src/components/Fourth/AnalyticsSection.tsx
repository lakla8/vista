
// ===========================================
// КОМПОНЕНТ АНАЛИТИКИ
// ===========================================
const AnalyticsSection = ({ metrics }: any) => {
    return (
        <div className="metrics">
            <div className="item">
                <span>Корпоративные программы</span>
                <span>{metrics.corporatePrograms}</span>
            </div>
            <div className="item">
                <span>Количество Взаимодействий</span>
                <span>{metrics.interactions}</span>
            </div>
            <div className="item">
                <span>Общее количество контактов</span>
                <span>{metrics.totalContacts}</span>
            </div>
            <div className="item">
                <span>Участие в мероприятиях</span>
                <span>{metrics.eventParticipation}</span>
            </div>
        </div>
    );
};

export default AnalyticsSection;