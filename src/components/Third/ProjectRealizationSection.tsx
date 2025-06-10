

// ===========================================
// КОМПОНЕНТ РЕАЛИЗАЦИИ ПРОЕКТОВ

import { useEffect, useState } from "react";

// ===========================================
const ProjectRealizationSection = ({ projects, onProjectSegmentHover, onProjectSegmentLeave }: any) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(projects)
        if (!projects) return;
        setData(projects.map((project: any) => {
            return {
                team: project.team,
                open_projects: (project.open_projects / (project.open_projects + project.closed_projects) * 100).toFixed(2),
                closed_projects: (project.closed_projects / (project.open_projects + project.closed_projects) * 100).toFixed(2)
            }
        }));
    }, [projects])

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <>
            <div className="legend">
                <span className="legend-item">
                    <i className="fas fa-circle red"></i> Не закрытые
                </span>
                <span className="legend-item">
                    <i className="fas fa-circle green"></i> Закрытые
                </span>
            </div>
            <div className="project-bars">
                {data.map((project: any, index: any) => (
                    <div key={index} className="project-item">
                        <span className="team-name">{project.team}</span>
                        <div className="progress-bar">
                            <div 
                                className="incomplete project-segment-interactive" 
                                style={{ width: `${project.open_projects}%` }}
                                onMouseEnter={(e) => onProjectSegmentHover && onProjectSegmentHover(project.team, 'Не закрытые', project.open_projects, e)}
                                onMouseLeave={onProjectSegmentLeave}
                            >
                                {project.open_projects > 15 && <span className="project-value">{project.open_projects}%</span>}
                            </div>
                            <div 
                                className="complete project-segment-interactive" 
                                style={{ width: `${project.closed_projects}%` }}
                                onMouseEnter={(e) => onProjectSegmentHover && onProjectSegmentHover(project.team, 'Закрытые', project.closed_projects, e)}
                                onMouseLeave={onProjectSegmentLeave}
                            >
                                {project.closed_projects > 15 && <span className="project-value">{project.closed_projects}%</span>}
                            </div>
                        </div>
                    </div>
                ))}
                <div className="project-total">
                    <span className="team-name">Всего</span>
                    <div className="progress-bar total">
                        <div 
                            className="incomplete project-segment-interactive" 
                            style={{ width: '35%' }}
                            onMouseEnter={(e) => onProjectSegmentHover && onProjectSegmentHover('Всего', 'Не закрытые', 35, e)}
                            onMouseLeave={onProjectSegmentLeave}
                        >
                            <span className="project-value">35%</span>
                        </div>
                        <div 
                            className="complete project-segment-interactive" 
                            style={{ width: '65%' }}
                            onMouseEnter={(e) => onProjectSegmentHover && onProjectSegmentHover('Всего', 'Закрытые', 65, e)}
                            onMouseLeave={onProjectSegmentLeave}
                        >
                            <span className="project-value">65%</span>
                        </div>
                    </div>
                    <div className="scale">
                        <span>0</span>
                        <span>500</span>
                        <span>1000</span>
                        <span>1500</span>
                        <span>2000</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectRealizationSection;