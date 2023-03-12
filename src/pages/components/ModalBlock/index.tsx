import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';

import { useStylesSignIn } from '../../pages/SignIn';

interface ModalProps {
    dialogTitle: string;
    title: string;
    children: React.ReactNode;
    classes?: ReturnType<typeof useStylesSignIn>;
    visible?: boolean;
    onClose: () => void;
}

export const ModalBlock: React.FC<ModalProps> = ({dialogTitle, title, children, visible = false, onClose }: ModalProps): React.ReactElement => {
    return (
        <Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog-title">
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