import React from 'react'
import Latest from './Components/Latest/Latest'
import Sports from './Components/Sports/Sports'
import Popular from './Components/Popular/Popular'
import Thriller from './Components/Thriller/Thriller'
import All_videos from './assets/Hotstar/All_videos'

function Home() {
    return (
        <div className='my-10 md:my-2'>
            <div>
                {/* <div className='flex space-x-4 py-4 px-2 scroll-smooth overflow-x-auto no-scrollbar'>
                    {All_videos.map((item, index) => {
                        if (item.type === 'poster') {
                            return (<div
                                key={index} className='before min-w-[70vw] cursor-pointer px-1 py-2 bg-gray-800 hover:ease-linear '>
                                <img src={item.image} alt={item.name} className='w-full h-auto rounded z-50' />
                                <img src={item.heading} alt="" />
                            </div>)
                        }
                    })}
                </div> */}
                <div className='flex space-x-4 py-1 px-2 scroll-smooth overflow-x-scroll overflow-y-hidden no-scrollbar'>
                    {All_videos.map((item, index) => {
                        if (item.type === 'poster') {
                            return (
                                <div
                                    key={index}
                                    className='relative min-w-[80vw] cursor-pointer z-50 px-1 py-2 bg-gray-800 hover:ease-linear'>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        // className='absolute top-0 left-0 w-full h-auto rounded z-10'
                                        className='w-full h-auto rounded z-50 opacity-50'
                                    />
                                    <img
                                        src={item.heading}
                                        alt=""
                                        className='absolute top-1/3 left-4 w-1/2 h-auto z-50'
                                    />
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
            <Latest />
            <Sports />
            <Popular />
            <Thriller />
        </div>
    )
}

export default Home