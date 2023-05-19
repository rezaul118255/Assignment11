import React, { useContext, useEffect, useState } from 'react';
import AllToy from './AllToy';
import { AuthContext } from '../../Providers/AuthProvider';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const { user } = useContext(AuthContext)
    const [myToys, setAllToys] = useState([])
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetch('http://localhost:5000/allJobs')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    const handleSearch = () => {
        fetch(`http://localhost:5000/getToysByText/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAllToys(data);
            });
    };

    return (
        <div>
            <div className='text-center  text-4xl mb-4 '>
                <h1>All Category toys are available</h1>
            </div>
            <div className="search-box p-2 text-center">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="p-1"
                />{" "}
                <button onClick={handleSearch}>Search</button>
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