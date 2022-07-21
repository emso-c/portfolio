import React from 'react';
import { Stack, Typography } from '@mui/material';
import ProjectCarousel from './ProjectCarousel';
import RepoGrid from './RepoGrid';
import { texts, getText } from '../globals';

class Projects extends React.Component {
    render(){
        return (
            <Stack direction="column" spacing={10}>
                <Typography style={{margin:"auto", paddingTop: 50, filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, .6))"}} variant="h2" color="white">
                    {getText(texts.body.projects.title, this.props.lang)}
                </Typography>
                <ProjectCarousel lang={this.props.lang}></ProjectCarousel>
                <RepoGrid></RepoGrid>
            </Stack>
        )
    }
}

export default Projects;