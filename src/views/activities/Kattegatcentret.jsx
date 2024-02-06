import React, { useEffect, useState } from 'react';
import useRequestData from '../../hooks/useRequestData';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { TiSocialPinterest } from "react-icons/ti";

const Kattegatcentret = () => {
  
  const [records, setRecords] = useState([]);

  const { data, isLoading, error, makeRequest } = useRequestData();

  const { data: activityData, isLoading:activityLoading, error:activityError, makeRequest:activityMakeRequest } = useRequestData();



  useEffect(() => {
    makeRequest("https://api.airtable.com/v0/appdVuqpV8gkE6Oz1/kattegatcentret?sort[0][field]=Id", 

    "GET", null, {
      'Authorization': "Bearer " + import.meta.env.VITE_APP_AIRTABLEAPIKEY
    });
  }, []);

  useEffect(() => {
    activityMakeRequest("https://api.airtable.com/v0/appdVuqpV8gkE6Oz1/aktiviteter?filterByFormula=Id=1", 

    "GET", null, {
      'Authorization': "Bearer " + import.meta.env.VITE_APP_AIRTABLEAPIKEY
    });
  }, []);

 
  useEffect(() => {
    if (data && data.records) {
      setRecords(data.records);
    }
  }, [data]);

  if (isLoading) return <Loader />;
  if (error) return <Error message={error} />;


  return (
  <article className="max-w-4xl mx-auto my-8 p-5 bg-white shadow-lg rounded-lg">
     <h1 className='mb-6 text-4xl font-bold text-center text-gray-800'>Kattegatcentret</h1>

  
      {isLoading && <Loader />}
    
     {error && <h2 className='text-red-600'>Error... </h2>}

     {
      activityData && activityData.records &&
      <img className="w-full h-100 object-cover rounded-lg" src={activityData.records[0].fields.image[0].url} alt="pingvinner" />
     }

     { data && data.records.map(k => 
      <div key={k.id} className='my-5'>
        <p className='text-2xl font-semibold'>{k.fields.Title}</p>
        <p className="leading-8 text-gray-600 pt-2 pb-4">{k.fields.Description}</p>
      </div>) 
    }
    <div class="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center">
      <div>
        <a href="https://www.facebook.com/people/Danhostel-Gjerrild-Vandrerhjem/100085306731927/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center">
          <SlSocialFacebook  className="text-blue-600 text-3xl"/>
        </a>
      </div>

      <div>
        <a href="https://www.pinterest.com/pin/create/button/?url=https://gjerrildvandrerhjem.dk/places/rodos/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center">
          <TiSocialPinterest className="text-red-600 text-3xl"/>
        </a>
      </div>

      <div>
        <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fgjerrildvandrerhjem.dk%2Fplaces%2Frodos%2F" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center">
          <SlSocialTwitter class="w-6 h-6 text-black-500"/>
        </a>
      </div>
</div>

  
  </article>
      

  )
}

export default Kattegatcentret
