import React from 'react';
import "./Notifications.css" 
import close from './close_icon.png'
import { getLatestNotification } from './utils';
function Notifications() {
    return (
        <div className='Notifications'>
            <p>Here are your notifications</p>



            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>



            <button style={{
                border: "none",
                 position: 'absolute',
                 right: '10px',
                 bottom: '10px',
                 backgroundColor: 'white',
                 fontSize: '16px',
                 cursor: 'pointer'
            }} aria-label='Close' onClick={() => console.log("Close button has been clicked") }>
                <img src={close} alt="close" style={{width: "20px" , height: "20px"}}/>
            </button>
        </div>
    )
}

export default Notifications;