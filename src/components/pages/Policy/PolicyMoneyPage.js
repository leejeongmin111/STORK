import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import back_text from "../../../assets/svg/Policy/PolicyMoney/back_text.svg";
import choice1_title from "../../../assets/svg/Policy/PolicyMoney/choice1_title.svg";
import first_meet from "../../../assets/svg/Policy/PolicyMoney/first_meet.svg";
import num1_text from "../../../assets/svg/Policy/PolicyMoney/num1_text.svg";
import num2_1 from "../../../assets/svg/Policy/PolicyMoney/num2_1.svg";
import num2_2 from "../../../assets/svg/Policy/PolicyMoney/num2_2.svg";
import num2_3 from "../../../assets/svg/Policy/PolicyMoney/num2_3.svg";
import num2_4 from "../../../assets/svg/Policy/PolicyMoney/num2_4.svg";
import num2_5 from "../../../assets/svg/Policy/PolicyMoney/num2_5.svg";
import num2_text from "../../../assets/svg/Policy/PolicyMoney/num2_text.svg";
import num3_text from "../../../assets/svg/Policy/PolicyMoney/num3_text.svg";
import num4_text from "../../../assets/svg/Policy/PolicyMoney/num4_text.svg";
import num5_text from "../../../assets/svg/Policy/PolicyMoney/num5_text.svg";
import won from "../../../assets/svg/Policy/PolicyMoney/won.svg";
import won4 from "../../../assets/svg/Policy/PolicyMoney/won4.svg";

import arrow from "../../../assets/images/Policy/arrow.png";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

import "../../styles/Policy/PolicyMoneyPage.css";

const PolicyMoneyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const region = location.state;
  let [first_baby, setFir] = useState([]);
  let [second_baby, setSeo] = useState([]);
  let [third_baby, setThi] = useState([]);
  let [fourth_baby, setFou] = useState([]);
  let [fifth_baby, setFif] = useState([]);
  let [target, setTarget] = useState([]);
  let [approach, setApproach] = useState([]);
  let [significant, setSignificant] = useState([]);

  useEffect(()=>{
    axios
      .post("http://127.0.0.1:3001/region", {
        reg:region
      })
      .then((res)=>{
        if (res.data.result == "success") {
          setFir(res.data.first_baby);
          setSeo(res.data.second_baby);
          setThi(res.data.third_baby);
          setFou(res.data.fourth_baby);
          setFif(res.data.fifth_baby);
          setTarget(res.data.target);
          setApproach(res.data.approach);
          setSignificant(res.data.significant);
        } else {
          console.log("데이터 없거나 오류?");
        }
      })
      .catch(() => {
        console.log("데이터 보내기 실패");
      });
  },[])

  const onGoBtnClick = useCallback(() => {
    navigate("/PolicyMoneyChoice");
  }, [navigate]);

  return (
    <div className="policymoney-page">
      <Header />
      <img className="choice1-title-icon" alt="" src={choice1_title} />
      <div className="num1">
        <div className="num5-div" />
        <img className="num1-text-icon" alt="" src={num1_text} />
      </div>
      <div className="num1-write">
        <div className="num1-write-div" />
        <span className="num1-write-text">{region}</span>
      </div>
      <div className="num2">
        <div className="num5-div" />
        <img className="num2-text-icon" alt="" src={num2_text} />
      </div>
      <div className="num2-write">
        <div className="num2-write-div" />
        <img className="won-icon" alt="" src={won} />
        <span className="num2-5-text">{fifth_baby}</span>
        <img className="num2-5-icon" alt="" src={num2_5} />
        <img className="won-icon1" alt="" src={won} />
        <span className="num2-4-text">{fourth_baby}</span>
        <img className="num2-4-icon" alt="" src={num2_4} />
        <img className="won-icon2" alt="" src={won} />
        <span className="num2-3-text">{third_baby}</span>
        <img className="num2-3-icon" alt="" src={num2_3} />
        <img className="won-icon3" alt="" src={won} />
        <span className="num2-2-text">{second_baby}</span>
        <img className="num2-2-icon" alt="" src={num2_2} />
        <img className="won-icon4" alt="" src={won4} />
        <span className="num2-1-text">{first_baby}</span>
        <img className="num2-1-icon" alt="" src={num2_1} />
      </div>
      <div className="num3">
        <div className="num5-div" />
        <img className="num3-text-icon" alt="" src={num3_text} />
      </div>
      <div className="num3-write">
        <div className="num3-write-div" />
        <span className="num4-write-text">
          {target}
        </span>
      </div>
      <div className="num4">
        <div className="num5-div" />
        <img className="num4-text-icon" alt="" src={num4_text} />
      </div>
      <div className="num4-write">
        <div className="num4-write-div" />
        <span className="num4-write-text">
          {approach}
        </span>
      </div>
      <div className="num5">
        <div className="num5-div" />
        <img className="num5-text-icon" alt="" src={num5_text} />
      </div>
      <div className="num5-write">
        <div className="num5-write-div" />
        <span className="num5-write-text">
          {significant}
        </span>
      </div>
      <img className="first-meet-icon" alt="" src={first_meet} />
      <button className="go-btn" onClick={onGoBtnClick}>
        <div className="go-btn1" />
        <img className="arrow-icon" alt="" src={arrow} />
        <img className="back-text-icon" alt="" src={back_text} />
      </button>
      <Footer />
    </div>
  );
};

export default PolicyMoneyPage;
