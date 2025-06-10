// ===========================================
// КОМПОНЕНТ AI АССИСТЕНТА

import React from "react";

// ===========================================
const AIAssistant = React.forwardRef(({ position, onMouseDown }: any, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
        <div
            ref={ref}
            className="ai-assistant"
            style={position}
            onMouseDown={onMouseDown}
        >
            <div className="avatar">AI</div>
            <div className="conversation">
                {/* TODO: Динамические сообщения от AI системы */}
                <div className="message">
                    <p>Сотрудник Савичева Е.С. переработала за неделю на 25% в часах.</p>
                    <p>Проанализировать её данные?</p>
                </div>
                <div className="response">
                    <p>Да. Подготовь отчет по проф. прогнозу и текущей нагрузке</p>
                </div>
            </div>
            <div className="expand">
                <i className="fas fa-chevron-down"></i>
            </div>
        </div>
    );
});

export default AIAssistant;