import React from 'react';
import { Button } from '@mui/material';
import MediumCarousel from './Components/MediumCarousel';
import Cookies from 'js-cookie';
import axios from 'axios'

class Header extends React.Component {
    render(){
        return  (
            <div>
                <Navbar></Navbar>
            </div>
        )
    }
}
class Navbar extends React.Component {
    render(){
        return (
            <div>

            </div>
        )
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
        var lang = 'en';
        if(Cookies.get('lang')){
            lang = Cookies.get('lang');
            this.state = {
                lang: lang,
            }
        }
        else{
            this.state = {
                lang: 'en',
            }
            this.getLangGeoInfo();
        }
    }

    getLangGeoInfo = () => {
        axios.get('https://ipapi.co/json/').then((response) => {
            console.log("lang:", (response.data.country_calling_code === '+90') ? 'tr' : 'en')
            this.setState({
                lang: (response.data.country_calling_code === '+90') ? 'tr' : 'en'
            })
        }).catch((error) => {
            console.error(error);
            return 'en'
        });
    };

    // right now only supports Turkish and English, so it's only a binary swap
    // TODO: the function has to be rewritten should more languages are supported  
    swapLang(){
        var newLang = this.state.lang === 'tr' ? 'en' : 'tr'
        this.setState({
            lang: newLang
        })
        Cookies.set('lang', newLang, { expires: 30 })
    }

    render(){
        return (
            <>
            <br></br>
                <Header></Header>
                <Body></Body>
                <MediumCarousel lang={this.state.lang}></MediumCarousel>
                <Button variant="outlined" onClick={()=>{this.swapLang()}}>Outlined</Button>
                <Footer></Footer>
            </>
        )   
    }
}

export default App;
