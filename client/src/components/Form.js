import React from 'react';
import { useState } from 'react';
import axios from 'axios'

const Form = () => {

    const [title,setTitle] = useState('')
    const [price,setPrice] = useState('')
    const [description,setDescription] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addProduct',{
            title: title,
            price: price,
            description: description
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <div className='col col-4 mx-auto mt-2'>
        <form className='d-flex flex-column justify-content-center' onSubmit={submitHandler}>
            <h1 className='mb-4 text-center'>Product Manager</h1>
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
            <button className='btn btn-primary'>Create</button>
        </form>
    </div>
  )
}

export default Form