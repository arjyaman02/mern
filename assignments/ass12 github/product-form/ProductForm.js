import React, {useState} from 'react';
import './product-form.css';

export const ProductForm = (props)=>{
    const [formInput,setFormInput] = useState({
        productName:'',
        productPrice:'',
        productImage:'',
        productConductedBy:''
    })
    
    const productNameHandler = (event)=>{
        setFormInput((prevState)=>{
            return{ 
                ...prevState,
                productName:event.target.value
            }
        })
    }
    const productPriceHandler = (event)=>{
        setFormInput((prevState)=>{
            return{ 
                ...prevState,
                productPrice:event.target.value
            }
        })
    }
    const productImageHandler = (event)=>{ 
        setFormInput((prevState)=>{
            return{ 
                ...prevState,
                productImage:event.target.value
            }
        })
    }
    const productConductedByHandler = (event)=>{ 
        setFormInput((prevState)=>{
            return{ 
                ...prevState,
                productConductedBy:event.target.value
            }
        })
    }
    console.log(formInput)
    console.log(`Product Name: ${formInput.productName} Product Price: ${formInput.productPrice}`)
    const formSubmitHandler = (event)=>{
        const error = ''
        if(formInput.productName =='' && error ==''){
            error = 'Please enter a product name';
            console.log(error);
        }
        console.log(formInput);
        props.onProductAdded(formInput); 
        event.preventDefault();
    }
    return(
        <div className = 'form-container'>
            <h1>Add New Product</h1>
            <form onSubmit={formSubmitHandler}>
                <div className = 'form-input'>
                    <input type="text" placeholder='Product Name' onChange={productNameHandler}/>
                </div>
                <div className = 'form-input'>
                    <input type="text" placeholder='Product Price'onChange={productPriceHandler}/>
                </div>
                <div className = 'clearfix'></div>
                <div className = 'form-input'>
                    <input type="text" placeholder='Product Image'onChange={productImageHandler}/>
                </div>
                <div className = 'clearfix'></div>
                <div className = 'form-input'>
                    <button className="buy_now">Add Product</button>
                </div>
                <div className = 'clearfix'></div>
            </form>
        </div>
    )
}

export default ProductForm;