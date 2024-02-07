import { useEffect, useState } from 'react';
import './rooms.css'
import useRequestData from '../../hooks/useRequestData';

const Rooms = () => {

  const { data, isLoading, error, makeRequest } = useRequestData();
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > 9) {
        newIndex = 1;
      } else if (newIndex < 1) {
        newIndex = 9;
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
        <h1 className='text-2xl font-extrabold mb-6 text-center uppercase'>ledig værelser</h1>
      { isLoading && <Loader/> }
      { error && <Error /> }
        <div className={`mySlides fade ${slideIndex === 1 ? 'active' : ''}`}>
          <div className="roomItem">
              <img src='assets/Billeder/Vandrerhjem/vaerelse2.jpg' className='w-52 h-52' alt='Slide 1' />
              <div className="rDesc">
                <h1 className="rTitle">1 Person med eget bad</h1>
                <span className='rDistance'>500m from center</span>
                <span className='rFeatures'>
                  21m² værelse ‧ 1 badværelse ‧ 1 stor seng ‧ 1 køjeseng
                </span>
                <span className='rSubtitle'>Hyggeligt værelse med en 120x200 boksmadras, en køjeseng på 80x200, skrivebord og stol, skab med bøjlestang, eget badeværelse med bruser.</span>
                <span className='rCancel'>Gratis Afbestilling</span>
                <span className='rCancelSub'>
                    Afbestil senere, reservere prisen i dag!
                </span>
              </div>
              <div className="rDetails">
                <div className="rRating">
                    <button>8.9</button>
                </div>
                <div className="rDetailtxt">
                    <span className='rPrice'>495DKK</span>
                    <span className='rTax'>Inc. moms og gebyr</span>
                    <button className='rBtn'>Se Tilgængelighed</button>
                </div>
              </div>
          </div>
        </div>
        

        <div className={`mySlides fade ${slideIndex === 2 ? 'active' : ''}`}>
          <div className="roomItem">
            <img src='assets/Billeder/Vandrerhjem/vaerelse1.jpg' className='w-52 h-52' alt='Slide 1' />
            <div className="rDesc">
              <h1 className="rTitle">2 Personer med eget bad</h1>
              <span className='rDistance'>500m from center</span>
              <span className='rFeatures'>
                21m² værelse ‧ 1 badeværelse ‧ 1 stor seng ‧ 1 køjeseng
              </span>
              <span className='rSubtitle'>Hyggeligt værelse med en 120x200 boksmadras, to køjesenge på 80x200, skrivebord og stol, skab med bøjlestang, eget badeværelse med bruser. Pris ved 2 personer.</span>
              <span className='rCancel'>Gratis Afbestilling</span>
              <span className='rCancelSub'>
                Afbestil senere, reservere prisen i dag!
              </span>
            </div>
            <div className="rDetails">
              <div className="rRating">
                  <button>8.9</button>
              </div>
              <div className="rDetailtxt">
                  <span className='rPrice'>595DKK</span>
                  <span className='rTax'>Inc. moms og gebyr</span>
                  <button className='rBtn'>Se Tilgængelighed</button>
              </div>
            </div>
          </div>
        </div>

        <div className={`mySlides fade ${slideIndex === 3 ? 'active' : ''}`}>
          <div className="roomItem">
            <img src='assets/Billeder/Vandrerhjem/1000225320.jpg' className='w-52 h-52' alt='Slide 1' />
            <div className="rDesc">
              <h1 className="rTitle">3 Personer med eget bad</h1>
              <span className='rDistance'>500m from center</span>
              <span className='rFeatures'>
                21m² værelse ‧ 1 badværelse ‧ 1 stor seng ‧ 1 køjeseng
              </span>
              <span className='rSubtitle'>Hyggeligt værelse med en 120x200 boksmadras, to køjesenge på 80x200, skrivebord og stol, skab med bøjlestang, eget badeværelse med bruser. Pris ved 3 personer.</span>
              <span className='rCancel'>Gratis Afbestilling</span>
              <span className='rCancelSub'>
                Afbestil senere, reservere prisen i dag!
              </span>
            </div>
            <div className="rDetails">
              <div className="rRating">
                  <button>8.9</button>
              </div>
              <div className="rDetailtxt">
                  <span className='rPrice'>695DKK</span>
                  <span className='rTax'>Inc. moms og gebyr</span>
                  <button className='rBtn'>Se Tilgængelighed</button>
              </div>
            </div>
          </div>
        </div>

        <div className={`mySlides fade ${slideIndex === 4 ? 'active' : ''}`}>
          <div className="roomItem">
            <img src='assets/Billeder/Vandrerhjem/danhostel-gjerrild.jpg' className='w-52 h-52' alt='Slide 1' />
            <div className="rDesc">
              <h1 className="rTitle">4 Personer med eget bad</h1>
              <span className='rDistance'>500m from center</span>
              <span className='rFeatures'>
                21m² værelse ‧ 1 badværelse ‧ 1 stor seng ‧ 1 køjeseng
              </span>
              <span className='rSubtitle'>Hyggeligt værelse med en 120x200 boksmadras, to køjesenge på 80x200, skrivebord og stol, skab med bøjlestang, eget badeværelse med bruser. Pris ved 4 personer.</span>
              <span className='rCancel'>Gratis Afbestilling</span>
              <span className='rCancelSub'>
                Afbestil senere, reservere prisen i dag!
              </span>
            </div>
            <div className="rDetails">
              <div className="rRating">
                  <button>8.9</button>
              </div>
              <div className="rDetailtxt">
                  <span className='rPrice'>795DKK</span>
                  <span className='rTax'>Inc. moms og gebyr</span>
                  <button className='rBtn'>Se Tilgængelighed</button>
              </div>
            </div>
          </div>
        </div>

        <div className={`mySlides fade ${slideIndex === 4 ? 'active' : ''}`}>
          <div className="roomItem">
            <img src='assets/Billeder/Vandrerhjem/danhostel-gjerrild.jpg' className='w-52 h-52' alt='Slide 1' />
            <div className="rDesc">
              <h1 className="rTitle">5 Personer med eget bad</h1>
              <span className='rDistance'>500m from center</span>
              <span className='rFeatures'>
                21m² værelse ‧ 1 badværelse ‧ 1 stor seng ‧ 2 køjeseng
              </span>
              <span className='rSubtitle'>Hyggeligt værelse med en 120x200 boksmadras, to køjesenge på 80x200, skrivebord og stol, skab med bøjlestang, eget badeværelse med bruser. Pris ved 5 personer.</span>
              <span className='rCancel'>Gratis Afbestilling</span>
              <span className='rCancelSub'>
                Afbestil senere, reservere prisen i dag!
              </span>
            </div>
            <div className="rDetails">
              <div className="rRating">
                  <button>8.9</button>
              </div>
              <div className="rDetailtxt">
                  <span className='rPrice'>995DKK</span>
                  <span className='rTax'>Inc. moms og gebyr</span>
                  <button className='rBtn'>Se Tilgængelighed</button>
              </div>
            </div>
          </div>
        </div>

        <div className={`mySlides fade ${slideIndex === 4 ? 'active' : ''}`}>
          <div className="roomItem">
            <img src='assets/Billeder/Vandrerhjem/danhostel-gjerrild.jpg' className='w-52 h-52' alt='Slide 1' />
            <div className="rDesc">
              <h1 className="rTitle">1 Person med fælles bad</h1>
              <span className='rDistance'>500m from center</span>
              <span className='rFeatures'>
                21m² værelse ‧ 1 badværelse ‧ 1 stor seng
              </span>
              <span className='rCancel'>Gratis Afbestilling</span>
              <span className='rCancelSub'>
                Afbestil senere, reservere prisen i dag!
              </span>
            </div>
            <div className="rDetails">
              <div className="rRating">
                  <button>8.9</button>
              </div>
              <div className="rDetailtxt">
                  <span className='rPrice'>445DKK</span>
                  <span className='rTax'>Inc. moms og gebyr</span>
                  <button className='rBtn'>Se Tilgængelighed</button>
              </div>
            </div>
          </div>
        </div>
        <div className={`mySlides fade ${slideIndex === 4 ? 'active' : ''}`}>
          <div className="roomItem">
            <img src='assets/Billeder/Vandrerhjem/danhostel-gjerrild.jpg' className='w-52 h-52' alt='Slide 1' />
            <div className="rDesc">
              <h1 className="rTitle">2 Personer med fælles bad</h1>
              <span className='rDistance'>500m from center</span>
              <span className='rFeatures'>
                21m² værelse ‧ 1 badværelse ‧ 1 stor seng
              </span>
              <span className='rCancel'>Gratis Afbestilling</span>
              <span className='rCancelSub'>
                Afbestil senere, reservere prisen i dag!
              </span>
            </div>
            <div className="rDetails">
              <div className="rRating">
                  <button>8.9</button>
              </div>
              <div className="rDetailtxt">
                  <span className='rPrice'>545DKK</span>
                  <span className='rTax'>Inc. moms og gebyr</span>
                  <button className='rBtn'>Se Tilgængelighed</button>
              </div>
            </div>
          </div>
        </div>
        <div className={`mySlides fade ${slideIndex === 4 ? 'active' : ''}`}>
          <div className="roomItem">
            <img src='assets/Billeder/Vandrerhjem/danhostel-gjerrild.jpg' className='w-52 h-52' alt='Slide 1' />
            <div className="rDesc">
              <h1 className="rTitle">3 Personer med fælles bad</h1>
              <span className='rDistance'>500m from center</span>
              <span className='rFeatures'>
                21m² værelse ‧ 1 badværelse ‧ 1 stor seng ‧ 1 køjeseng
              </span>
              <span className='rCancel'>Gratis Afbestilling</span>
              <span className='rCancelSub'>
                Afbestil senere, reservere prisen i dag!
              </span>
            </div>
            <div className="rDetails">
              <div className="rRating">
                  <button>8.9</button>
              </div>
              <div className="rDetailtxt">
                  <span className='rPrice'>645DKK</span>
                  <span className='rTax'>Inc. moms og gebyr</span>
                  <button className='rBtn'>Se Tilgængelighed</button>
              </div>
            </div>
          </div>
        </div>
        <div className={`mySlides fade ${slideIndex === 4 ? 'active' : ''}`}>
          <div className="roomItem">
            <img src='assets/Billeder/Vandrerhjem/danhostel-gjerrild.jpg' className='w-52 h-52' alt='Slide 1' />
            <div className="rDesc">
              <h1 className="rTitle">4 Personer med fælles bad</h1>
              <span className='rDistance'>500m from center</span>
              <span className='rFeatures'>
                21m² værelse ‧ 1 badværelse ‧ 1 stor seng ‧ 1 køjeseng
              </span>
              <span className='rCancel'>Gratis Afbestilling</span>
              <span className='rCancelSub'>
                Afbestil senere, reservere prisen i dag!
              </span>
            </div>
            <div className="rDetails">
              <div className="rRating">
                  <button>8.9</button>
              </div>
              <div className="rDetailtxt">
                  <span className='rPrice'>745DKK</span>
                  <span className='rTax'>Inc. moms og gebyr</span>
                  <button className='rBtn'>Se Tilgængelighed</button>
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

export default Rooms;
