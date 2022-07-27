import React from 'react';
import { Stack } from '@mui/material';
import { Alert } from '@mui/material';

const ErrorMessage = () => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="warning">Error. Emails do not match!</Alert>
        </Stack>)
}

export default ErrorMessage;