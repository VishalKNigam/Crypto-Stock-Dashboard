import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PriceChart = ({ coin }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Assuming coin.price_change_24h is a single value representing the price change
    const priceChange = coin.price_change_24h;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Price Change (24 hours)'],
        datasets: [{
          label: 'Price Change (24 hours)',
          data: [priceChange],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Price (₹)'
            }
          }
        }
      }
    });
  }, [coin]);

  return <canvas ref={chartRef} style={{paddingTop:"5px"}}/>;
};

export default PriceChart;
