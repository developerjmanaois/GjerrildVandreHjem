import React, { useEffect,useState }from 'react'

import useRequestData from '../hooks/useRequestData';

import Loader from '../components/Loader';

import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";

const Footer = () => {

  const {data, isLoading, error, makeRequest} = useRequestData();

//useEffect for GET REQUEST

  useEffect(()=> {
    makeRequest("https://api.airtable.com/v0/appdVuqpV8gkE6Oz1/footer", 
    "GET", null,
    {
      'Authorization': "Bearer " + import.meta.env.VITE_APP_AIRTABLESHOPPING_TOKEN
    } )
  }, [  ])

  

  return (

    <footer className='bg-gray-100 p-4'>


      {isLoading && <Loader />}

      { error && <h2 className='text-red-600'> Error...</h2>}

      <section>
        {
          data && data.records.map( f =>
          <div key={f.id}>
            {/**Displaying the logo image */}
          
          </div>
            
          )
        }
      </section>
      <div>
        <h3>NYTTIGE LINKS</h3>
        <div>
          <h4>Galleri</h4>
        </div>
        <div>
          <h4>Kontakt</h4>
        </div>
      </div>

      <div>
        <h4>KONTAKT os</h4>
        <p>Address</p>
        <p>telephone number</p>
        <p>email-address</p>
      </div>
   
      
      <div className="flex justify-between items-center mx-40">
        <div>
           <p> © 2023 Gjerrild vandrerhjem. All Rights Reserved.</p>
        </div>
        <div className='flex space-x-4'>
          <p className='text-indigo-700 text-xl'><TiSocialFacebook size="2em" /></p>
          <p className='text-red-700 text-xl'>
          <SlSocialInstagram size="2em" />
          </p>
        
          </div>
          
      </div>
    </footer>
  )
}

export default Footer