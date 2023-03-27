import ApexChart from "react-apexcharts";
import { useState } from "react";

const WeightChart = (props) => {

  const donutData = {
    series: [
      {
        name: "SCORE",
        data: props.val,
        color: "#1E5AF5",
      },
    ],
    options: {
      chart: {
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        // type: 'datetime',
        categories: props.val2,
        labels: {
          show: false,
        },
      },
    },
  };

  return (
    <ApexChart
      options={donutData.options}
      series={donutData.series}
      type="line"
      width="100%"
      height="100%"
    />
  );
};

export default WeightChart;
