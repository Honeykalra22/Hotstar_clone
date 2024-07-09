import React, { useState } from 'react'

function Profile_item(props) {
    const [log, setLog] = useState('login')
    return (
        <div className=''>
            <h1 className=' capitalize text-gray-400 underline text-lg'>account section</h1>
            <div className=''>
                <div className='flex flex-col my-2'>
                    <label htmlFor="name">Enter Your Name</label>
                    <input
                        type='text'
                        required
                        id='name'
                        placeholder='enter your full name'
                        className='w-[80vw] md:w-[45vw] py-3 px-7 text-black capitalize rounded-xl'
                    />
                </div>

                <div className='flex flex-col my-2'>
                    <label htmlFor="email">Enter Your Email</label>
                    <input
                        type='email'
                        required
                        id='email'
                        placeholder='Enter Your Email'
                        className='w-[80vw] md:w-[45vw] py-3 px-7 text-black rounded-xl'
                    />
                </div>

                <div className='flex flex-col my-2'>
                    <label htmlFor="password">Enter Your Password</label>
                    <input
                        type='password'
                        required
                        id='password'
                        placeholder='Enter Your Password'
                        className='w-[80vw] md:w-[45vw] py-3 px-7 text-black rounded-xl'
                    />

                </div>
                <p className='mt-10 capitalize'>already have an account <span className='text-blue-600 underline cursor-pointer hover:text-blue-700'>sign in</span></p>
                <div className='flex justify-between mt-3'>
                    <button
                        type='submit'
                        className='bg-gray-800 px-9 py-2 text-lg capitalize rounded-full hover:bg-gray-900'>login</button>
                    <p className='text-blue-300 hover:underline cursor-pointer p-0'>forget password</p>
                </div>
            </div>
        </div>
    )
}

export default Profile_item