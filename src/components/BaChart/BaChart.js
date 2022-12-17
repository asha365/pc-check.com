import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';


const BaChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sales": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sales": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sales": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sales": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sales": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sales": 670,
            "revenue": 61000
        },
    ];
    return (
        <div>
            <BarChart width={730} height={430} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={'month'} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="month" fill="#8884d8" />
            <Bar dataKey="investment" fill="#82ca9d" />
            <Bar dataKey="revenue" fill="#8884d8" />
            <Bar dataKey="sales" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default BaChart;