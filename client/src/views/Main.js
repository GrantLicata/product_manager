import React from 'react'
import Form from '../components/Form'
import ProductList from '../components/ProductList'

const Main = () => {
  return (
    <div className='col-6 mx-auto mt-2'>
        <Form />
        <hr className='"border border-black border-2 opacity-50 my-4'></hr>
        <ProductList />
    </div>
  )
}

export default Main