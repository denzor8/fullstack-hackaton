import React, { useState } from 'react';

import { Button, Typography } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
// import { ModalBlock } from '../pages/components/ModalBlock';
import TextField from '@mui/material/TextField';
import PeopleIcon from '@mui/icons-material/People';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { DialogActions ,DialogContent} from '@mui/material';


import './SignIn.css'

function SignIn() {

    const [visibleModal, setVisibleModal] = useState('');

    const handleClickOpenSignIn = () => {
        setVisibleModal('signIn');
    };

    const handleClickOpenSignUp = () => {
        setVisibleModal('signUp');
    };

    const handleCloseModal = () => {
        setVisibleModal('');
    };

    return (
        <div className="wrapper">
            <section className="aboutSide">
                <div className="aboutSideWrapper">
                    <ul>
                        <li>
                            <Typography
                                variant="h5"
                                className="aboutSideListItem">
                                <SearchIcon
                                    className="aboutSideListItemIcon"
                                />
                                Читайте о том, что вам интересно.
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                variant="h5"
                                className="aboutSideListItem">
                                <PeopleIcon
                                    className="aboutSideListItemIcon"
                                />
                                Узнайте, о чем говорят в мире.
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                variant="h5"
                                className="aboutSideListItem">
                                <ModeCommentIcon
                                    className="aboutSideListItemIcon"
                                />
                                Присоединяйтесь к общению.
                            </Typography>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="loginSide">
                <div className="loginSideWrapper">
                    <TwitterIcon
                        color="primary"
                        className="loginSideIcon"
                    />
                    <Typography variant="h2" className="loginSideTitle">
                        В курсе происходящего
                    </Typography>
                    <Typography>
                        {' '}
                        <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>{' '}
                    </Typography>{' '}
                    <br />
                    <Button
                        onClick={handleClickOpenSignUp}
                        style={{ marginBottom: 20 }}
                        variant="contained"
                        color="primary"
                        fullWidth>
                        Зарегистрироваться
                    </Button>
                    <Button
                        onClick={handleClickOpenSignIn}
                        variant="outlined"
                        color="primary"
                        fullWidth>
                        Войти
                    </Button>
                    {/* <ModalBlock
                        visible={visibleModal === 'signUp'}
                        onClose={handleCloseModal}
                        // classes={classes}
                        dialogTitle="Зарегистрироваться"
                        title="Создайте учетную запись">
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Имя"
                                type="text"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                id="email"
                                label="Почта"
                                type="email"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                id="password"
                                label="Пароль"
                                type="password"
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseModal} color="primary">
                                Отмена
                            </Button>
                            <Button onClick={handleCloseModal} color="primary">
                                Далее
                            </Button>
                        </DialogActions>
                    </ModalBlock> */}
                    {/* <ModalBlock
                        visible={visibleModal === 'signIn'}
                        onClose={handleCloseModal}
                        // classes={classes}
                        dialogTitle="Войти"
                        title="Введите ваши данные">
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="email"
                                label="Почта"
                                type="email"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                id="password"
                                label="Пароль"
                                type="password"
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseModal} color="primary">
                                Отмена
                            </Button>
                            <Button onClick={handleCloseModal} color="primary">
                                Войти
                            </Button>
                        </DialogActions>
                    </ModalBlock> */}
                </div>
            </section>
        </div>
    );
}

export default SignIn;
