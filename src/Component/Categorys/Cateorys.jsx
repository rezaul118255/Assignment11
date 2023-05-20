import React, { useEffect, useState } from 'react';
import "./Categorys.css"
import Category from '../Category/Category';



const Cateorys = () => {
    const [categorys, setCategory] = useState([]);
    console.log(categorys)

    const [activeTab, setActiveTab] = useState("dfsd");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };


    useEffect(() => {
        fetch('http://localhost:5000/allJobs')
            .then(res => res.json())
            .then(data => setCategory(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h1 className="text-5xl text-center mt-5 p-5">Category of Toys's</h1>
            <div className="text-center">
                <div className="">
                    <div className="">
                        <div
                            onClick={() => handleTabClick("Science Kits")}
                            className={`tab  tab2 Science Kits ${activeTab == "Science Kits" ? "  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..." : ""
                                }`}
                        >
                            Science Kits
                        </div>
                        <div
                            onClick={() => handleTabClick("Math Learning Toys")}
                            className={`tab  tab2 Math Learning Toys ${activeTab == "Math Learning Toys" ? " bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..." : ""
                                }`}
                        >
                            Math Learning Toys
                        </div>
                        <div
                            onClick={() => handleTabClick("Engineering Toys")}
                            className={`tab  tab2 Math Learning Toys ${activeTab == "Engineering Toys" ? "  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..." : ""
                                }`}
                        >
                            Engineering Toys
                        </div>
                    </div>
                </div>
            </div>
            <div className="jobs-container mt-5 gap-4 grid md:grid-cols-3 container">


                {
                    categorys?.map((cate) => (<Category cate={cate}></Category>))
                }
            </div>
        </div>
    );
};

export default Cateorys;