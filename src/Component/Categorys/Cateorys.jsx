import React, { useEffect, useState } from 'react';

import Category from '../Category/Category';

const Cateorys = () => {
    const [categorys, setCategory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allJobs')
            .then(res => res.json())
            .then(data => setCategory(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div className='text-center'>

            {
                categorys && categorys.map(category => <Category
                    key={category.id}
                    category={category}
                ></Category>)

            }


        </div>
    );
};

export default Cateorys;