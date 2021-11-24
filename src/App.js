import React from 'react';
import './App.css';
import Header from './components/Header';
import DateAndTime from './components/DateAndTime';
import LineChart from './components/LineChart';

import { useState, useEffect } from 'react';

function App() {

  useEffect(() => {
    const fetchPrices = async () => {
      const response = await fetch("https://api.coincap.io/v2/assets/?limit=5");
      const data = await response.json();
      setChartData({
        labels: data.data.map((crypto) => crypto.name),
        datasets: [
          {
            label: "Price in USD",
            data: data.data.map((crypto) => crypto.priceUsd),
            backgroundColor: [
              "#ffbb11",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ]
          }
        ]
      });
    };
    fetchPrices()
  }, [])

  const [chartData, setChartData] = useState({});

  return (
    <div>
      <Header />
      <DateAndTime />
      <LineChart chartData={chartData} />
    </div>
  );
}

export default App;
