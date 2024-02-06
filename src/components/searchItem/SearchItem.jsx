import React from 'react'
import './searchitem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img className='sImg' src="assets/coffee-171653_1280.jpg" alt="" />
      <div className="sDesc">
        <h1 className="sTitle">Tower Street Apartment</h1>
        <span className='sDistance'>500m from center</span>
        <span className='sTaxi'>Free Airport Taxi</span>
        <span className='sSubtitle'>Studio Apartment with Air conditioning</span>
        <span className='sFeatures'>
            Entire studio ‧ 1 bathroom ‧ 21m² 1 full bed
        </span>
        <span className='sCancel'>Free Cancellation</span>
        <span className='sCancelSub'>
            You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="sDetails">
        <div className="sRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="sDetailtxt">
            <span className='sPrice'>$123</span>
            <span className='sTax'>Includes taxes and fees</span>
            <button className='sBtn'>See Availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
