import React, { useEffect, useState } from 'react'

import useRequestData from '../hooks/useRequestData';
import Loader from '../components/Loader';
import Error from '../components/Error';


const About = () => {

  const {data, isLoading, error, makeRequest} = useRequestData();

  const [aboutData, setAboutData] = useState(null);

  const [ natureImages, setNatureImages ] = useState([]);

 
  //useEffect for GET REQUEST for About Us(owner)

  useEffect(()=> {
    makeRequest("https://api.airtable.com/v0/appdVuqpV8gkE6Oz1/About_Us", 
    "GET", null,
    {
      'Authorization': "Bearer " + import.meta.env.VITE_APP_AIRTABLEAPIKEY
    } )
  }, [])
;



  useEffect(()=> {
    if (data && data.records) {
      setAboutData(data.records[0].fields)
    }
  }, [data])

  
  const galleryImages = aboutData?.galleryImages
 

 // Using aboutData for rendering 
    return (
      <section className="max-w-5xl mx-auto py-10 bg-white shadow-md rounded-lg mt-16">

        {isLoading && <Loader />}
        {error && <Error message="Der opstod en fejl under indlæsning af data" />}

        {aboutData && (
          <>
          <div className="flex justify-around items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-700 mb-3 text-center">{aboutData.Name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-lg">{aboutData.About}</p>
            </div>
            {aboutData.image && (
            
              <div>
                <img 
                src={aboutData.image[0].url} 
                alt={aboutData.Name} 
                className="w-72 rounded-full"
              />      
              </div>
            )}
          </div>
          
          </>
                    
        )}
      </section>
    );
  }
  
  export default About;