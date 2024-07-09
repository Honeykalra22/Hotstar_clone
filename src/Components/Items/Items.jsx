import React from 'react'

const Items = (item) => {
    
    return (
        <div className=' cursor-pointer'>
            <img className = 'h-[300px] w-[280px] object-cover' src = {item.image} alt={item.name} />
            <h1 className=' capitalize'>{item.name}</h1>
            <p className=' text-gray-500 capitalize'>{item.lang}</p>
        </div>
    )
}

export default Items