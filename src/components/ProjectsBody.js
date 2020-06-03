import React from 'react';
import '../styles/ProjectsBody.css';
import PortfolioImg from '../images/portfolio.png';
import SeazonalImg from '../images/seazonal.png';
import RankChatImg from '../images/rankchat.png';


const ProjectsBody = () => {
    return(
        <div className="Projects-body">
            <div className="projects-wrapper">
                <div className="project">
                    <div className="project-img-wrapper">
                        <img src={PortfolioImg} alt="evan of earth website"></img>
                    </div>
                    <div className="project-title">EvanOfEarth</div>
                    <div className="project-link"><a href="/">www.EvanOfEarth.com</a></div>
                    <div className="project-description">
                        <p>Portfolio Website designed and built using Gatsby.js</p>
                    </div>
                </div>
                <div className="project">
                    <div className="project-img-wrapper">
                        <img src={SeazonalImg} alt="seazonal website"></img>
                    </div>
                    <div className="project-title">Seazonal</div>
                    <div className="project-link"><a href="https://seazonal.netlify.app/">Seazonal.netlify.app</a></div>
                    <div className="project-description">
                        <p>Gathers recipes based on current local weather using Spoonacular and OpenWeather API</p>
                        <p>React.js</p>
                    </div>
                </div>
                <div className="project">
                    <div className="project-img-wrapper">
                        <img src={RankChatImg} alt="rank chat website"></img>
                    </div>
                    <div className="project-title">PoetPost</div>
                    <div className="project-link"><a href="https://github.com/sitgofour/PoetPost">github.com/PoetPost</a></div>
                    <div className="project-description">
                        <p>Users make and rank posts by voting</p>
                        <p>MongoDb | Express | React | Node.js</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsBody;