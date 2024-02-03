import React, { useEffect,useState }from 'react'
import useRequestData from '../hooks/useRequestData';
import Loader from '../components/Loader';
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { LuPhone } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import { GoMail } from "react-icons/go";


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

    <footer className="text-gray-700 p-6 md:p-6">
      
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-screen-lg mx-auto py-6">
      <div className='grid justify-center items-center'>
        <div>
          <img src="assets/Billeder/Galleri/NewLogo.png" alt="" className='w-36'/>
        </div>
        <div className='flex my-6 items-center gap-2'>
          <div>
            <a href="https://www.facebook.com/people/Danhostel-Gjerrild-Vandrerhjem/100085306731927/" target="_blank" rel="noopener noreferrer">
            <TiSocialFacebook className='size-6 text-blue-500'/>
            </a>
          </div>
          <div className='text-sm w-32'>
            <a href="https://www.instagram.com/gjerrildvandrerhjem.dk/" target="_blank" rel="noopener noreferrer">
            <SlSocialInstagram className='size-4 text-pink-600'/>
            </a>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className='text-md font-semibold mb-3'>Nyttig Links</h3>
        <div className='flex items-center gap-2 text-xs'>
          <a href="#">Events</a>
        </div> 
        <div className='flex items-center gap-2 text-xs my-1'>
          <a href="#">Nyheder</a>
        </div>
        <div className='flex items-center gap-2 text-xs'>
          <a href="#">Aktiviteter</a>
        </div>
        <div className='flex items-center gap-2 text-xs mt-1'>
          <a href="#">Career</a>
        </div>
      </div>

      <div>
        <h3 className='text-md font-semibold mb-3'>Kontakt Os</h3>
        <div className='flex items-center gap-2 text-xs'>
          <FiMapPin className='text-xs'/>
          <a href={mapLink} target="_blank" rel="noopener noreferrer" className='not-italic hover:underline'>
            {address}
          </a>
        </div> 
        <div className='flex items-center gap-2 text-xs my-3'>
          <div><LuPhone /></div>
          <div><a href="tel:+4540224199">+4540224199</a></div>
        </div>
        <div className='flex items-center gap-2 text-xs'>
          <div><GoMail /></div>
          <div><a href="mailto:info@gjerrildvandrerhjem.dk">info@gjerrildvandrerhjem.dk</a></div>
        </div>
      </div>

      <div>
        <h3 className='text-md font-semibold mb-2 ml-3'>Travelers' Choice</h3>
        <div className='flex'>
          <div className='mt-1'>
            {data && data.records && data.records[1] && data.records[1].fields.image && (
              <a href="https://dk.trustpilot.com/review/www.gjerrild-kro.dk">
                <img
                src={data.records[1].fields.image[0].url}
                alt="Travelers' Choice Logo"
                className='w-20'
                />
              </a>
            )}
          </div>
          <div className='mb-2'>
            {data?.records?.[2]?.fields.image && (
              <img 
              src={data.records[3].fields.image[0].url} 
              alt="Certificate" 
              className="w-12 mt-4"/>
            )}
          </div>
        </div>
      </div>

      
    </div>
 
    <div className="text-center mt-4">
      <p className='text-xs'>© 2024 Gjerrildvandrehjem™.com. All rights reserved.</p>
      
    </div>
  </footer>
  
  )
}


export default Footer