import React, { useState } from 'react'
import Section from '../components/pagesection/Section'
import Galleri from '../components/galleri/Galleri'
import MailList from '../components/mailList/MailList'
import Rooms from '../components/rooms/Rooms'
import useRequestData from '../hooks/useRequestData'
import Loader from '../components/Loader'
import Aktiviteter1 from '../components/activities/Aktiviteter1'

const Home = () => {
  
  const { data, isLoading, error, makeRequest } = useRequestData();
  
  return (

    <section>
      
      { isLoading && <Loader /> }
      { error && <h2>Error ...</h2> }

      <Section />
      <Galleri />
      <Rooms />
      <Aktiviteter1 />
    </section>
  )
}

export default Home