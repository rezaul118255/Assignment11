import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CategoryDetails = () => {
    const { id } = useParams()
    const toysCategory = useLoaderData(id)
    console.log(toysCategory)
    return (
        <div>

        </div>
    );
};

export default CategoryDetails;