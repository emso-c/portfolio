import React from 'react';
import MediumCarousel from './MediumCarousel';

class Blog extends React.Component {
    render(){
        return (
            <MediumCarousel lang={this.props.lang}></MediumCarousel>
        )
    }
}

export default Blog;