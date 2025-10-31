import Project from "./Project";
import ProjectData from "./ProjectData";
export default function ProjectList() {
     const projectElements = ProjectData.map(project => {
        return <Project
            id={project.id}
            image={project.image}
            projectTitle={project.projectTitle}
            projectSummary={project.projectDescription}
            projectLink={project.projectLink}
        />
    })
    return(
        <div className="project-list-container">  
           <h2>PROJECTS</h2>
            <div className="project-containers">
                {projectElements}
            </div>
        </div>
    )
}