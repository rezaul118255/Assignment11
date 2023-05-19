import React from 'react';



const MyToy = ({ myToy, handleDelete }) => {

    const { title, _id, price, quantity, sellerName, category, image } = myToy || {};


    return (

        <div>
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


            <tr className="table w-full">
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center h-16 w-16 ">


                        <img src={image} />

                    </div>
                </td>

                <td>{quantity}</td>
                <td>{category}</td>
                <td><span className="badge badge-ghost badge-sm">{title}</span></td>


                <td><button > <label htmlFor="my-modal" className="btn">update</label> </button>
                </td>

                <th><button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">delete</button></th>


            </tr>






        </div>
    );
};

export default MyToy;