import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import './list.css'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range';
import SearchItem from '../components/searchItem/SearchItem'

const List = () => {

  const location = useLocation()

  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)

  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label>Destination</label>
              <input type="text" />
            </div>
            <div className="listItem">
              <label>Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")}`}</span>
            </div>
            <div className="listItem">
              <label>Check-out date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              { openDate && (
                <DateRange
                onChange={(item) => setDate([item.selection])}
                ranges={date}
                minDate={new Date()}
                />
              )}
            </div>
            <div className="listItem">
              <label>Option</label>
              <div className="listOptions">
                <div className="listOptionItem">
                  <span className="optionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className='optionInput' />
                </div>
                <div className="listOptionItem">
                  <span className="optionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className='optionInput' />
                </div>
                <div className="listOptionItem">
                  <span className="optionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className='optionInput' />
                </div>
                <div className="listOptionItem">
                  <span className="optionText">
                    Adult
                  </span>
                  <input type="number" min={1} className='optionInput' placeholder={options.adult}/>
                </div>
                <div className="listOptionItem">
                  <span className="optionText">
                    Children
                  </span>
                  <input type="number" min={0} className='optionInput' placeholder={options.children}/>
                </div>
                <div className="listOptionItem">
                  <span className="optionText">
                    Room
                  </span>
                  <input type="number" min={1} className='optionInput' placeholder={options.room}/>
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
