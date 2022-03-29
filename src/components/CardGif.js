import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { ImagenGif } from './ImagenGif'

export const CardGif = ({termino}) => {
  const {data : images, loading} = useFetchGifs(termino);
 
  return (
    <>
      <h3 className="animate__fadeIn">{termino}</h3>
      { loading && <p className="animate__flash">Cargando...</p>} 
      <div className='card-grid'>
        {
          images.map((img)=>(
            <ImagenGif key={img.id} {...img}/>
          ))
        }
      </div>
        
    </>
  )
}
