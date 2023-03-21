import React, { useContext, useEffect, useState } from 'react';
import { Typography, Button, FormControl, FormGroup, TextField, Theme, } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import './SignIn.scss';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/authContext';
import ModalBlock from '../../components/ModalBlock/ModalBlock';


function SignIn() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
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

  const { handleRegister, handleLogin, setError } = useContext(authContext);
  const [emailLog, setEmailLog] = useState('');
  const [passwordLog, setPasswordLog] = useState('');

  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [data, setData] = useState([]);


  useEffect(() => {
    setError(false);
  }, []);

  function handleSave() {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim() || !email.trim()) {
      alert('Some inputs are empty!');
      return;
    };
    let obj = {
      'email': email,
      'login': name,
      'password': password,
      'password2': passwordConfirm,
      'date_of_birth': data
    }
    handleRegister(obj, name);
    handleCloseModal()
    handleClickOpenSignIn()
  };

  // login 
  function handleAuth() {
    let obj = {
      'email': emailLog,
      'password': passwordLog
    }
    handleLogin(obj, emailLog, navigate);
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
                variant="h6"
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
            style={{
              marginBottom: 20,
              borderRadius: 20,
            }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Зарегистрироваться
          </Button>

          <Button
            onClick={handleClickOpenSignIn}
            style={{
              borderRadius: 20,
            }}
            variant="outlined"
            color="primary"
            fullWidth
          >
            Войти
          </Button>

          <ModalBlock visible={visibleModal === 'signIn'} onClose={handleCloseModal} title="Войти в аккаунт">
            <FormControl
              sx={{ marginBottom: '2px' }}
              // component="fieldset"
              fullWidth >
              <FormGroup aria-label="position" row>
                <TextField
                  sx={{ marginBottom: '5px' }}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => setEmailLog(e.target.value)}
                  variant="filled"
                  type="email"
                  fullWidth

                />
                <TextField
                  sx={{ marginBottom: '18px' }}
                  autoFocus
                  id="password"
                  label="Password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => setPasswordLog(e.target.value)}
                  variant="filled"
                  type="password"
                  fullWidth

                />
                <Button onClick={handleAuth} variant="contained" color="primary" fullWidth >Войти</Button>
                <br />
                <br />
              </FormGroup>
            </FormControl>
          </ModalBlock>

          <ModalBlock visible={visibleModal === 'signUp'} onClose={handleCloseModal} title="Создайте учетную запись">
            <FormControl
              sx={{ marginBottom: '2px' }}
              component="fieldset"
              fullWidth >
              <FormGroup aria-label="position" row>
                <TextField
                  sx={{ marginBottom: '5px' }}
                  autoFocus
                  id="name"
                  label="Имя"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="name"
                  fullWidth
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  sx={{ marginBottom: '5px' }}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  sx={{ marginBottom: '5px' }}
                  autoFocus
                  id="password"
                  label="Password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                  sx={{ marginBottom: '5px' }}
                  autoFocus
                  id="con-password"
                  label="Confirm Password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
                <TextField
                  sx={{ marginBottom: '5px' }}
                  autoFocus
                  label="Data"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="date"
                  id="start"
                  name="trip-start"
                  // value="2018-07-22"
                  min="2023-01-01"
                  max="2023-12-31"
                  fullWidth
                  onChange={(e) => setData(e.target.value)}
                />
                <Button onClick={handleSave} variant="contained" color="primary" fullWidth >Далее</Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>


        </div>
      </section>
    </div>
  );
}

export default SignIn;
