import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const SentimentChart = ({ sentimentData }) => {
  const data = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        label: "# of Headlines",
        data: [
          sentimentData?.positive || 0,
          sentimentData?.negative || 0,
          sentimentData?.neutral || 0,
        ],
        backgroundColor: ["#27ae60", "#c0392b", "#f39c12"],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default SentimentChart;
