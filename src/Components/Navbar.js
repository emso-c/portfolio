import React from 'react';
import { 
    Button,
    Grid,
    IconButton,
    Typography
}from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import {texts, getText} from '../globals.js';
import { Link, animateScroll as scroll } from "react-scroll";

function MenuButton(props){
    return <>
        <Link 
        to={props.to?props.to:''}
        smooth
        offset={-70}
        duration={700}
        delay={100}
        >
            <Button 
            onClick={()=>{
            if(props.onClick)
                props.onClick();
            return
            }}>
                <Typography style={{color:'white', fontSize: 25}} variant="body2" color="text.secondary">
                    {props.children}
                </Typography>
            </Button>
        </Link>
    </>
}

class Navbar extends React.Component {
    render(){
        return (
            <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            height='80px'
            zIndex={999}
            style={{position: 'fixed', background: "rgba(10,10,10, .95)", boxShadow: "0px 20px -1px 1px rgba(0,0,0,0.9) inset"}}
            >
                <Grid 
                container
                xs={7}
                justifyContent="space-around"
                style = {{minWidth: 700, paddingInline:30}}
                >
                    <MenuButton to="profile" /* onClick={()=>{window.location.reload(false);}} */>
                        {getText(texts.header.navbar.profile, this.props.lang)}
                    </MenuButton>
                    <MenuButton to="projects">
                        {getText(texts.header.navbar.projects, this.props.lang)}
                    </MenuButton>
                    <MenuButton to="blog">
                        {getText(texts.header.navbar.blog, this.props.lang)}
                    </MenuButton>
                    <MenuButton to="contact">
                        {getText(texts.header.navbar.contact, this.props.lang)}
                    </MenuButton>
                </Grid>
                <Grid container xs></Grid>
                <Grid 
                container
                xs={1}
                justifyContent="space-between"
                style = {{paddingInline:40, color:'white', fontSize: 26,}}
                >
                    <IconButton
                    size="large"
                    color="inherit"
                    onClick={()=>{this.props.swapLangHandler()}}
                    >
                        <LanguageIcon style={{fontSize:30}} />
                    </IconButton>
                </Grid>
            </Grid>
            );
        }
    }

export default Navbar;