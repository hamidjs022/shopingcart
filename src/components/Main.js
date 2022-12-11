import React from 'react'
import './Main.css'
import Product from './Product'
import Basket from './Basket'

function Main(props) {
  const {products,onAdd,onRemove,cartItems}=props
  return (
    <main className='container mx-auto'>
      <div className='row  m-4  '>
        <div className='col bg-info m-2 rounded '>
        <h4 className=' p-2 m-2'> products</h4>
        <div className='products m-2 '>
        {products.map((product)=>(
          <>
          <Product
           key={product.id} 
           product={product}
            onAdd={onAdd} 
            onRemove={onRemove}
            item={cartItems.find((x)=>x.id===product.id)}>
            </Product>
            {/* <Basket/> */}
            </>
        ))}
        </div>
        </div>
       
      </div>
       
       <div className='row'></div>
       </main>
       
   
  )
}

export default Main