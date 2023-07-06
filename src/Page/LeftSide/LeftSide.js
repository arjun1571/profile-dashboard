import React from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {

    return (
        <div className='lg:p-14 p-2'>
            <Link to={"/password"} ><button style={{color:"#3F8825"}} className='mb-2'>Password</button></Link>
            <br/>
            <Link  to={"/Notification"}><button style={{color:"#3F8825"}}>Notifications</button></Link>
           
        </div>
    );
};

export default LeftSide;