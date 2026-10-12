import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import { useState } from 'react'
import ProjectDetails from '../components/ProjectDetails'
import '../styles/Projects.css'

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <>
            <h1>PROJECTS</h1>
           
                {selectedProject && (
                    <ProjectDetails
                        project={selectedProject}
                        onBack={() => setSelectedProject(null)}
                    />
                )}
          
             <div id="projectContainer">
            <ul>
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
                ))}
                </ul>
              </div>
        </>
    )
}

export default Projects