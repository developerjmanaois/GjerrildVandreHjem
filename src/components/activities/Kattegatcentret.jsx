import React, { useEffect, useState } from 'react';
import useRequestData from '../../hooks/useRequestData';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { TiSocialPinterest } from "react-icons/ti";
import Navbar from '../../layout/Navbar';
import MailList from '../mailList/MailList';
import Footer from '../../layout/Footer';
import Header from '../../layout/pageheader/Header';

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

  return (
    <div>
      
      <article className="max-w-5xl mx-auto my-14 p-5 bg-white shadow-lg rounded-lg">

        <h1 className='mb-6 text-4xl font-bold text-center text-gray-800'>Kattegatcentret</h1>


        {isLoading && <Loader />}
        {error && <h2 className='text-red-600'>Error... </h2>}

        {
        activityData && activityData.records &&
        <img className="w-full h-100 object-cover rounded-lg" src={activityData.records[0].fields.image[0].url} alt="pingvinner" />
        }

        { data && data.records.map(k => 
          <div key={k.id} className='my-5'>
            <h2 className='text-2xl font-bold'>{k.fields.Title}</h2>
            <p className="leading-8 text-gray-600 pt-2 pb-4">{k.fields.Description}</p>
          </div>) 
        }

      </article>
      
    </div>
      
  )
}

export default Kattegatcentret
