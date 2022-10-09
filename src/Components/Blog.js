import React from 'react';
import { Stack, Typography } from '@mui/material';
import MediumCarousel from './MediumCarousel';
import { texts, getText } from '../globals';

class Blog extends React.Component {
    render(){
        return (
            <Stack name="blog">
                <Typography style={{margin:"auto", paddingY: 50, filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, .6))"}} variant="h2" color="white">
                    {getText(texts.body.blog.title, this.props.lang)}
                </Typography>
                <MediumCarousel lang={this.props.lang}></MediumCarousel>
            </Stack>
        )
    }
}

export default Blog;