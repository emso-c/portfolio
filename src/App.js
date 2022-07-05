import React from 'react';
import { Button } from '@mui/material';
import MediumCarousel from './Components/MediumCarousel';
import Cookies from 'js-cookie';

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
        this.state = {
            lang: (Cookies.get('lang') || 'en')
        }
        console.log('construct', this.state.lang, Cookies.get('lang'));
    }

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
