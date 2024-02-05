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
      <section className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Om Os</h2>

        {isLoading && <Loader />}

        {error && <Error message="Der opstod en fejl under indlæsning af data" />}

        {aboutData && (
          <>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className='lg:w-1/2 text-center lg:text-left'>
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">{aboutData.Name}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{aboutData.About}</p>
            </div>
            {aboutData.image && (
             
              <div className="lg:w-1/2 flex justify-center">
                <img 
                src={aboutData.image[0].url} 
                alt={aboutData.Name} 
                className="w-full h-auto max-w-md lg:max-w-lg mx-auto rounded shadow-lg"
              />      
              </div>
            )}
          </div>
               {/* Gallery Section */}
          {galleryImages && (
            <div className="gallery-section my-8">
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryImages.map((img, index) => (
                  <div key={index} className="gallery-item">
                    <img src={img.url} alt={`Gallery image ${index + 1}`} className="w-full h-auto rounded shadow-lg"/>
                  </div>
                ))}
              </div>
            </div>
          )}
      </>
                    
        )}
      </section>
    );
  }
  
  export default About;