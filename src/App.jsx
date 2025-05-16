import React, { useEffect, useState } from 'react'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
const App = () => {
  const [isloading, setIsloading] = useState(false);


  return (
    <>
    {!isloading && <LoadingScreen onComplete={()=>setIsloading(true)}/>}
    {/* <LoadingScreen onComplete={()=>setIsloading(true)}/> */}
    <div>
    hi there : 
    </div>
    </>
  )
}

export default App
