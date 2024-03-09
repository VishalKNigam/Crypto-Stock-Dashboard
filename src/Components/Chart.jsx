import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";

export const Graph = () => {
  const graphRef = useRef(null);
  const [historicalData, setHistoricalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=INR&days=30"
        );
        const data = await response.json();
        // Limit historical data to the first 30 data points (30 days)
        setHistoricalData(data.prices);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!historicalData) return;

    // Extract timestamps and prices from historicalData
    const timestamps = historicalData.map((dataPoint) => new Date(dataPoint[0]));
    const prices = historicalData.map((dataPoint) => dataPoint[1]);

    // Draw the graph using Chart.js
    const ctx = graphRef.current.getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: timestamps,
        datasets: [
          {
            label: "Bitcoin Price",
            data: prices,
            borderColor: "blue",
            borderWidth: 1,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: "time",
            time: {
              unit: "day",
            },
          },
          y: {
            title: {
              display: true,
              text: "Price (INR)",
            },
          },
        },
      },
    });
  }, [historicalData]);

  return <canvas ref={graphRef} />;
};
