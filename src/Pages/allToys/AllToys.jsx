import React, { useEffect, useState } from 'react';
import AllToy from './AllToy';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allJobs')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead className="table w-full">
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>image</th>
                        <th> Seller Name</th>
                        <th>Product Name</th>



                        <th>Category</th>
                        <th>Details</th>
                    </tr>
                </thead>
                {
                    toys?.map((toy) =>
                        <AllToy
                            key={toy._id}
                            toy={toy}
                        ></AllToy>
                    )
                }
            </table>

        </div>
    );
};

export default AllToys;