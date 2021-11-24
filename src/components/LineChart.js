import React from 'react';

import { Bar } from 'react-chartjs-2';

function LineChart({ chartData }) {
    return (
        <div>
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Cryptocurrency prices"
              },
              legend: {
                display: true,
                position: "bottom"
             }
            }
          }}
        />
      </div>
    );
  }

  export default LineChart;