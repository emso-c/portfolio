import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Cookies from 'js-cookie';
import axios from 'axios'


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
        this.swapLangHandler = this.handleSwapLang.bind(this)
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
                <Body lang={this.state.lang}></Body>
                <Footer></Footer>
            </>
        )   
    }
}


export default App;
