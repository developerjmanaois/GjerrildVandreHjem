import React, { useState } from 'react'
import Header from '../components/pageheader/Header'
import Section from '../components/pagesection/Section'
import Galleri from '../components/galleri/Galleri'
import MailList from '../components/mailList/MailList'
import SearchItem from '../components/searchItem/SearchItem'
import Data from './Data'

const Home = () => {

  return (

    <section>
      <Header />
      <Section />
      <SearchItem />
      <Galleri />
      <MailList />
    </section>
  )
}

export default Home