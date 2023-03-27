import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import babydiaryname_div from "../../../assets/svg/Main/babydiaryname_div.svg";
import babydiaryname_text from "../../../assets/svg/Main/babydiaryname_text.svg";
import daycnt_text1 from "../../../assets/svg/Main/daycnt_text1.svg";
import daycnt_text2 from "../../../assets/svg/Main/daycnt_text2.svg";
import momdiaryname_text from "../../../assets/svg/Main/momdiaryname_text.svg";
import momdiarytitle_div from "../../../assets/svg/Main/momdiarytitle_div.svg";
import weekcnt_text1 from "../../../assets/svg/Main/weekcnt_text1.svg";
import weekcnt_text2 from "../../../assets/svg/Main/weekcnt_text2.svg";

import "../../styles/Main/MainPage.css";

import Header from "../Bar/Header";
import SideBar from "../Bar/SideBar";
import Footer from "../Bar/Footer";

const MainPage = () => {
  const [mom_name, setMom_name] = useState("");
  const [kid_nick, setKid_nick] = useState("")
  const [dday, setDday] = useState();
  const [week, setWeek] = useState();
  const [imgpath, setImgpath] = useState()

  const navigate = useNavigate();

  useEffect(() => {
    setMom_name(JSON.parse(localStorage.getItem("user")).name)
    
    axios
      .post("http://127.0.0.1:3001/myprofile", {
        seq:JSON.parse(localStorage.getItem("user")).seq,
      })
      .then((res)=>{
        console.log(getWeek(res.data.kid_start))
        if (res.data.result == "success") {
          setKid_nick(res.data.kid_nick);
          setDday(getDateDiff(res.data.kid_birth));
          setWeek(getWeek(res.data.kid_start));

          if(getWeek(res.data.kid_start)>40) {
            setImgpath(`/Main/baby40week.png`)
          } else {
            setImgpath(`/Main/baby${getWeek(res.data.kid_start)}week.png`)
          }
        } else if(res.data.result == "success0"){
          console.log("아가 없음")
          setKid_nick("아기");
          setDday(150);
          setWeek(40);
          setImgpath(`/Main/baby40week.png`)

        } else {
          console.log("데이터베이스 오류");
        }
        localStorage.setItem(
          "baby",
          JSON.stringify({
            nick: res.data.kid_nick,
            birth: res.data.kid_birth,
            start: res.data.kid_start,
            week:getWeek(res.data.kid_start),
            dday:getDateDiff(res.data.kid_birth)
          })
        );
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

  const getToday = ()=>{
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
  }

  const getDateDiff = (a) => {
    const date1 = new Date(a);
    const date2 = new Date(getToday());
    const diffDate = date1.getTime() - date2.getTime();
    return diffDate / (1000 * 60 * 60 * 24)
  }

  const getWeek = (a) => {
    // 주차 정보가 없을 때 40 주차 
    if(a == undefined){
      return( 40 );
    }
    else{
    const date1 = new Date(a);
    const date2 = new Date(getToday());
    const date3 = date2.getTime()-date1.getTime();
    return (
      Math.ceil((date3+(1000 * 60 * 60 * 24))/(1000 * 60 * 60 * 24 * 7))
    );
  }
  }

  const onMomDiaryDivClick = useCallback(() => {
    navigate("/MomDiary");
  }, [navigate]);

  const onBabyDiaryDivClick = useCallback(() => {
    navigate("/BabyDiary");
  }, [navigate]);

  return (
    <div className="main-page">
      <Header />
      <SideBar />
      <div className="babyname-div">
        <div className="babyname-div1" />
        <span className="babyname" id="BabyName">
          {kid_nick}
        </span>
      </div>
      <img className="weekcnt-text1-icon" alt="" src={weekcnt_text1} />
      <span className="weekcnt" id="WeekCnt">
        {week}
      </span>
      <img className="weekcnt-text2-icon" alt="" src={weekcnt_text2} />
      <img
        className="babyimg-div-icon"
        alt=""
        src={imgpath}
        data-animate-on-scroll
      />
      <div className="bottom-div" />
      <div className="daycnt-div">
        <div className="daycnt-div1" />
        <img className="daycnt-text2-icon" alt="" src={daycnt_text2} />
        <span className="daycnt" id="DayCnt">
          {dday}
        </span>
        <img className="daycnt-text1-icon" alt="" src={daycnt_text1} />
      </div>
      <button
        className="babydiary-div"
        onClick={onBabyDiaryDivClick}
        data-animate-on-scroll
      >
        <div className="babydiary-div1" />
        <div className="babydiaryname-div" />
        <img
          className="momdiarytitle-div-icon"
          alt=""
          src={babydiaryname_div}
        />
        <span className="momdiaryname" id="BabyName">
          {kid_nick}
        </span>
        <img
          className="babydiaryname-text-icon"
          alt=""
          src={babydiaryname_text}
        />
      </button>
      <button
        className="momdiary-div"
        onClick={onMomDiaryDivClick}
        data-animate-on-scroll
      >
        <div className="momdiary-div1" />
        <div className="momdiaryname-div" />
        <span className="momdiaryname" id="BabyName">
          {mom_name}
        </span>
        <img
          className="momdiarytitle-div-icon"
          alt=""
          src={momdiarytitle_div}
        />
        <img
          className="momdiaryname-text-icon"
          alt=""
          src={momdiaryname_text}
        />
      </button>
      <Footer />
    </div>
  );
};

export default MainPage;
