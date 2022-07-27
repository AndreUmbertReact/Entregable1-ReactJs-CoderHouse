import * as React from 'react';
import Alert from '@mui/material/Stack';
import Stack from '@mui/material/Alert';



const OrderMessage = ({ orderId }) => {
    return (
        <Stack sx={{ width: '97%', padding: 0, margin: "1.5%" }} spacing={2}>
            <Alert severity="success">Thanks for buy! Your transaction ID is: {orderId}
            </Alert>
        </Stack>
    );
};



export default OrderMessage;