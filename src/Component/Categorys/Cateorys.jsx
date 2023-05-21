import React, { useEffect, useState } from 'react';
import "./Categorys.css"
import Category from '../Category/Category';



const Cateorys = () => {
    const [categorys, setCategory] = useState([]);
    // console.log(categorys)

    const [activeTab, setActiveTab] = useState("Science Kits");
    useEffect(() => {
        fetch(`https://educational-toys-server-theta.vercel.app/allJobs/${activeTab}`)
            .then(res => res.json())
            .then(data => setCategory(data))
            .catch(error => console.error(error))
    }, [activeTab])

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };



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
                            onClick={() => handleTabClick("Engineering Kits")}
                            className={`tab  tab2 Engineering Kits ${activeTab == "Engineering Kits" ? "  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..." : ""
                                }`}
                        >
                            <span className='text-1xl text-neutral-950 mb-2'> Engineering Kits</span>
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