import React, { useState } from 'react'
import LeafletMap from '../components/LeafletMap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [ submissionStatus, setSubmissionStatus ] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you would typically send the data to a server
      console.log(formData); // For demonstration purposes
      setSubmissionStatus('Tak for din besked, vi kontakter dig hurtigst muligt.');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      setSubmissionStatus('Der opstod en fejl, og din besked blev ikke sendt. Prøv igen senere.');
    }
  };


  return (
    <div className='max-w-lg mx-auto p-4'>
      <h2 className="text-center text-xl font-bold">Kontakt Os</h2>
      <form onSubmit={handleSubmit} className='mt-4'>
        <input 
          type="text" 
          name="name" 
          value={formData.name}
          onChange={handleChange} 
          placeholder="Your Name" 
          required 
          className='w-full p-2 mt-2 border border-gray-300 rounded'
        />
        <br />
        <input 
          type="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange} 
          placeholder="Your Email" 
          required 
          className='w-full p-2 mt-2 border border-gray-300 rounded'
          
        />
        <br />
        <textarea 
          name="message" 
          value={formData.message}
          onChange={handleChange} 
          placeholder="Your Message" 
          required 
          className='w-full p-2 mt-2 border border-gray-300 rounded's
        />
        <br />
        <button type="submit" className='px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700'>Send Besked</button>
      </form>

      {submissionStatus && <p className="mt-4 text-center text-green-500">{submissionStatus}</p>}

      <div className="mt-8">
        <h3 className="text-center text-xl font-bold">Find Os</h3>
        <LeafletMap />
      </div>
    </div>
  )
}

export default Contact
