import { useState, useEffect } from 'react';
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
import useRequestData from '../../hooks/useRequestData';
import Loader from '../Loader';

const Header = () => {

    const { data, isLoading, error, makeRequest } = useRequestData();

    useEffect( () => {

        makeRequest( "https://api.airtable.com/v0/appdVuqpV8gkE6Oz1/Header", "GET", null,

        { "Authorization": "Bearer " + import.meta.env.VITE_APP_AIRTABLEAPIKEY }
        
        )

    }, [] )

    const headerItems = [
        { id: 1, icon: <FaBed className='icon' />, href: '/værelse', label: 'Værelse' },
        { id: 2, icon: <RiRestaurantLine className='icon' />, href: '/restaurant', label: 'Restaurant' },
        { id: 3, icon: <MdOutlineLocalActivity className='icon' />, href: '/aktiviteter', label: 'Aktiviteter' },
        { id: 4, icon: <MdOutlineEmojiEvents className='icon'/>, href: '/events', label: 'Events' },
        { id: 5, icon: <MdOutlineMeetingRoom className='icon'/>, href: '/konference', label: 'Konference' },
        { id: 6, icon: <IoNewspaperOutline className='icon'/>, href: '/nyheder', label: 'Nyheder' },
        { id: 7, icon: <GrGallery className='icon'/>, href: '/galleri', label: 'Galleri' },
        { id: 8, icon: <SlPeople className='icon'/>, href: '/omos', label: 'Om os' },
    ];

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

        { isLoading && <Loader /> }
        { error && <h2>Error ...</h2> }

        <div className="headerContainer">

        <div className="headerList">
            {headerItems.map(item => (
            <div key={item.id} className='headerListItem'>
                {item.icon}
                <a href={item.href}><span>{item.label}</span></a>
            </div>
            ))}
        </div>

        <div className='flex'>
        { data && data.records && (
            <div className='px-4 pt-8'>
                <h1 className="headerTitle text-4xl font-bold leading-tight">
                    {data.records[2].fields.content}
                </h1>
                <p className='headerDesc text-sm font-small leading-tight'>
                    {data.records[4].fields.content}
                </p>
                <p className='headerDesc text-xs max-w-2xl font-small leading-snug'>
                    {data.records[0].fields.content}
                </p>
            </div>
        )}
            <div className='px-12'>
                <img src="assets/Billeder/Vandrerhjem/Frontbanner.jpg" alt=""  className='opacity-80 rounded'/>
            </div>
        </div>

            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FaBed className='headerIcon'/>
                    <span className='headerSearchText text-xs'>Tjekke tilgængelighed</span>
                </div>
                <div className="headerSearchItem">
                    <FaRegCalendarAlt className='headerIcon'/>
                    <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText text-xs'>{`${format(date[0].startDate, "MM/dd/yyyy")}`}</span>
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
                    <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText text-xs'>{`${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    </div>
                    
                <div className="headerSearchItem">
                    <IoMdPerson className='headerIcon'/>
                    <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText text-xs'>{`${options.adult} adult ‧ ${options.children} children ‧ ${options.room} room`}</span>
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
