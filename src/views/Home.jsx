import React, { useState } from 'react'
import Header from '../components/pageheader/Header'
import Section from '../components/pagesection/Section'
import Galleri from '../components/galleri/Galleri'


const Home = () => {

  return (

    <section>
      <Header />
      <Section />
      <Galleri />
    </section>
  )
}

export default Home