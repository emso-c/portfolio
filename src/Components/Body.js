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
                <Box display="flex" justifyContent="center" style={{background: "linear-gradient(90deg, rgba(9,9,9,1) 0%, rgba(41,41,41,1) 81%, rgba(51,51,51,1) 92%, rgba(62,62,62,1) 100%)", boxShadow: "0px -30px 30px 8px rgba(0,0,0,0.9) inset"}} >
                    <Stack width="100%" spacing={20} divider={<Divider orientation="horizontal" flexItem />}>
                        <Profile lang={this.props.lang}></Profile>
                        <Projects lang={this.props.lang}></Projects>
                        <Blog lang={this.props.lang}></Blog>
                    </Stack>
                </Box>
            </Container>
        )
    }
}

export default Body;