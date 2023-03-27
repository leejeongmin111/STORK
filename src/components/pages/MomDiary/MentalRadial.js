import ApexChart from "react-apexcharts";

const Radialbar = (props) => {
  const col =  ()=>{
    if (props.val[0] > 70) {
      return ["#F5A9A9"];
    } else if (props.val[0] > 30) {
      return ["#F2F5A9"];
    } else {
      return ["#A9D0F5"];
    }
  }

  const textcol =  ()=>{
    if (props.val[0] > 70) {
      return "#F5A9A9";
    } else if (props.val[0] > 30) {
      return "#F2F5A9";
    } else {
      return "#A9D0F5";
    }
  }
  const donutData = {
    series: [props.val],
    options: {
      chart: {
        type: "radialBar",
      },
      labels: [""],
      colors: col(),
      plotOptions: {
        radialBar: {
          offsetY: -37,
          track: {
            background: "#D9D9D9",
          },
          dataLabels: {
            showOn: "always",
            name: {
              offsetY: -10,
              show: true,
              color: "#B2B2B2",
              fontSize: "15px",
            },
            value: {
              offsetY: -1,
              color: "#4a4a4a",
              fontSize: "40px",
              // color: textcol(),
              fontWeight: "bold",
              show: true,
            },
          },
        },
      },
    },
  };
  console.log(props.val[0])
  return (
    <div>
      <ApexChart
        options={donutData.options}
        series={donutData.series}
        type="radialBar"
        width={220}
        height={320}
      />
    </div>
  );
};

export default Radialbar;
