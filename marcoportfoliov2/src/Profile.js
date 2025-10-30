
function Header() {
  return (
    <div className="profile-container">
      <div className="profile-container">
        <div className="profile-desc">
            <h3 className="intro-header">Hello, my name is</h3>
            <h1 className="name-header">Marco Dava</h1>
            <p className="profile-paragraph">
                A self taught machine learning engineering student that strives to solve everyday problems, specialized in reinforced learning models.
            </p>
            <div className="icon-container">
                <span className="contact-me-text">Contact Me:</span>
                <img className="profile-icon"></img>
                <img className="profile-icon"></img>
                <img className="profile-icon"></img>
            </div>
        </div>
        <div className="profile-pic">
            <img className="profile-image" src={require('./assets/profile-pic.png')} alt="profile-pic"/>
        </div>
      </div>
      <div className="aboutme-container">
        <p className="aboutme-section">
            
        </p>
      </div>
    </div>
  );
}

export default Header;
