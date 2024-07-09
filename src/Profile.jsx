import React, { useState } from 'react'
import Profile_item from './Components/Profile_item/Profile_item'
import OTP_Box from './Components/Otp_box/OTP_Box'
import { Link } from 'react-router-dom'

function Profile() {
    const [head, setHead] = useState(Profile_item)
    return (
        <div className=' h-screen justify-center items-center  flex'>
            <div className='border bg-black flex flex-col justify-between items-center w-full md:w-[80vw] h-auto md:px-20 py-10'>
                <h1 className=' capitalize text-2xl font-semibold'>login/signin page </h1>
                <div className='flex justify-between gap-10 mb-10 mt-12'>            
                        <button
                            onClick={() => setHead(Profile_item)}
                            className='border px-6 py-2 capitalize rounded-xl text-lg active:bg-gray-400 hover:bg-gray-400 hover:text-black font-semibold'>login
                        </button>
                        <button
                            onClick={() => (
                                setHead(Profile_item)
                            )}
                            className='border  px-6 py-2 capitalize rounded-xl text-lg active:bg-gray-400 hover:bg-gray-400 hover:text-black font-semibold'>sign in
                        </button>    
                </div>
                {head}
            </div>
            {/* <OTP_Box/> */}
        </div>
    )
}

export default Profile