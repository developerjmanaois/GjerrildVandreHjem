import { useEffect, useState } from 'react';
import './searchitem.css'

const SearchItem = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > 4) {
        newIndex = 1;
      } else if (newIndex < 1) {
        newIndex = 4;
      }
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    
    slides[slideIndex - 1].style.display = 'block';
  };

  return (
    <div>
      <div className='slideshow-container'>
      
        <div className={`mySlides fade ${slideIndex === 1 ? 'active' : ''}`}>
          <div className="searchItem">
              <img src='assets/Billeder/Vandrerhjem/vaerelse2.jpg' className='w-52 h-52' alt='Slide 1' />
              <div className="sDesc">
                <h1 className="text-xl">Tower Street Apartment</h1>
                <span className='sDistance'>500m from center</span>
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
                    <button>8.9</button>
                </div>
                <div className="sDetailtxt">
                    <span className='sPrice'>$123</span>
                    <span className='sTax'>Includes taxes and fees</span>
                    <button className='sBtn'>See Availability</button>
                </div>
              </div>
          </div>
        </div>
        

        <div className={`mySlides fade ${slideIndex === 2 ? 'active' : ''}`}>
          <div className="searchItem">
            <img src='assets/Billeder/Vandrerhjem/vaerelse1.jpg' className='w-52 h-52' alt='Slide 1' />
            <div className="sDesc">
              <h1 className="sTitle">Tower Street Apartment</h1>
              <span className='sDistance'>500m from center</span>
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
                  <button>8.9</button>
              </div>
              <div className="sDetailtxt">
                  <span className='sPrice'>$123</span>
                  <span className='sTax'>Includes taxes and fees</span>
                  <button className='sBtn'>See Availability</button>
              </div>
            </div>
          </div>
        </div>

        <div className={`mySlides fade ${slideIndex === 3 ? 'active' : ''}`}>
          <div className="searchItem">
            <img src='assets/Billeder/Vandrerhjem/1000225320.jpg' className='w-52 h-52' alt='Slide 1' />
            <div className="sDesc">
              <h1 className="sTitle">Tower Street Apartment</h1>
              <span className='sDistance'>500m from center</span>
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
                  <button>8.9</button>
              </div>
              <div className="sDetailtxt">
                  <span className='sPrice'>$123</span>
                  <span className='sTax'>Includes taxes and fees</span>
                  <button className='sBtn'>See Availability</button>
              </div>
            </div>
          </div>
        </div>

        <div className={`mySlides fade ${slideIndex === 4 ? 'active' : ''}`}>
          <div className="searchItem">
            <img src='assets/Billeder/Vandrerhjem/danhostel-gjerrild.jpg' className='w-52 h-52' alt='Slide 1' />
            <div className="sDesc">
              <h1 className="sTitle">Tower Street Apartment</h1>
              <span className='sDistance'>500m from center</span>
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
                  <button>8.9</button>
              </div>
              <div className="sDetailtxt">
                  <span className='sPrice'>$123</span>
                  <span className='sTax'>Includes taxes and fees</span>
                  <button className='sBtn'>See Availability</button>
              </div>
            </div>
          </div>
        </div>
        <a className='prev' onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className='next' onClick={() => plusSlides(1)}>
          ❯
        </a>
      </div>
    </div>
  );
};

export default SearchItem;
