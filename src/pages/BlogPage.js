import React from 'react';
import Blog from '../components/Blog';
import './BlogPage.css';

const BlogPage = () => {
  return (
    <>
    <Blog />
    <div className='flexhere'>
      <div className='blackbg'>
        <div className='defineText'>
          <p style={{color: 'white', fontSize: 58, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Here is your </p>
          <p style={{color: '#0F00B4', fontSize: 58, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Blog</p>
        </div>
        <div className='enterthe'>
            <div style={{color: 'white', fontSize: 32, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Enter the word </div>
        </div>
        <div >
          <textarea className='inputBox' type='text' row='4' placeholder="The word which is in your mind, but the brilliant ideas which you need regarding it"></textarea>
        </div>
        <div className='generatehere'>
          <button className='genButton' type='submit'>Generate</button>
        </div>
        <div className='enterthe'>
            <div style={{color: 'white', fontSize: 32, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Selected Title</div>
        </div>
        <div>
          <textarea className='selinputbox' type='text' row='1' placeholder="Selected title here"></textarea>
        </div>
        <div className='enterthe'>
            <div style={{color: 'white', fontSize: 32, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Selected Idea</div>
        </div>
        <div >
          <textarea className='selinputbox' type='text' row='1' placeholder="Selected title here"></textarea>
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

export default BlogPage;