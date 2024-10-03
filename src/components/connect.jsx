import React from 'react';
import stand from './images/Man Standing in a Wheat Field Life Quotes.png';
import './connect.css';

function Connect() {
  return (
    <div className='topper'>
        <h1>STAY US CONNECT</h1>
        <div className="connect">
            <img src={stand} alt="" className='standimg'/>
            <div className="data">
                <h1>Book Your Ticket</h1>
                <input type="text" placeholder='NAME *'/>
                <input type="text" placeholder='CITY *' />
                <input type="email" placeholder='EMAIL *'/>
                <input type="number" placeholder='PHONE *' />
                <input type="number" placeholder='WHATSAPP *' />
                <input type="text" placeholder='TRAVEL DESTINATION *'/>
                <input type="text" placeholder='DD/MM/YYYY (DATE OF TRAVEL)*'/>
                <input type="number" placeholder='NO.OF.PEOPLE *' />
                <button className='submit-btn'>SUBMIT</button>
            </div>
        </div><hr/>
    </div>
  )
}
export default Connect