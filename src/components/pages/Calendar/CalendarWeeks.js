import { style } from "@mui/system";
import { useEffect, useState } from "react";
import "../../styles/Calendar/CalendarWeeks.css"


const CalendarWeeks = (props) => {
  const{
    Click_date,
    date,
    year,
    month,
    data,
    start_blood,
    end_blood,
    blood,
    temp_date

  } = props;
  
  let date_ss = []
  for(let i =0; i<= 6 ; i ++){
    if(date[i]==temp_date){
      date_ss[i] = {fontSize : 'large', fontWeight : 'bold', textDecoration : 'underline', textDecorationThickness : '2px'};
    }else{
      date_ss[i] = {}
    }
  }
  
  // 날짜 계산
  let dis = []
  for(let i =0; i<= 6 ; i ++){
    if(date[i]==0){
      dis[i] = {display :"none"};
    }else{
    }
  }

  // 일정 여부 
  let memo = [];
  if(data!=undefined){
  for(let i =0;i < date.length;i++){
    for(let e =0; e < data.length;e ++){
      let memo_year = data[e].cal_date.split('-')[0];
      let memo_month = data[e].cal_date.split('-')[1];
      let memo_date = data[e].cal_date.split('-')[2];

      if(memo_year == year && memo_month == month && date[i] == memo_date){
        memo[i] = {display : "block"};
      }
    }
    for(let i = 0 ; i < 7;i++){
      if(memo[i] == undefined){
        memo[i] = {display : "none"};
      }
    }
  }
  }

  const [shortTerm, setShortTerm] = useState();
  const [longTerm, setLongTerm] = useState();

  // 가임기  표시 아이콘 스타일
  let dis_child = []
  if(blood != undefined){
    let last = blood[0].mb_lastmenstruation;
    let short = blood[0].mb_shortmensterm;
    let long = blood[0].mb_longmensterm;

    // short 가 long 보다 클 경우 
    if(blood[0].mb_shortmensterm > blood[0].mb_longmensterm ){
      short = blood[0].mb_longmensterm;
      long = blood[0].mb_shortmensterm;
    }

    let now_1 = new Date(last);
    let now_2 = new Date(last);

    now_1.setDate(now_1.getDate() + short - 19);
    now_2.setDate(now_2.getDate() + long - 12);

    // 가임기 시작, 끝 날짜 
    let start_blood = now_1.getFullYear()+"-"+ (now_1.getMonth()+1) +"-"+ now_1.getDate();
    let end_blood = now_2.getFullYear()+"-"+ (now_2.getMonth()+1) +"-"+ now_2.getDate();

    // console.log("start"+start_blood, "end"+end_blood)

    let temp;
    // let start = start_blood.split('-');
    // let end = end_blood.split('-');

    let start;
    let end;
    for(let i = 0; i < 7; i ++){
      temp = year +"-"+ month +"-"+ date[i];
      start = new Date(start_blood);
      temp = new Date(temp);
      end = new Date(end_blood)

      if(start <= temp  && temp <= end){
        dis_child[i] = {display : "block"};
      }else{
        dis_child[i] = {display : "none"};
      }
    }

  }


  

  function dd(e){
  }

  return (
    <div className="calendar-weeks">
      <div className="day-group6_cale_week" onClick={Click_date} style = {dis[6]}>
        <div className="div2_cale_week" onClick={dd} style = {date_ss[6]}>{date[6]}</div>
        <div className="day-group6-child_cale_week" style={dis_child[6]} />
        <div className="day-group6-item_cale_week" style = {memo[6]} />
      </div>
      <div className="day-group5_cale_week" onClick={Click_date} style = {dis[5]}>
        <div className="div2_cale_week" style = {date_ss[5]}>{date[5]} </div>
        <div className="day-group6-child_cale_week" style={dis_child[5]} />
        <div className="day-group6-item_cale_week" style = {memo[5]} />
      </div>
      <div className="day-group4_cale_week" onClick={Click_date} style = {dis[4]}>
        <div className="div2_cale_week" style = {date_ss[4]}>{date[4]}</div>
        <div className="day-group6-child_cale_week" style={dis_child[4]}/>
        <div className="day-group6-item_cale_week" style = {memo[4]}/>
      </div>
      <div className="day-group3_cale_week" onClick={Click_date} style = {dis[3]} >
        <div className="div2_cale_week"style = {date_ss[3]}>{date[3]}</div>
        <div className="day-group6-child_cale_week" style={dis_child[3]} />
        <div className="day-group6-item_cale_week" style = {memo[3]}/>
      </div>
      <div className="day-group2_cale_week" onClick={Click_date} style = {dis[2]}>
        <div className="div2_cale_week"style = {date_ss[2]}>{date[2]}</div>
        <div className="day-group6-child_cale_week" style={dis_child[2]}/>
        <div className="day-group6-item_cale_week" style = {memo[2]}/>
      </div>
      <div className="day-group1_cale_week" onClick={Click_date} style = {dis[1]}>
        <div className="div2_cale_week"style = {date_ss[1]}>{date[1]}</div>
        <div className="day-group6-child_cale_week" style={dis_child[1]}/>
        <div className="day-group6-item_cale_week"style = {memo[1]} />
      </div>
      <div className="day-group0_cale_week" onClick={Click_date} style = {dis[0]}>
        <div className="div2_cale_week"style = {date_ss[0]}>{date[0]}</div>
        <div className="day-group6-child_cale_week" style={dis_child[0]}/>
        <div className="day-group6-item_cale_week" style = {memo[0]}/>
      </div>
    </div>
  );
};

export default CalendarWeeks;
