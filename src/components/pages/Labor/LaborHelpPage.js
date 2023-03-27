import { useCallback } from "react";

import help_box1_cover from "../../../assets/svg/Labor/LaborHelp/help_box1_cover.svg";
import help_box2_btn_title from "../../../assets/svg/Labor/LaborHelp/help_box2_btn_title.svg";
import help_box2_cover from "../../../assets/svg/Labor/LaborHelp/help_box2_cover.svg";
import help_box3_btn_title from "../../../assets/svg/Labor/LaborHelp/help_box3_btn_title.svg";
import help_box3_cover from "../../../assets/svg/Labor/LaborHelp/help_box3_cover.svg";
import help_box4_btn_title from "../../../assets/svg/Labor/LaborHelp/help_box4_btn_title.svg";
import help_box4_cover from "../../../assets/svg/Labor/LaborHelp/help_box4_cover.svg";
import help_box5_btn_title from "../../../assets/svg/Labor/LaborHelp/help_box5_btn_title.svg";
import help_gotop_btn from "../../../assets/svg/Labor/LaborHelp/help_gotop_btn.svg";
import helppage_subtitle1 from "../../../assets/svg/Labor/LaborHelp/helppage_subtitle1.svg";
import helppage_subtitle2 from "../../../assets/svg/Labor/LaborHelp/helppage_subtitle2.svg";
import helppage_title from "../../../assets/svg/Labor/LaborHelp/helppage_title.svg";
import help_box5_cover from "../../../assets/svg/Labor/LaborHelp/help_box5_cover.svg";
import cheering_text from "../../../assets/svg/Labor/LaborHelp/cheering_text.svg";
import help_arrow_up from "../../../assets/images/Labor/help_arrow_up.png";

import "../../styles/Labor/LaborHelpPage.css";

import HelpSideBar from "../Bar/HelpSideBar";

const LaborHelpPage = () => {
  const onHelpGoTopBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='helpPageTitle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onHelpBox5BtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='helpBox5Div']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onHelpBox4BtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='helpBox4Div']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onHelpBox3BtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='helpBox3Div']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onHelpBox2BtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='helpBox2Div']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="labor-helppage">
      <HelpSideBar />
      <img
        className="helppage-title-icon"
        alt=""
        src={helppage_title}
        data-scroll-to="helpPageTitle"
      />
      <div className="help-box1-div" />
      <img className="help-box1-cover-icon" alt="" src={help_box1_cover} />
      <img
        className="helppage-subtitle1-icon"
        alt=""
        src={helppage_subtitle1}
      />
      <button className="help-box2-btn" onClick={onHelpBox2BtnClick}>
        <div className="help-box5-btn-div" />
        <img
          className="help-box2-btn-title-icon"
          alt=""
          src={help_box2_btn_title}
        />
      </button>
      <button className="help-box3-btn" onClick={onHelpBox3BtnClick}>
        <div className="help-box5-btn-div" />
        <img
          className="help-box3-btn-title-icon"
          alt=""
          src={help_box3_btn_title}
        />
      </button>
      <button className="help-box4-btn" onClick={onHelpBox4BtnClick}>
        <div className="help-box5-btn-div" />
        <img
          className="help-box4-btn-title-icon"
          alt=""
          src={help_box4_btn_title}
        />
      </button>
      <img
        className="helppage-subtitle2-icon"
        alt=""
        src={helppage_subtitle2}
      />
      <button className="help-box5-btn" onClick={onHelpBox5BtnClick}>
        <div className="help-box5-btn-div" />
        <img
          className="help-box5-btn-title-icon"
          alt=""
          src={help_box5_btn_title}
        />
      </button>
      <div className="cheering-div">
        <div className="cheering-div1" />
        <img className="cheering-text-icon" alt="" src={cheering_text} />
      </div>
      <button className="help-gotop-btn" onClick={onHelpGoTopBtnClick}>
        <img className="help-gotop-btn-icon" alt="" src={help_gotop_btn} />
        <img className="help-arrow-up-icon" alt="" src={help_arrow_up} />
      </button>
      <img className="help-box2-cover-icon" alt="" src={help_box2_cover} />
      <div className="help-box2-div" data-scroll-to="helpBox2Div" />
      <img className="help-box3-cover-icon" alt="" src={help_box3_cover} />
      <div className="help-box3-div" data-scroll-to="helpBox3Div" />
      <img className="help-box4-cover-icon" alt="" src={help_box4_cover} />
      <div className="help-box4-div" data-scroll-to="helpBox4Div" />
      <div className="help-box5-div" data-scroll-to="helpBox5Div" />
      <img className="help-box5-cover-icon" alt="" src={help_box5_cover} />
    </div>
  );
};

export default LaborHelpPage;
