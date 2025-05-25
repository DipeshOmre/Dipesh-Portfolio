import React, { useEffect } from 'react'

const Navbar = ({ismenuopen,setIsmenuopen}) => {
  useEffect(() => {
   document.body.style.overflow = ismenuopen ? 'hidden' : '';
  }, [ismenuopen]);
  return (
    <div>
      <nav className='fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg shadow-lg border-b border-white/10'>

        <div className='max-w-5xl mx-auto px-4'>
            <div className='flex items-center justify-between h-16'>
                <a href="#home" className='font-mono text-2xl font-bold text-white'>
                    Dipp<span className='text-blue-500'>.tech</span>
                </a>
                <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden' onClick={() => setIsmenuopen(!ismenuopen)}>
                    &#9776;
                </div>
                <div className='hidden md:flex items-center space-x-8'>
                <a href="#home" className='hover:text-white text-gray-300'>Home</a>
                <a href="#about" className='hover:text-white text-gray-300'>About</a>
                <a href="#projects" className='hover:text-white text-gray-300'>Projects</a>
                <a href="#contact" className='hover:text-white text-gray-300'>Contact</a>
                </div>
            </div>
            </div>        
      </nav>
    </div>
  )
}

export default Navbar
