import React, { useState, useEffect } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import './restaurant.css'
import useRequestData from '../../hooks/useRequestData';

const Restaurant = () => {

    const [ slideNumber, setSlideNumber ] = useState(-1)
    const [ open, setOpen ] = useState(false)

    const { data, isLoading, error, makeRequest } = useRequestData();

    useEffect( () => {

      makeRequest( "https://api.airtable.com/v0/appdVuqpV8gkE6Oz1/food?filterByFormula=Id", "GET", null,

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
          newSlideNumber = slideNumber === 0 ? 11 : slideNumber -1;
        }else {
          newSlideNumber = slideNumber === 11 ? 0 : slideNumber +1;
        }
    
      
        setSlideNumber(newSlideNumber);
      };
      
      
  return (
    <div className="hotelContainer pt-20">
      <h1 className='text-2xl font-extrabold mb-6 uppercase'>vores restaurant</h1>
      <div className='max-w-4xl mx-auto text-center mb-8'>
        <p>
        På Gjerrild Vandrerhjem er vi utroligt glade for mad! Hvad end du har af ønsker, så kan vi kreere det. Vi går op i den gode smag og de gode råvarer og tager ofte verden rundt på vores buffeter. Vi går op i at så meget som muligt er hjemmelavet og er glade for hjemmebag og at sylte.
        </p> <br />
        <p>
        Vi bruger mange grøntsager og krydderier og du vil derfor opleve en buffet med rigtig mange forskellige og velsmagende retter. Der er altid gode salater på buffeten og du vil helt sikkert blive præsenteret for noget, du ikke har prøvet før.
        </p> <br />
        <p>
        Vi kører i højsæsonen buffetkoncept, hvor buffetbordet bugner af kolde og varme retter. Det er dog altid muligt at bestille bord til 6+ personer, også til en enkelt ret eller kaffe/kage. Ring til os på 40224199, hvis du vil høre mere. Vi laver morgenmad, brunch, frokost, aftensmad, kage/konfekt og snacks til alle lejligheder.
        </p> <br />
        <p>
        Vi tager altid gerne hensyn til allergier.
        </p>
      </div>
      { open && data.records && data.records.length > -1 && ( 
        <div className="rSlider">
          <IoCloseCircleOutline className='rClose' onClick={() => setOpen(false)}/>
          <FaRegArrowAltCircleLeft className='rArrow' onClick={() => handleMove("l")}/>
          <div className="rSliderWrapper">
            {data.records[slideNumber]?.fields.image && (
              <img src={data.records[slideNumber].fields.image[0].url} alt="" className='rSliderImg bg-contain bg-center modal-content' />
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
                        className='object-cover w-full h-60 rounded food-image' 
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

export default Restaurant



// import React, { useEffect, useState } from 'react';
// import useRequestData from '../hooks/useRequestData';

// const Restaurant = () => {
//     const { data, isLoading, error, makeRequest } = useRequestData();
//     const [records, setRecords] = useState([]);

//     const { data: foodData, makeRequest: foodMakeRequest } = useRequestData();

//     useEffect(() => {
//         makeRequest("https://api.airtable.com/v0/appdVuqpV8gkE6Oz1/restaurant", "GET", null, {
//           'Authorization': "Bearer " + import.meta.env.VITE_APP_AIRTABLEAPIKEY
//         });
//     }, []);

//     useEffect(() => {
//         foodMakeRequest("https://api.airtable.com/v0/appdVuqpV8gkE6Oz1/food?filterByFormula=Id", "GET", null, {
//           'Authorization': "Bearer " + import.meta.env.VITE_APP_AIRTABLEAPIKEY
//         });
//     }, []);

//     useEffect(() => {
//         if (data && data.records) {
//             setRecords(data.records);
//         }
//     }, [data]);

//     return (
//         <div className="max-w-5xl mx-auto pt-10">
            
//             {records.map((r) => (
//                 <div key={r.id}>
//                     <h2 className="text-center text-3xl font-extrabold mb-6">{r.fields.Title}</h2>
//                     <p className="text-sm leading-relaxed mb-6">{r.fields.Description}</p>
//                 </div>
//             ))}

//             <div className="food-grid grid grid-cols-4 gap-4">
//                 {foodData && foodData.records && foodData.records.map((food) => (
//                     <div key={food.id} className="food-item">
//                         <img src={food.fields.image[0].url} alt={food.fields.Name} className="food-image w-full h-full rounded-md" />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Restaurant;
