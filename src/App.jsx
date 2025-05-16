import React, { useEffect, useState } from 'react'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
const App = () => {
//   const [isloadin, setIsloadin] = useState(false);
// useEffect(() => {
//   setTimeout(() => {
//     setIsloadin(true);
//   }, 2000);
// },[])


  return (
    <>
    <LoadingScreen/>
    <div>
    hi there : 
    </div>
    </>
  )
}

export default App
