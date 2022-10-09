import React from 'react';
import { Box } from '@mui/material';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

class Donate extends React.Component {
    render(){
        return (
            <Box name="support" display="flex" justifyContent="center" width="500" height="100%">
                <PayPalScriptProvider options={{ "client-id": "Ab2wd6NwKEehloMrBf_inoY6cn9ZkOh2PmElpyUGnXPZsaoOGpb0BWq5VlI2eiaZdmw5GeSVvwDzNzcC" }}>
                    <PayPalButtons style={{ layout: "horizontal" }} />
                </PayPalScriptProvider>
            </Box>
        )
    }
}

export default Donate;