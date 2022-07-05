import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: props.lang
        }
    }
    componentWillReceiveProps(props){
        this.setState({lang: props.lang})
    }
    
    render(){
        return (
            <>
            </>
        )
    }
}

export default Footer;