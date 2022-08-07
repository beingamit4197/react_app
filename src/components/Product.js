import React from 'react';

export default function Product(props){
    return (
        <div className='row'>
            <div className="col-6">
                    <h2>{props.product.name}&nbsp;₹{props.product.price}</h2>    
            </div>
                    <div className="col-4">
                    <div className="btn-group btn-group-sm" role="group" aria-label="...">abc</div>  
                    <span className="badge badge-pill badge-primary">Primary</span>  
                    </div>            
        </div>
    )
}