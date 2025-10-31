import profilePic from './images/MarcoProfilePic.jpg';//location of image is temporary until it can work in public folder
import icon1 from './images/github-icon.png';
import icon2 from './images/linkedin-icon.png';
import icon3 from './images/gmail-icon.png';
function Profile() {
  return (
    <div className="profile-container">
      <div className="summary-container">
        <div className="profile-desc">
            <h3 className="intro-header">Hello, my name is</h3>
            <h1 className="name-header">Marco Dava</h1>
            <p className="profile-paragraph">
                A self taught machine learning engineering student that strives to solve everyday problems, specialized in reinforced learning models.
            </p>
            <div className="icon-container">
                <a href="#contact-section" className="contact-me-text">
                  <span>Contact Me</span>
                </a>
                <a href="https://github.com/MarcoDava"><img className="profile-icon" src={icon1} alt="GitHub Icon"></img></a>
                <a href="https://www.linkedin.com/in/marcodava/"><img className="profile-icon"  src={icon2} alt="LinkedIn Icon"></img></a>
                <a href="mailto:marco.a.dava@gmail.com"><img className="profile-icon" src={icon3} alt="Gmail Icon"></img></a>
            </div>
        </div>
        <div className="image-container">
          <img className="profile-image" src={profilePic} alt="profile-pic"/>
        </div>
      </div>
      <div className="aboutme-container">
        <h2 className="aboutme-header">ABOUT ME</h2>
        <p className="aboutme-section">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
        </p>
      </div>
    </div>
  );
}

export default Profile;