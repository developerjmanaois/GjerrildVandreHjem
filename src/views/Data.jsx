import React from "react";

import { useState, useEffect } from "react";
import useRequestData from "../hooks/useRequestData"

const Data = () => {

    const { data, isLoading, error, makeRequest } = useRequestData();

    const [ currentPage, setCurrentPage ] = useState( 0 )

    useEffect( () => {

        makeRequest( "https://api.airtable.com/v0/appdVuqpV8gkE6Oz1/Footer", "GET", null,

        { "Authorization": "Bearer " +  import.meta.env.VITE_APP_AIRTABLEAPIKEY }
        
        )

    }, [] )

   

  return (
    <div>
      <h1 className='text-center text-2xl font-bold my-12'>Data List</h1>

      <div className="grid grid-cols-4 gap-4">
        {data && data.records && (
          <div className="card">
            <div className="card-body">
              <h2>{data.records[1].fields.Name}</h2>
              {data.records[1].fields.image && (
                <img
                  src={data.records[1].fields.image[0].thumbnails.large.url}
                  alt={data.records[1].fields.Name}
                  width={data.records[1].fields.image[0].thumbnails.large.width}
                  height={data.records[1].fields.image[0].thumbnails.large.height}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Data;

