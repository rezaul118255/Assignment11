// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../Providers/AuthProvider';
// import MyToy from './MyToy';

// const MyToys = () => {
//     const { user } = useContext(AuthContext)
//     const [myToys, setMyToys] = useState([])
//     const [searchText, setSearchText] = useState("");
//     useEffect(() => {
//         fetch(`https://educational-toys-server-theta.vercel.app/allJobs/${user?.email}`)
//             .then(res => res.json())
//             .then(data => setMyToys(data))
//     }, [user])

//     const handleSearch = () => {
//         fetch(`https://educational-toys-server-theta.vercel.app/getToysByText/${searchText}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data);
//                 setMyToys(data);
//             });
//     };


//     const handleDelete = id => {
//         const proceed = confirm('Are You sure you want to delete');
//         if (proceed) {
//             fetch(`https://educational-toys-server-theta.vercel.app/allJobs/${id}`, {
//                 method: 'DELETE'
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data);
//                     if (data.deletedCount > 0) {
//                         alert('deleted successful');
//                         const remaining = allJobs.filter(allJob => allJob._id !== id);
//                         setMyToys(remaining);
//                     }
//                 })
//         }
//     }
//     return (
//         <div className='container'>


//             <h1 className="text-center text-4xl	 "> My Toys are Available</h1>
//             <div className="search-box p-2 text-center">
//                 <input
//                     onChange={(e) => setSearchText(e.target.value)}
//                     type="text"
//                     className="p-1"
//                 />{" "}
//                 <button onClick={handleSearch}>Search</button>
//             </div>
//             <div className="overflow-x-auto w-full">
//                 <table className="table w-full">
//                     <thead className="table w-full">
//                         <tr>
//                             <th>
//                                 <label>
//                                     <input type="checkbox" className="checkbox" />
//                                 </label>
//                             </th>
//                             <th>image</th>
//                             <th>quantity</th>
//                             <th>Category</th>
//                             <th>Product Name</th>
//                             <th>update</th>
//                             <th>Delete</th>







//                         </tr>
//                     </thead>
//                     <tbody className="table w-full">
//                         {
//                             myToys.map((myToy) => <MyToy
//                                 key={myToy._id}
//                                 myToy={myToy}
//                                 handleDelete={handleDelete}
//                             ></MyToy>)
//                         }
//                     </tbody>

//                 </table>



//             </div>





//         </div>
//     );
// };

// export default MyToys;




// this is my toys page 
// this is my toy page
//  this is my toy page










import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToy from './MyToy';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetch(`https://educational-toys-server-theta.vercel.app/allJobs/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])

    const handleSearch = () => {
        fetch(`https://educational-toys-server-theta.vercel.app/getToysByText/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMyToys(data);
            });
    };


    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://educational-toys-server-theta.vercel.app/allJobs/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = allJobs.filter(allJob => allJob._id !== id);
                        setMyToys(remaining);
                    }
                })
        }
    }
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
                            <th>quantity</th>
                            <th>Category</th>
                            <th>Product Name</th>
                            <th>update</th>
                            <th>Delete</th>







                        </tr>
                    </thead>
                    <tbody className="table w-full">
                        {
                            myToys.map((myToy) => <MyToy
                                key={myToy._id}
                                myToy={myToy}
                                handleDelete={handleDelete}
                            ></MyToy>)
                        }
                    </tbody>

                </table>



            </div>





        </div>
    );
};

export default MyToys;

