import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className='bg-gray-100 p-4'>
      <div className="flex justify-between items-center mx-40">
        <div>
           <p> © 2023 Gjerrild vandrerhjem. All Rights Reserved.</p>
        </div>
        <div className='flex space-x-4'>
          <p className='text-indigo-700 text-xl'><TiSocialFacebook /></p>
          <p className='text-red-700 text-xl'>
          <SlSocialInstagram />
          </p>
        
          </div>
          
      </div>
    </footer>
  )
}

export default Footer