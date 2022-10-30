import React from 'react'
import Form from '../components/Form'
import ProductList from '../components/ProductList'
import { useState } from 'react'

const Main = () => {

  const [productList, setProductList] = useState([])

  return (
    <div className='col-6 mx-auto mt-2'>
        <Form setProductList={setProductList}/>
        <hr className='"border border-black border-2 opacity-50 my-4'></hr>
        <ProductList productList={productList} setProductList={setProductList}/>
    </div>
  )
}

export default Main