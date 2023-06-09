import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import {
    Dialog,
    DialogTitle,
    IconButton,
    DialogContent,
    Button,
} from "@mui/material";


const ModalBlock = ({
    title,
    onClose,
    visible = false,
    children,
}) => {
    if (!visible) {
        return null;
    }

    return (
        <Dialog open={visible} onClose={onClose} aria-label="position">
            <DialogTitle id="form-dialog-title">
                <IconButton
                    onClick={onClose}
                    color="secondary"
                    aria-label="close"
                >
                    <CloseIcon style={{ fontSize: 26 }} color="secondary" />
                </IconButton>
                {title}
            </DialogTitle>

            <DialogContent>
                {children}
            </DialogContent>
        </Dialog >
    )
}
export default ModalBlock