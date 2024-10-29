import React from 'react'

const Contact = () => {
  return (
    <div className='mt-20 flex flex-col items-center justify-center'>
      <h1 className='text-white uppercase text-2xl font-bold'>
        Contact <span className='text-[#08D665]'>Us</span>
      </h1>
      <form className='flex flex-col mt-10 gap-4 items-center justify-center w-full max-w-md'>
        <input 
          className='bg-black w-full border border-white text-white p-2 outline-none focus:border-[#08D665]' 
          type="text" 
          placeholder='Name' 
        />
        
        <div className='flex w-full gap-4'>
          <input 
            className='bg-black w-1/2 border border-white text-white p-2 outline-none focus:border-[#08D665]' 
            type="email" 
            placeholder='Email' 
          />
          <input 
            className='bg-black w-1/2 border border-white text-white p-2 outline-none focus:border-[#08D665]' 
            type="text" 
            placeholder='Subject' 
          />
        </div>
        
        <textarea 
          className='bg-black w-full border border-white text-white p-2 outline-none focus:border-[#08D665]' 
          placeholder='Your Message'
        ></textarea>
        
        <button 
          className='text-center bg-[#08D665] text-white rounded-full p-2 px-6'>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
