import React, { useContext, useEffect, useState } from 'react';
import { Typography,Button,FormControl,FormGroup,TextField,Theme,} from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import { ModalBlock } from '../../components/ModalBlock';
import PeopleIcon from '@mui/icons-material/People';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/authContext';


function SignIn() {
  const navigate = useNavigate();
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

  const { handleRegister, setError } = useContext(authContext);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');


  useEffect(() => {
    setError(false);
  }, []);

  function handleSave() {
    if(!email.trim() || !password.trim() || !passwordConfirm.trim() || !email.trim()) {
      alert('Some inputs are empty!');
      return;
    };
    let formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password_confirm', passwordConfirm);
    handleRegister(formData);
    handleCloseModal()
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
              sx={{marginBottom: '2px'}}
              // component="fieldset"
              fullWidth >
              <FormGroup aria-label="position" row>
                <TextField
                  sx={{marginBottom: '5px'}}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                  
                />
                <TextField
                  sx={{marginBottom: '18px'}}
                  autoFocus
                  id="password"
                  label="Password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                  
                />
                <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth >Войти</Button>
                <br/>
                <br/>
              </FormGroup>
            </FormControl>
          </ModalBlock>

          <ModalBlock visible={visibleModal === 'signUp'} onClose={handleCloseModal} title="Создайте учетную запись">
            <FormControl
              sx={{marginBottom: '2px'}}
              component="fieldset"
              fullWidth >
              <FormGroup aria-label="position" row>
                <TextField
                  sx={{marginBottom: '5px'}}
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
                  sx={{marginBottom: '5px'}}
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
                  sx={{marginBottom: '5px'}}
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
                  sx={{marginBottom: '5px'}}
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
