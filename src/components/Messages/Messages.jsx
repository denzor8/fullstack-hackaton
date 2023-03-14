import React from 'react';
import './Messages.css'

const Messages = () => {
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
    </div>
  )
}

export default Messages