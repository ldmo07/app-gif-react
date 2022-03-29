import React from 'react'

export const ImagenGif = ({title,url}) => {
  return (
    <div className='card animate__backInDown animate__delay-3s	3s'>
        <img src={url} title={title} width='200px'></img>
        <p>{title}</p>
    </div>
  )
}
