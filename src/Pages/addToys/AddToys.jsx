


import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import img from "../../assets/images/undraw_data_processing_yrrv.svg"
import "./AddToys.css";
import { AuthContext } from '../../Providers/AuthProvider';

const AddToys = () => {
    const { user } = useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addToys', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    };
    return (
        <div className="add-job-container">
            <div className="add-job row flex ">
                <div className="col-md-8 w-9/12">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input
                            className="text-input"
                            {...register("title")}
                            placeholder="title"

                        />
                        <input
                            className="text-input"
                            {...register("price", { required: true })}
                            placeholder="price"

                        />
                        <input
                            className="text-input"
                            {...register("quantity", { required: true })}
                            placeholder="quantity"
                            type="number"
                        />
                        <select className="text-input" {...register("category")}>
                            <option value="Science Kits">Science Kits</option>
                            <option value="Math Learning Toys">Math Learning Toys</option>
                            <option value="Engineering Kits">Engineering Kits</option>

                        </select>


                        <input
                            className="text-input"
                            {...register("image")}
                            placeholder="image link"
                            type="url"

                        />
                        <input
                            className="text-input"
                            {...register("deadline")}
                            placeholder="deadline"
                            type="date"
                        />
                        <input
                            className="text-input"
                            value={user?.email}
                            {...register("postedBy")}
                            placeholder="your email"
                            defaultValue={user?.email}
                            type="email"
                        />
                        <input
                            className="text-input"
                            value={user?.displayName}
                            {...register("sellerName")}
                            placeholder="your name"
                            defaultValue={user?.displayName}
                            type="text"
                        />

                        <input
                            className="text-input"
                            {...register("description")}
                            placeholder="description"
                        />
                        <input className="submit-btn" value="Add Toys" type="submit" />
                    </form>
                </div>

                <div className="col-md-4">
                    <img
                        className="w-100 h-80"
                        src={img}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );

};

export default AddToys;