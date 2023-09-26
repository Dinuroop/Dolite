import React from 'react';
import Topic from '../components/Topic';
import './TopicPage.css';

const TopicPage = () => {
  return (
    <>
    <Topic />
    <div className='flexhere'>
      <div className='blackbg'>
        <div className='defineText'>
          <p style={{color: 'white', fontSize: 58, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Define your </p>
          <p style={{color: '#0F00B4', fontSize: 58, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Topic</p>
        </div>
        <div className='enterthe'>
        <div style={{color: 'white', fontSize: 32, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Enter the word </div>
        </div>
        <div className='inputbox'>
          <textarea className='inputBox' type='text' row='4' placeholder="The word which is in your mind, but the brilliant ideas which you need regarding it"></textarea>
        </div>
        <div className='generatehere'>
          <button className='genButton' type='submit'>Generate</button>
          
        </div>
      </div>
      <div className='whitebg'>
        <div className='gradline'>
          <div className='line'></div>
        </div>
        <div className='allSet'>
        <div style={{width: '100%', height: '100%', color: 'black', fontSize: '35px', fontFamily: 'Poppins', fontWeight: '500'}}>All set, The machine is waiting for your command........</div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default TopicPage;