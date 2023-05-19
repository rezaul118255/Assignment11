import React from 'react';

const AllToy = ({ toy }) => {
    const { title, price, quantity, sellerName, category, image } = toy
    // console.log(title, price)
    return (
        <div >
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
                                    <div className="mask mask-squircle w-24 h-24">
                                        <img src={image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </div>
                        </td>
                        <td>
                            {sellerName}

                        </td>

                        <td>

                            <span className="badge badge-ghost badge-sm">{title}</span>
                        </td>
                        <td>{category}</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                </tbody>




            </table>
        </div>
    );
};

export default AllToy;