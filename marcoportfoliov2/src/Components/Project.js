export default function Project(props){
    return(
        <div className="project-container">
            <img className="project-image" src={props.image} alt="project-pic"/>
            <h3 className="project-title">{props.projectTitle}</h3>
            <p className="project-summary">{props.projectSummary}</p>
            <a className="project-link" href={props.projectLink}>View Project</a>
        </div>
    )   
}