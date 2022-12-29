import React from 'react'

export default function Category({ category: {id,title,image}}) {
  return (
    <a href='#' className='products'>
        <img className='categories-image' src={image} alt={title}/>
        <span>{title}</span>

    </a>
  )
}
