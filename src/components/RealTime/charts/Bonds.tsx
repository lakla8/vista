import ReactEChart from "echarts-for-react";
import { useEffect, useState } from "react";

const Bonds = () => {

    const [option, setOption] = useState({});

    useEffect(() => {
        fetch('webkit-dep.json')
            .then(response => response.json())
            .then(webkitDep => {
                setOption({
                    legend: {
                        data: ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other']
                    },
                    series: [
                        {
                            type: 'graph',
                            layout: 'force',
                            animation: false,
                            label: {
                                position: 'right',
                                formatter: '{b}'
                            },
                            draggable: true,
                            data: webkitDep.nodes.map((node, idx) => {
                                node.id = idx;
                                return node;
                            }),
                            categories: webkitDep.categories,
                            force: {
                                edgeLength: 5,
                                repulsion: 20,
                                gravity: 0.8
                            },
                            edges: webkitDep.links
                        }
                    ]
                });
            });
    }, [])

    return (
        <ReactEChart option={option} />
    )
}

export default Bonds