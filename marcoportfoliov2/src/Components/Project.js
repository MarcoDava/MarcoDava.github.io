import { ShineBorder } from "../registry/magicui/ShineBorder"


export default function Project(props) {
  return (
    <div className="project-container" style={{ position: "relative" }}>
        <ShineBorder shineColor="#A5C8D6" borderWidth={2} duration={10} style={{ zIndex: 1 }}/>
        <a href={props.projectLink}>
            <img className="project-image" src={props.image} alt="project-pic" />
            <h3 className="project-title">{props.projectTitle}</h3>
            <p className="project-summary">{props.projectSummary}</p>
            <span className="project-link">View Project</span>
        </a>
    </div>
  )
}
