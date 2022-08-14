import React from 'react';
import { Stack, Typography, Link, IconButton } from '@mui/material';
import { texts, getText } from '../globals';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GitHubIcon from '@mui/icons-material/GitHub';


class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isHovering: false,
            textToShow: '​',
        }
    }

    handleMouseHover = (e, textToShow) => {
        this.setState({
            isHovering: !this.state.isHovering,
            textToShow: textToShow
        })
    }
    render(){
        return (
            <Stack spacing={10}>
                <Typography style={{margin:"auto", paddingY: 50, filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, .6))"}} variant="h2" color="white">
                    {getText(texts.body.contact.title, this.props.lang)}
                </Typography>
                <Stack direction="row" spacing={10} display="flex" justifyContent="center" alignItems="center">
                    <Link
                    underline="none"
                    to='javascript:void(0)'
                    href={`mailto:${texts.body.contact.email}`}
                    onMouseEnter={(e) => this.handleMouseHover(e, texts.body.contact.email)}
                    onMouseLeave={(e) => this.handleMouseHover(e, '​')}
                    >
                        <IconButton
                        size="large"
                        color="inherit"
                        >
                            <EmailIcon style={{color:'white', fontSize:80}} />
                        </IconButton>
                    </Link>
                    <Link
                    underline="none"
                    to='javascript:void(0)'
                    href={`tel:${texts.body.contact.phone}`}
                    onMouseEnter={(e) => this.handleMouseHover(e, texts.body.contact.phone)}
                    onMouseLeave={(e) => this.handleMouseHover(e, '​')}
                    >
                        <IconButton
                        size="large"
                        color="inherit"
                        >
                            <LocalPhoneIcon style={{color:'white', fontSize:80}} />
                        </IconButton>
                    </Link>
                    <Link
                    underline="none"
                    to='javascript:void(0)'
                    target="_blank"
                    href='https://www.google.com/maps/place/%C4%B0stanbul/'
                    onMouseEnter={(e) => this.handleMouseHover(e, texts.body.contact.address)}
                    onMouseLeave={(e) => this.handleMouseHover(e, '​')}
                    >
                        <IconButton
                        size="large"
                        color="inherit"
                        >
                            <LocationOnIcon style={{color:'white', fontSize:80}} />
                        </IconButton>
                    </Link>
                    <Link
                    underline="none"
                    to='javascript:void(0)'
                    target="_blank"
                    href='https://github.com/emso-c'
                    onMouseEnter={(e) => this.handleMouseHover(e, texts.body.contact.github)}
                    onMouseLeave={(e) => this.handleMouseHover(e, '​')}
                    >
                        <IconButton
                        size="large"
                        color="inherit"
                        >
                            <GitHubIcon style={{color:'white', fontSize:80}} />
                        </IconButton>
                    </Link>
                </Stack>
                <Typography
                style={{margin:"auto", paddingTop: 50, filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, .6))"}}
                variant="h4"
                color="white"
                className={this.state.isHovering?'fadeIn':'fadeOut'}
                >
                    {this.state.textToShow}
                </Typography>
            </Stack>
        )
    }
}

export default Contact;