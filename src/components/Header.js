
import React from 'react'
import './Header.css'

function Header(props) {
   const{countCartItems}=props
   console.log(props)
  return (
     <div className='header p-4 '>
        <h1 className='me-auto shadow'> Simple Shoping Cart</h1>
       
        <a href='/cart' > <b>Cart</b>

        {countCartItems?(
         
         <span className='badge bg-danger'>{countCartItems}</span>
        ):(
         <span className='badge bg-danger'> 0 </span>
        )
      }
        
        </a>  
        <a href='/signin'> <b>Signin</b></a>
       
        

     </div>
  )
}

export default Header 