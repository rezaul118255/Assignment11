import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';



const AllToy = ({ toy }) => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const { title, _id, rating, price, quantity, sellerName, category, image } = toy || {};

    const handleDetails = _id => {


        fetch(`https://educational-toys-server-theta.vercel.app/allJobs/${_id}`)

            .then(res => res.json())
            .then(data => {
                console.log(data);

            })

    }



    return (
        <div >
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>


            <table className="table w-full">
                {/* head */}

                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-16 h-16">
                                        <img src={image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </div>
                        </td>
                        <td>
                            {sellerName}

                        </td>
                        <td>
                            {rating}

                        </td>

                        <td>

                            <span className="badge badge-ghost badge-sm">{title}</span>
                        </td>
                        <td>{category}</td>
                        <th>
                            <button onClick={() => handleDetails(_id)}>  <label htmlFor="my-modal" className="btn">details</label>
                            </button>

                        </th>
                    </tr>
                </tbody>




            </table>
        </div>
    );
};

export default AllToy;

