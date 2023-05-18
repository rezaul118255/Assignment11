import React from 'react';

const Gallary = () => {
    return (
        <div className="hero min-h-screen bg-base-200 container">
            <div className="hero-content flex-col lg:flex-row gap-16 -mt-32">
                <img src="https://img.freepik.com/free-vector/child-development-illustration_1284-59264.jpg" className="lg:w-1/2 max-w-sm rounded-lg shadow-2xl" />
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold">Educational Toys Online!</h1>
                    <p className="py-6">Our educational toys are all about wellbeing! We love connecting parents with toys that promote learning, development, connection and the mental health of both parent and child. Education through play leads to better health and wellbeing outcomes for everyone!</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Gallary;