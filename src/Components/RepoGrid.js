import React from 'react';
import { Box, Grid } from '@mui/material';
import RepoCard from "react-repo-card";


class RepoGrid extends React.Component {
    render(){
        const repolist = [
            'stream-analyser',
            'pekofy-bot',
            'KNN-classifier',
            'eye-state-detector',
            'HOI4-mod-name-identifier',
            'omedetou-bot',
            'hololive-talent-image-grabber',
            'least-vote-calculator',
            'matrix-calculator',
            'Text-based-RPG',
            'CalcApp',
            'CSharp_Proje_Paketi',
        ]
        const username = 'emso-c';
        return (
            <Box>
                <Grid container paddingX={10} spacing={3}>
                    {
                        repolist.map((repo, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <RepoCard
                                dark
                                username={username}
                                repository={repo}
                                ></RepoCard>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        )
    }
}

export default RepoGrid;