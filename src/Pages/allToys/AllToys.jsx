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
        <div>
            <div className='text-center text-pink-900 '>
                <h1>All Category toys are available</h1>
            </div>
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
        </div>
    );
};

export default AllToys;