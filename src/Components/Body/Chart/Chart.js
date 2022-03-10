import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

const Charts = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Users",
        data: [33, 25, 35, 51, 54, 76],
        fill: true,
        borderColor: "#03a9f4",
        backgroundColor: "rgba(75,192,192,0.2)",
      },
    ],
  };

  const pieData = {
    labels: ["New Visitor", "Returning Visitor"],
    datasets: [
      {
        label: "# of Votes",
        data: [19, 5],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div style={{ width: "60vw", marginLeft: "18%" }}>
        <Line options={options} data={data} />
      </div>
      <div style={{ width: "25vw", marginLeft: "auto", padding: "5%" }}>
        <Pie data={pieData} />
      </div>
    </>
  );
};

export default Charts;
