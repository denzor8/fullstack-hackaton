import React from 'react';
import './Search.css';

const Search = () => {
  return (
    <div className='search' >
        <input type="search" className='search-inp' placeholder='Search twitter' />

        <div className="search_hap">
            <div className='search_part-1' >
                <h1 className='search_title' >What’s happening</h1>
                <div className='small-scretch'></div>
                <div style={{paddingTop: '10px'}} >
                    <span className='search_span' >COVID 19</span>
                    <span style={{paddingLeft: '10px', color: '#8899A6',fontSize: '14px'}} >Last night</span>
                </div>
                <h1 className='search_text' >England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic</h1>
                <span className='search_span' >Trending with</span>
                <span><a style={{paddingLeft: '10px', color: '#1DA1F2', textDecoration: 'none', fontSize: '14px'}} href="">#covid19</a></span>
                <div className='small-scretch'></div>
            </div>

            <div className='search_part-1' >
                <div style={{paddingTop: '10px'}} >
                    <span className='search_span' >COVID 19</span>
                    <span style={{paddingLeft: '10px', color: '#8899A6',fontSize: '14px'}} >Last night</span>
                </div>
                <h1 className='search_text' >England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic</h1>
                <span className='search_span' >Trending with</span>
                <span><a style={{paddingLeft: '10px', color: '#1DA1F2', textDecoration: 'none', fontSize: '14px'}} href="">#covid19</a></span>
                <div className='small-scretch'></div>
            </div>

            <div className='search_part-1' >
                <div style={{paddingTop: '10px'}} >
                    <span className='search_span' >COVID 19</span>
                    <span style={{paddingLeft: '10px', color: '#8899A6',fontSize: '14px'}} >Last night</span>
                </div>
                <h1 className='search_text' >England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic</h1>
                <span className='search_span' >Trending with</span>
                <span><a style={{paddingLeft: '10px', color: '#1DA1F2', textDecoration: 'none', fontSize: '14px'}} href="">#covid19</a></span>
            </div>
        </div>

        <div className="search-follow">
            <h1 className='search_title' >Who to follow</h1>
            <div className='small-scretch'></div>

            <div style={{display: 'flex', alignItems: 'center', paddingLeft: '1rem', paddingTop: '10px'}} >
                <div>
                <img src="../../../image/user_icon-1.png" alt="" className="card_user_icon" />
                </div>

                <div style={{paddingLeft: '10px'}} >
                    <h4 style={{margin: 0, color: 'white', fontSize: '16px', fontWeight: '700px'}} >Devon Lane</h4>
                    <h4 style={{margin: 0, color: 'white', fontSize: '16px', fontWeight: '500px', color: '#8899A6'}}>@gabrielcantarin</h4>
                </div>
            </div>
            <div className='small-scretch'></div>

            <div style={{display: 'flex', alignItems: 'center', paddingLeft: '1rem', paddingTop: '10px'}} >
                <div>
                <img src="../../../image/Medium.png" alt="" className="card_user_icon" />
                </div>

                <div style={{paddingLeft: '10px'}} >
                    <h4 style={{margin: 0, color: 'white', fontSize: '16px', fontWeight: '700px'}} >Bessie Cooper</h4>
                    <h4 style={{margin: 0, color: 'white', fontSize: '16px', fontWeight: '500px', color: '#8899A6'}} >
                        @alessandroveronezi
                    </h4>
                </div>
            </div>

            <div className='small-scretch'></div>

            <div style={{paddingTop: '10px'}} >
                <a className='search_link' >Show more</a>
            </div>
        </div>
    </div>
  )
}

export default Search