import React from 'react'
import Items from './Components/Items/Items'
import All_videos from './assets/Hotstar/All_videos'

function Categories() {
    return (
        <div className='my-20'>
            
            <h1 className='uppercase text-2xl '>Popular language</h1>
            <div className='flex space-x-4 py-4 px-2 scroll-smooth overflow-x-auto no-scrollbar'>
                {All_videos.map((item, index) => {
                    if (item.type === 'language') {
                        return (<div key={index} className='min-w-[250px] cursor-pointer px-1 py-2 bg-gray-800 hover:scale-125 hover:duration-700 hover:ease-linear '>
                            <img src={item.image} alt={item.name} className='w-full h-auto rounded z-50' />
                        </div>)
                    }
                })}
            </div>

            <h1 className='uppercase text-2xl '>Popular channels</h1>
            <div className='flex space-x-4 py-4 px-2 scroll-smooth overflow-x-auto no-scrollbar'>
                {All_videos.map((item, index) => {
                    if (item.type === 'channel') {
                        return (<div key={index} className='min-w-[250px] cursor-pointer px-1 py-2 bg-gray-800 hover:scale-125 hover:duration-700 hover:ease-linear '>
                            <img src={item.image} alt={item.name} className='w-full h-auto rounded z-50' />
                        </div>)
                    }
                })}
            </div>

            <h1 className='uppercase text-2xl '>Popular sports</h1>
            <div className='flex space-x-4 py-4 px-2 scroll-smooth overflow-x-auto no-scrollbar'>
                {All_videos.map((item, index) => {
                    if (item.type === 'sports-image') {
                        return (<div key={index} className='min-w-[250px] cursor-pointer px-1 py-2 bg-gray-800 hover:scale-125 hover:duration-700 hover:ease-linear '>
                            <img src={item.image} alt={item.name} className='w-full h-auto rounded z-50' />
                        </div>)
                    }
                })}
            </div>
        </div>
    )
}

export default Categories
