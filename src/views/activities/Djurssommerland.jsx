import React, { useEffect, useState } from 'react';
import useRequestData from '../../hooks/useRequestData';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { TiSocialPinterest } from "react-icons/ti";

const Djurssommerland = () => {
  
  const [records, setRecords] = useState([]);

  const { data, isLoading, error, makeRequest } = useRequestData();

  const { data: activityData, isLoading:activityLoading, error:activityError, makeRequest:activityMakeRequest } = useRequestData();



  useEffect(() => {
    makeRequest("https://api.airtable.com/v0/appdVuqpV8gkE6Oz1/djurssommerland?sort[0][field]=id", 

    "GET", null, {
      'Authorization': "Bearer " + import.meta.env.VITE_APP_AIRTABLEAPIKEY
    });
  }, []);

  useEffect(() => {
    activityMakeRequest("https://api.airtable.com/v0/appdVuqpV8gkE6Oz1/aktiviteter?filterByFormula=Id=2", 

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


  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'facebook':
        return <SlSocialFacebook className="text-blue-600 text-3xl"/>;
      case 'twitter':
        return <SlSocialTwitter  className="text-blue-400 text-3xl"/>;
      case 'pinterest':
        return <TiSocialPinterest  className="text-red-600 text-3xl"/>;
      default:
        return null;
    }
  };



  return (
  <article className="max-w-4xl mx-auto my-8 p-5 bg-white shadow-lg rounded-lg">

  
      {isLoading && <Loader />}
    
     {error && <h2 className='text-red-600 text-xl font-bold'>Error... </h2>}

     {
      activityData && activityData.records &&
      <img className="w-full h-64 object-cover rounded-lg" src={activityData.records[0].fields.image[0].url} alt="pingvinner" />
     }

     { data && data.records.map(k => 
      <div key={k.id} className='my-5'>
        <p className='text-lg font-semibold'>{k.fields.Title}</p>
        <p className="text-gray-600">{k.fields.Description}</p>
      </div>) 
    }
   <div className="flex items-center space-x-4 mt-4">
      <h3 className="font-bold text-lg">DEL:</h3>
      {renderIcon('facebook')}
      {renderIcon('pinterest')}
      {renderIcon('twitter')}
    </div>
  </article>
      

  )
}

export default Djurssommerland

