import React, { useEffect, useState } from 'react'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Home from './components/sections/Home';
const App = () => {
  const [isloading, setIsloading] = useState(false);
  const [ismenuopen, setIsmenuopen] = useState(false);

  return (
    <>
    {!isloading && <LoadingScreen onComplete={()=>setIsloading(true)}/>}
    {/* <LoadingScreen onComplete={()=>setIsloading(true)}/> */}
    <div className={`min-h-screen transition-opacity duration-700 ${isloading ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>
      <Navbar ismenuopen={ismenuopen} setIsmenuopen={setIsmenuopen}/>
      <MobileMenu ismenuopen={ismenuopen} setIsmenuopen={setIsmenuopen}/>
      <Home/>
    </div>
    </>
  )
}

export default App
