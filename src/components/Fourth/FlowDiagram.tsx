// ===========================================
// КОМПОНЕНТ FLOW ДИАГРАММЫ

import { Image } from "@mantine/core";
import { useEffect } from "react";

// ===========================================
const FlowDiagram = () => {

    useEffect(() => {
        // Создание SVG связей
        const flowElement = document.querySelector('.flow');
        if (!flowElement) return;

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none';
        svg.setAttribute('viewBox', '0 0 300 450');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M240,67 L55,137 L195,207 L55,277 L195,347 L55,417');
        path.setAttribute('stroke', '#4a7c59');
        path.setAttribute('stroke-width', '4');
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke-linecap', 'round');

        const whitePath: any = path.cloneNode();
        whitePath.setAttribute('stroke', '#ffffff');
        whitePath.setAttribute('stroke-width', '1.5');

        svg.appendChild(path);
        svg.appendChild(whitePath);
        flowElement.appendChild(svg);

        return () => {
            if (flowElement.contains(svg)) {
                flowElement.removeChild(svg);
            }
        };
    }, []);

    return (
        // <div className="flow">
        //     {items.map((item: any, index: any) => (
        //         <div
        //             key={item.id}
        //             className={`flow-item ${positions[index]}`}
        //             onClick={() => onItemClick(item)}
        //         >
        //             <div className={`circle ${item.color}`}>
        //                 <i className={`fas ${item.icon}`}></i>
        //             </div>
        //             <span>{item.name}</span>
        //         </div>
        //     ))}
        // </div>
        <Image src='flow.svg' height={'100%'}/>
    );
};

export default FlowDiagram;