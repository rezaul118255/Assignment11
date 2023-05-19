import React from 'react';

const MyToy = ({ myToy }) => {
    const { title, price, quantity, sellerName, category, image } = myToy || {};
    // console.log(myToy)
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">

                <tbody>
                    <tr>
                        <th>{length + 1}</th>
                        <td>{title}</td>
                        <td>{sellerName}</td>
                        <td>{quantity}</td>
                        <td>{category}</td>
                        <td>{price}</td>
                        <td><button>view details</button></td>

                    </tr>

                </tbody>

            </table>
        </div>
    );
};

export default MyToy;