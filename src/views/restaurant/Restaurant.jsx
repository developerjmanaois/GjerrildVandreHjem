import React, { useEffect, useState } from 'react';
import useRequestData from '../../hooks/useRequestData';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

const Restaurant = () => {

    const [records, setRecords] = useState([]);

    const { data, isLoading, error, makeRequest } = useRequestData();

    const { data: foodData, isLoading:foodLoading, error:foodError, makeRequest:foodMakeRequest } = useRequestData();

    useEffect(() => {
        makeRequest("https://api.airtable.com/v0/appdVuqpV8gkE6Oz1/restaurant", 
    
        "GET", null, {
          'Authorization': "Bearer " + import.meta.env.VITE_APP_AIRTABLEAPIKEY
        });
      }, []);

      useEffect(() => {
        foodMakeRequest("https://api.airtable.com/v0/appdVuqpV8gkE6Oz1/food?filterByFormula=Id", 
    
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
    <div>
         {isLoading && <Loader />}
    
         {error && <h2 className='text-red-600 text-xl font-bold'>Error... </h2>}

         { data && data.records.map(r => 
          <div key={r.id} className='my-5'>
            <h2 className='text-2xl font-semibold'>{r.fields.Title}</h2>
            <p className="leading-8 text-gray-600 pt-2 pb-4">{r.fields.Description}</p>
          </div>) 
         }
        <div>
            <h2>Galleri</h2>
        </div>


    </div>
  )
}

export default Restaurant
