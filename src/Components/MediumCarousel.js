import React from 'react';
import { Button, Card, Grid, Typography, CardMedia, CardContent, CardActions, CardActionArea } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import {mediumFeedJSONURL, texts, getText} from '../globals.js';


class MediumCarousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
        }
    }
    componentDidMount(){
        this.fetchMediumFeed()
            .then(
                (data)=>{
                    if(data.status === 'ok'){
                        let arr = Array(10).fill(null); // only 10 articles can be fetched at most
                        data.items.map((item, i)=>{
                            arr[i] = item;
                            return null;
                        })
                        arr.pop();
                        this.setState({items: arr});
                    }
                    else if (data.status === 'error'){
                        console.error(data.message)
                        this.setState({items: Array(9).fill(null)})
                    }
                }
            )
        
    }
    fetchMediumFeed = async () => {
        const response = await fetch(mediumFeedJSONURL);
        const data = await response.json();
        return data;
    }
    render(){
        const items = this.state.items;
        return (
            <Carousel
            sx= {{
                width: '75%',
                margin: 'auto',
                paddingY: '70px',
            }}
            height={400}
            animation={'slide'}
            interval={6000}
            duration={700}
            navButtonsAlwaysVisible={true}
            >
                {
                    items.slice(0, 3).map((_, i) => {
                        return <MArticleCardGroup lang={this.props.lang} key={i} keyStart={i} items={[items[i], items[i+3], items[i+6]]}></MArticleCardGroup>
                    })
                }
            </Carousel>
        )
    }
}

function MArticleCardGroup(props){
    return (
        <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        >
            {
                props.items.map((item, i) => {
                    if(item){
                        return <MArticleCard lang={props.lang} key={i+props.keyStart} item={item} />
                    }
                    return null;
                })
            }
        </Grid>
    )
}

function MArticleCard(props){
    return (
        <Card sx={{ width: 290}}>
            <CardActionArea onClick={()=>{window.open(props.item.link, '_blank');}}>
                <CardMedia
                    component="img"
                    height="150"
                    image={props.item.thumbnail}
                    alt="thumbnail"
                />
                <CardContent>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography variant="body2" color="text.secondary">
                            {props.item.author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.item.pubDate.split(" ")[0]}
                        </Typography>
                    </Grid>
                    <Typography sx={{paddingTop: 0.5, height: 120, overflow: 'hidden'}} variant="h6" gutterBottom component="div">
                        <div>
                            {props.item.title}
                        </div>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Button onClick={()=>{window.open(props.item.link, '_blank');}} size="small" color="primary">
                    {getText(texts.body.blog.readMore, props.lang)}
                </Button>
            </CardActions>
        </Card>
    )
}

export default MediumCarousel