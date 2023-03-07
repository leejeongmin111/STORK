import "../../styles/Calendar/CalendarMain.css";
import arrow_forward from "../../../assets/svg/Calendar/icon_arrow_ios_forward.svg";
import arrow_ios_back from "../../../assets/svg/Calendar/icon_arrow_ios_back.svg";
import arrow_ios_downward from "../../../assets/svg/Calendar/icon_arrow_ios_downward.svg";
import ellipse_35 from "../../../assets/svg/Calendar/ellipse_35.svg";
import ellipse_36 from "../../../assets/svg/Calendar/ellipse_36.svg";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

import CalendarMemos from "./CalendarMemos";
import CalendarWeeks from "./CalendarWeeks";

import { useState, useEffect } from "react";

import axios from "axios";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

const CalendarMain = () => {
  // console.log("ddddd",JSON.parse(localStorage.getItem("user")).seq);

  // 버튼 그림자 스타일
  const [btnStyle, setBtnStyle] = useState({});
  const [date_style, setDate_style] = useState({});

  let now = new Date();
  const month_arr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // db에서 받아온 일정
  const [data, setData] = useState();

  // db에서 받아온 생리 주기
  const [blood, setBlood] = useState();
  const [shortTerm, setShortTerm] = useState();
  const [longTerm, setLongTerm] = useState();

  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState();
  const [date, setDate] = useState(1);

  const [weeks, setWeeks] = useState();
  const [memoArr, setMemoArr] = useState();
  const [memoStyle, setMemoStyle] = useState(70);

  function check() {
    // day 요일
    let last = blood[0].mb_lastmenstruation;
    let short = blood[0].mb_shortmensterm;
    let long = blood[0].mb_longmensterm;

    // short 가 long 보다 클 경우
    if (blood[0].mb_shortmensterm > blood[0].mb_longmensterm) {
      short = blood[0].mb_longmensterm;
      long = blood[0].mb_shortmensterm;
    }

    let now_1 = new Date(last);
    let now_2 = new Date(last);

    now_1.setDate(now_1.getDate() + short - 19);
    now_2.setDate(now_2.getDate() + long - 12);

    // 가임기 시작, 끝 날짜
    let start_blood =
      now_1.getFullYear() +
      "-" +
      (now_1.getMonth() + 1) +
      "-" +
      now_1.getDate();
    let end_blood =
      now_2.getFullYear() +
      "-" +
      (now_2.getMonth() + 1) +
      "-" +
      now_2.getDate();

    setShortTerm(start_blood);
    setLongTerm(end_blood);
  }

  let input_place = "    " + month + "월" + date + "일에 일정 추가";

  //  달을 넘길 때 동작
  useEffect(() => {
    let temp = new Date(year, month, 0);
    let total = temp.getDate();

    let current;
    let current_date;
    let current_day;

    // 주차별 날짜
    let weeks_date = [[], [], [], [], [], []];

    // num_st 주차
    let num_st = 0;
    for (let i = 1; i <= total; i++) {
      current = new Date(year + "-" + month + "-" + i);
      current_date = current.getDate(); // 날짜
      current_day = current.getDay(); // 요일

      weeks_date[num_st][current_day] = current_date;

      if (current_day == 6) {
        num_st++;
      }
    }

    for (let e = 0; e < 6; e++) {
      for (let i = 0; i < 7; i++) {
        if (weeks_date[e][i] == undefined) {
          weeks_date[e][i] = 0;
        }
      }
    }

    let weeks_memo = [[], [], [], [], [], []];

    setWeeks(
      weeks_date.map((week) => {
        let dis;
        if (week[0] == 0 && week[6] == 0) {
          setMemoStyle(0);
          dis = { display: "none" };
        } else {
          setMemoStyle(70);
          dis = { display: "block" };
        }
        return (
          <div style={dis}>
            <CalendarWeeks
              Click_date={Click_date}
              date={week}
              year={year}
              month={month}
              data={data}
              blood={blood}
              temp_date = {date}
            />
          </div>
        );
      })
    );
  }, [month]);

  useEffect(() => {
    let temp = new Date(year, month, 0);
    let total = temp.getDate();

    let current;
    let current_date;
    let current_day;

    // 주차별 날짜
    let weeks_date = [[], [], [], [], [], []];

    // num_st 주차
    let num_st = 0;
    for (let i = 1; i <= total; i++) {
      current = new Date(year + "-" + month + "-" + i);
      current_date = current.getDate(); // 날짜
      current_day = current.getDay(); // 요일

      weeks_date[num_st][current_day] = current_date;

      if (current_day == 6) {
        num_st++;
      }
    }

    for (let e = 0; e < 6; e++) {
      for (let i = 0; i < 7; i++) {
        if (weeks_date[e][i] == undefined) {
          weeks_date[e][i] = 0;
        }
      }
    }

    // 주차별 정보
    setWeeks(
      weeks_date.map((week) => {
        let dis;
        if (week[0] == 0 && week[6] == 0) {
          setMemoStyle(0);
          dis = { display: "none" };
        } else {
          setMemoStyle(70);
          dis = { display: "block" };
        }
        return (
          <div style={dis}>
            <CalendarWeeks
              Click_date={Click_date}
              date={week}
              year={year}
              month={month}
              data={data}
              blood={blood}
            />
          </div>
        );
      })
    );

    // 일자별 일정들
    if (data != undefined) {
      setMemoArr(
        data.map((data) => {
          let current_year = data.cal_date.split("-")[0];
          let current_month = data.cal_date.split("-")[1];
          let current_date = data.cal_date.split("-")[2];
          let current_memo = data.cal_content;
          let current_time = data.cal_time;

          if (current_time != undefined) {
            current_time = current_time.split(":");
            current_time = current_time[0] + ":" + current_time[1];
          } else {
            current_time = "시간 미정";
          }
          if (
            year == current_year &&
            month == current_month &&
            date == current_date
          ) {
            return (
              <>
                <CalendarMemos memo={current_memo} time={current_time} />
              </>
            );
          }
        })
      );
    }
  }, [data]);

  useEffect(() => {

    // 일자별 일정들
    if (data != undefined) {
      setMemoArr(
        data.map((data) => {
          let current_year = data.cal_date.split("-")[0];
          let current_month = data.cal_date.split("-")[1];
          let current_date = data.cal_date.split("-")[2];
          let current_memo = data.cal_content;

          let current_time = data.cal_time;

          if (current_time != undefined) {
            current_time = current_time.split(":");
            current_time = current_time[0] + ":" + current_time[1];
          } else {
            current_time = "시간 미정";
          }
          if (
            year == current_year &&
            month == current_month &&
            date == current_date
          ) {
            return (
              <>
                <CalendarMemos memo={current_memo} time={current_time} />
              </>
            );
          }
        })
      );
    }
    let temp = new Date(year, month, 0);
    let total = temp.getDate();

    let current;
    let current_date;
    let current_day;

    // 주차별 날짜
    let weeks_date = [[], [], [], [], [], []];

    // num_st 주차
    let num_st = 0;
    for (let i = 1; i <= total; i++) {
      current = new Date(year + "-" + month + "-" + i);
      current_date = current.getDate(); // 날짜
      current_day = current.getDay(); // 요일

      weeks_date[num_st][current_day] = current_date;

      if (current_day == 6) {
        num_st++;
      }
    }

    for (let e = 0; e < 6; e++) {
      for (let i = 0; i < 7; i++) {
        if (weeks_date[e][i] == undefined) {
          weeks_date[e][i] = 0;
        }
      }
    }

    let weeks_memo = [[], [], [], [], [], []];

    setWeeks(
      weeks_date.map((week) => {
        let dis;
        if (week[0] == 0 && week[6] == 0) {
          setMemoStyle(0);
          dis = { display: "none" };
        } else {
          setMemoStyle(70);
          dis = { display: "block" };
        }
        return (
          <div style={dis}>
            <CalendarWeeks
              Click_date={Click_date}
              date={week}
              year={year}
              month={month}
              data={data}
              blood={blood}
              temp_date = {date}
            />
          </div>
        );
      })
    );
    
  }, [date]);

  function next_month() {
    if (month < 12) {
      setMonth(month + 1);
      setDate(1);
    } else if (month >= 12) {
      setYear(year + 1);
      setMonth(1);
      setDate(1);
    }
  }

  function pre_month() {
    if (month < 2) {
      setYear(year - 1);
      setMonth(12);
      setDate(1);
    } else if (month >= 2) {
      setMonth(month - 1);
      setDate(1);
    }
  }

  // 날 짜 클릭시
  function Click_date(e) {
    setDate(e.target.outerText);
    // localStorage.setItem("click_date",
    // JSON.stringify({
    //   click_day : e.target.outerText,
    // }))
  }

  // 버튼 클릭 시 그림자 효과
  function ch_style() {
    setBtnStyle({ boxShadow: "none" });
    document.getElementsByClassName("calendar_time")[0].value = "";
    document.getElementsByClassName("calendar_memo")[0].value = "";

    // 값 전달
    if (memo != undefined) {
      axios
        .post("http://127.0.0.1:3001/Calendar", {
          seq: JSON.parse(localStorage.getItem("user")).seq,
          memo: memo,
          year: year,
          month: month,
          date: date,
          calen_time: calen_time,
        })
        .then((res) => {})
        .catch((err) => {
          console.log("문제발생123", err);
        });
      let cal_date = year + "-" + month + "-" + date;
      setData(
        data.concat({
          cal_date: cal_date,
          cal_time: calen_time,
          cal_content: memo,
        })
      );
    }

    setMemo(undefined);
    myTimer();
  }
  var myTimer = setTimeout(function () {
    setBtnStyle({});
  }, 1000);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(false);
    setCalen_time(e.target.outerText);
  };

  let data_test;

  //최초 요청
  useEffect(() => {
    // db에서 일정 정보 받아오기
    axios
      .post("http://127.0.0.1:3001/Calendar_data", {
        seq: JSON.parse(localStorage.getItem("user")).seq,
      })
      .then((res) => {
        let now = new Date();
        setMonth(now.getMonth() + 1);
        setData(res.data.data);
        setBlood(res.data.blood);
      })
      .catch((err) => {
        console.log("문제발생123", err);
      });

    // 시간 select 창
    let times = [];
    let temp;
    // times.push(<Button className="cale_time_btn" onClick={handleClose}>시간미정</Button>);
    for (let i = 0; i <= 24; i++) {
      if (i < 10) {
        temp = "0" + i;
      } else {
        temp = i;
      }
      times.push(
        <Button className="cale_time_btn" onClick={handleClose}>
          {temp}:00
        </Button>
      );
    }
    setTime_div(
      times.map((num) => {
        return <div>{num}</div>;
      })
    );
  }, []);

  // 시간 select 창
  const [time_div, setTime_div] = useState();
  const [calen_time, setCalen_time] = useState();

  const [memo, setMemo] = useState();

  return (
    <>
      <Header />
      <div className="calendar-main">
        <div className="parent_cale_main">
          <div className="div9_cale_main" onClick={check}>
            {month}
          </div>
          <div className="february">{month_arr[month - 1]}</div>
          <img
            className="icon-arrow-ios-back"
            alt=""
            src={arrow_ios_back}
            onClick={pre_month}
          />
          <img
            className="icon-arrow-ios-forward"
            alt=""
            src={arrow_forward}
            onClick={next_month}
          />
          <div className="empty_box_cale_main" />

          {/* 날짜들  */}
          {weeks}
          <div className="empty_box2_cale_main"></div>

          {/* 요일  */}
          <div className="sat" style={{ fontWeight: "bolder" }}>
            SAT
          </div>
          <div className="fri" style={{ fontWeight: "bolder" }}>
            FRI
          </div>
          <div className="thu" style={{ fontWeight: "bolder" }}>
            THU
          </div>
          <div className="wed" style={{ fontWeight: "bolder" }}>
            WED
          </div>
          <div className="tue" style={{ fontWeight: "bolder" }}>
            TUE
          </div>
          <div className="mon" style={{ fontWeight: "bolder" }}>
            MON
          </div>
          <div className="sun" style={{ fontWeight: "bolder" }}>
            SUN
          </div>

          {/* 년도  */}
          <div className="div45_cale_main">{year}</div>

          {/* memos */}
          <div
            className="frame-child_cale_main"
            style={{ marginTop: memoStyle }}
          />
          <div className="div46_cale_main" style={{ marginTop: memoStyle }}>
            {month}월 {date}일
          </div>

          {/* 일정 리스트  */}
          {memoArr}

          {/* 모달 시간 선택 창  */}

          <div>
            <Dialog
              open={open}
              onClose={handleClose}
              className="time_modal_box"
            >
              <div className="time_modal">{time_div}</div>
            </Dialog>
          </div>

          {/* 일정 입력 창 */}
          <div className="memo_box">
            <input
              className="calendar_memo"
              placeholder={input_place}
              onChange={(e) => {
                setMemo(e.target.value);
              }}
            ></input>
            <div className="calendar_time" onClick={handleClickOpen}>
              {calen_time}
            </div>
            <div className="calendar_sub" style={btnStyle} onClick={ch_style}>
              +
            </div>
          </div>

          {/* <img
          className="icon-arrow-ios-downward"
          alt=""
          src={arrow_ios_downward}
          style={{marginTop:memoStyle}}
        /> */}

          <img
            className="frame-child10_cale_main"
            alt=""
            src={ellipse_35}
            style={{ marginTop: memoStyle }}
          />
          <div className="div49_cale_main" style={{ marginTop: memoStyle }}>
            가임기
          </div>
          <img
            className="frame-child11_cale_main"
            alt=""
            src={ellipse_36}
            style={{ marginTop: memoStyle }}
          />
          <div className="div50_cale_main" style={{ marginTop: memoStyle }}>
            일정
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CalendarMain;
