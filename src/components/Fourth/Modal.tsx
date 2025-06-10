
// ===========================================
// КОМПОНЕНТ МОДАЛЬНОГО ОКНА
// ===========================================
const Modal = ({ title, content, icon, onClose }: any) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-icon">
                    <i className={`fas ${icon}`}></i>
                </div>
                <h3>{title}</h3>
                <div className="modal-body">
                    {content}
                </div>
                <button className="modal-close" onClick={onClose}>
                    Закрыть
                </button>
            </div>
        </div>
    );
};

export default Modal;