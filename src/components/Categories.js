import React from 'react'
import { useState , useEffect} from 'react'
import { Container,Row,Col } from 'react-grid-system';
import categoryData from "../api/categories.json"
import Category from '../components/ui/Category';

export default function Categories() {

  const [categories,setCategories]=useState();
  
useEffect(() => {
  setCategories(categoryData)
}, []);

  return (
    <div className='categories'>
      <div className='cate'>
        <h4>Kategoriler</h4>
        <div className='grid'>
          {categories && categories.map((category,index)=> <Category key={index} category={category}/>)}
        </div>
      </div>
      </div>
  )
}
