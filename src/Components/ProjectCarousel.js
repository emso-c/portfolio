import React from 'react';
import { Chip, Button, Card, Grid, Typography, CardContent, CardActions, CardActionArea } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import {texts, getText} from '../globals.js';


class ProjectCarousel extends React.Component {
    render(){
        return (
            <Carousel
            sx= {{
                paddingX: '100px',
                paddingY: '50px',
            }}
            animation={'slide'}
            interval={6000}
            duration={700}
            height={350}
            navButtonsAlwaysVisible={true}
            >
                {
                    texts.body.projects.projects.map((project, i) => {
                        return <ProjectCard key={i} project={project}  lang={this.props.lang}></ProjectCard>
                    })
                }
            </Carousel>
        )
    }
}

function ProjectCard(props){
    const tags = getText(props.project.tags, props.lang);
    return (
        <Card sx={{
            color: 'rgba(232, 230, 227, 0.87)',
            boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
            backgroundImage: 'initial',
            backgroundColor: 'rgb(24, 26, 27)',
            marginX: '50px'
        }}>
            <CardActionArea onClick={()=>{window.open(props.project.link, '_blank');}}>
                <CardContent>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography variant="h6" gutterBottom component="div">
                            <div>
                                {props.project.name}
                            </div>
                        </Typography>
                        <Typography sx={{color: 'rgba(232, 230, 227, 0.87)'}} variant="body2" color="text.secondary">
                            {getText(props.project.date, props.lang)}
                        </Typography>
                    </Grid>
                    <Grid>
                        {
                            tags.map((tag, i) => {
                                return <Chip sx={{color: 'rgba(232, 230, 227, 0.87)'}} key={i} label={tag} />
                            })
                        }
                    </Grid><br></br>
                    <Typography sx={{color: 'rgba(232, 230, 227, 0.87)'}} variant="h5">
                        {getText(props.project.description, props.lang)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Button  onClick={()=>{window.open(props.project.link, '_blank');}} size="small" color="primary">
                    {getText(texts.body.blog.readMore, props.lang)}
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProjectCarousel