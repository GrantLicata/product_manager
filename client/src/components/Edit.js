import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios'
import { json, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Edit = () => {

    const [title,setTitle] = useState('')
    const [price,setPrice] = useState('')
    const [description,setDescription] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()

    // Gather product information for auto-fill of edit form
    useEffect(() => {
        axios.get(`http://localhost:8000/api/getOneProduct/${id}`)
        .then((res) => {
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    // Submit update to the products data
    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/updateProduct/${id}`, {
            title: title,
            price: price,
            description: description
        }).then((res) => {
            navigate('/')
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className='col-6 mx-auto mt-2'>
            <h3 className='text-center text-secondary mb-3'>{`${ title } Update Form`}</h3>
            <form className='d-flex flex-column justify-content-center' onSubmit={ submitHandler }>
                <div className='p-2 mb-3 bg-light border rounded'>
                    <label className='form-label'>Title:</label>
                    <input className='form-control' type='text' onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
                </div>
                <div className='p-2 mb-3 bg-light border rounded'>
                    <label className='form-label'>Price:</label>
                    <input className='form-control' type='number' onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
                </div>
                <div className='p-2 mb-3 bg-light border rounded'>
                    <label className='form-label'>Description:</label>
                    <textarea rows="4" className='form-control' type='text' onChange={(e)=>{setDescription(e.target.value)}} value={description}/>
                </div>
                <button className='btn btn-primary'>Submit Update</button>
            </form>
        </div>
    )
}

export default Edit