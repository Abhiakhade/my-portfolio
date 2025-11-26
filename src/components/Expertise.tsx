import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJava, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "Spring Boot",
    "REST API",
    "Hibernate",
    "MySQL",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "JavaScript",
    "Tailwind CSS",
];

const labelsSecond = [
    "Git",
    "GitHub",
    "VS Code",
    "IntelliJ IDEA",
    "Postman",
    "Linux (Basics)",
    "Docker (Basics)",
];

const labelsThird = [
    "Python",
    "Flask",
    "Deep Learning",
    "U-Net",
    "CNN",
    "TensorFlow / Keras",
    "AI Model Deployment",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">

                {/* Full Stack Development */}
                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Java Full Stack Developer</h3>
                    <p>
                        I specialize in building scalable full-stack applications using 
                        Java, Spring Boot, REST APIs, and MySQL. I have hands-on experience 
                        in user authentication, CRUD operations, database design, and backend logic.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Web + DevOps */}
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Web Development & Tools</h3>
                    <p>
                        I build responsive and modern UIs using HTML, CSS, Bootstrap, Tailwind, 
                        and React (beginner). I also work with Git, GitHub, API testing tools, 
                        and basic DevOps concepts for efficient development.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* AI / ML / Flask */}
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI, ML & Flask Development</h3>
                    <p>
                        I have built AI-powered applications including a Brain Tumor Detection 
                        system using CNN, U-Net segmentation, Flask backend, and dynamic 
                        prediction-based features. Skilled in integrating ML models into real apps.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;
