import React from 'react';
import { Typography } from '@mui/material';

class Footer extends React.Component {
    render(){
        return (
            <Typography style={{background: 'black', color: 'white', margin: 0, paddingBottom: 10, display:'flex', justifyContent: 'center'}}>
                <small>Copyright &copy; Emir Soyalan 2022 | All rights reserved.</small>
            </Typography>
        )
    }
}

export default Footer;