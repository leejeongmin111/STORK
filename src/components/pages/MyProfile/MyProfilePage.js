import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import myprofile_babyname from "../../../assets/svg/MyProfile/myprofile_babyname.svg";
import myprofile_blood_text1 from "../../../assets/svg/MyProfile/myprofile_blood_text1.svg";
import myprofile_blood_text2 from "../../../assets/svg/MyProfile/myprofile_blood_text2.svg";
import myprofile_blood_text3 from "../../../assets/svg/MyProfile/myprofile_blood_text3.svg";
import myprofile_blood_title from "../../../assets/svg/MyProfile/myprofile_blood_title.svg";
import myprofile_check_btn_text from "../../../assets/svg/MyProfile/myprofile_check_btn_text.svg";
import myprofile_date_end from "../../../assets/svg/MyProfile/myprofile_date_end.svg";
import myprofile_date_start from "../../../assets/svg/MyProfile/myprofile_date_start.svg";
import myprofile_date_title from "../../../assets/svg/MyProfile/myprofile_date_title.svg";
import myprofile_momname from "../../../assets/svg/MyProfile/myprofile_momname.svg";

import profile_img from "../../../assets/images/MyProfile/profile_img.png";

import "../../styles/MyProfile/MyProfilePage.css";

import short_blood from "../../data/MyProfile_short_blood";
import long_blood from "../../data/MyProfile_long_blood";

import MyHeader from "../Bar/MyHeader";
import Footer from "../Bar/Footer";

const MyProfilePage = () => {
  const navigate = useNavigate();

  const [kid_nick, setKid_nick] = useState("");
  const [kid_start, setKid_start] = useState("");
  const [kid_birth, setKid_birth] = useState("");

  useEffect(() => {

    // 생리주기 받아오기 
    axios
      .post("http://127.0.0.1:3001/myprofile_data", {
        seq: JSON.parse(localStorage.getItem("user")).seq,
      })
      .then((res)=>{
        let temp = res.data.data[0]
        setLast_blood(temp.mb_lastmenstruation);
        setLongTerm(temp.mb_longmensterm+"일");
        setShortTerm(temp.mb_shortmensterm+"일");
      })
      .catch(() => {
        console.log("데이터 보내기 실패");
      });


    setKid_nick(JSON.parse(localStorage.getItem("baby")).nick);
    setKid_start(JSON.parse(localStorage.getItem("baby")).start);
    setKid_birth(JSON.parse(localStorage.getItem("baby")).birth);

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

  const onMDwritecompleteDivClick = async(e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:3001/modifyprofile",{
        seq: JSON.parse(localStorage.getItem("user")).seq,
        kid_nick: kid_nick,
        kid_start: kid_start,
        kid_birth: kid_birth,
        lastmentstruation : last_blood,
        shortmensterm : shortTerm.split('일')[0],
        longmensterm : longTerm.split('일')[0],
      });
    } catch (error) {
      console.log("데이터 보내기 실패");
      console.log(error);
    }
    navigate("/Main");
    
  };


  const [last_blood,setLast_blood] = useState();
  const [shortTerm, setShortTerm] = useState();
  const [longTerm, setLongTerm] = useState();

  function check(){
    console.log("마지막",last_blood);
    console.log("짧",shortTerm);
    console.log("긴",longTerm);
  }


  return (
    <div className="myprofile-page">
      <MyHeader />
      <div className="profile-img-div" data-animate-on-scroll />
      <form onSubmit={onMDwritecompleteDivClick}>
        <img
          className="myprofile-babyname-icon"
          alt=""
          src={myprofile_babyname}
        />
        <div className="myprofile-babyname-div">
          <textarea
            className="MyProfile_BabyName"
            value={kid_nick}
            onChange={(e) => {
              setKid_nick(e.target.value);
            }}
            placeholder="아기 태명"
          />
        </div>
        <img
          className="myprofile-momname-icon"
          alt=""
          src={myprofile_momname}
        />
        <div className="myprofile-momname-div">
          <span className="MyProfile_MomName">{JSON.parse(localStorage.getItem("user")).name}</span>
        </div>
        <img
          className="myprofile-date-title-icon"
          alt=""
          src={myprofile_date_title}
        />
        <div className="myprofile-date-div">
          <div className="myprofile-date-div1" />
          <img
            className="myprofile-date-start-icon"
            alt=""
            src={myprofile_date_start}
          />
          <div className="myprofile-date-start-div">
            <input
              className="Pregnant_startDate"
              type="date"
              value={kid_start}
              onChange={(e) => {
                setKid_start(e.target.value);
              }}
            />
          </div>
          <img
            className="myprofile-date-end-icon"
            alt=""
            src={myprofile_date_end}
          />
          <div className="myprofile-date-end-div">
            <input
              className="Pregnant_endDate"
              type="date"
              value={kid_birth}
              onChange={(e) => {
                setKid_birth(e.target.value);
              }}
            />
          </div>
        </div>
        <img
          className="myprofile-blood-title-icon"
          alt=""
          src={myprofile_blood_title}
        />
        <div className="myprofile-blood-div">
          <div className="myprofile-blood-div1" onClick={check}/>
          <img
            className="myprofile-blood-text1-icon"
            alt=""
            src={myprofile_blood_text1}
          />
          <div className="myprofile-blood-text1-div">
            {/* 마지막 생리 주기 */}
            <input className="Blood_startDate" type="date"  onChange={(e)=>{setLast_blood(e.target.value)}} value= {last_blood}/>
          </div>
          <img
            className="myprofile-blood-text2-icon"
            alt=""
            src={myprofile_blood_text2}
          />
          <div className="myprofile-blood-text2-div">

            {/* 짧은 주기 */}
            <select className="short_blood_selectDIV" onChange={(e)=>{setShortTerm(e.target.value)}} value = {shortTerm}>
              {short_blood.map((short_blood, index) => (
                <option key={short_blood.key} value={short_blood.key}>
                  {short_blood.name}
                </option>
              ))}
            </select>
          </div>
          <img
            className="myprofile-blood-text3-icon"
            alt=""
            src={myprofile_blood_text3}
          />
          <div className="myprofile-blood-text3-div">

            {/* 긴 주기 */}
            <select className="long_blood_selectDIV" onChange={(e)=>{setLongTerm(e.target.value)}} value = {longTerm}>
              {long_blood.map((long_blood, index) => (
                <option key={long_blood.key} value={long_blood.key}>
                  {long_blood.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="myprofile-check-btn" type="submit">
          <div className="myprofile-check-btn-div" />
          <img
            className="myprofile-check-btn-text-icon"
            src={myprofile_check_btn_text}
          />
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default MyProfilePage;
