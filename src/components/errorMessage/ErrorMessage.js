import React from 'react';
import { Stack } from '@mui/material';
import { Alert } from '@mui/material';

const ErrorMessage = () => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="warning">Error. Los emails no coinciden!</Alert>
        </Stack>)
}

export default ErrorMessage;