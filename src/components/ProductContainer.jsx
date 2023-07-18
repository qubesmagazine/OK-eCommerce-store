import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import formatCurrency from './utils/formatCurrency'

function ProductContainer({id, images, price, title}) {
  
    return (

    <Link to={`/products/${id}`}>

    <>
    <div style={{height: '420px'}}>
      <Image src={images[0]} alt={title} className='w-100 h-100'/>
    </div>
    <div className='d-flex justify-content-between'>
        <p className='text-dark'>{title}</p>
        <p className='text-xs text-secondary'>{formatCurrency(price)}</p>
    </div>
    </>
    </Link>
  )
}

export default ProductContainer
