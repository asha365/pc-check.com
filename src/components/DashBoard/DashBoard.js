
import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './DashBoard.css';

const DashBoard = () => {
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
        <div className='chart'>
            <LineChart width={600} height={400} data={data}>
                <Line dataKey={'investment'} stroke="#8884d8"></Line>
                <Line dataKey={'sales'} stroke="#82ca9d"></Line>
                <Line dataKey={'revenue'} stroke="#82ca9d"></Line>
                <XAxis dataKey={'month'}></XAxis>
                <XAxis dataKey={'sales'}></XAxis>
                <XAxis dataKey={'revenue'}></XAxis>
                <Legend verticalAlign="top" height={36}/>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
            </LineChart>
            

        </div>
    );
};

export default DashBoard;