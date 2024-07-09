// import React, { useState } from 'react'
// import latest_img from '../../assets/Hotstar/Latest'
// import Items from '../Items/Items'

// function Latest({Latest}) {
//   const [index, setIndex] = useState(0)
//   // const numVideos = latest_img.length
//   const numVideos = Latest.length
//   const scrollWidth = 300;

//   const next = () => {
//     setIndex(index+1)
//     if(index > numVideos){
//       setIndex(0)
//     }
//   }

//   const prev = () => {
//     setIndex(index-1)
//     if(index < 0){
//       setIndex(numVideos)
//     }
//   }


//   return (
//     <div className='my-10'>
//       <div className='mx-4 flex justify-between mb-5'>
//         <h1 className='uppercase font-semibold'>latest in india</h1>
//         <button onClick={prev} className=' capitalize text-gray-300'>previous </button>
//         <button onClick={next} className=' capitalize text-gray-300'>next </button>
//       </div>

//       <div className=' flex gap-4 overflow-x-hidden'>
//         {latest_img.map((item, i) => {
//           return <Items key={i} image={item.image} />
//         })}
//       </div>

//     </div>
//   )
// }

// export default Latest


import React, { useRef } from 'react';
import Latest from '../../assets/Hotstar/Latest'
import './Latest.css'

const HorizontalScroller = () => {
    const scrollContainer = useRef(null);

    const scrollLeft = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className=''>
            <div>
                <h1 className='capitalize text-2xl mx-2 mt-3'>latest realeses</h1>
            </div>

            <div
                className='flex space-x-4 py-4 px-2 scroll-smooth  overflow-x-auto no-scrollbar'
                ref={scrollContainer}
            >
                {Latest.map((item, index) => (
                    <div key={index} className='min-w-[150px] cursor-pointer px-1 py-2 bg-gray-800 hover:scale-150 hover:duration-700 hover:ease-linear '>
                        <img src={item.image} alt={item.name} className='w-full h-auto rounded z-50' />
                        <h1 className='text-white capitalize mt-2'>{item.name}</h1>
                        <p className='text-gray-500 capitalize'>{item.lang}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default HorizontalScroller;
