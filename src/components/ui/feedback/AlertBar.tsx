import { Alert, Snackbar } from '@mui/material';
import { useState } from 'react';

type AlertBarProps = {
    errorLabel: string
}


export const AlertBar = ({errorLabel}: AlertBarProps) => {

    const [open, setOpen] = useState(true);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} sx={{ width: '100%' }} severity="error">{errorLabel}</Alert>
        </Snackbar>
    )
}
