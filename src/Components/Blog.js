import React from 'react';
import MediumCarousel from './MediumCarousel';

class Blog extends React.Component {
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
            <MediumCarousel lang={this.state.lang}></MediumCarousel>
        )
    }
}

export default Blog;