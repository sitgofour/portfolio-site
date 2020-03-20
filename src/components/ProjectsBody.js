import React from 'react';
import '../styles/ProjectsBody.css';
import PortfolioImg from '../images/portfolio.png';
import SeazonalImg from '../images/seazonal.png';


const ProjectsBody = () => {
    return(
        <div className="Projects-body">
            <div className="projects-wrapper">
                <div className="project">
                    <div className="project-img-wrapper">
                        <img src={PortfolioImg} alt="evan of earth website"></img>
                    </div>
                    <div className="project-title">EvanOfEarth.com</div>
                    <div className="project-link"><a href="/">www.EvanOfEarth.com</a></div>
                    <div className="project-description">
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </div>
                </div>
                <div className="project">
                    <div className="project-img-wrapper">
                        <img src={SeazonalImg} alt="seazonal website"></img>
                    </div>
                    <div className="project-title">Seazonal</div>
                    <div className="project-link"><a href="https://www.seazonal.netlify.com">Seazonal.netlify.com</a></div>
                    <div className="project-description">
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </div>
                </div>
                <div className="project">
                    <div className="project-img-wrapper">
                        <img src={PortfolioImg} alt="rank chat website"></img>
                    </div>
                    <div className="project-title">RankChat</div>
                    <div className="project-link"><a href="https://github.com/sitgofour/rankChat">github.com/RankChat</a></div>
                    <div className="project-description">
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsBody;