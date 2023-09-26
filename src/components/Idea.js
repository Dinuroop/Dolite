import React from 'react';
import T from '../Assets/Ticon.png'
import blogIcon from '../Assets/carbon_blog.png'

const Idea = () => {
  return (
    <div style={{width: '100wv', height: 55, position: 'relative', background: '#C3E2FF'}}>
    <div style={{width: 4, height: 43, left: 183, top: 7, position: 'absolute', background: 'linear-gradient(177deg, #0400C6 0%, #480253 100%)', borderRadius: 2.50}} />
    <div style={{width: 27, height: 27, left: 193, top: 15, position: 'absolute'}}>
        <img style={{width: 21.38, height: 24.75}} src={T} className='Ticonimage' alt='Ticon'/>
    </div>
    <div style={{width: 4, height: 43, left: 226, top: 7, position: 'absolute', background: 'linear-gradient(177deg, #0400C6 0%, #480253 100%)', borderRadius: 2.50}} />
    <div style={{width: 35, height: 35, left: 236, top: 11, position: 'absolute'}}>
        <img style={{width: 35, height: 35}} src={blogIcon} className='Blogimage' alt='BlogIcon'/>
    </div>
    <div style={{width: 609, height: 39, left: 560, top: 10, position: 'absolute'}}>
        <div style={{width: 75, height: 30, marginLeft: 39, marginTop: -5,color: 'rgba(15, 0, 180, 0.63)', fontSize: 32, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Idea</div>
        <div style={{width: 483, height: 13, marginLeft: 135, marginTop: -20, color: 'rgba(0, 0, 0, 0.59)', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Come with idea for your topic you want to write</div>
        <div style={{width: 39, height: 39, paddingTop: 2.93, paddingBottom: 3.66, paddingLeft: 2.44, paddingRight: 2.44, left: 0, top: 0, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34" height="32" viewBox="0 0 24 24" style={{color: '#0f00b4'}}>
<path d="M 11 0 L 11 3 L 13 3 L 13 0 L 11 0 z M 4.2226562 2.8085938 L 2.8085938 4.2226562 L 4.9296875 6.34375 L 6.34375 4.9296875 L 4.2226562 2.8085938 z M 19.777344 2.8085938 L 17.65625 4.9296875 L 19.070312 6.34375 L 21.191406 4.2226562 L 19.777344 2.8085938 z M 12 5 C 8.1456661 5 5 8.1456661 5 12 C 5 14.767788 6.6561188 17.102239 9 18.234375 L 9 21 C 9 22.093063 9.9069372 23 11 23 L 13 23 C 14.093063 23 15 22.093063 15 21 L 15 18.234375 C 17.343881 17.102239 19 14.767788 19 12 C 19 8.1456661 15.854334 5 12 5 z M 12 7 C 14.773666 7 17 9.2263339 17 12 C 17 14.184344 15.605334 16.022854 13.666016 16.708984 L 13 16.943359 L 13 21 L 11 21 L 11 16.943359 L 10.333984 16.708984 C 8.3946664 16.022854 7 14.184344 7 12 C 7 9.2263339 9.2263339 7 12 7 z M 0 11 L 0 13 L 3 13 L 3 11 L 0 11 z M 21 11 L 21 13 L 24 13 L 24 11 L 21 11 z M 4.9296875 17.65625 L 2.8085938 19.777344 L 4.2226562 21.191406 L 6.34375 19.070312 L 4.9296875 17.65625 z M 19.070312 17.65625 L 17.65625 19.070312 L 19.777344 21.191406 L 21.191406 19.777344 L 19.070312 17.65625 z"></path>
</svg>
        </div>
    </div>
    <div style={{width: 105, left: 61, top: 9, position: 'absolute'}}>
        <div style={{width: 39, height: 39, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34" height="32" viewBox="0 0 24 24" style={{color: '#0f00b4'}}>
<path d="M 11 0 L 11 3 L 13 3 L 13 0 L 11 0 z M 4.2226562 2.8085938 L 2.8085938 4.2226562 L 4.9296875 6.34375 L 6.34375 4.9296875 L 4.2226562 2.8085938 z M 19.777344 2.8085938 L 17.65625 4.9296875 L 19.070312 6.34375 L 21.191406 4.2226562 L 19.777344 2.8085938 z M 12 5 C 8.1456661 5 5 8.1456661 5 12 C 5 14.767788 6.6561188 17.102239 9 18.234375 L 9 21 C 9 22.093063 9.9069372 23 11 23 L 13 23 C 14.093063 23 15 22.093063 15 21 L 15 18.234375 C 17.343881 17.102239 19 14.767788 19 12 C 19 8.1456661 15.854334 5 12 5 z M 12 7 C 14.773666 7 17 9.2263339 17 12 C 17 14.184344 15.605334 16.022854 13.666016 16.708984 L 13 16.943359 L 13 21 L 11 21 L 11 16.943359 L 10.333984 16.708984 C 8.3946664 16.022854 7 14.184344 7 12 C 7 9.2263339 9.2263339 7 12 7 z M 0 11 L 0 13 L 3 13 L 3 11 L 0 11 z M 21 11 L 21 13 L 24 13 L 24 11 L 21 11 z M 4.9296875 17.65625 L 2.8085938 19.777344 L 4.2226562 21.191406 L 6.34375 19.070312 L 4.9296875 17.65625 z M 19.070312 17.65625 L 17.65625 19.070312 L 19.777344 21.191406 L 21.191406 19.777344 L 19.070312 17.65625 z"></path>
</svg></div>
        </div>
        <div className='blackIdea' style={{width: 62, height: 26, marginLeft: 43, color: 'black', fontSize: 24, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Idea</div>
    </div>
</div>
  )
}

export default Idea