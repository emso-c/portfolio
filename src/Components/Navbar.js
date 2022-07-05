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
    constructor(props) {
        super(props);
        this.state = {
            lang: props.lang
        }
        this.swapLangHandler = props.swapLangHandler;
    }
    componentWillReceiveProps(props){
        this.setState({lang: props.lang})
    }

    render(){
        return (
            <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            style={{height:100, background: "linear-gradient(90deg, rgba(2,0,36,1) 11%, rgba(32,54,128,1) 68%, rgba(130,156,208,1) 100%)"}}
            >
                <Grid 
                container
                position="fixed"
                xs={7}
                justifyContent="space-between"
                style = {{minWidth: 700, paddingInline:30, background:''}}
                >
                    <MenuButton onClick={()=>{window.location.reload(false);}}>
                        {getText(texts.header.navbar.profile, this.state.lang)}
                    </MenuButton>
                    <MenuButton>
                        {getText(texts.header.navbar.projects, this.state.lang)}
                    </MenuButton>
                    <MenuButton>
                        {getText(texts.header.navbar.blog, this.state.lang)}
                    </MenuButton>
                    <MenuButton>
                        {getText(texts.header.navbar.contact, this.state.lang)}
                    </MenuButton>
                    <MenuButton>
                        {getText(texts.header.navbar.support, this.state.lang)}
                    </MenuButton>
                </Grid>
                <Grid container xs></Grid>
                <Grid 
                container
                xs={1}
                justifyContent="space-between"
                style = {{paddingInline:40, color:'white', fontSize: 26, background:''}}
                >
                    <IconButton
                    size="large"
                    color="inherit"
                    onClick={()=>{this.swapLangHandler()}}
                    >
                        <LanguageIcon style={{fontSize:30}} />
                    </IconButton>
                    </Grid>
            </Grid>
            );
        }
    }

export default Navbar;