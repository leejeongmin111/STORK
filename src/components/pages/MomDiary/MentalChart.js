import ApexChart from "react-apexcharts";

const MentalChart = (props) => {

  const donutData = {
    series: [
      {
        name: "SCORE",
        data: props.val,
        color: "#EA7171",
      },
    ],
    options: {
      chart: {
        type: "area",
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
        width: 5,
        curve: "smooth",
      },
      xaxis: {
        categories: props.val2,
        labels: {
          show: false,
        },
      },
      plotOptions: {
        area: {
          size: "70%",

          // dataLabels: {
          //   showOn: "always",
          //   name: {
          //     offsetY: -10,
          //     show: true,
          //     color: "#888",
          //     fontSize: "13px"
          //   },
          //   value: {
          //     color: "#111",
          //     fontSize: "30px",
          //     show: true
          //   }
          // }
        },
      },
    },
  };

  return (
    <ApexChart
      options={donutData.options}
      series={donutData.series}
      type="area"
      width="100%"
      height="100%"
    />
  );
};

export default MentalChart;
