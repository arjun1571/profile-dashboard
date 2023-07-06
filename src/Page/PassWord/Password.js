import React from 'react';
import profile from "../../asset/image/Ellipse 640.png"
import logo from "../../asset/image/Vector.png"
import { useNavigate } from "react-router-dom";

const Password = () => {
    const navigate = useNavigate();
    const handleClick=()=> {
        console.log("hello")
        navigate("/resetpassword");
    }
    return (
        <div className='' style={{height:"1780px"}}>
            <div className='flex mb-4'>
                <h1 className='lg:text-4xl text-2xl font-bold'>My Profile</h1>
                <p className='mx-3'><small>Member since 2023</small></p>
            </div>
            <div className='border rounded-lg p-5 lg:p-10 w-full h-full flex '>
                <div className='mt-10'>
                    <img src={profile} alt=""  className=''/>
                    <p className='lg:mx-12 mx-3 mt-2' style={{color:"#3F8825"}}>EDIT</p>
                </div>
                <div className='lg:mx-10 mx-3 border rounded-lg p-2 lg:p-5 flex mt-10 '>
                    <div >
                        <h1 className='text-lg font-bold'>Password</h1>
                        <p>Use the button below to get an email with a link to change your password or edit button.</p>
                        <button onClick={handleClick} className='mt-5 rounded-full lg:p-3 p-1 text-white' style={{backgroundColor:"#3F8825"}}>Send password reset link</button>
                    </div>
                    <div className='lg:mx-20'>
                        <div className='lg:w-11 lg:h-11 w-6 h-6 rounded-full  border border-green-700' >
                            <img src={logo} className='lg:mt-3 mt-1 mx-1 lg:mx-3 ' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Password;