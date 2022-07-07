import React from 'react';
import Blog from './Blog';
import Profile from './Profile';
import Projects from './Projects';
import {
    Container,
    Box,
    Stack,
    Divider
} from '@mui/material';

class Body extends React.Component {
    render(){
        return (
            <Container maxWidth="0" disableGutters>
                <Box display="flex" justifyContent="center" sx={{ bgcolor: '#cfe8fc', height: '200vh' }}>
                    <Stack spacing={15} divider={<Divider orientation="horizontal" flexItem />}>
                        <Profile lang={this.props.lang}></Profile>
                        <Blog lang={this.props.lang}></Blog>
                        <Projects lang={this.props.lang}></Projects>
                    </Stack>
                </Box>
            </Container>
        )
    }
}

export default Body;