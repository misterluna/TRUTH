import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
    }]
};

const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    responsive: true,
    maintainAspectRatio: true,
    devicePixelRatio: 10
};

const LineChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Line Chart</h1>
    </div>
    <Line
    data={data} 
    height={180}
    width={280}
    options={options}
    />
  </>
);

export default LineChart;