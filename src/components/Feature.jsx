import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Feature = ({ feature }) => {
    const { jobTitle, company, jobType, jobTime, location, salary, logo, _id } = feature
    return (
        <div className='border p-8 rounded-xl'>
            <img className='w-36 h-20' src={logo} alt="" />
            <h1 className='my-3 text-2xl text-[#474747] py-2'>{jobTitle}</h1>
            <p className='my-23 text-[#474747] text-lgCategory'>{company}</p>
            <div className='flex gap-4 py-2'>
                <button className='btn-outlines'>{jobType}</button>
                <button className='btn-outlines'>{jobTime}</button>
            </div>
            <div className='md:flex gap-8 items-center my-3'>
                <p className='flex items-center gap-2'> <CiLocationOn /> {location}</p>
                <p className='flex items-center gap-2'> <AiOutlineDollarCircle /> {salary}</p>
            </div>
            <Link to={`/job-details/${_id}`}><button className='get-start-btn'>View Details</button></Link>

        </div>
    );
};

export default Feature;