import React from 'react';
import Navbar from './Navbar';


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

export default Header;