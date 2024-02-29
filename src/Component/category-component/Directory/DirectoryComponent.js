import React from 'react'
import './DirectoryComponent.scss'
import CategoryItem from "../CategoryItem"


const DirectoryComponent = ({categories}) => {
  return (
    <div className="directory-container">
     {categories.map((category) => (
  <CategoryItem key={category.id} category={category} />
))}
    </div>
    )
}

export default DirectoryComponent