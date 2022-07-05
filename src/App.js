import React from 'react';
import { 
    Button,
    Grid,
    IconButton,
    Typography
}from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import MediumCarousel from './Components/MediumCarousel';
import Cookies from 'js-cookie';
import {texts, getText} from './globals.js';

class Header extends React.Component {
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
        return  (
            <Navbar lang={this.state.lang} swapLangHandler={this.swapLangHandler}></Navbar>
        )
    }
}

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

class Body extends React.Component {
    render(){
        return (
            <div>
                <Home></Home>
                <Blog></Blog>
                <Projects></Projects>
            </div>
        )
    }
}

class Home extends React.Component {
    render(){
        return (
            <div>
            </div>
        )
    }
}
class Blog extends React.Component {
    render(){
        return (
            <div>

            </div>
        )
    }
}
class Projects extends React.Component {
    render(){
        return (
            <div>
            </div>
        )
    }
}

class Footer extends React.Component {
    render(){
        return (
            <div>

            </div>
        )
    }
}



class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lang: (Cookies.get('lang') || 'en'),
        }
        this.swapLangHandler = this.handleSwapLang.bind(this)
        console.log('construct', this.state.lang, Cookies.get('lang'));
    }

    // right now only supports Turkish and English, so it's only a binary swap
    // TODO: the function has to be rewritten should more languages are supported  
    handleSwapLang(){
        var newLang = this.state.lang === 'tr' ? 'en' : 'tr'
        this.setState({
            lang: newLang
        })
        Cookies.set('lang', newLang, { expires: 30 })
    }

    render(){
        return (
            <>
                <Header lang={this.state.lang} swapLangHandler={this.swapLangHandler}></Header>
                <Body></Body>
                <MediumCarousel lang={this.state.lang}></MediumCarousel>
                <Footer></Footer>
            </>
        )   
    }
}

export default App;
