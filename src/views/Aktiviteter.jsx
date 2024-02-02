import React, { useEffect,useState }from 'react'

import useRequestData from '../hooks/useRequestData';

import Loader from '../components/Loader';

import Error from '../components/Error';


const Aktiviteter = () => {
  const {data, isLoading, error, makeRequest} = useRequestData();

  useEffect(()=> {
    makeRequest("https://api.airtable.com/v0/appdVuqpV8gkE6Oz1/aktiviteter", 
    "GET", null,
    {
      'Authorization': "Bearer " + import.meta.env.VITE_APP_AIRTABLESHOPPING_TOKEN
    } )
  }, [  ])
  return (
    <div>
      <h1>Oplev Djursland</h1>
      <p>Gjerrild Vandrerhjem er placeret på toppen af Djursland mellem skov og strand og alle de bedste familievenlige aktiviteter indenfor køreafstand.</p>
      <div className='activities-list'>

      </div>

    </div>
  )
}

export default Aktiviteter
