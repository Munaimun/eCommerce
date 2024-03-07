import React from 'react'
import './CategoryItem.scss'



const CategoryItem = ({ category }) => {
  return (
    <div  className='category-container'>
          <div className='background-image'> <img src={category.img} alt='category-img'/>
          </div>
        <div className='category-body-container'>
          <h2>{category.title}</h2>
          <p>shop Now</p>
        </div>
      </div>
  )
}

export default CategoryItem