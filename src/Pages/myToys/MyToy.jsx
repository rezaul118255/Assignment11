import React from 'react';
// import UpdateToys from './UpdateToys';



const MyToy = ({ myToy, handleDelete }) => {
    // const [modalShow, setModalShow] = React.useState(false);

    const { title, _id, price, quantity, sellerName, category, image } = myToy || {};


    return (

        <div>



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


                <td><button  > update
                </button>
                </td>

                <th><button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">delete</button></th>


            </tr>






        </div>
    );
};

export default MyToy;




