import { useCallback } from "react";

import ppregnant_subtitle from "../../../assets/svg/Policy/PolicyPregnant/ppregnant_subtitle.svg";
import ppregnant_title from "../../../assets/svg/Policy/PolicyPregnant/ppregnant_title.svg";
import pregnant_btn1_cover from "../../../assets/svg/Policy/PolicyPregnant/pregnant_btn1_cover.svg";
import pregnant_btn2_cover from "../../../assets/svg/Policy/PolicyPregnant/pregnant_btn2_cover.svg";
import pregnant_btn3_cover from "../../../assets/svg/Policy/PolicyPregnant/pregnant_btn3_cover.svg";
import pregnant_btn4_cover from "../../../assets/svg/Policy/PolicyPregnant/pregnant_btn4_cover.svg";
import pregnant_btn5_cover from "../../../assets/svg/Policy/PolicyPregnant/pregnant_btn5_cover.svg";
import pregnant_btn6_cover from "../../../assets/svg/Policy/PolicyPregnant/pregnant_btn6_cover.svg";

import pregnant_btn1_text from "../../../assets/svg/Policy/PolicyPregnant/pregnant_btn1_text.svg";
import pregnant_btn2_text from "../../../assets/svg/Policy/PolicyPregnant/pregnant_btn2_text.svg";
import pregnant_btn3_text from "../../../assets/svg/Policy/PolicyPregnant/pregnant_btn3_text.svg";
import pregnant_btn4_text from "../../../assets/svg/Policy/PolicyPregnant/pregnant_btn4_text.svg";
import pregnant_btn5_text from "../../../assets/svg/Policy/PolicyPregnant/pregnant_btn5_text.svg";
import pregnant_btn6_text from "../../../assets/svg/Policy/PolicyPregnant/pregnant_btn6_text.svg";
import pregnant_gotop_btn_div from "../../../assets/svg/Policy/PolicyPregnant/pregnant_gotop_btn_div.svg";
import arrowup from "../../../assets/images/Policy/arrowup.png";

import "../../styles/Policy/PolicyPregnantPage.css";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

const PolicyPregnantPage = () => {
  const onPregnantGoTopBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='pPregnantTitle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onPregnantBtn6Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='pregnantBtn6CoverDiv']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPregnantBtn5Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='pregnantBtn5CoverDiv']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPregnantBtn4Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='pregnantBtn4CoverDiv']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPregnantBtn3Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='pregnantBtn3CoverDiv']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onPregnantBtn2Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='pregnantBtn2CoverDiv']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onPregnantBtn1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='pregnantBtn1CoverDiv']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="policypregnant-page">
      <Header />
      <img
        className="ppregnant-title-icon"
        alt=""
        src={ppregnant_title}
        data-scroll-to="pPregnantTitle"
      />
      <img
        className="ppregnant-subtitle-icon"
        alt=""
        src={ppregnant_subtitle}
      />
      <button className="pregnant-btn1" onClick={onPregnantBtn1Click}>
        <div className="pregnant-btn6-div" />
        <img
          className="pregnant-btn1-text-icon"
          alt=""
          src={pregnant_btn1_text}
        />
      </button>
      <button className="pregnant-btn2" onClick={onPregnantBtn2Click}>
        <div className="pregnant-btn6-div" />
        <img
          className="pregnant-btn2-text-icon"
          alt=""
          src={pregnant_btn2_text}
        />
      </button>
      <button className="pregnant-btn3" onClick={onPregnantBtn3Click}>
        <div className="pregnant-btn6-div" />
        <img
          className="pregnant-btn3-text-icon"
          alt=""
          src={pregnant_btn3_text}
        />
      </button>
      <button className="pregnant-btn4" onClick={onPregnantBtn4Click}>
        <div className="pregnant-btn6-div" />
        <img
          className="pregnant-btn4-text-icon"
          alt=""
          src={pregnant_btn4_text}
        />
      </button>
      <button className="pregnant-btn5" onClick={onPregnantBtn5Click}>
        <div className="pregnant-btn6-div" />
        <img
          className="pregnant-btn5-text-icon"
          alt=""
          src={pregnant_btn5_text}
        />
      </button>
      <button className="pregnant-btn6" onClick={onPregnantBtn6Click}>
        <div className="pregnant-btn6-div" />
        <img
          className="pregnant-btn6-text-icon"
          alt=""
          src={pregnant_btn6_text}
        />
      </button>
      <button className="pregnant-gotop-btn" onClick={onPregnantGoTopBtnClick}>
        <img
          className="pregnant-gotop-btn-div-icon"
          alt=""
          src={pregnant_gotop_btn_div}
        />
        <img className="arrow-up-icon" alt="" src={arrowup} />
      </button>
      <div
        className="pregnant-btn6-cover-div"
        data-scroll-to="pregnantBtn6CoverDiv"
      />
      <img
        className="pregnant-btn6-cover-icon"
        alt=""
        src={pregnant_btn6_cover}
      />
      <div
        className="pregnant-btn5-cover-div"
        data-scroll-to="pregnantBtn5CoverDiv"
      />
      <img
        className="pregnant-btn5-cover-icon"
        alt=""
        src={pregnant_btn5_cover}
      />
      <div
        className="pregnant-btn4-cover-div"
        data-scroll-to="pregnantBtn4CoverDiv"
      />
      <img
        className="pregnant-btn4-cover-icon"
        alt=""
        src={pregnant_btn4_cover}
      />
      <div
        className="pregnant-btn3-cover-div"
        data-scroll-to="pregnantBtn3CoverDiv"
      />
      <img
        className="pregnant-btn3-cover-icon"
        alt=""
        src={pregnant_btn3_cover}
      />
      <div
        className="pregnant-btn2-cover-div"
        data-scroll-to="pregnantBtn2CoverDiv"
      />
      <img
        className="pregnant-btn2-cover-icon"
        alt=""
        src={pregnant_btn2_cover}
      />
      <div
        className="pregnant-btn1-cover-div"
        data-scroll-to="pregnantBtn1CoverDiv"
      />
      <img
        className="pregnant-btn1-cover-icon"
        alt=""
        src={pregnant_btn1_cover}
      />
      <Footer />
    </div>
  );
};

export default PolicyPregnantPage;
