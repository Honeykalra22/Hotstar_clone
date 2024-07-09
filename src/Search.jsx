import React, { useState } from 'react'
import All_videos from './assets/Hotstar/All_videos'


function Search() {
    const [list, setList] = useState(All_videos)
    const [search, setSearch] = useState('')

    function searchClick() {
        if (search === '') {
            setList(list);
            return;
        }
        const filterBySearch = list.filter((item) => {
            if (item.name.toLowerCase().includes(search.toLowerCase())) {
                return (
                    <div className='no-scrollbar'>
                        {/* {item.image} */}
                    </div>
                )
            }
        })
        setList(filterBySearch);
    }
    return (
        <div className=''>
            <div className='flex justify-center items-center my-10 gap-7'>
                <input
                    className='text-white w-full rounded-xl bg-gray-600 px-5 py-4 capitalize text-lg'
                    placeholder='movies, shows and more'
                    type='search'
                    id='searchBar'
                    onChange={(e) => (setSearch(e.target.value))}>
                </input>
                <button
                className='bg-red-600 px-5 py-4 rounded-full text-black font-semibold text-lg'
                onClick={searchClick}>Search</button>
            </div>
            <div className='flex overflow-x-auto no-scrollbar gap-4 my-5'>
                {list.map((item) => {
                    if(item.type === 'thriller'){
                        return (<div className='min-w-[250px] cursor-pointer px-1 py-2 bg-gray-800 no-scrollbar'>
                            <img src={item.image} alt={item.name} className='w-full h-auto rounded z-50' />
                            <h1 className=' capitalize'>{item.name}</h1>
                        </div>)
                    }
                })
                }

            </div>
            <div className='flex overflow-x-auto no-scrollbar gap-4 my-5'>
                {list.map((item) => {
                    if(item.type === 'sports'){
                        return (<div className='min-w-[250px] cursor-pointer px-1 py-2 bg-gray-800 no-scrollbar'>
                            <img src={item.image} alt={item.name} className='w-full h-auto rounded z-50' />
                            <h1 className=' capitalize'>{item.name}</h1>
                        </div>)
                    }
                })
                }
            </div>
            <div className='flex overflow-x-auto no-scrollbar gap-4 my-5'>
                {list.map((item) => {
                    if(item.type === 'latest'){
                        return (<div className='min-w-[250px] cursor-pointer px-1 py-2 bg-gray-800 no-scrollbar'>
                            <img src={item.image} alt={item.name} className='w-full h-auto rounded z-50' />
                            <h1 className=' capitalize'>{item.name}</h1>
                        </div>)
                    }
                })
                }
            </div>
            <div className='flex overflow-x-auto no-scrollbar gap-4 my-5'>
                {list.map((item) => {
                    if(item.type === 'popular'){
                        return (<div className='min-w-[250px] cursor-pointer px-1 py-2 bg-gray-800 no-scrollbar'>
                            <img src={item.image} alt={item.name} className='w-full h-auto rounded z-50' />
                            <h1 className=' capitalize'>{item.name}</h1>
                        </div>)
                    }
                })
                }
            </div>
            <div className='flex overflow-x-auto no-scrollbar gap-4 my-5'>
                {list.map((item) => {
                    if(item.type === 'poster'){
                        return (<div className='min-w-[250px] cursor-pointer px-1 py-2 bg-gray-800 no-scrollbar'>
                            <img src={item.image} alt={item.name} className='w-full h-auto rounded z-50' />
                            <h1 className=' capitalize'>{item.name}</h1>
                        </div>)
                    }
                })
                }
            </div>
        </div>
    )
}

export default Search