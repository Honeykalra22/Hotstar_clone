import React from 'react'
import logo from '../../assets/Hotstar/logo.png'

function Footer() {
  return (
    <div className='md:hidden flex justify-center mb-16'>

      <div className='mt-4 capitalize flex gap-3 flex-col'>
        {/* <img src={logo} alt="" /> */}
        <div>
          <h1 className='text-xl'>company</h1>
          <div className='flex gap-4 text-gray-300 text-lg'>
            <p className='hover:underline'>about us</p>
            <p className='hover:underline'>career</p>
          </div>
        </div>
        <div>
          <h1 className='text-xl'>view website in</h1>
          <div className=' flex gap-1 text-gray-300 text-lg'>
            <input defaultChecked={true} className=' bg-transparent' type='checkbox' />
            <p>english</p>
          </div>
        </div>
        <div>
          <h1 className='text-xl'>need help</h1>
          <div className='flex gap-3 text-gray-300 text-lg'>
            <p className='hover:underline'>visit help center</p>
            <p className='hover:underline'>share feedback</p>
          </div>
        </div>
        <div>
          <h1 className='text-xl'>connect with us</h1>
          <div>

          </div>
        </div>
        <div>
          <p>
            © 2024 STAR. all rights reserved.
          </p>
          <div className='flex gap-3 text-gray-300 text-lg'>
            <p className='hover:underline'>terms of use</p>
            <p className='hover:underline'>privacy polocy</p>
            <p className='hover:underline'>FAQ</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer