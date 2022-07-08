import React from 'react';
import { 
    Button,
    Grid,
    IconButton,
    Typography
}from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import {texts, getText} from '../globals.js';

function MenuButton(props){
    var style = {color:'white', fontSize: 25}
    var button = (
        <Button>
            <Typography style={style} variant="body2" color="text.secondary">
                {props.children}
            </Typography>
        </Button>
    )
    if (props.onClick){
        button = (
            <Button
            onClick={()=>{props.onClick()}}
            >
                <Typography style={style} variant="body2" color="text.secondary">
                    {props.children}
                </Typography>
            </Button>
        )
    }
    return button
}

class Navbar extends React.Component {
    render(){
        return (
            <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            style={{height:100, background: "rgba(10,10,10, .9)", boxShadow: "0px 20px -1px 1px rgba(0,0,0,0.9) inset"}}
            >
                <Grid 
                container
                xs={7}
                justifyContent="space-between"
                style = {{minWidth: 700, paddingInline:30, background:''}}
                >
                    <MenuButton onClick={()=>{window.location.reload(false);}}>
                        {getText(texts.header.navbar.profile, this.props.lang)}
                    </MenuButton>
                    <MenuButton>
                        {getText(texts.header.navbar.projects, this.props.lang)}
                    </MenuButton>
                    <MenuButton>
                        {getText(texts.header.navbar.blog, this.props.lang)}
                    </MenuButton>
                    <MenuButton>
                        {getText(texts.header.navbar.contact, this.props.lang)}
                    </MenuButton>
                    <MenuButton>
                        {getText(texts.header.navbar.support, this.props.lang)}
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