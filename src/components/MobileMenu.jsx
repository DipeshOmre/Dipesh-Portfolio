import React from 'react'

const MobileMenu = ({ ismenuopen, setIsmenuopen }) => {
    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${ismenuopen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>
            <button onClick={()=>setIsmenuopen(false)} className='absolute top-6 text-3xl right-6 text-white focus:outline-none cursor-pointer'>
                &times;
            </button>
            <a href="#home" onClick={()=>setIsmenuopen(false)} className={`text-2xl font-semi-bold text-white my-4 transform transition-transform duration-300 ${ismenuopen?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`}>Home</a>
            <a href="#about" onClick={()=>setIsmenuopen(false)} className={`text-2xl font-semi-bold text-white my-4 transform transition-transform duration-300 ${ismenuopen?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`}>About</a>
            <a href="#projects" onClick={()=>setIsmenuopen(false)} className={`text-2xl font-semi-bold text-white my-4 transform transition-transform duration-300 ${ismenuopen?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`}>Projects</a>
            <a href="#contact" onClick={()=>setIsmenuopen(false)} className={`text-2xl font-semi-bold text-white my-4 transform transition-transform duration-300 ${ismenuopen?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`}>Contact</a>
        </div>
    )
}

export default MobileMenu
