import React from 'react';
import Navbar from './Navbar';


class Header extends React.Component {
    render(){
        return  (
            <Navbar lang={this.props.lang} swapLangHandler={this.props.swapLangHandler}></Navbar>
        )
    }
}

export default Header;