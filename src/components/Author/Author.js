import React from 'react'

function Author({img, description}) {
  return (
    <div className='author-card'>
        <img alt={img.alt} src={img.src} className='author-image' />
        <p>{description}</p>
    </div>
  )
}

export default Author