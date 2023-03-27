import "../../styles/Inspect/InspectStart.css"
import InspectLeft from "./Inspect_left";
import InspectRight from "./Inspect_right";
import Data from "../../data/Inspect_Data"

import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

const InspectStart = () => {
  const nav = useNavigate();
  
  function che(){
    // console.log(Data.indexOf[0]('6주 이전'))  
    console.log(cli_Title)
  }
  const [scroll, setScroll] = useState();
  useEffect(()=>{
    setScroll(1);
  })
  let week = JSON.parse(localStorage.getItem("baby")).week
  let target;
  if(week <= 6){
    target = 0;
  }else if(7<=week && week <=9){
    target = 1;
  }else if(10<=week && week <=13){
    target = 2;
  }else if(14<=week && week <=20){
    target = 3;
  }else if(21<=week && week <=23){
    target = 4;
  }else if(24<=week && week <=28){
    target = 5;
  }else if(29<=week && week <=33){
    target = 6;
  }else if(34<=week && week <=36){
    target = 7;
  }else if(37<=week && week <=40){
    target = 8;
  }
  useEffect(()=>{
    document.getElementsByClassName('inspect-start')[target].scrollIntoView();
    window.scrollBy(0, -58)
  },[scroll])
  const [cli_Title, setCli_Title] = useState();
  function click_title(e){
    setCli_Title(e.target.outerText);
  }

  return (
    <>
      <Header/>
      <div className="empty_box" />
      {Data.map((datas)=>{
        return(
        <>
        {/* ex) 6주 이전 */}
          <div className="inspect-start">
            <b className="b_start" onClick={che}>{datas[0]}</b>
            <div className="inspect-start-child" />
            <div className="inspect-start-item" />
          </div>
          {datas[1].map((data)=>{
            if(data.div=="검사"){
              return(
                <InspectLeft
                  title={data.title}
                  subtitle={data.subtitle}
                  sub={data.sub}
                  cmts={data.cmts}
                />
              );
            }
            else if(data.div=="증상"){
              return(
                <InspectRight
                  title={data.title}
                  subtitle={data.subtitle}
                  sub={data.sub}
                  cmts={data.cmts}
                  />
              );
            }
          })}
        </>
        );
      })
      }
      <div className="empty_box"></div>
      <Footer/>
    </>
  );
};

export default InspectStart;
