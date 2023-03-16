import React, { useState } from 'react';
import './Messages.css'

const Messages = () => {
  const [message, setMessage] = useState()
  return (
    <div className="message">
      <div className='message_user'>

          <div className='flex-mes-user' >
            <h1 className="mes_user_title">
              Messages
            </h1>
            <div>
               <img style={{width: '20px', height: '20px', paddingRight: '1rem'}} src="../../../Image/settings.png" alt="" />
               <img style={{width: '20px', height: '20px'}} src="../../../Image/mail.png" alt="" />
            </div>
          </div>

          <input type="search"  className='mes_search' placeholder='Search Direct Messages' />

          <div className='mes_acc'>
            <div>
              <img style={{width: '49px', height: '49px'}} src="../../../image/user_icon-1.png" alt="" className="card_user_icon" />
            </div>

            <div style={{paddingLeft: '10px'}} >
              <div style={{display: 'flex', alignItems: 'center'}} >
                <h4 style={{margin: 0, color: 'white', fontSize: '15px', fontWeight: '700px'}} >Devon Lane</h4>
                <span style={{paddingLeft: '5px', color: '#8899A6'}} >@johndue 23</span>
              </div>

              <h4 style={{margin: 0, color: '#8899A6', fontSize: '14px'}} >Hello, Bro!</h4>

            </div>
           </div>
           
        </div>
       

       <div className="mess_chat">
          <div style={{width: '600px', margin: '0 auto', display: 'flex', justifyContent: 'center', textAlign: 'center', paddingTop: '2rem'}}>
            <div>
              <img style={{width: '59px', height: '59px'}} src="../../../image/user_icon-1.png" alt="" />
              <h4 style={{color: 'white', fontSize: '15px', fontWeight: '700px'}} >Devon Lane</h4>
              <span style={{paddingLeft: '5px', color: '#8899A6'}} >@johndue 23</span>
              <h1 style={{fontSize: '18px', paddingTop: '1rem', width: '500px', color: 'white'}} >Segurança Pública para Virar o Jogo,A Defesa do Espaço Cívico</h1>
              <h5 style={{paddingTop: '1rem', color: '#8899A6' }} >Joined December 2016 66.8K Followers</h5>
              <h5 style={{color: '#8899A6' }} >Not followed by anyone you're following </h5>

              <div style={{marginTop: '3rem'}} className='small-scretch-bottom'></div>

              <div style={{display: 'flex', justifyContent: 'flex-end', paddingTop: '5rem'}} >
                <div className='mess-go' >
                  <div>
                      <h1 className='go_title' >{message}</h1>
                       <h5 className='go_link' >Delete</h5>
                  </div>
                </div>
              </div>

              <div className='mess_content'>
                   <div style={{marginTop: '3rem'}} className='small-scretch-bottom'></div>
                   <input type="search" onChange={(e) => setMessage(...message, e.target.value)}  className='mess_cont_search' placeholder='Start a new message' />
              </div>

            </div>
          </div>
       </div>


    </div>

  )
}

export default Messages