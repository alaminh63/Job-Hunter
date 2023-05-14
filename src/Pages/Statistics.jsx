import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Statistics = () => {

    const data = [
        {
            "id": 1,
            "name": "New Year",
            "marks": 28
        },
        {
            "id": 2,
            "name": "G3 Architects",
            "marks": 59
        },
        {
            "id": 3,
            "name": "Justice",
            "marks": 60
        },
        {
            "id": 4,
            "name": "Problem Solve",
            "marks": 60
        },
        {
            "id": 5,
            "name": "Geometry Genius",
            "marks": 58
        },
        {
            "id": 6,
            "name": "Ai Universe",
            "marks": 60
        },
        {
            "id": 7,
            "name": "Quiz hero",
            "marks": 60
        },
        {
            "id": 8,
            "name": "Knowledge cafe",
            "marks": 60
        }
    ]

    return (
        <>
        <h1 className='text-center text-4xl text-indigo-500 font-bold my-20'>Assignment Marks</h1>
            <div className='md:p-10'>
                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart
                        width={1150}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="marks" stroke="#4B0082" fill="#4B0082" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

export default Statistics;