import React from 'react';

const Category = ({ category }) => {

    const { category_logo, category_name, jobs_available } = category
    return (
        <div className='border-2 p-10 border-gray-200 rounded-md'>
            <img className='w-10 ' src={category_logo} alt="" />
            <h1 className='mt-2 my-2'>{category_name}</h1>
            <p className='text-[#A3A3A3]'>{jobs_available}</p>
            
        </div>
    );
};

export default Category;