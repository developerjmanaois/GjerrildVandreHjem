import React, { useEffect, useState } from 'react'

import useRequestData from '../hooks/useRequestData';
import Loader from '../components/Loader';
import Error from '../components/Error';


const About = () => {

  const {data, isLoading, error, makeRequest} = useRequestData();

  const [aboutData, setAboutData] = useState(null);

 
  //useEffect for GET REQUEST

  useEffect(()=> {
    makeRequest("https://api.airtable.com/v0/appdVuqpV8gkE6Oz1/About_Us", 
    "GET", null,
    {
      'Authorization': "Bearer " + import.meta.env.VITE_APP_AIRTABLESHOPPING_TOKEN
    } )
  }, [])

  

  const aboutInfo = data?.records?.[0]?.fields;
    return (
      <section className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Om os</h2>
        {aboutInfo && (
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className='lg:w-1/2 text-center lg:text-left'>
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">{aboutInfo.Name}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{aboutInfo.About}</p>
            </div>
            {aboutInfo.image && (
              <div className="lg:w-1/2 flex justify-center">
                <img 
                src={aboutInfo.image[0].url} 
                alt={aboutInfo.Name} 
                className="w-full h-auto max-w-md lg:max-w-lg mx-auto rounded shadow-lg"
              />      
              </div>
            )}
          </div>
        )}
      </section>
    );
  }
  
  export default About;