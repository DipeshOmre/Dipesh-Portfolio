import React from 'react'
import RevealOnScroll from '../RevealOnScroll';

const About = () => {
  const frontendSkills = ["React",
    "tailwindcss",
    "Redux",
    "JavaScript",
    "CSS",];
  const backendSkills = ["Node.js", "Express.js", "MongoDB", "JWT", "RESTful APIs"];
  const problemSolvingSkills = ["Data Structures", "Algorithms"];
  const programmingSkills = ["CPP", "Java", "Python", "javascript", "Golang"];
  return (
    <section id='about' className='min-h-screen flex items-center justify-center py-10 md:py-20'>
      <RevealOnScroll>

        <div className='max-w-3xl mx-auto px-2 sm:px-4'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent'>About Me</h2>
          <div className='glass rounded-xl border border-white/10 hover:-translate-y-1 transition-all p-4 sm:p-8'>
            <p className='text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg'>
              Focused on writing clean, maintainable code while continuously learning and implementing the latest in web technology trends.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>

              <div className='rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all'>
                <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-4'>
                  Frontend
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {frontendSkills.map((tech, key) => {
                    return (<span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0__2px_8px_rgba(59,130,246,0.2)] transition'>
                      {tech}
                    </span>)
                  })}
                </div>
              </div>

              <div className='rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all'>
                <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-4'>
                  Backend
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {backendSkills.map((tech, key) => {
                    return (<span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0__2px_8px_rgba(59,130,246,0.2)] transition'>
                      {tech}
                    </span>)
                  })}
                </div>
              </div>

              <div className='rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all'>
                <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-4'>
                  Problem Solving
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {problemSolvingSkills.map((tech, key) => {
                    return (<span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0__2px_8px_rgba(59,130,246,0.2)] transition'>
                      {tech}
                    </span>)
                  })}

                  <div className='border border-blue-500 text-blue-500 py-1 px-3 rounded-xl text-sm hover:bg-blue-500/20 hover:shadow-[0__2px_8px_rgba(59,130,246,0.2)] transition w-fit'>
                    <a href="https://leetcode.com/u/Ronnie231_/" target='_blank'>Coding Profile-</a>
                  </div>
                </div>
              </div>
              
              <div className='rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all'>
                <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-4'>
                  Programming Languages
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {programmingSkills.map((tech, key) => {
                    return (<span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0__2px_8px_rgba(59,130,246,0.2)] transition'>
                      {tech}
                    </span>)
                  })}
                </div>
              </div>
            </div>
          </div>


          <div className='grid grid-cols-1 md:grid-cols-2 mt-6 sm:mt-8 gap-4 sm:gap-6'>
            <div className='p-4 sm:p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
              <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-4'>Education</h3>
              <ul className='list-disc list-inside text-gray-300 space-y-2 text-base sm:text-lg'>
                <li>
                  <strong>B.Tech in Artificial Intelligence and Machine learning</strong>- Rajiv Gandhi Proudyogiki Vishwavidyalaya 2022 - 2026
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web development, Machine learning
                </li>

              </ul>
            </div>
            <div className='p-4 sm:p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
              <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-4'>Work Experience</h3>
              {/* <div className='space-y-4 text-gray-300 '>
              <div>
                <h4 className='font-semibold'>Web Developer</h4>
                <p>MERN Stack Developer with experience in building full-stack web applications using MongoDB, Express.js, React, and Node.js. Passionate about creating scalable and efficient solutions.</p>
              </div>

            </div> */}


              <div >
                <h4 className='font-semibold'>AI-ML Virtual Internship {2024}</h4>
                <p>
                  {/* add the description here that what you did in your internship */}
                  Completed a virtual internship in AI/ML where I worked on developing machine learning models
                </p>
              </div>
            </div>


          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default About
