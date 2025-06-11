
// ===========================================
// КОМПОНЕНТ МАТРИЦЫ ПРАВОЙ ПАНЕЛИ (ОБНОВЛЕННЫЙ С MANTINE)
// ===========================================
const RightPanelMatrixSection = ({ onMatrixClick }: any) => {
    const categories = [
        { name: "ПЕРСОНАЛ", color: "#ffd93d" },
        { name: "КОМАНДЫ", color: "#ff6b35" }, 
        { name: "СРЕДА, КУЛЬТУРА", color: "#c73e1d" },
        { name: "СТАНДАРТЫ, ПРОЦЕССЫ", color: "#6ba3d0" },
        { name: "ОБОРУДОВАНИЕ, ТЕХНИКА", color: "#4a7c59" }
    ];

    // Полная матрица данных с цветами для всех ячеек по первому скриншоту
    const matrixData = [
        [{ value: "7", category: 4 }, { value: null, category: 4 }, { value: null, category: 4 }, { value: null, category: 4 }, { value: null, category: 0 }],
        [{ value: null, category: 4 }, { value: null, category: 4 }, { value: "3", category: 0 }, { value: null, category: 0 }, { value: null, category: 1 }],
        [{ value: null, category: 4 }, { value: null, category: 0 }, { value: null, category: 1 }, { value: null, category: 1 }, { value: null, category: 2 }],
        [{ value: null, category: 4 }, { value: "4", category: 0 }, { value: null, category: 1 }, { value: null, category: 2 }, { value: null, category: 2 }],
        [{ value: null, category: 0 }, { value: null, category: 1 }, { value: null, category: 2 }, { value: null, category: 2 }, { value: "1", category: 2 }]
    ];

    const getCellColor = (cellData: any) => {
        if (!cellData) return '#e0e0e0';
        return categories[cellData.category]?.color || '#e0e0e0';
    };

    return (
        <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '320px',
            gridRow: '2',
            gridColumn: '3'
        }}>
            
            <div style={{ 
                display: 'flex', 
                gap: '24px',
                alignItems: 'center',
                flex: 1,
                justifyContent: 'space-between'
            }}>
                {/* Матрица */}
                <div style={{ 
                    flex: '1',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        gap: '12px',
                        width: 'calc(100% - 100px)',
                        height: '100%',
                        padding: '20px',
                        aspectRatio: '1',
                        background: '#f8f9fa',
                        borderRadius: '8px',
                        border: '1px solid #e9ecef'
                    }}>
                        {matrixData.flat().map((cellData, index) => {
                            const row = Math.floor(index / 5);
                            const col = index % 5;
                            const hasValue = cellData?.value;
                            return (
                                <div
                                    key={index}
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: getCellColor(cellData),
                                        border: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '16px',
                                        cursor: hasValue ? 'pointer' : 'default',
                                        transition: 'all 0.2s ease',
                                        boxShadow: hasValue ? '0 3px 8px rgba(0,0,0,0.15)' : '0 1px 3px rgba(0,0,0,0.1)'
                                    }}
                                    onClick={() => hasValue && onMatrixClick(row, col, cellData.value, 'средний')}
                                    onMouseEnter={(e: any) => {
                                        if (hasValue) {
                                            e.target.style.transform = 'scale(1.15)';
                                            e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.25)';
                                        }
                                    }}
                                    onMouseLeave={(e: any) => {
                                        if (hasValue) {
                                            e.target.style.transform = 'scale(1)';
                                            e.target.style.boxShadow = '0 3px 8px rgba(0,0,0,0.15)';
                                        }
                                    }}
                                >
                                    {cellData?.value}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Легенда */}
                <div style={{ 
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    paddingLeft: '20px',
                    maxWidth: '220px'
                }}>
                    {categories.map((category, index) => (
                        <div key={index} style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '8px',
                            background: category.color,
                            borderRadius: '20px',
                            padding: '8px 16px',
                            fontSize: '11px',
                            fontWeight: 'bold',
                            color: 'white',
                            textTransform: 'uppercase',
                            letterSpacing: '0.3px',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                            height: '32px',
                            minHeight: '32px'
                        }}>
                            <span style={{ 
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                lineHeight: '1.2'
                            }}>
                                {category.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RightPanelMatrixSection;