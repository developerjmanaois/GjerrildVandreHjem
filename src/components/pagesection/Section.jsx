import React from 'react'
import { Link } from 'react-router-dom'

const Section = () => {
  return (
    <div>
      <div className='flex py-36 max-w-screen-lg mx-auto'>
        <div>
            <img src="assets/Billeder/Natur/strand3.jpg" alt="" />
        </div>
        <div className='ml-6 mt-16 text-center'>
            <h1 className='text-4xl mb-8 font-bold'>Essens af Gjerrild Vandrerhjem</h1>
            <p className='font-normal'>I Gjerrild oplever du alt det bedste Norddjursland har at byde på og vi er stolte af, at vandrerhjemmet er placeret her. Bygningen er en flot, gammel togremisse og har fungeret som vandrerhjem siden d. 22. juni 1973, hvor de første gæster overnattede. Bygningerne er blevet flot vedligeholdt gennem årene og der kommer til at ske grønne tiltag i løbet af de næste år for at hjælpe vandrerhjemmet ind i fremtiden på en mere bæredygtig måde.</p>
            <button className='mt-16 border border-solid navBtn uppercase py-2 px-4 rounded text-slate-500 text-xs'><Link>Mere om os</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Section
