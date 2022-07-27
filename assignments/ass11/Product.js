import React from 'react';
import './product.css';
export const Product = (props)=>{
    
    return(
        <div> 
            <div className='product_container'>
                <div className='product_title'>{props.product_name}</div>
                <div className="product_image">
                    <img src={props.product_image}/>
                </div>
                <div className ='product_price'>{props.product_price}</div>
                <div className='product_created_by'>{props.product_conducted_by}</div>
                <div className='button_container'>
                    <button className='add_cart'>Add to Cart </button>
                    <button className='buy_now'>Buy Now</button>
                    
                </div>
                <div className='product_desc'>{props.product_desc}</div>
            </div>
        </div>
    )
}
