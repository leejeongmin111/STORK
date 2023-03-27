import { useCallback, useEffect } from "react";

import clinic_title from "../../../assets/svg/MomDiary/MomDiaryMap/clinic_title.svg";
import mental_box1_cover_div from "../../../assets/svg/MomDiary/MomDiaryMap/mental_box1_cover_div.svg";
import mental_box2_cover_div from "../../../assets/svg/MomDiary/MomDiaryMap/mental_box2_cover_div.svg";
import mental_box3_cover_div from "../../../assets/svg/MomDiary/MomDiaryMap/mental_box3_cover_div.svg";
import mental_btn1_text from "../../../assets/svg/MomDiary/MomDiaryMap/mental_btn1_text.svg";
import mental_btn2_text from "../../../assets/svg/MomDiary/MomDiaryMap/mental_btn2_text.svg";
import mental_btn3_text from "../../../assets/svg/MomDiary/MomDiaryMap/mental_btn3_text.svg";
import mental_call_text1 from "../../../assets/svg/MomDiary/MomDiaryMap/mental_call_text1.svg";
import mental_call_text2 from "../../../assets/svg/MomDiary/MomDiaryMap/mental_call_text2.svg";
import mental_title from "../../../assets/svg/MomDiary/MomDiaryMap/mental_title.svg";
import momdiary_up_text from "../../../assets/svg/MomDiary/MomDiaryMap/momdiary_up_text.svg";

import "../../styles/MomDiary/MomDiaryMapPage.css";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";
import MomDiaryMap from "./MomDiaryMap";

const MomDiaryMapPage = () => {
  const onMomDiaryUpBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='clinicTitle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onMentalBtn3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='mentalBox3Div']");
    if (anchor) {
      anchor.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, []);

  const onMentalBtn2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='mentalBox2Div']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onMentalBtn1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='mentalBox1Div']");
    if (anchor) {
      anchor.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
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

  return (
    <div className="momdiarymap-page">
      <Header />
      <img
        className="clinic-title-icon"
        alt=""
        src={clinic_title}
        data-scroll-to="clinicTitle"
      />
      <div className="momdiarymap-div">
        <MomDiaryMap />
      </div>
      <div className="mental-call-div" data-animate-on-scroll>
        <div className="mental-call-div1" />
        <img
          className="mental-call-text2-icon"
          alt=""
          src={mental_call_text2}
        />
        <img
          className="mental-call-text1-icon"
          alt=""
          src={mental_call_text1}
        />
      </div>
      <img className="mental-title-icon" alt="" src={mental_title} />
      <button className="mental-btn1" onClick={onMentalBtn1Click}>
        <div className="mental-btn31" />
        <img className="mental-btn1-text-icon" alt="" src={mental_btn1_text} />
      </button>
      <button className="mental-btn2" onClick={onMentalBtn2Click}>
        <div className="mental-btn31" />
        <img className="mental-btn2-text-icon" alt="" src={mental_btn2_text} />
      </button>
      <button className="mental-btn3" onClick={onMentalBtn3Click}>
        <div className="mental-btn31" />
        <img className="mental-btn3-text-icon" alt="" src={mental_btn3_text} />
      </button>
      <img
        className="mental-box1-cover-div-icon"
        alt=""
        src={mental_box1_cover_div}
      />
      <div className="mental-box1-div" data-scroll-to="mentalBox1Div" />
      <img
        className="mental-box2-cover-div-icon"
        alt=""
        src={mental_box2_cover_div}
      />
      <div className="mental-box2-div" data-scroll-to="mentalBox2Div" />
      <img
        className="mental-box3-cover-div-icon"
        alt=""
        src={mental_box3_cover_div}
      />
      <div className="mental-box3-div" data-scroll-to="mentalBox3Div" />
      <button className="momdiary-up-btn" onClick={onMomDiaryUpBtnClick}>
        <button className="momdiary-up-btn-div" />
        <img className="momdiary-up-text-icon" alt="" src={momdiary_up_text} />
      </button>
      <Footer />
    </div>
  );
};

export default MomDiaryMapPage;
