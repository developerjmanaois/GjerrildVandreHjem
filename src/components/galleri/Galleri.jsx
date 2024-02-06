import React, { useState, useEffect } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import './galleri.css'
import useRequestData from '../../hooks/useRequestData';

const Galleri = () => {

    const [ slideNumber, setSlideNumber ] = useState(-1)
    const [ open, setOpen ] = useState(false)

    const { data, isLoading, error, makeRequest } = useRequestData();

    useEffect( () => {

      makeRequest( "https://api.airtable.com/v0/appdVuqpV8gkE6Oz1/Galleri", "GET", null,

      { "Authorization": "Bearer " + import.meta.env.VITE_APP_AIRTABLEAPIKEY }
      
      )

  }, [] )

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true)
      }
    
      const handleMove = (direction) => {
        let newSlideNumber;
      
        if (direction === "l") {
          newSlideNumber = slideNumber === 0 ? 9 : slideNumber -1;
        }else {
          newSlideNumber = slideNumber === 9 ? 0 : slideNumber +1;
        }
    
      
        setSlideNumber(newSlideNumber);
      };
      
      
  return (
    <div className="hotelContainer">
      { open && data.records && data.records.length > -1 && ( 
        <div className="slider">
          <IoCloseCircleOutline className='close' onClick={() => setOpen(false)}/>
          <FaRegArrowAltCircleLeft className='arrow' onClick={() => handleMove("l")}/>
          <div className="sliderWrapper">
            {data.records[slideNumber]?.fields.image && (
              <img src={data.records[slideNumber].fields.image[0].url} alt="" className='sliderImg bg-contain bg-center modal-content' />
            )}
          </div>
          <FaRegArrowAltCircleRight className='arrow' onClick={() => handleMove("r")}/>
        </div>
      )}
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl">
        { data && data.records.map( ({ fields, id }, i) => (
          <div key={id} className="card w-80 bg-base-100 shadow-xl">
              <div>
                  
                  {fields.image && fields.image.map( image => (
                      <figure key={image.id}>
                        <img
                        onClick={() => handleOpen(i)}
                        key={image.id}
                        src={image.url}
                        alt={image.filename}
                        className='object-cover w-full h-60 rounded' 
                        />
                      </figure>
                  ))}
              </div>
          </div>
        )) }
      </div>
    </div>  
  )
}

export default Galleri

