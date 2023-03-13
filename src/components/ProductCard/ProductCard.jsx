import { display } from '@mui/system';
import React from 'react';
import './ProductCard.css'

const ProductCard = () => {
  return (
    <div className='card' >
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} >
          <h3 className='card_title'>Home</h3>
          <img src="../../../image/Group.png" alt="" className="card_icon" />
        </div>

        <div className='small-scretch'></div>
        <div className="card_user">
          <div style={{display: 'flex', alignItems: 'center'}} >
              <img src="../../../image/user_icon.png" alt="" className="card_user_icon" />
              <input className='card_user_inp' placeholder='What’s happening?' type="text" />
          </div>

          <div style={{paddingLeft: '3rem', paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} >
            <div>
              <img className='card-sholder' src="../../../image/part-1.png" alt="" />
              <img className='card-sholder' src="../../../image/part-2.png" alt="" />
              <img className='card-sholder' src="../../../image/part-3.png" alt="" />
              <img className='card-sholder' src="../../../image/part-4.png" alt="" />
              <img className='card-sholder' src="../../../image/part-5.png" alt="" />
            </div>

            <button className='card_user_btn'>Tweet</button>
          </div>
        </div>

        <div className='small-scretch'></div>
        <div className='strech' ></div>
        <div className='small-scretch-bottom'></div>


        <div className="card_post">
           <div style={{display: 'flex', alignItems: 'center'}} >
            <div>
              <img src="../../../image/user_icon-2.png" alt="" className="card_user_icon" />
            </div>

            <div style={{paddingLeft: '10px'}} >
              <div style={{display: 'flex', alignItems: 'center'}} >
                <h4 style={{margin: 0, color: 'white', fontSize: '15px', fontWeight: '700px'}} >Devon Lane</h4>
                <span style={{paddingLeft: '5px', color: '#8899A6'}} >@johndue 23</span>
              </div>

              <h4 style={{margin: 0, color: 'white', fontSize: '15px', fontWeight: '500px'}} >Tom is in a big hurry.</h4>

            </div>
           </div>

          <img style={{paddingLeft: '3.5rem'}} src="../../../image/post.png" alt="" />
          <div className="card-post_images">
            <div style={{display: 'flex', alignItems: 'center'}} >
              <span className='card-post_span' >61</span>
              <img style={{paddingLeft: '10px'}} src="../../../image/post_icon-1.png" alt="" /> 
            </div>
            <div style={{display: 'flex', alignItems: 'center'}} >
              <span className='card-post_span' >61</span>
              <img style={{paddingLeft: '10px'}} src="../../../image/post_icon-2.png" alt="" /> 
            </div>
            <div style={{display: 'flex', alignItems: 'center'}} >
              <span className='card-post_span_like' >6.2K</span>
              <img style={{paddingLeft: '10px'}} src="../../../image/post_icon-3.png" alt="" /> 
            </div>
            <div style={{display: 'flex', alignItems: 'center'}} >
              <span className='card-post_span' >61</span>
              <img style={{paddingLeft: '10px'}} src="../../../image/post_icon-4.png" alt="" /> 
            </div>
          </div>
            <h1 style={{paddingLeft: '3.6rem', color: '#1DA1F2', fontSize: '13px'}} >Show this trend</h1>
            <div className='small-scretch-bottom'></div>
        </div>

        <div className="card_post">
           <div style={{display: 'flex', alignItems: 'center'}} >
            <div>
              <img src="../../../image/user_icon-1.png" alt="" className="card_user_icon" />
            </div>

            <div style={{paddingLeft: '10px'}} >
              <div style={{display: 'flex', alignItems: 'center'}} >
                <h4 style={{margin: 0, color: 'white', fontSize: '15px', fontWeight: '700px'}} >Devon Lane</h4>
                <span style={{paddingLeft: '5px', color: '#8899A6'}} >@johndue 23</span>
              </div>

              <h4 style={{margin: 0, color: 'white', fontSize: '15px', fontWeight: '500px'}} >Tom is in a big hurry.</h4>

            </div>
           </div>

          <img style={{paddingLeft: '3.5rem'}} src="../../../image/Container.png" alt="" />
          <div className="card-post_images">
            <div style={{display: 'flex', alignItems: 'center'}} >
              <span className='card-post_span' >61</span>
              <img style={{paddingLeft: '10px'}} src="../../../image/post_icon-1.png" alt="" /> 
            </div>
            <div style={{display: 'flex', alignItems: 'center'}} >
              <span className='card-post_span' >61</span>
              <img style={{paddingLeft: '10px'}} src="../../../image/post_icon-2.png" alt="" /> 
            </div>
            <div style={{display: 'flex', alignItems: 'center'}} >
              <span className='card-post_span_like' >6.2K</span>
              <img style={{paddingLeft: '10px'}} src="../../../image/post_icon-3.png" alt="" /> 
            </div>
            <div style={{display: 'flex', alignItems: 'center'}} >
              <span className='card-post_span' >61</span>
              <img style={{paddingLeft: '10px'}} src="../../../image/post_icon-4.png" alt="" /> 
            </div>
          </div>
            <h1 style={{paddingLeft: '3.6rem', color: '#1DA1F2', fontSize: '13px'}} >Show this trend</h1>
            <div className='small-scretch-bottom'></div>
        </div>

    </div>
  )
}

export default ProductCard