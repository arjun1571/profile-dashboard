import React from 'react';
import profile from "../../asset/image/Ellipse 640.png"

const ResetPass = () => {
    return (
        <div className=' w-full' style={{height:"1780px"}}>
        <div className='flex mb-4'>
            <h1 className='lg:text-4xl text-2xl font-bold'>My Profile</h1>
            <p className='mx-3'><small>Member since 2023</small></p>
        </div>
        <div className='border rounded-lg p-5 lg:p-10 w-full h-full lg:flex  '>
            <div className=''>
                <img src={profile} alt=""  className=''/>
                <p className='lg:mx-12 mx-3 mt-2' style={{color:"#3F8825"}}>EDIT</p>
            </div>
            <div className='lg:mx-10 mx-3 border rounded-lg p-2 lg:p-5'>
                <div >
                    <h1 className='text-lg font-bold'>Password</h1>
                    <p>Use the button below to get an email with a link to change your password.</p> 
                </div>
                <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 mt-10">
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Old Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" />
                    </div>
                    <div className="mb-4">
                    <div className='flex justify-between'>
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        New password
                    </label>
                    <div class="flex items-center">
                        <input type="checkbox" value="" class="w-4 h-4 " />
                        <label  class="ml-2 text-sm"><small>show password</small></label>
                    </div>
                    </div>
                    <input className="shadow lg:w-[800px] w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="password" />
                    </div>
                    <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Confiram New Password
                    </label>
                    <input className="shadow appearance-none borde rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password"/>
                    <div class="flex items-center">
                        <input type="checkbox" value="" class="w-4 h-4 bg-green-700" />
                        <label  class="ml-2 text-sm"><small>All devices will be required to sign in with new password</small></label>
                    </div>
                    </div>
                    <div className="items-center justify-between">
                    <button className="bg-green-700 hover:bg-green-700 text-white w-24 lg:w-32 rounded-3xl  py-2 px-4 focus:outline-none focus:shadow-outline" type="button">
                        Save 
                    </button>
                    <button className='text-green-700 lg:mx-10 mx-2' >Cancel</button>
                    </div>
                </form>
                
            </div>
        </div>
    </div>
    );
};

export default ResetPass;