import React, {useRef} from 'react'
import All_videos from './assets/Hotstar/All_videos';

function Sports() {
    const scrollContainer = useRef(null);
  return (
    <div className='h-auto'>
            <div className='flex space-x-4 py-1 px-2 scroll-smooth overflow-x-scroll overflow-y-hidden no-scrollbar'>
                {All_videos.map((item, index) => {
                    if (item.type === 'sports_poster') {
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
            <h1 className='uppercase text-2xl mt-6 ml-2'>Popular sports</h1>
            <div className='flex space-x-4 py-4 px-2 scroll-smooth overflow-x-auto no-scrollbar'>
                {All_videos.map((item, index) => {
                    if (item.type === 'sports-image') {
                        return (<div key={index} className='min-w-[250px] cursor-pointer px-1 py-2 bg-gray-800 hover:scale-125 hover:duration-700 hover:ease-linear '>
                            <img src={item.image} alt={item.name} className='w-full h-auto rounded z-50' />
                        </div>)
                    }
                })}
            </div>
            <h1 className=' capitalize text-2xl font-semibold mt-6 ml-2'>best sports moments</h1>
            <div
                className='flex space-x-4 py-4 px-2 scroll-smooth  overflow-x-auto no-scrollbar'
                ref={scrollContainer}
            >
                {All_videos.map((item, index) => {
                    if (item.type === 'sports') {
                        return (
                            <div key={index} className='min-w-[150px] cursor-pointer px-1 py-2 bg-gray-800 hover:scale-150 hover:duration-700 hover:ease-linear '>
                                <img src={item.image} alt={item.name} className='w-full h-auto rounded z-50' />
                                <h1 className='text-white capitalize mt-2'>{item.name}</h1>
                                <p className='text-gray-500 capitalize'>{item.lang}</p>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
  )
}

export default Sports