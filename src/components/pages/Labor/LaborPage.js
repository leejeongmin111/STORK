import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import LaborCompo from "./LaborCompo";

import labor_compo_inputdiv_title from "../../../assets/svg/Labor/Labor/labor_compo_inputdiv_title.svg";
import labor_help_btn_div from "../../../assets/svg/Labor/Labor/labor_help_btn_div.svg";
import labor_help_title from "../../../assets/svg/Labor/Labor/labor_help_title.svg";
import labor_home_btn_div from "../../../assets/svg/Labor/Labor/labor_home_btn_div.svg";
import labor_home_title from "../../../assets/svg/Labor/Labor/labor_home_title.svg";
import timer_title from "../../../assets/svg/Labor/Labor/timer_title.svg";

import labor_help_btn_img from "../../../assets/images/Labor/labor_help_btn_img.png";
import labor_home_btn_img from "../../../assets/images/Labor/labor_home_btn_img.png";
import labor_painbtn_img from "../../../assets/images/Labor/labor_painbtn_img.png";

import "../../styles/Labor/LaborPage.css";

import LaborAlert from "./LaborAlert";

const LaborPage = () => {
  const navigate = useNavigate();

  const onLaborHelpBtnClick = useCallback(() => {
    navigate("/LaborHelp");
  }, [navigate]);

  const onLaborHomeBtnClick = useCallback(() => {
    navigate("/Main");
  }, [navigate]);

  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);

  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  const [alert, setAlert] = useState("none");

  const [power, setPower] = useState("off");

  let test = [];
  const [data, setData] = useState([]);
  const [testArray, setTestArray] = useState([]);

  let temp = 0;
  useEffect(() => {
    let interval;

    if (power == "on") {
      interval = setInterval(() => {
        setSec((sec) => sec + 1);
      }, 1000);
    } else if (power == "off") {
      clearInterval(interval);

      // DB 전송
      if (data.length > 0) {
        axios
          .post("http://127.0.0.1:3001/Labor", {
            seq: JSON.parse(localStorage.getItem("user")).seq,
            start: data[0],
          })
          .then((res) => {})
          .catch((err) => {
            console.log("문제발생123", err);
          });
      }
    }
    return () => clearInterval(interval);
  }, [power]);

  // 진통 데이터 받아오기
  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/Labor_data", {
        seq: JSON.parse(localStorage.getItem("user")).seq,
      })
      .then((res) => {
        let labor = res.data.data;
        console.log("hi", labor[0].labor_time);
        let labor_arr = [];
        for (let i = 0; i < labor.length; i++) {
          labor_arr.push({
            sec: 0,
            start_month: labor[i].labor_time.start_month,
            start_day: labor[i].labor_time.start_day,
            start_hour: labor[i].labor_time.start_hour,
            start_min: labor[i].labor_time.start_min,
            term_hour: labor[i].labor_time.term_hour,
            term_min: labor[i].labor_time.term_min,
            term_sec: labor[i].labor_time.term_sec,
            cycle_hour: labor[i].labor_time.cycle_hour,
            cycle_min: labor[i].labor_time.cycle_min,
            cycle_sec: labor[i].labor_time.cycle_sec,
            start_time: labor[i].labor_time.start_time,
            end_time: labor[i].labor_time.end_time,
          });
        }
        setData(labor_arr);
      })
      .catch((err) => {
        console.log("데이터 오류");
      });
  }, []);

  if (sec >= 60) {
    setSec(0);
    setMin((min) => min + 1);
  }
  if (min >= 60) {
    setMin(0);
    setHour((hour) => hour + 1);
  }
  if (hour >= 24) {
    setSec(0);
    setMin(0);
    setHour(0);
    setPower("off");
  }

  const [LaborText, setLaborText] = useState("Start");
  function stop_watch() {
    // 스톱워치 시작
    if (power == "off") {
      setPower("on");
      setStart(new Date());
      setLaborText("Finish");
    }
    // 스톱워치 종료
    else if (power == "on") {
      let temp = sec;
      let end_ = new Date();
      setEnd(end_);
      setLaborText("Start");

      console.log(end_);
      const start_month = start.getMonth() + 1;
      const start_day = start.getDay();
      const start_hour = start.getHours();
      const start_min = start.getMinutes();
      const start_sec = start.getSeconds();

      // 진통동안 시간
      let term = end_.getTime() - start.getTime();
      let term_hour = parseInt(term / (1000 * 60 * 60));
      let term_min = parseInt((term % (1000 * 60 * 60)) / (1000 * 60));
      let term_sec = parseInt((term % (1000 * 60)) / 1000);

      // 진통 주기
      let cycle = 0;
      let cycle_hour = 0;
      let cycle_min = 0;
      let cycle_sec = 0;

      if (data.length > 0) {
        cycle = start.getTime() - data[0].start_time;
        cycle_hour = parseInt(cycle / (1000 * 60 * 60));
        cycle_min = parseInt((cycle % (1000 * 60 * 60)) / (1000 * 60));
        cycle_sec = parseInt((cycle % (1000 * 60)) / 1000);
      }
      console.log(data);

      test = data.splice(0, 0, {
        sec: temp,
        start_month: start_month,
        start_day: start_day,
        start_hour: start_hour,
        start_min: start_min,

        term_hour: term_hour,
        term_min: term_min,
        term_sec: term_sec,

        cycle_hour: cycle_hour,
        cycle_min: cycle_min,
        cycle_sec: cycle_sec,

        start_time: start.getTime(),
        end_time: end_.getTime(),
      });

      setData(data.concat(test));

      let total_arr = [];
      let total_cycle_arr = [];
      for (let i = 0; i < 4; i++) {
        if (data[i] == undefined) {
          break;
        }
        // 진통동안 총 시간(초)
        let total =
          data[i].term_sec +
          data[i].term_min * 60 +
          data[i].term_hour * 60 * 60;
        total_arr[i] = total;

        // 진통 주기(초)
        let total_cycle =
          data[i].cycle_sec +
          data[i].cycle_min * 60 +
          data[i].cycle_hour * 60 * 60;
        total_cycle_arr[i] = total_cycle;
      }
      console.log("total", total_arr);
      console.log("cycle", total_cycle_arr);

      // count =>  진진통 단계별 판단
      let count_1 = 0;
      let count_2 = 0;
      let count_3 = 0;
      for (let i = 0; i < 4; i++) {
        if (data[i] == undefined) {
          break;
        }
        if (15 <= total_arr[i] && total_arr[i] <= 50 && 300 <= total_cycle_arr[i] && total_cycle_arr[i] <= 900) {
          count_1++;
        }
        if (30 <= total_arr[i] && total_arr[i] <= 60 && 240<= total_cycle_arr[i] && total_cycle_arr[i] <= 420) {
          count_2++;
          // 30   60   240  420
        }
        if (50 <= total_arr[i] && total_arr[i] <= 90 && 120 <= total_cycle_arr[i] &&  total_cycle_arr[i] <= 180) {
          count_3++;
        }
      }
      // 진진통 판별 시
      if (count_2 == 4) {
        console.log(count_2,"count2x")
        setAlert("block");
        setTimeout(function () {
          setAlert("none");
          navigate('/emergency')

        }, 5000);
      }
      if (count_1 == 4) {
      }
      if (count_3 == 4) {
      }

      setSec(0);
      setMin(0);
      setHour(0);
      setPower("off");
    }
  }

  //const [data, setData] = useState([{day:"08/03",clock:"08:01",hour:"00",min:"05",sec:"30",}])

  useEffect(
    function () {
      setTestArray(
        data.map((data) => {
          return (
            <>
              <LaborCompo
                sec={data.sec}
                start_month={data.start_month}
                start_day={data.start_day}
                start_hour={data.start_hour}
                start_min={data.start_min}
                term_hour={data.term_hour}
                term_min={data.term_min}
                term_sec={data.term_sec}
                cycle_hour={data.cycle_hour}
                cycle_min={data.cycle_min}
                cycle_sec={data.cycle_sec}
              />
            </>
          );
        })
      );
    },
    [data]
  );

  function ch() {
    let now = new Date();
    console.log(now.getTime());
    setAlert("block");
    setTimeout(function () {
      setAlert("none");
      navigate('/emergency')
    }, 5000);
  }

  return (
    <div className="labor-page">
      <div className="labor-timer-div">
        <div className="labor-timer-div1" />
        <img className="labor-home-title-icon" alt="" src={labor_home_title} />
        <button className="labor-home-btn" onClick={onLaborHomeBtnClick}>
          <img
            className="labor-help-btn-div-icon"
            alt=""
            src={labor_home_btn_div}
          />
          <img
            className="labor-help-btn-img-icon"
            alt=""
            src={labor_home_btn_img}
          />
        </button>
        <img className="timer-title-icon" alt="" src={timer_title} />
        <span className="timer-text" onClick={() => console.log(sec, power)}>
          {hour > 0 ? hour + " : " : ""}
          {min < 10 ? "0" + min : min} : {sec < 10 ? "0" + sec : sec}
        </span>
        <img className="labor-help-title-icon" alt="" src={labor_help_title} />
        <button className="labor-help-btn" onClick={onLaborHelpBtnClick}>
          <img
            className="labor-help-btn-div-icon"
            alt=""
            src={labor_help_btn_div}
          />
          <img
            className="labor-help-btn-img-icon"
            alt=""
            src={labor_help_btn_img}
          />
        </button>
      </div>
      <img
        className="labor-compo-inputdiv-title-icon"
        alt=""
        src={labor_compo_inputdiv_title}
      />
      <div className="labor-compo-inputdiv" onClick={ch}>
        {testArray}
      </div>
      <div className="labor-alert-input-div" style={{ display: alert }}>
        <LaborAlert />
      </div>
      <button className="labor-painbtn" onClick={stop_watch}>
        <div className="labor-painbtn-div" />
        <span className="labor_painbtn_text">{LaborText}</span>
        <img
          className="labor-painbtn-img-icon"
          alt=""
          src={labor_painbtn_img}
        />
      </button>
    </div>
  );
};

export default LaborPage;
