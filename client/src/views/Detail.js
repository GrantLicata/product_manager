import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const Detail = () => {

    const [product, setProduct] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    // Server call for data on one product assocaited with an id.
    useEffect(() => {
        axios.get(`http://localhost:8000/api/getOneProduct/${id}`)
        .then((res) => {
            console.log(res)
            setProduct(res.data)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    const editNavigation = () => {
        navigate(`/update/${product._id}`)
    }

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then((res) => {
            console.log('Delete was successfull')
            navigate('/')
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className='container text-center'>
            {/* Product information */}
            <h1>{ product.title }</h1>
            <p><strong>Price:</strong> { product.price }</p>
            <p><strong>Description:</strong> { product.description }</p>

            {/* Edit and delete buttons */}
            <button className='btn btn-primary me-3 py-1' onClick={editNavigation}>Edit</button>
            <button className='btn btn-danger py-1' onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default Detail