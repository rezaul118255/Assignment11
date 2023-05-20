import React from 'react';
import "./Categori.css"
const Category = ({ cate }) => {

    const { image, price, category, deadline } = cate

    return (
        <div className='card grid-container'>
            <div className='h-64 w-64' >
                <img src={image} alt="" />
            </div>
            <div>
                <h4> Category:{category}</h4>
                <h4>Publised date:{deadline}</h4>
            </div>
            <div className='flex gap-4'>
                <h1>price: {price}</h1>
                <button className='btn btn-primary'>view Details</button>
            </div>


        </div>
    );
};

export default Category;