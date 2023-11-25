import React from 'react'

function CircleImage(imageUrl, altText) {
  return (
  <div className="circle-container">
  <img src={imageUrl} alt={altText}/>
</div>
  )
}
export default CircleImage