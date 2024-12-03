import React, { useContext, useState } from 'react';
import axios from 'axios';
import { ThemeContext } from '../context/ThemeContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('https://amazing-portfolio.onrender.com/send-email', formData);
      toast.success(response.data.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message.'); // Error toast
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='mt-20 flex flex-col items-center justify-center'>
      <h1 className={` ${darkMode ? 'text-white' : 'text-gray-500'} uppercase text-2xl font-bold`}>
        Contact <span className='text-[#08D665]'>Us</span>
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col mt-10 gap-4 items-center justify-center w-full max-w-md'>
        <input 
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`${darkMode ? 'bg-black' : 'bg-white'} w-full border ${darkMode ? 'border-white' : 'border-black'} ${darkMode ? 'text-white' : 'text-black'} p-2 outline-none focus:border-[#08D665]`}
          type="text"
          placeholder='Name'
          required
        />
        <div className='flex w-full gap-4'>
          <input 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${darkMode ? 'bg-black' : 'bg-white'} border ${darkMode ? 'border-white' : 'border-black'} ${darkMode ? 'text-white' : 'text-black'} w-1/2 p-2 outline-none focus:border-[#08D665]`}
            type="email"
            placeholder='Email'
            required
          />
          <input 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`${darkMode ? 'bg-black' : 'bg-white'} border ${darkMode ? 'border-white' : 'border-black'} ${darkMode ? 'text-white' : 'text-black'} w-1/2 p-2 outline-none focus:border-[#08D665]`}
            type="text"
            placeholder='Subject'
            required
          />
        </div>
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`${darkMode ? 'bg-black' : 'bg-white'} w-full border ${darkMode ? 'border-white' : 'border-black'} ${darkMode ? 'text-white' : 'text-black'} p-2 outline-none focus:border-[#08D665]`}
          placeholder='Your Message'
          required
        ></textarea>
        <button 
          type="submit"
          className='text-center bg-[#08D665] text-white rounded-full p-2 px-6'
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default Contact;
