import React, { useState } from 'react'
import RevealOnScroll from '../RevealOnScroll'
import emailjs from 'emailjs-com'
const Contact = () => {
  const [formdata, setFormdata] = useState({
    name:"",
    email:"",
    message:"",
  })
 
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result)=>{
      alert("Message sent!");
      setFormdata({name:"", email:"", message:""});
    }).catch((error)=>{
      alert("Oops! Something went wrong, please try again later.");
    })
  }


  return (
    <section id="contact" className='min-h-screen flex items-center justify-center py-20'>
      <RevealOnScroll>
        <div className='px-4 w-150'>
          <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'> Get in touch</h2>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div className='relative'>
              <input value={formdata.name} type="text" id='name' name='name' required className='w-full bg-white/5  border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
              onChange={(e)=>setFormdata({...formdata,name:e.target.value})}
              placeholder='Name...'/>
            </div>
            <div className='relative'>
              <input value={formdata.email} type="email" id='email' name='email' required className='w-full bg-white/5  border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
              onChange={(e)=>setFormdata({...formdata,email:e.target.value})}
              placeholder='example@gmail.com'/>
            </div>
            <div className='relative'>
              <textarea value={formdata.message} id='message' name='message' required
              rows={5} className='w-full bg-white/5  border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
              onChange={(e)=>setFormdata({...formdata,message:e.target.value})}
              placeholder='Your message...'/>
            </div>
            <button type='submit' className='w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relataive overflow-hidden  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'>
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default Contact
