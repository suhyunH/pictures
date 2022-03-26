import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useParams} from 'react-router-dom'
import '../scss/imagedetail.scss'
import {ImageContext} from "../misc/useContext"

type Params={
id?: string |undefined;
}



function ImageDetail() {
   const location = useLocation();
  const initialValue = location.search.substring(1) as string ;
  const [clickedSlide, setClickedSlide] = useState<number>(parseInt(initialValue));
  const data = useContext(ImageContext).renderings;

  const handleNext=()=>{
      setClickedSlide(clickedSlide +1);
    if(clickedSlide === data.length-1){
      setClickedSlide(data.length-1);
    }
  }
  const handlePrev=()=>{
    setClickedSlide(clickedSlide -1);
    if(clickedSlide <= 0){
      setClickedSlide(0); 
    }
  }

  return (
    <div>
        <div className='header'>
            <div>
                <button type='button'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.192 6.344l-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                </button>
            </div>
            <div>
                <button className='down-btn' type='button'>다운로드</button>
                <button type='button'>삭제</button>
            </div>
        </div>
        <div>

          <div>
          <img src={data[clickedSlide]._id} alt="디테일 사진" />
          </div>
          <Link to={{pathname:`/image/${clickedSlide}`}}>
          <button onClick={handlePrev}>prev</button>
          </Link> 
          <Link to={{pathname:`/image/${clickedSlide}`}}>
          <button onClick={handleNext}>next</button>
          </Link>
        </div>
    </div>
  )
}

export default ImageDetail