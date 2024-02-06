import React, { useState } from 'react'
import Header from '../components/pageheader/Header'
import Section from '../components/pagesection/Section'
import Galleri from '../components/galleri/Galleri'
import MailList from '../components/mailList/MailList'
import Rooms from '../components/rooms/Rooms'
import useRequestData from '../hooks/useRequestData'
import Loader from '../components/Loader'
import Aktiviteter from '../components/activities/Aktiviteter'

const Home = () => {
  
  const { data, isLoading, error, makeRequest } = useRequestData();
  
  return (

    <section>
      
      { isLoading && <Loader /> }
      { error && <h2>Error ...</h2> }

      <Header />
      <Section />
      <Galleri />
      <Rooms />
      <Aktiviteter />
      <MailList />
    </section>
  )
}

export default Home