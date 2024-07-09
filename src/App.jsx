
import './App.css'
import Home from './Home'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Categories from './Categories'
import Search from './Search'
import Footer from './Components/Footer/Footer'
import Profile from './Profile'
import Tv from './Tv'
import Movies from './Movies'
import Sports from './Sports'


function App() {

  return (
    // <div className=' bg-slate-900 h-auto text-white flex gap-10 '>
    //   <div className=' fixed'>
    //     <Navbar />
    //   </div>
    //   <div className='overflow-x-auto'>
    //     <Home />
    //   </div>
    // </div>
    
      <div className='bg-black grid md:bg-slate-900 text-white sm:flex gap-10'>
        <BrowserRouter>
          <div className='fixed'>
            <Navbar/>
          </div>
          <div className=' overflow-x-auto mx-4 md:ml-[100px]'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/search' element={<Search />} />
              <Route path='/profile/login' element={<Profile/>}/>
              <Route path='/categories' element={<Categories />} />
              {/* <Route path='/profile/login' element = {<Profile/>}/> */}
              <Route path='/profile/signin' element = {<Profile/>}/>
              <Route path='/tv' element = {<Tv/>}/>
              <Route path='/movies' element = {<Movies/>}/>
              <Route path='/sports' element={<Sports/>} />
            </Routes>
          </div>
          <div>
            <Footer/>
          </div>
        </BrowserRouter>
          
    </div >

  )
}

export default App
