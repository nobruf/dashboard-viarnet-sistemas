import React from 'react'
import "./NumberCard.css"
const NumberCard = (numero) => {
  return (
      <div className='cards'>
    {numero.data.map((row) => (  
    <div className='card-body' key={row}>
        <h3 className='card-header'>{row}</h3>
    </div>
    ))}
    </div>
  )
}

export default NumberCard