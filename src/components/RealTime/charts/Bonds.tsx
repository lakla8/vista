import ReactEChart from "echarts-for-react";
import { useEffect, useState } from "react";
import ContentBlock from "../../App/ContentBlock";

const Bonds = () => {

    const [option, setOption] = useState({});

    useEffect(() => {
        fetch('webkit-dep.json')
            .then(response => response.json())
            .then(webkitDep => {
                setOption({
                    legend: {
                        data: []
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
                            data: webkitDep.nodes.map((node: any, idx: any) => {
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
        <ContentBlock h={'100%'} p={0}>
            <div style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                <ReactEChart option={option} />
            </div>
        </ContentBlock>
    )
}

export default Bonds