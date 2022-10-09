import React from 'react';
import { 
    Box,
    Stack,
    Typography,
}from '@mui/material';
import photo from "../Images/emirs.png";
import {texts, getText} from '../globals';
import $ from 'jquery';

function HTMLTagText(props){
    if(props.inline){
        return (
        <Stack style={{marginLeft: 50}} direction="row" alignItems="center" display="flex">
            <Typography style={{filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, .6))"}} variant="h6" color="#808080">
                {"<"+ (props.close?'/':'') +props.text+">"}
            </Typography>
            {props.children}
            <Typography style={{filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, .6))"}} variant="h6" color="#808080">
                {"</"+props.text+">"}
            </Typography>
        </Stack>
        )
    }
    else{
        return (
            <>
                <Typography style={{filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, .6))"}} variant="h5" color="#808080">
                    {"<"+ (props.close?'/':'') +props.text+">"}
                </Typography>
                {props.children}
                <Typography style={{filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, .6))"}} variant="h5" color="#808080">
                    {"</"+props.text+">"}
                </Typography>
            </>
            )
    }
}

class Profile extends React.Component {
    render(){
        return (
            <Stack
            name="profile"
            direction= 'column'
            justifyContent="center"
            alignItems="center"
            spacing={20}
            >
                <Stack
                direction= 'row'
                justifyContent="space-around"
                alignItems="stretch"
                spacing={2}
                sx={{margin: 0, paddingX: '50px', paddingTop: '50px', height: '80vh'}}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Stack spacing={2}>
                            <HTMLTagText text="Person">
                                <HTMLTagText text="Name" inline>
                                    <Typography style={{filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, .6))"}} variant="h2" color="white">
                                        Emir Soyalan
                                    </Typography>
                                </HTMLTagText>
                                <HTMLTagText text="Occupation" inline>
                                    <Typography style={{filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, .6))"}} variant="h4" color="#bfbfbf">
                                        {getText(texts.body.profile.occupation, this.props.lang)}
                                    </Typography>
                                    </HTMLTagText>
                                <HTMLTagText text="Interests" inline>
                                    <Typography style={{filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, .6))"}} variant="h5" color="#ababab">
                                        {getText(texts.body.profile.interests, this.props.lang)}
                                    </Typography>
                                </HTMLTagText>
                            </HTMLTagText>
                        </Stack>
                    </Box>
                    <Box>
                        <img
                        style={{
                            position: 'relative',
                            opacity: 0.7,
                            maxWidth: '100%',
                            maxHeight: '100%',
                            filter: "drop-shadow(0px 0px 15px rgba(255, 255, 255, .7))",
                            zIndex: 1,
                        }}
                        src={photo} alt="emir"
                        />
                        <div className="fade">
                        </div>
                    </Box>
                </Stack>
                <Typography style={{paddingTop: 50, filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, .6))"}} variant="h2" color="white">
                    {getText(texts.body.profile.technologies, this.props.lang)}
                </Typography>
                <br></br><br></br>
                <RotatingCarousel></RotatingCarousel>
            </Stack>
        )
    }
}


$(document).ready(function () {
    var carousel = $(".carousel");
    var currdeg  = 0;

    var timer = setInterval(rotate, 100);
    function rotate(e){
        currdeg = currdeg + 1;
        carousel.css({
        "transform": "rotateY("+currdeg+"deg)"
        });
    }

    $(".item").mouseover(()=>{
        clearTimeout(timer);
    })
    $(".item").mouseleave(()=>{
        timer = setInterval(rotate, 100);
    })
});

function RotatingCarousel(props){
    return(
        <div className="container">
            <div className="carousel">
                <RotatingCarouselCard
                    name="Python"
                    class="a"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" 
                />
                <RotatingCarouselCard
                    name="TensorFlow"
                    class="b"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/TensorFlow_logo.svg/2560px-TensorFlow_logo.svg.png" 
                />
                <RotatingCarouselCard
                    name="Flask"
                    class="c"
                    src="https://miro.medium.com/max/800/0*3ym_K6CR2DY2JkfV.png" 
                />
                <RotatingCarouselCard
                    name="React"
                    class="d"
                    src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1" 
                />
                <RotatingCarouselCard
                    name="Numpy"
                    class="e"
                    src="https://user-images.githubusercontent.com/67586773/105040771-43887300-5a88-11eb-9f01-bee100b9ef22.png" 
                />
                <RotatingCarouselCard
                    name="Keras"
                    class="f"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/1200px-Keras_logo.svg.png" 
                />
                <RotatingCarouselCard
                    name="MongoDB"
                    class="g"
                    src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png" 
                />
                <RotatingCarouselCard
                    name="Pandas"
                    class="h"
                    src="https://pandas.pydata.org/static/img/pandas_secondary.svg" 
                />
            </div>  
        </div>
    )
}

function RotatingCarouselCard(props){
    return (
        <Stack className={"item "+props.class}>
            <div>{props.name}</div>
            <img alt={props.name} src={props.src}></img>
        </Stack>
    )
}

export default Profile;