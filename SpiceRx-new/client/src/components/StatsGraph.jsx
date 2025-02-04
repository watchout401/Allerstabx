import React from 'react';
import { Line } from 'react-chartjs-2';

function StatsGraph() {
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Spices Sold',
        data: [10, 20, 15, 25],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  return <Line data={data} />;
}

export default StatsGraph;