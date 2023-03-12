import React from 'react';
import { DialogContent ,Dialog,DialogTitle,DialogContentText } from '@mui/material';



export const ModalBlock = ({ dialogTitle, title, children, visible = false, onClose }) => {
    return (
        <Dialog open={visible} onClose={onClose} ariaLabelledBy="form-dialog-title">
            <DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {title}
                </DialogContentText>
            </DialogContent>
            {children}
        </Dialog>
    );
}