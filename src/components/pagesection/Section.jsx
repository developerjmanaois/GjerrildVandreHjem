import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData';

const Section = () => {

  const { data, makeRequest } = useRequestData();

  useEffect( () => {

    makeRequest( "https://api.airtable.com/v0/appdVuqpV8gkE6Oz1/Header", "GET", null,

    { "Authorization": "Bearer " + import.meta.env.VITE_APP_AIRTABLEAPIKEY }
    
    )

}, [] )

  return (
    <div>
      <div className='flex pt-28 max-w-screen-lg mx-auto'>
        <div className=''>
          <img src="assets/Billeder/Natur/strand3.jpg" alt="" className='bg-cover w-full h-3/4 rounded-3xl'/>
        </div>
          { data && data.records &&
            <div className='ml-6 mt-16 text-center'>
              <h1 className='text-4xl mb-8 font-bold'>{data.records[1].fields.content}</h1>
              <p className='font-normal text-sm'>{data.records[5].fields.content}</p>
              <button className='mt-16 border border-solid secBtn uppercase py-2 px-4 rounded text-slate-700 text-xs'><Link>{data.records[3].fields.content}</Link></button>
            </div>
          }
      </div>
    </div>
  )
}

export default Section
