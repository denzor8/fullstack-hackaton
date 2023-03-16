import React, { useState, useEffect } from 'react';
import './Messages.scss'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Button, ListItemText, IconButton } from '@mui/material';
// icons
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import EmojiIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SendIcon from '@mui/icons-material/Send';
import EmojiPicker from 'emoji-picker-react';
import styles from "./styles/Chat.module.css";
import icon from './images/emoji.svg';

const Messages = () => {
  const [text, setText] = React.useState('');
  // messages and emoji 
  // const { search } = useLocation();
  // const navigate = useNavigate();
  const [params, setParams] = useState({ room: "", user: "" });
  const [state, setState] = useState([]);
  const [message, setMessage] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [users, setUsers] = useState(0);


  // useEffect(() => {
  //   socket.on("message", ({ data }) => {
  //     setState((_state) => [..._state, data]);
  //   });
  // }, []);
  const handleChange = ({ target: { value } }) => setMessage(value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message) return;

    // socket.emit("sendMessage", { message, params });

    setMessage("");
  };

  const onEmojiClick = ({ emoji }) => setMessage(`${message} ${emoji}`);
  return (
    <div className="message">
      <div className='message_user'>

        <div className='flex-mes-user' >
          <h1 className="mes_user_title">
            Messages
          </h1>
          <div>
            <img style={{ width: '20px', height: '20px', paddingRight: '1rem' }} src="../../../Image/settings.png" alt="" />
            <img style={{ width: '20px', height: '20px' }} src="../../../Image/mail.png" alt="" />
          </div>
        </div>

        <input type="search" className='mes_search' placeholder='Search Direct Messages' />

        <div className='mes_acc'>
          <div>
            <img style={{ width: '49px', height: '49px' }} src="../../../image/user_icon-1.png" alt="" className="card_user_icon" />
          </div>

          <div style={{ paddingLeft: '10px' }} >
            <div style={{ display: 'flex', alignItems: 'center' }} >
              <h4 style={{ margin: 0, color: 'white', fontSize: '15px', fontWeight: '700px' }} >Devon Lane</h4>
              <span style={{ paddingLeft: '5px', color: '#8899A6' }} >@johndue 23</span>
            </div>

            <h4 style={{ margin: 0, color: '#8899A6', fontSize: '14px' }} >Hello, Bro!</h4>

          </div>
        </div>

      </div>


      <div className="mess_chat">
        <div style={{ width: '600px', margin: '0 auto', display: 'flex', justifyContent: 'center', textAlign: 'center', paddingTop: '2rem' }}>
          <div className='chat__width'>
            <img style={{ width: '59px', height: '59px' }} src="../../../image/user_icon-1.png" alt="" />
            <h4 style={{ color: 'white', fontSize: '15px', fontWeight: '700px' }} >Devon Lane</h4>
            <span style={{ paddingLeft: '5px', color: '#8899A6' }} >@johndue 23</span>
            <h1 style={{ fontSize: '18px', paddingTop: '1rem', width: '500px', color: 'white' }} >Segurança Pública para Virar o Jogo,A Defesa do Espaço Cívico</h1>
            <h5 style={{ paddingTop: '1rem', color: '#8899A6' }} >Joined December 2016 66.8K Followers</h5>
            <h5 style={{ color: '#8899A6' }} >Not followed by anyone you're following </h5>

            <div style={{ marginTop: '3rem' }} className='small-scretch-bottom'></div>

            <div className='message__column'>
              <div className='message__send-sms' >
                <div className='mess-go' >
                  <div>
                    <h1 className='go_title' >Hello</h1>
                    <h5 className='go_link' >Delete</h5>
                  </div>
                </div>
              </div>
              <div className='message__send-sms' >
                <div className='mess-go' >
                  <div>
                    <h1 className='go_title' >Hello</h1>
                    <h5 className='go_link' >Delete</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className='mess_content'>
              <form className={styles.form} onSubmit={handleSubmit}>
                <IconButton color='primary' >
                  <label
                    className='file__input'
                    htmlFor="imageUpload"
                  >
                    <ImageOutlinedIcon />
                  </label>
                  <input
                    type="file"
                    id="imageUpload"
                    style={{ display: "none" }}
                  // onChange={handleImageChange}
                  />
                </IconButton>
                <div className={styles.input}>
                  <input
                    type="text"
                    name="message"
                    placeholder="What do you want to say?"
                    value={message}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className={styles.emoji}>
                  <IconButton sx={{ marginLeft: 5 }} color='primary' >
                    <EmojiIcon
                      onClick={() => setOpen(!isOpen)}
                      style={{ fontSize: 26, }} />
                  </IconButton>
                  {isOpen && (
                    <div className={styles.emojies}>
                      <EmojiPicker onEmojiClick={onEmojiClick} />
                    </div>
                  )}
                </div>
                <IconButton
                  onSubmit={handleSubmit}
                  sx={{ marginLeft: 5 }}
                  color='primary'
                  value='Send message'
                >
                  <SendIcon />
                </IconButton>
                <div className={styles.button}>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>

  )
}

export default Messages