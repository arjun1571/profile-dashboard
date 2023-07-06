import React from 'react';
import profile from "../../asset/image/Ellipse 640.png"

const Notification = () => {
    return (
    <div className=' w-full' style={{height:"1780px"}}>
        <div className='flex mb-4'>
            <h1 className='lg:text-4xl text-2xl font-bold'>Notifications</h1>
            <p className='mx-3'><small>Member since 2023</small></p>
        </div>
        <div className='border rounded-lg p-5 lg:p-10 w-full h-full lg:flex  '>
            <div className='mt-10'>
                <img src={profile} alt=""  className=''/>
                <p className='lg:mx-12 mx-3 mt-2' style={{color:"#3F8825"}}>EDIT</p>
            </div>
            <div className='lg:mx-10 mx-3 border rounded-lg p-2 lg:p-5 mt-10'>
                <div >
                    <h1 className='text-lg font-bold mt-5'>Notifications</h1>
            </div>
            <div className='mt-5'>       
                <h3 class="mb-4 font-semibold">How often would you like to receive new lead emails?</h3>
                <ul class="lg:w-[832px] text-sm  border rounded-lg">
                    <li class="w-full border ">
                        <div >
                                <div class="flex items-center pl-3">
                                <input type="radio" value="" name="list-radio" class="w-4 h-5 " />
                                <label class="w-full py-3 ml-2 text-sm font-medium ">Separate email for each new lead</label>
                                </div>
                                <small className='p-8'>Receive new leads as soon as they become available.</small>
                        </div>
                    </li>
                    <li class="w-full  ">
                    <div >
                                <div class="flex items-center pl-3">
                                <input type="radio" value="" name="list-radio" class="w-4 h-4 " />
                                <label class="w-full py-3 ml-2 text-sm font-medium">Separate email for each new lead</label>
                                </div>
                                <small className='p-8'>Receive new leads as soon as they become available.</small>
                    </div>
                    </li>
                    </ul>
            </div>
            <div className='mt-5'>       
                <h3 class="mb-4 font-semibold">Would you like to receive SMS alerts?</h3>
                <ul class="lg:w-[832px] text-sm  border rounded-lg">
                    <li class="w-full border ">
                        <div >
                            <div class="flex items-center pl-3">
                            <input type="radio" value="" name="list-radio" class="w-4 h-5 " />
                            <label class="w-full py-3 ml-2 text-sm font-medium ">I'd like to receive SMS alerts</label>
                        </div>
                            <small className='p-8'>Receive an SMS when you are shortlisted, invited, or to reset your password.</small>
                        </div>
                    </li>
                    <li class="w-full  ">
                    <div >
                        <div class="flex items-center pl-3">
                        <input type="radio" value="" name="list-radio" class="w-4 h-4 " />
                        <label class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I don't want to receive SMS alerts</label>
                        </div>
                    </div>
                    </li>
                    </ul>
            </div>
            <div className='mt-5'>       
               <h3 class="mb-4 font-semibold">Updates from Findatrade Brittany</h3>
                <ul class="lg:w-[832px] text-sm  border rounded-lg">
                    <li class="w-full border ">
                        <div >
                            <div class="flex items-center pl-3">
                            <input type="radio" value="" name="list-radio" class="w-4 h-5 " />
                            <label class="w-full py-3 ml-2 text-sm font-medium ">I'd like to receive Findatrade Brittany News, Advice and Tips</label>
                            </div>
                        </div>
                    </li>
                    <li class="w-full  ">
                    <div >
                        <div class="flex items-center pl-3">
                        <input type="radio" value="" name="list-radio" class="w-4 h-4 " />
                        <label class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I'd like to participate in occasional surveys</label>
                        </div>

                    </div>
                    </li>
                    </ul>
            </div>
            <div className="items-center justify-between mt-10">
                <button className="bg-green-700 hover:bg-green-700 text-white w-24 lg:w-32 rounded-3xl  py-2 px-4 focus:outline-none focus:shadow-outline" type="button">
                    Save 
                </button>
                <button className='text-green-700 lg:mx-10 mx-2' >Cancel</button>
            </div>

            </div>
            
        </div>
    </div>
    );
};

export default Notification;