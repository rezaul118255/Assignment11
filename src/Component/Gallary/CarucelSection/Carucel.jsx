import React from 'react';
import "./Carucel.css"

const Carucel = () => {

    return (
        <div className='mt-16 container'>
            <div className="grid-container">
                <div className="card"  >
                    <img src="https://i.ibb.co/mS0735H/istockphoto-589961490-1024x1024.jpg" alt="" />
                </div>
                <div className="card" >
                    <img src="https://i.ibb.co/9VY3bkb/child-kid-colorful.webp" alt="" />
                </div>
                <div className="card" >
                    <img src="https://i.ibb.co/4JtyYRp/71-U06-Q9-P9-YL.jpg" alt="" />
                </div>
                <div className="card">
                    <img src="https://i.ibb.co/J73728m/12345.webp" alt="" />
                </div>
                <div className="card">
                    <img src="https://i.ibb.co/QHyMZ38/educationbannner.webp" alt="" />
                </div>
                <div className="card">
                    <img src="https://i.ibb.co/9VY3bkb/child-kid-colorful.webp" alt="" />
                </div>
                <div className="card">
                    <img src="https://i.ibb.co/4JtyYRp/71-U06-Q9-P9-YL.jpg" alt="" />
                </div>
                <div data-aos="fade-up" className="card">
                    <img src="https://i.ibb.co/J73728m/12345.webp" alt="" />
                </div>

            </div>


        </div>

    );
};


export default Carucel;