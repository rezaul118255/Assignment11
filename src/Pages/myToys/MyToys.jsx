import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToy from './MyToy';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetch(`http://localhost:5000/allJobs/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])

    const handleSearch = () => {
        fetch(`http://localhost:5000/getToysByText/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMyToys(data);
            });
    };
    return (
        <div className='container'>


            <h1 className="text-center text-4xl	 "> My Toys are Available</h1>
            <div className="search-box p-2 text-center">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="p-1"
                />{" "}
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="overflow-x-auto">


                <thead className="table w-full">
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>image</th>
                        {/* <th> Seller Name</th> */}

                        <th>quantity</th>
                        <th>Product Name</th>



                        <th>Category</th>
                        <th>Details</th>
                    </tr>
                </thead>
            </div>
            {
                myToys.map((myToy) => <MyToy
                    key={myToy._id}
                    myToy={myToy}
                ></MyToy>)
            }
        </div>
    );
};

export default MyToys;