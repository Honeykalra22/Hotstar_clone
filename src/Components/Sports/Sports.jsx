import React, {useRef} from 'react'
import sports from '../../assets/Hotstar/Sports'

function Sports() {
  const scrollContainer = useRef(null);
  return (
    <div className=''>
            <div>
                <h1 className='capitalize text-2xl mx-2 mt-3'>best in sports</h1>
            </div>

            <div
                className='flex space-x-4 py-4 px-2 scroll-smooth  overflow-x-auto no-scrollbar'
                ref={scrollContainer}
            >
                {sports.map((item, index) => (
                    <div key={index} className='min-w-[150px] cursor-pointer px-1 py-2 bg-gray-800 hover:scale-150 hover:duration-700 hover:ease-linear '>
                        <img src={item.image} alt={item.name} className='w-full h-auto rounded z-50' />
                        <h1 className='text-white capitalize mt-2'>{item.name}</h1>
                        <p className='text-gray-500 capitalize'>{item.lang}</p>
                    </div>
                ))}
            </div>

        </div>
  )
}

export default Sports