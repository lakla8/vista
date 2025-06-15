// ===========================================
// КОМПОНЕНТ AI АССИСТЕНТА

import React from "react";

// ===========================================
const AIAssistant = React.forwardRef(({ onMouseDown }: any, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
        <div
            ref={ref}
            className="ai-assistant"
            // style={position}
            style={{ position: 'relative', width: '100%', height: '100%', maxWidth: 'none' }}
            onMouseDown={onMouseDown}
        >
            <div className="avatar">AI</div>
            <div className="conversation">
                {/* TODO: Динамические сообщения от AI системы */}
                <div className="message">
                    <p>За последний месяц наблюдается увеличение отклонений в аккуратности выполнения задач на 25 %  Подготовить прогноз проф. надежности?</p>
                </div>
                <div className="response">
                    <p>Да. Дополнительно сформируй вероятность возникновения логов</p>
                </div>
            </div>
            <div className="expand">
                <i className="fas fa-chevron-down"></i>
            </div>
        </div>
    );
});

export default AIAssistant;