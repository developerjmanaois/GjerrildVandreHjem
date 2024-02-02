import React, { useState } from 'react';
import './header.css';
import { FaBed } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { DateRange } from 'react-date-range';
import { MdOutlineLocalActivity } from "react-icons/md";
import { RiRestaurantLine } from "react-icons/ri";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { SlPeople } from "react-icons/sl";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult:1,
        children:0,
        room:1,
    })

    const navigate = useNavigate()

    const handleOption = ( name, operation ) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    const handleSearch = () => {
        navigate("/hotel", { state: { destination, date, options } })
    }

  return (
    <div className='header'>
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                    <FaBed className='icon'/>
                    <span>Værelse</span>
                </div>
                <div className="headerListItem">
                    <RiRestaurantLine className='icon'/>
                    <span>Restaurant</span>
                </div>
                <div className="headerListItem">
                    <MdOutlineLocalActivity className='icon'/>
                    <span>Aktiviteter</span>
                </div>
                <div className="headerListItem">
                    <MdOutlineEmojiEvents className='icon'/>
                    <span>Events</span>
                </div>
                <div className="headerListItem">
                    <MdOutlineMeetingRoom className='icon'/>
                    <span>Konference</span>
                </div>
                <div className="headerListItem">
                    <IoNewspaperOutline className='icon'/>
                    <span>Nyheder</span>
                </div>
                <div className="headerListItem">
                    <GrGallery className='icon'/>
                    <span>Galleri</span>
                </div>
                <div className="headerListItem">
                    <SlPeople className='icon'/>
                    <span>Om os</span>
                </div>
                
            </div>

            <div className='flex'>
                    <div className='px-4 pt-8'>
                        <h1 className="headerTitle text-4xl font-bold leading-tight">
                            Gjerrild Vandrerhjem
                        </h1>
                        <p className='headerDesc text-sm font-small leading-tight'>
                            På toppen af Djursland - med dig i centrum.
                        </p>
                        <p className='headerDesc text-xs max-w-2xl font-small leading-snug'>
                        Vandrerhjemmet ligger skønt placeret på toppen af Djursland i den smukke by Gjerrild, mellem bøgeskove og strand. Vi har de perfekte rammer til ethvert ophold og her er altid noget at lave. Vi ligger tæt på klinter til fiskeri og gode sandstrande og der er mange børnevenlige aktiviteter og attraktioner i nem gå- og køreafstand.
                        </p>
                    </div>
                    <div className='px-12'>
                        <img src="assets/Billeder/Vandrerhjem/Frontbanner.jpg" alt=""  className='opacity-75'/>
                    </div>
                </div>

                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FaBed className='headerIcon'/>
                        <span className='headerSearchText'>Tjekke tilgængelighed</span>
                    </div>
                    <div className="headerSearchItem">
                        <FaRegCalendarAlt className='headerIcon'/>
                        <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={(item) => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date'
                            minDate={new Date()}
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FaRegCalendarAlt className='headerIcon'/>
                        <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        </div>
                        
                    <div className="headerSearchItem">
                        <IoMdPerson className='headerIcon'/>
                        <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult ‧ ${options.children} children ‧ ${options.room} room`}</span>
                        {openOptions && 
                            <div className="options">
                                <div className="optionItem">
                                    <span className='optionText'>Adult</span>
                                    <div className="optionCounter">
                                        <button disabled={options.adult <= 1} className="optionCounterBtn" onClick={()=>handleOption("adult", "d")}>-</button>
                                        <span className="optionCounterNr">{options.adult}</span>
                                        <button className="optionCounterBtn" onClick={()=>handleOption("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className='optionText'>Children</span>
                                    <div class="optionCounter">
                                        <button disabled={options.children <= 0} className="optionCounterBtn" onClick={()=>handleOption("children", "d")}>-</button>
                                        <span className="optionCounterNr">{options.children}</span>
                                        <button className="optionCounterBtn" onClick={()=>handleOption("children", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className='optionText'>Room</span>
                                    <div className="optionCounter">
                                        <button disabled={options.room <= 1} className="optionCounterBtn" onClick={()=>handleOption("room", "d")}>-</button>
                                        <span className="optionCounterNr">{options.room}</span>
                                        <button className="optionCounterBtn" onClick={()=>handleOption("room", "i")}>+</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="headerSearchItem">
                        <button className='headerBtn text-slate-500' onClick={handleSearch}>Søg</button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Header
