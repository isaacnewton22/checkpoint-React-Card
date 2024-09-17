import React from 'react'
import { product } from './product'

function Image() {
    return (
    <img src={product.image} style={{height: '300px'}} />
    )
}

export default Image