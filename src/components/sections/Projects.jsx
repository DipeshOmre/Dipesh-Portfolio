import React from 'react'
import RevealOnScroll from '../RevealOnScroll';

const Projects = () => {
  return (
    <section id='projects' className='min-h-screen flex items-center justify-center py-10 md:py-20'>
      <RevealOnScroll>
        <div className='max-w-5xl mx-auto px-2 sm:px-4'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
            Featured Projects
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>

             <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 
          hover:border-blue-500/30
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'>
              <h3 className='text-xl font-bold mb-2'>Weather App</h3>
              <p className='text-gray-400 mb-4'>A responsive web application built using HTML, CSS, and JavaScript that fetches real-time weather data from a public Weather API. Users can search for any city to view current temperature, weather conditions, humidity, and wind speed. The app features a clean UI with dynamic data updates.</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {["Html", "Css", "JavaScript", "Responsive design"].map((tech, key) => {
                  return (
                    <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0__2px_8px_rgba(59,130,246,0.1)] transition-all'>
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className='flex justify-between items-center'>
                <a href="https://github.com/DipeshOmre/Weather-app" target='_blank' className='text-blue-400 
              hover:text-blue-300 transition-colors margin my-4 '>View Project -</a>
              </div>
            </div>

            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 
          hover:border-blue-500/30
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'>
              <h3 className='text-xl font-bold mb-2'>Spotify Clone</h3>
              <p className='text-gray-400 mb-4'>Built a Spotify clone using HTML, CSS, and JavaScript, focusing on creating a responsive and interactive music streaming interface. Implemented features like play/pause, track navigation, and a dynamic playlist</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {["Html", "Css", "JavaScript", "Responsive design"].map((tech, key) => {
                  return (
                    <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0__2px_8px_rgba(59,130,246,0.1)] transition-all'>
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className='flex justify-between items-center'>
                <a href="https://github.com/DipeshOmre/SPOTIFY-clone" className='text-blue-400 
              hover:text-blue-300 transition-colors margin my-4 '>View Project -
                  {/* Add your github project link in the href */}
                </a>
              </div>
            </div>


            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 
          hover:border-blue-500/30
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'>
              <h3 className='text-xl font-bold mb-2'>Gemini Clone</h3>
              <p className='text-gray-400 mb-4'>A fully responsive Gemini-inspired AI interface clone built using React. This project mimics the layout and user experience of Google's Gemini AI, featuring a clean UI, interactive components, and smooth transitions. Developed using modern frontend techniques with custom styling and functional interactivity.</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {["Html", "Css", "JavaScript", "React", "Responsive design"].map((tech, key) => {
                  return (
                    <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0__2px_8px_rgba(59,130,246,0.1)] transition-all'>
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className='flex justify-between items-center'>
                <a href="https://github.com/DipeshOmre/My-Gemini" target='_blank' className='text-blue-400 
              hover:text-blue-300 transition-colors margin my-4 '>View Project -</a>
              </div>
            </div>

            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 
          hover:border-blue-500/30
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'>
              <h3 className='text-xl font-bold mb-2'>ASCII Image generator</h3>
              <p className='text-gray-400 mb-4'>This is a unique web-based project that converts images or video frames into dynamic ASCII art using the p5.js library. Instead of displaying images in pixels, the application represents visuals using ASCII characters, creating a retro, text-based visual experience. The effect runs in real-time, making it appear like a live video made of ASCII symbols.</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {["Html", "Css", "JavaScript", "p5.js"].map((tech, key) => {
                  return (
                    <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0__2px_8px_rgba(59,130,246,0.1)] transition-all'>
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className='flex justify-between items-center'>
                <a href="https://github.com/DipeshOmre/Ascii-image-generator" className='text-blue-400 
              hover:text-blue-300 transition-colors margin my-4 '>View Project -
                  {/* Add your github project link in the href */}
                </a>
              </div>
            </div>

            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 
          hover:border-blue-500/30
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'>
              <h3 className='text-xl font-bold mb-2'>React Password Manager</h3>
              <p className='text-gray-400 mb-4'>React Password Manager is a simple yet functional web application built using the MERN stack that allows users to securely store and manage their passwords. It features a clean and responsive UI built with Tailwind CSS, and provides all basic CRUD operations for managing credentials.</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {["Html", "Css", "JavaScript", "Tailwind", "MongoDb", "Express", "Node.js", "React"].map((tech, key) => {
                  return (
                    <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0__2px_8px_rgba(59,130,246,0.1)] transition-all'>
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className='flex justify-between items-center'>
                <a href="https://github.com/DipeshOmre/React-Password-Manager" target='_blank' className='text-blue-400 
              hover:text-blue-300 transition-colors margin my-4 '>View Project -</a>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default Projects
