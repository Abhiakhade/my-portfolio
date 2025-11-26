import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import '../assets/images/abhis-circle.jpg'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://avatars.githubusercontent.com/u/178579817?v=4" alt="Avatar" />
          <img src="../assets/images/abhis-circle.jpg" alt="" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Abhiakhade" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/abhijitakhade/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Abhijit Akhade</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Abhiakhade" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/abhijitakhade/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;