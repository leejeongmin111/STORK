import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import gomap_btn_text from "../../../assets/svg/MomDiary/MomDiaryChart/gomap_btn_text.svg";
import goweight_text from "../../../assets/svg/MomDiary/MomDiaryChart/goweight_text.svg";
import momchart_title1 from "../../../assets/svg/MomDiary/MomDiaryChart/momchart_title1.svg";
import momchart_title2 from "../../../assets/svg/MomDiary/MomDiaryChart/momchart_title2.svg";
import momchart_title3 from "../../../assets/svg/MomDiary/MomDiaryChart/momchart_title3.svg";
import momchart_2_btn_text from "../../../assets/svg/MomDiary/MomDiaryChart/momchart_2_btn_text.svg";
import momchart_2_btn1_text from "../../../assets/svg/MomDiary/MomDiaryChart/momchart_2_btn1_text.svg";

import "../../styles/MomDiary/MomDiaryChartPage.css";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

import MentalRadial from "./MentalRadial";
import MentalChart from "./MentalChart";
import WeightChart from "./WeightChart";

const MomDiaryChartPage = () => {
  const [chartdatedata, setChartdatedata] = useState([]);
  const [kgdata, setKgdata] = useState([]);
  const [scoredata, setScoredata] = useState([]);
  const [score, setScore] = useState([]);
  const [scoredate, setScoredate] = useState([]);
  const [scoreglll, setScoreglll] = useState("")
  const [weightglll, setWeightglll] = useState("")

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/chartdata", {
        seq:JSON.parse(localStorage.getItem("user")).seq,
      })
      .then((res)=>{
        if (res.data.result == "success") {
          setChartdatedata(res.data.ml_date);
          setKgdata(res.data.ml_weight);
          setScoredata(res.data.ml_con);
          setScore(res.data.ml_con.slice(-7));
          setScoredate(res.data.ml_date.slice(-7));

          if(Math.min(...res.data.ml_con.slice(-4))>70){
            console.log("문제")
            setScoreglll("우울 지수가 높습니다. 정신의학과 방문을 권유합니다.")
          } else {
            console.log("정상")
            document.getElementsByClassName("gomap-btn")[0].style.visibility = "hidden";
            setScoreglll("우울 지수가 정상입니다.")
          };
          
          if(res.data.ml_weight.slice(-30)[0]>res.data.ml_weight[res.data.ml_weight.length-1]){
            console.log(res.data.ml_weight.slice(-30)[0])
            console.log(res.data.ml_weight[res.data.ml_weight.length-1])
            console.log("무게감소")
            setWeightglll(`최근 30일 기준으로 ${res.data.ml_weight[res.data.ml_weight.length-1]-res.data.ml_weight.slice(-30)[0]}kg 변화`)
          } else if (res.data.ml_weight.slice(-30)[0]<res.data.ml_weight[res.data.ml_weight.length-1]) {
            console.log(res.data.ml_weight.slice(-30)[0])
            console.log(res.data.ml_weight[res.data.ml_weight.length-1])
            console.log("무게증가")
            setWeightglll(`최근 30일 기준으로 +${res.data.ml_weight[res.data.ml_weight.length-1]-res.data.ml_weight.slice(-30)[0]}kg 변화`)
          } else{
            console.log(res.data.ml_weight.slice(-30)[0])
            console.log(res.data.ml_weight[res.data.ml_weight.length-1])
            console.log("무게유지")
            setWeightglll(`적정 체중입니다.`)
          }
        } else {
          console.log("데이터베이스 오류");
        }
      })
      .catch(() => {
        console.log("데이터 보내기 실패");
      });
    
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onGoMapBtnClick = useCallback(() => {
    navigate("/MomDiaryMap");
  }, [navigate]);

  const onGoWeightBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='momChartTitle3']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const chill = () => {
    setScore(scoredata.slice(-7));
    setScoredate(chartdatedata.slice(-7));
  };

  const samship = () => {
    setScore(scoredata.slice(-30));
    setScoredate(chartdatedata.slice(-30));
  };

  return (
    <div className="momdiarychart-page">
      <Header />
      <img className="momchart-title1-icon" alt="" src={momchart_title1} />
      <div className="momchart-1-div" data-animate-on-scroll>
        <MentalRadial val={scoredata.slice(-1)}/>
      </div>
      <img className="momchart-title2-icon" alt="" src={momchart_title2} />
      <div className="momchart-2-cover" data-animate-on-scroll>
        <div className="momchart-3-cover1" />
        <button className="momchart-2-btn1" onClick={chill}>
          <div className="momchart-2-btn2-div" />
          <img
            className="momchart-2-btn1-text-icon"
            alt=""
            src={momchart_2_btn1_text}
          />
        </button>
        <button className="momchart-2-btn2" onClick={samship}>
          <div className="momchart-2-btn2-div" />
          <img
            className="momchart-2-btn-text-icon"
            alt=""
            src={momchart_2_btn_text}
          />
        </button>
        <div className="momchart-2-div">
          <MentalChart val={score} val2={scoredate}/>
        </div>
        <div className="momchart-3-text-div">
          <div className="momchart-3-text-div1" />
          <span className="momchart-3-text">
            {scoreglll}
          </span>
        </div>
      </div>
      <button className="goweight-btn" onClick={onGoWeightBtnClick}>
        <button className="goweight-btn-div" />
        <img className="goweight-text-icon" alt="" src={goweight_text} />
      </button>
      <button className="gomap-btn" onClick={onGoMapBtnClick}>
        <button className="gomap-btn-div" />
        <img className="gomap-btn-text-icon" alt="" src={gomap_btn_text} />
      </button>
      <img
        className="momchart-title3-icon"
        alt=""
        src={momchart_title3}
        data-scroll-to="momChartTitle3"
      />
      <div className="momchart-3-cover" data-animate-on-scroll>
        <div className="momchart-3-cover1" />
        <div className="momchart-3-div">
          <WeightChart val={kgdata.slice(-30)} val2={chartdatedata.slice(-30)}/>
        </div>
        <div className="momchart-3-text-div">
          <div className="momchart-3-text-div1" />
          <span className="momchart-3-text">{weightglll}</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MomDiaryChartPage;
