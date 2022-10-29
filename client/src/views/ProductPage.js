import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const ProductPage = () => {

    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getOneProduct/${id}`)
        .then((res) => {
            console.log(res)
            setProduct(res.data)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <div className='container text-center'>
            <h1>{ product.title }</h1>
            <p><strong>Price:</strong> { product.price }</p>
            <p><strong>Description:</strong> { product.description }</p>
        </div>
    )
}

export default ProductPage