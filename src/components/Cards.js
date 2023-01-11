import React from 'react'
import {useState,useEffect} from "react"
import cardsData from "../api/cards.json"


export default function Cards() {
 
  const [cards,setCards]= useState([]);

  useEffect(() => {
    setCards(cardsData)
  })


  return (
    <div className='cards-cont'>

    <div className='cards'>
     {cards.length && cards.map(card => (
      <div className='card'>
        <img className='card-img' src={card.image}/>
        <h6 className='card-title'>{card.title}</h6>
        <p className='card-description'>{card.description}</p>
      </div>
       
     ))}

    </div>
    </div>
  )
}
