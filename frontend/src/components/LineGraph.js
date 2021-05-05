import React, { useState, useEffect } from "react";
import { Line, defaults } from 'react-chartjs-2';
import Utils from "../Utils";

//defaults.global.defaultFontFamily = 'New Rubrik';

const LineChart = (props) => {
    // Set up backend
    const USER_ID = Utils.login();
    let update = 0;
    const [activeUser, setActiveUser] = useState([]);
    useEffect(() => {
        const getAsyncInfo = async () => {
        Utils.getUser(USER_ID).then((res) => {
            setActiveUser(res);
        });
        };
        getAsyncInfo();
    }, [USER_ID, update]);

    // Get array of activity in units of hours
    const activity = getActivity(activeUser, props.category);
    const dates = getLabels();
    
    return (<>
        <div className='header'>
        <h1 className='title'>Line Chart</h1>
        </div>
        <Line
        data={{
            labels: dates,
            datasets: [{
                label: "Your Activity",
                data: activity,
                backgroundColor: ['rgba(47, 159, 214, 1)'],
                borderColor: ['rgba(47, 159, 214, 1)']
            }]
        }} 
        height={180}
        width={280}
        options={{
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true,
            maintainAspectRatio: true,
            devicePixelRatio: 10
        }}
        />
    </>);
};

const getActivity = (user, category) => {
    //TODO;
    const dateRange = Utils.getLastTwoWeeksStandard();
    const result = dateRange.map(d => Utils.getActivityTotal(user, category, d));
    console.log(result);

    return result;
};

const getLabels = (category) => {
    //TODO;
    return ["day1", "day2", "day3", "day4", "day5", "day6", "day7", "day8", "day9", "day10", 
    "day11", "day12", "day13", "day14"];
};


export default LineChart;