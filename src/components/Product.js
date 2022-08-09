import React from 'react';

export default function Product(props){
    return (
        <div className='row'>
            <div className="col-6">
                    <h2>{props.product.name}&nbsp;₹{props.product.price}</h2>    
            </div>
            <div className="col-2 btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-sm btn-danger">-</button>
                <button type="button" className="btn btn-sm btn-warning">{props.product.quantity}</button>
                <button type="button" className="btn btn-sm btn-success">+</button>
            </div>
            <div className="col-4">
                <button className="btn btn-lg btn-outline-secondary">{props.product.quantity * props.product.price}</button>
            </div>
        </div>
    )
}