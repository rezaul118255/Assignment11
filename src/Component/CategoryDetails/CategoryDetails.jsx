import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CategoryDetails = () => {

    const { id } = useParams()
    const toysCategory = useLoaderData(id)
    // const { _id, image, price, category, deadline } = toysCategory
    // console.log(_id)
    return (
        <div>
            {
                toysCategory.map(toy => (
                    <h1>{toy._id}</h1>
                ))
            }

        </div>
    );
};

export default CategoryDetails;