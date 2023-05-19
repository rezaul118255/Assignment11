import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToy from './MyToy';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/allJobs/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])
    return (
        <div className='container'>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Seller Name</th>
                            <th>Quantity</th>
                            <th>category</th>
                            <th>Price</th>
                            <th>Details</th>

                        </tr>
                    </thead>

                </table>
            </div>
            {
                myToys.map(myToy => <MyToy
                    key={myToy._id}
                    myToy={myToy}
                ></MyToy>)
            }
        </div>
    );
};

export default MyToys;