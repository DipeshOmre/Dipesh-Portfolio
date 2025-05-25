import React from 'react'
const Home = () => {
    return (
        <section id="home" className='min-h-screen flex items-center justify-center relative'>
            <div className='text-center z-10 px-4'>
                <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text 
                text-transparent leading-tight'>
                    Hi, I'm Dipesh Omre
                </h1>
                <p className='text-gray-400 text-lg mb-8 max-w-lg mx-auto'>
                    I'm a MERN Stack Developer who builds fast, scalable, and user-focused web applications using MongoDB, Express, React, and Node.js.
                </p>
                <div className='flex space-x-4 justify-center'>
                    <a href='#projects' className="bg-blue-500 text-white px-6 py-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        View Projects
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home
