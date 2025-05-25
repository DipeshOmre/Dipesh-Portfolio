import React from 'react'

const MobileMenu = ({ ismenuopen, setIsmenuopen }) => {
    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${ismenuopen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>
            <button onClick={()=>setIsmenuopen(false)} className='absolute top-6 text-3xl right-6 text-white focus:outline-none cursor-pointer'>
                &times;
            </button>
        </div>
    )
}

export default MobileMenu
