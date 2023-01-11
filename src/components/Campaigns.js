import React from 'react'
import { useEffect,useState } from 'react'
import Banners from "../api/banners.json"

export default function Campaigns() {
  const [banners,setBanners]=useState();

  useEffect(() => {
    setBanners(Banners)
  }, []);
  return (

    <div className='campaings'>
      <div className='campaings-title'>
       <h4> Kampanyalar</h4>
      </div>
      <div>
      {banners && banners.map((banners,index) =>(
        <div key={index}>
          <img className='need-banners' src={banners.image}/>
        </div>
      ) )}
      </div>

    </div>
  )
}
