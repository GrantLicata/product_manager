import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {

    const [productList, setProductList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/getAllProducts')
        .then((res) => {
            console.log(res)
            setProductList(res.data)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <div>
            <h3 className='text-center text-secondary mb-3'>Products List</h3>
                {
                    productList.map((product) => (
                        <div className='mx-auto text-center my-2 p-2 rounded bg-light'>
                            <Link to={`/oneProduct/${product._id}`}>{ product.title }</Link>
                        </div>
                    ))
                }
        </div>
    )
}

export default ProductList