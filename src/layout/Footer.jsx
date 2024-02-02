import React, { useEffect,useState }from 'react'
import useRequestData from '../hooks/useRequestData';
import Loader from '../components/Loader';
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FiMapPin } from "react-icons/fi";


const Footer = () => {

  const {data, isLoading, error, makeRequest} = useRequestData();

  // URL encode the address
  const address = "Dyrehavevej 9, Grenå";
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

 
//useEffect for GET REQUEST

  useEffect(()=> {
    makeRequest("https://api.airtable.com/v0/appdVuqpV8gkE6Oz1/footer", 
    "GET", null,
    {
      'Authorization': "Bearer " + import.meta.env.VITE_APP_AIRTABLEAPIKEY
    } )
  }, [  ])

  return (

    <footer className="text-gray-200 p-4 md:p-6">
      
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-screen-lg mx-auto">
      {/* Column 1: Contact and Social Media */}
      <div>
        <div>
          <img src="assets/Billeder/Galleri/NewLogo.png" alt="" className='w-36'/>
        </div>
      </div>
      <div>
        <h3 className='text-lg md:text-l font-semibold mb-2'>Kontakt Os</h3>
        <div className='flex items-center mb-2'>
          <FiMapPin className='text-xl text-red-500 mr-2' /> {/* Adjust icon size as needed */}
          <a href={mapLink} target="_blank" rel="noopener noreferrer" className='not-italic hover:underline'>
        {address}
      </a>
        </div> 
        <p className='mb-2'>
        <a href="tel:+4540224199">+4540224199</a>
        </p>
        <a href="mailto:info@gjerrildvandrerhjem.dk">info@gjerrildvandrerhjem.dk</a>
      </div>
    
      {/* Column 2: Booking Information */}
      <div>
        <h3 className='text-lg md:text-l font-semibold mb-2'>Book Ophold</h3>
        <a href="mailto:booking@gjerrildvandrerhjem.dk" className="text-blue-400 hover:text-blue-500">booking@gjerrildvandrerhjem.dk</a>
      </div>
  
      {/* Column 3: Logo and Review Link */}
      <div>
          <h3 className='text-lg md:text-l font-semibold mb-2'>Travelers' Choice</h3>
          <div className='mb-4'>
            {data && data.records && data.records[1] && data.records[1].fields.image && (
              <img
                src={data.records[1].fields.image[0].url}
                alt="Travelers' Choice Logo"
                width={data.records[1].fields.image[0].width}
                height={data.records[1].fields.image[0].height}
              />
            )}
          </div>
          {/* Link to Reviews */}
     
              <a href="#" className="text-blue-400 hover:text-blue-500">
                Læse vores anmeldelser
              </a>

            {/* Column 4: Control Report, Certificates, Gjerrild Logo */}
            <div>
          {/* Control Report Smiley */}
          {data?.records?.[2]?.fields.image && (
            <img 
            src={data.records[3].fields.image[0].url} 
            alt="Certificate" 
            className="w-12 h-auto"
          />
          
          )}

       
        </div>

<div>
      
        </div>
  
        </div>
   </div>
 
  
    {/* Footer Bottom */}
    <div className="flex flex-col md:flex-row justify-between items-center mt-4">
      <div>
        <p className='text-xs md:text-sm'>© 2024 Gjerrildvandrehjem™.com. All rights reserved.</p>
      </div>
      <div className='flex space-x-2 md:space-x-4 mt-2 md:mt-0'>
        <a href="https://www.facebook.com/people/Danhostel-Gjerrild-Vandrerhjem/100085306731927/" target="_blank" rel="noopener noreferrer" className='text-2xl md:text-3xl text-blue-600'>
          <TiSocialFacebook />
        </a>
        <a href="https://www.instagram.com/gjerrildvandrerhjem.dk/" target="_blank" rel="noopener noreferrer" className='text-2xl md:text-3xl text-pink-600'>
          <SlSocialInstagram />
         </a>
      </div>
    </div>
  </footer>
  
  )
}


export default Footer