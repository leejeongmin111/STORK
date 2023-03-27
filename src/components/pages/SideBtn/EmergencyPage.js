import { useCallback } from "react";

import condition_box1_cover from "../../../assets/svg/Emergency/condition_box1_cover.svg";
import condition_box2_cover from "../../../assets/svg/Emergency/condition_box2_cover.svg";
import condition_box3_cover from "../../../assets/svg/Emergency/condition_box3_cover.svg";
import condition_box4_cover from "../../../assets/svg/Emergency/condition_box4_cover.svg";
import condition_btn1_text from "../../../assets/svg/Emergency/condition_btn1_text.svg";
import condition_btn2_text from "../../../assets/svg/Emergency/condition_btn2_text.svg";
import condition_btn3_text from "../../../assets/svg/Emergency/condition_btn3_text.svg";
import condition_btn4_text from "../../../assets/svg/Emergency/condition_btn4_text.svg";
import emergency_title from "../../../assets/svg/Emergency/emergency_title.svg";
import emergency_subtitle from "../../../assets/svg/Emergency/emergency_subtitle.svg";
import up_text from "../../../assets/svg/Emergency/up_text.svg";

import "../../styles/SideBtn/EmergencyPage.css";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";
import EmergencyMap from "./EmergencyMap";

const EmergencyPage = () => {
  const onUpBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='emergencyTitle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onConditionBtn4Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='conditionBox4Div']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onConditionBtn3Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='conditionBox3Div']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onConditionBtn2Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='conditionBox2Div']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onConditionBtn1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='conditionBox1Div']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="emergency-page">
      <Header />
      <img
        className="emergency-title-icon"
        alt=""
        src={emergency_title}
        data-scroll-to="emergencyTitle"
      />
      <div className="map-div">
        <EmergencyMap />
      </div>
      <img
        className="emergency-subtitle-icon"
        alt=""
        src={emergency_subtitle}
      />
      <button
        className="condition-btn1"
        onClick={onConditionBtn1Click}
        data-animate-on-scroll
      >
        <div className="condition-btn4-div" />
        <img
          className="condition-btn1-text-icon"
          alt=""
          src={condition_btn1_text}
        />
      </button>
      <button
        className="condition-btn2"
        onClick={onConditionBtn2Click}
        data-animate-on-scroll
      >
        <div className="condition-btn4-div" />
        <img
          className="condition-btn2-text-icon"
          alt=""
          src={condition_btn2_text}
        />
      </button>
      <button
        className="condition-btn3"
        onClick={onConditionBtn3Click}
        data-animate-on-scroll
      >
        <div className="condition-btn4-div" />
        <img
          className="condition-btn3-text-icon"
          alt=""
          src={condition_btn3_text}
        />
      </button>
      <button
        className="condition-btn4"
        onClick={onConditionBtn4Click}
        data-animate-on-scroll
      >
        <div className="condition-btn4-div" />
        <img
          className="condition-btn4-text-icon"
          alt=""
          src={condition_btn4_text}
        />
      </button>
      <img
        className="condition-box1-cover-icon"
        alt=""
        src={condition_box1_cover}
      />
      <div className="condition-box1-div" data-scroll-to="conditionBox1Div" />
      <img
        className="condition-box2-cover-icon"
        alt=""
        src={condition_box2_cover}
      />
      <div className="condition-box2-div" data-scroll-to="conditionBox2Div" />
      <img
        className="condition-box3-cover-icon"
        alt=""
        src={condition_box3_cover}
      />
      <div className="condition-box3-div" data-scroll-to="conditionBox3Div" />
      <img
        className="condition-box4-cover-icon"
        alt=""
        src={condition_box4_cover}
      />
      <div className="condition-box4-div" data-scroll-to="conditionBox4Div" />
      <button className="up-btn" onClick={onUpBtnClick}>
        <div className="up-btn-div" />
        <img className="up-text-icon" alt="" src={up_text} />
      </button>
      <Footer />
    </div>
  );
};

export default EmergencyPage;
