import React from 'react'
import './searchitem.css'
import useRequestData from '../../hooks/useRequestData';

const SearchItem = () => {

  const { data, isLoading, error, makeRequest } = useRequestData();

  return (
    <div>
      <div>

      { isLoading && <Loader/> }
      { error && <Error /> }

        <div className="searchItem">
            <img src='assets/Billeder/Vandrerhjem/vaerelse2.jpg' className='w-52 h-52 rounded' alt='Slide 1' />
            <div className="sDesc">
              <h1 className="sTitle">1 Person med eget bad</h1>
              <span className='sDistance'>500m from center</span>
              <span className='sFeatures'>
                21m² værelse ‧ 1 badværelse ‧ 1 stor seng ‧ 1 køjeseng
              </span>
              <span className='sSubtitle'>Hyggeligt værelse med en 120x200 boksmadras, en køjeseng på 80x200, skrivebord og stol, skab med bøjlestang, eget badeværelse med bruser.</span>
              <span className='sCancel'>Gratis Afbestilling</span>
              <span className='sCancelSub'>
                  Afbestil senere, reservere prisen i dag!
              </span>
            </div>
            <div className="sDetails">
              <div className="sRating">
                  <button>8.9</button>
              </div>
              <div className="sDetailtxt">
                  <span className='sPrice'>495DKK</span>
                  <span className='sTax'>Inc. moms og gebyr</span>
                  <button className='sBtn'>Se prisen</button>
              </div>
            </div>
        </div>
      </div>
      

      <div>
        <div className="searchItem">
          <img src='assets/Billeder/Vandrerhjem/vaerelse1.jpg' className='w-52 h-52 rounded' alt='Slide 1' />
          <div className="sDesc">
            <h1 className="sTitle">2 Personer med eget bad</h1>
            <span className='sDistance'>500m from center</span>
            <span className='sFeatures'>
              21m² værelse ‧ 1 badeværelse ‧ 1 stor seng ‧ 1 køjeseng
            </span>
            <span className='sSubtitle'>Hyggeligt værelse med en 120x200 boksmadras, to køjesenge på 80x200, skrivebord og stol, skab med bøjlestang, eget badeværelse med bruser. Pris ved 2 personer.</span>
            <span className='sCancel'>Gratis Afbestilling</span>
            <span className='sCancelSub'>
              Afbestil senere, reservere prisen i dag!
            </span>
          </div>
          <div className="sDetails">
            <div className="sRating">
                <button>8.9</button>
            </div>
            <div className="sDetailtxt">
                <span className='sPrice'>595DKK</span>
                <span className='sTax'>Inc. moms og gebyr</span>
                <button className='sBtn'>Se prisen</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="searchItem">
          <img src='assets/Billeder/Vandrerhjem/1000225320.jpg' className='w-52 h-52 rounded' alt='Slide 1' />
          <div className="sDesc">
            <h1 className="sTitle">3 Personer med eget bad</h1>
            <span className='sDistance'>500m from center</span>
            <span className='sFeatures'>
              21m² værelse ‧ 1 badværelse ‧ 1 stor seng ‧ 1 køjeseng
            </span>
            <span className='sSubtitle'>Hyggeligt værelse med en 120x200 boksmadras, to køjesenge på 80x200, skrivebord og stol, skab med bøjlestang, eget badeværelse med bruser. Pris ved 3 personer.</span>
            <span className='sCancel'>Gratis Afbestilling</span>
            <span className='sCancelSub'>
              Afbestil senere, reservere prisen i dag!
            </span>
          </div>
          <div className="sDetails">
            <div className="sRating">
                <button>8.9</button>
            </div>
            <div className="sDetailtxt">
                <span className='sPrice'>695DKK</span>
                <span className='sTax'>Inc. moms og gebyr</span>
                <button className='sBtn'>Se prisen</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="searchItem">
          <img src='assets/Billeder/Vandrerhjem/danhostel-gjerrild.jpg' className='w-52 h-52 rounded' alt='Slide 1' />
          <div className="sDesc">
            <h1 className="sTitle">4 Personer med eget bad</h1>
            <span className='sDistance'>500m from center</span>
            <span className='sFeatures'>
              21m² værelse ‧ 1 badværelse ‧ 1 stor seng ‧ 1 køjeseng
            </span>
            <span className='sSubtitle'>Hyggeligt værelse med en 120x200 boksmadras, to køjesenge på 80x200, skrivebord og stol, skab med bøjlestang, eget badeværelse med bruser. Pris ved 4 personer.</span>
            <span className='sCancel'>Gratis Afbestilling</span>
            <span className='sCancelSub'>
              Afbestil senere, reservere prisen i dag!
            </span>
          </div>
          <div className="sDetails">
            <div className="sRating">
                <button>8.9</button>
            </div>
            <div className="sDetailtxt">
                <span className='sPrice'>795DKK</span>
                <span className='sTax'>Inc. moms og gebyr</span>
                <button className='sBtn'>Se prisen</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="searchItem">
          <img src='assets/Billeder/Vandrerhjem/danhostel-gjerrild.jpg' className='w-52 h-52 rounded' alt='Slide 1' />
          <div className="sDesc">
            <h1 className="sTitle">5 Personer med eget bad</h1>
            <span className='sDistance'>500m from center</span>
            <span className='sFeatures'>
              21m² værelse ‧ 1 badværelse ‧ 1 stor seng ‧ 2 køjeseng
            </span>
            <span className='sSubtitle'>Hyggeligt værelse med en 120x200 boksmadras, to køjesenge på 80x200, skrivebord og stol, skab med bøjlestang, eget badeværelse med bruser. Pris ved 5 personer.</span>
            <span className='sCancel'>Gratis Afbestilling</span>
            <span className='sCancelSub'>
              Afbestil senere, reservere prisen i dag!
            </span>
          </div>
          <div className="sDetails">
            <div className="sRating">
                <button>8.9</button>
            </div>
            <div className="sDetailtxt">
                <span className='sPrice'>995DKK</span>
                <span className='sTax'>Inc. moms og gebyr</span>
                <button className='sBtn'>Se prisen</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="searchItem">
          <img src='assets/Billeder/Vandrerhjem/danhostel-gjerrild.jpg' className='w-52 h-52 rounded' alt='Slide 1' />
          <div className="sDesc">
            <h1 className="sTitle">1 Person med fælles bad</h1>
            <span className='sDistance'>500m from center</span>
            <span className='sFeatures'>
              21m² værelse ‧ 1 badværelse ‧ 1 stor seng
            </span>
            <span className='sCancel'>Gratis Afbestilling</span>
            <span className='sCancelSub'>
              Afbestil senere, reservere prisen i dag!
            </span>
          </div>
          <div className="sDetails">
            <div className="sRating">
                <button>8.9</button>
            </div>
            <div className="sDetailtxt">
                <span className='sPrice'>445DKK</span>
                <span className='sTax'>Inc. moms og gebyr</span>
                <button className='sBtn'>Se prisen</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="searchItem">
          <img src='assets/Billeder/Vandrerhjem/danhostel-gjerrild.jpg' className='w-52 h-52 rounded' alt='Slide 1' />
          <div className="sDesc">
            <h1 className="sTitle">2 Personer med fælles bad</h1>
            <span className='sDistance'>500m from center</span>
            <span className='sFeatures'>
              21m² værelse ‧ 1 badværelse ‧ 1 stor seng
            </span>
            <span className='sCancel'>Gratis Afbestilling</span>
            <span className='sCancelSub'>
              Afbestil senere, reservere prisen i dag!
            </span>
          </div>
          <div className="sDetails">
            <div className="sRating">
                <button>8.9</button>
            </div>
            <div className="sDetailtxt">
                <span className='sPrice'>545DKK</span>
                <span className='sTax'>Inc. moms og gebyr</span>
                <button className='sBtn'>Se prisen</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="searchItem">
          <img src='assets/Billeder/Vandrerhjem/danhostel-gjerrild.jpg' className='w-52 h-52 rounded' alt='Slide 1' />
          <div className="sDesc">
            <h1 className="sTitle">3 Personer med fælles bad</h1>
            <span className='sDistance'>500m from center</span>
            <span className='sFeatures'>
              21m² værelse ‧ 1 badværelse ‧ 1 stor seng ‧ 1 køjeseng
            </span>
            <span className='sCancel'>Gratis Afbestilling</span>
            <span className='sCancelSub'>
              Afbestil senere, reservere prisen i dag!
            </span>
          </div>
          <div className="sDetails">
            <div className="sRating">
                <button>8.9</button>
            </div>
            <div className="sDetailtxt">
                <span className='sPrice'>645DKK</span>
                <span className='sTax'>Inc. moms og gebyr</span>
                <button className='sBtn'>Se prisen</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="searchItem">
          <img src='assets/Billeder/Vandrerhjem/danhostel-gjerrild.jpg' className='w-52 h-52 rounded' alt='Slide 1' />
          <div className="sDesc">
            <h1 className="sTitle">4 Personer med fælles bad</h1>
            <span className='sDistance'>500m from center</span>
            <span className='sFeatures'>
              21m² værelse ‧ 1 badværelse ‧ 1 stor seng ‧ 1 køjeseng
            </span>
            <span className='sCancel'>Gratis Afbestilling</span>
            <span className='sCancelSub'>
              Afbestil senere, reservere prisen i dag!
            </span>
          </div>
          <div className="sDetails">
            <div className="sRating">
                <button>8.9</button>
            </div>
            <div className="sDetailtxt">
                <span className='sPrice'>745DKK</span>
                <span className='sTax'>Inc. moms og gebyr</span>
                <button className='sBtn'>Se prisen</button>
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
  )
}

export default SearchItem
