import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AllToysDetails = () => {
    const { _id } = useParams()
    const toysCategory = useLoaderData(_id)
    console.log(toysCategory)
    return (
        <div>

        </div>
    );
};

export default AllToysDetails;