import React from 'react';
import PageLayout from '../components/PageLayout';
import ProjectsBody from '../components/ProjectsBody';
import { Helmet } from 'react-helmet';

const Projects = () => {
    return(
        <div className="Projects-page-wrapper">
            <Helmet>
                <title>Projects - Evan</title>
                <meta name="description" content="Evan Smith's portfolio projects page" />
            </Helmet>
            <PageLayout>
                <ProjectsBody />
            </PageLayout>
        </div>
    )
}


export default Projects;