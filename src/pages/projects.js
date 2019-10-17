import React from 'react';
import PageLayout from '../components/PageLayout';
import ProjectsBody from '../components/ProjectsBody';

const Projects = () => {
    return(
        <div className="Projects-page-wrapper">
            <PageLayout>
                <ProjectsBody />
            </PageLayout>
        </div>
    )
}


export default Projects;