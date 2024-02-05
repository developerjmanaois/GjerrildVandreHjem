import { useState } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import './galleri.css'

const Galleri = () => {

    const [ slideNumber, setSlideNumber ] = useState(-1)
    const [ open, setOpen ] = useState(false)


    const photos = [
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/251886321.jpg?k=1f27e3550d6b397bf3dfac2c3b9bb9ef9092971e09221177f594cc7b18ddcd35&o=&hp=1",
          id:1
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/181145451.jpg?k=909c90cc0e44ba26c498b883edf9bcc1f3d25b5c964775ccfafac04173799ab7&o=&hp=1",
          id:2
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/258921768.jpg?k=431ac45c1d974af895613679abf7fa965276a7b907c23c28b726dc162bde4c99&o=&hp=1",
          id:3
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/248870473.jpg?k=3d8390c13fe57b2d47ea3b640255683b33f2ae7e37bc386e3e309fa9114bbf04&o=&hp=1",
          id:4
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/251886321.jpg?k=1f27e3550d6b397bf3dfac2c3b9bb9ef9092971e09221177f594cc7b18ddcd35&o=&hp=1",
          id:5
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/251886321.jpg?k=1f27e3550d6b397bf3dfac2c3b9bb9ef9092971e09221177f594cc7b18ddcd35&o=&hp=1",
          id:6
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/251886321.jpg?k=1f27e3550d6b397bf3dfac2c3b9bb9ef9092971e09221177f594cc7b18ddcd35&o=&hp=1",
          id:7
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/251886321.jpg?k=1f27e3550d6b397bf3dfac2c3b9bb9ef9092971e09221177f594cc7b18ddcd35&o=&hp=1",
          id:8
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/251886321.jpg?k=1f27e3550d6b397bf3dfac2c3b9bb9ef9092971e09221177f594cc7b18ddcd35&o=&hp=1",
          id:9
        }
    ]

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true)
      }
    
      const handleMove = (direction) => {
        let newSlideNumber;
      
        if (direction === "l") {
          newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
        } else {
          newSlideNumber = slideNumber === photos.length - 1 ? 0 : slideNumber + 1;
        }
      
        setSlideNumber(newSlideNumber);
      };
      
      
  return (
    <div className="hotelContainer mt-20">
        { open && <div className="slider">
          <IoCloseCircleOutline className='close' onClick={() => setOpen(false)}/>
          <FaRegArrowAltCircleLeft className='arrow' onClick={() => handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className='sliderImg'/>
          </div>
          <FaRegArrowAltCircleRight className='arrow' onClick={() => handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <div className="hImages">
            {photos.map(({ src, id }, i) => (
              <div key={id} className="imgWrapper">
                <img onClick={() => handleOpen(i)} src={src} alt="" className="hImg" />
              </div>
            ))}
          </div>
          
        </div>
      
    </div>
  )
}

export default Galleri
