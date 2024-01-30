import React, { useEffect,useState }from 'react'

import useRequestData from '../hooks/useRequestData';

import Loader from '../components/Loader';

import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";


import { FiMapPin } from "react-icons/fi";





const Footer = () => {

  const {data, isLoading, error, makeRequest} = useRequestData();
 

  const [lat, setLat]=useState(57)
  const [ lon, setLon ] = useState(10)


//useEffect for GET REQUEST

  useEffect(()=> {
    makeRequest("https://api.airtable.com/v0/appdVuqpV8gkE6Oz1/footer", 
    "GET", null,
    {
      'Authorization': "Bearer " + import.meta.env.VITE_APP_AIRTABLESHOPPING_TOKEN
    } )
  }, [  ])


  

  return (

    <footer className="bg-gray-800 text-gray-200 p-4 md:p-6">
      
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Column 1: Contact and Social Media */}
      <div>
        <h3 className='text-lg md:text-xl font-semibold mb-2'>Kontakt Os</h3>
        <div className='flex items-center mb-2'>
          <FiMapPin className='text-xl text-red-500 mr-2' /> {/* Adjust icon size as needed */}
          <address className='not-italic'>
            Dyrehavevej 9, Grenå
          </address>
        </div> 
        <p className='mb-2'>+4540224199</p>
        <a href="mailto:info@gjerrildvandrerhjem.dk">info@gjerrildvandrerhjem.dk</a>
      </div>
    
      {/* Column 2: Booking Information */}
      <div>
        <h3 className='text-lg md:text-xl font-semibold mb-2'>Book Ophold</h3>
        <a href="mailto:booking@gjerrildvandrerhjem.dk" className="text-blue-400 hover:text-blue-500">booking@gjerrildvandrerhjem.dk</a>
      </div>
  
      {/* Column 3: Logo and Review Link */}
      <div>
          <h3 className='text-lg md:text-xl font-semibold mb-2'>Travelers' Choice</h3>
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
     
              <a 
                href="https://dk.trustpilot.com/review/www.gjerrild-kro.dk" // Replace with your actual review page URL
                className="text-blue-400 hover:text-blue-500"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Read Our Reviews
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
      <p className='text-xs md:text-sm'>© 2023 Gjerrild Vandrerhjem. All Rights Reserved.</p>
      <div className='flex space-x-2 md:space-x-4 mt-2 md:mt-0'>
        <TiSocialFacebook className='text-2xl md:text-3xl text-blue-600' /> {/* Adjust icon size as needed */}
        <SlSocialInstagram className='text-2xl md:text-3xl text-pink-600' />
      </div>
    </div>
  </footer>
  
  )
}


export default Footer