import '../styles/ProjectDetails.css'

function ProjectDetails({ project, onBack }) {
    return (
        <div className="overlay" onClick={onBack}>
            <div className="panel" onClick={(e) => e.stopPropagation()}>
                <h2>{project.title}</h2>
                <p>{project.long_Description}</p>

                <p className="list_title">Technologies Used :</p>
                <ul>
                    
                    {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li> 
                ))}  
                </ul>

                <p className="list_title">Roles :</p>
                <ul>
                    
                    {project.role.map((role) => (
                    <li key={role}>{role}</li>
                    
                ))}
                </ul>
            
                <div className="panel-actions">
                <a href={project.repo}>GitHub Repository</a>
                <button onClick={onBack}>Back to projects</button>
                </div>

            </div>
            
        </div>

    )
}

export default ProjectDetails