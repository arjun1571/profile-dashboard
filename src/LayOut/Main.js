import React from 'react';
import LeftSide from '../Page/LeftSide/LeftSide';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='flex mt-10'>
            <div className=''>
                <LeftSide></LeftSide>
            </div>
            <div className='mt-12'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;