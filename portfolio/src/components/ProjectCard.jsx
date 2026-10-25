function ProjectCard({ project, onSelect }) {
const cardStyle = project.image
    ? { '--bg-image': `url(${project.image})` }
    : undefined

    return (
        <li>
            <button onClick={() => onSelect(project)} style={cardStyle}>
                <h2 className="projectCard_text">{project.title}</h2>
                <p className="projectCard_text">{project.description}</p>

                <ul className="techList">
                    {project.tech.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>
            </button>
        </li>
    )
}

export default ProjectCard