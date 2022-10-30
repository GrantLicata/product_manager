import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ProductList = (props) => {

    const {productList, setProductList} = props
    const { id } = useParams()

    //Calls our database to gather all products to be displayed on the DOM.
    useEffect(() => {
        axios.get('http://localhost:8000/api/getAllProducts')
        .then((res) => {
            console.log(res)
            setProductList(res.data)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    //Deleted a specific item given an id.
    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then((res) => {
            console.log('Delete was successfull')
        }).catch((err) => {
            console.log(err)
        })
    }

    //DOM manipulator function that removes deleted items from the page
    const removeFromDom = (id) => {
        setProductList(productList.filter(product => product._id != id))
    }

    return (
        <div>
            <h3 className='text-center text-secondary mb-3'>Products List</h3>
                {
                    productList.map((product, index) => (
                        <div key={index} className='d-flex my-2 p-2'>
                            <div className='bg-light ms-3 p-1 text-start ps-2 rounded' style={{'width': '200px'}}>
                                <Link to={`/oneProduct/${product._id}`}>{ product.title }</Link>
                            </div>
                            <button className='btn btn-danger ms-3 p-1' onClick={(e) => {
                                deleteHandler(product._id)
                                removeFromDom(product._id)
                                }}
                                >Delete</button>
                        </div>
                    ))
                }
        </div>
    )
}

export default ProductList