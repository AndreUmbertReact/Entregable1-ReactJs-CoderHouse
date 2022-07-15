import * as React from 'react';
import Alert from '@mui/material/Stack';
import Stack from '@mui/material/Alert';



const OrderMessage = ({ orderId }) => {
    return (
        <Stack sx={{ width: '97%', padding: 0, margin: "1.5%" }} spacing={2}>
            <Alert severity="success"> Gracias por su compra! Tu id de transaccion es: {orderId}
            </Alert>
        </Stack>
    );
};



export default OrderMessage;