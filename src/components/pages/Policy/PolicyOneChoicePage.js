import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import choicemenutext from "../../../assets/svg/Policy/PolicyOneChoice/choicemenutext.svg";
import menu1_btn_div from "../../../assets/svg/Policy/PolicyOneChoice/menu1_btn_div.svg";
import menu2_btn_div from "../../../assets/svg/Policy/PolicyOneChoice/menu2_btn_div.svg";
import menu3_btn_div from "../../../assets/svg/Policy/PolicyOneChoice/menu3_btn_div.svg";
import menu4_btn_div from "../../../assets/svg/Policy/PolicyOneChoice/menu4_btn_div.svg";
import menu5_btn_div from "../../../assets/svg/Policy/PolicyOneChoice/menu5_btn_div.svg";
import menu1_text from "../../../assets/svg/Policy/PolicyOneChoice/menu1_text.svg";
import menu2_text from "../../../assets/svg/Policy/PolicyOneChoice/menu2_text.svg";
import menu3_text from "../../../assets/svg/Policy/PolicyOneChoice/menu3_text.svg";
import menu4_text from "../../../assets/svg/Policy/PolicyOneChoice/menu4_text.svg";
import menu5_text from "../../../assets/svg/Policy/PolicyOneChoice/menu5_text.svg";

import "../../styles/Policy/PolicyOneChoicePage.css";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

const PolicyOneChoicePage = () => {
  const navigate = useNavigate();

  const onMenu5BtnClick = useCallback(() => {
    navigate("/PolicyOne5");
  }, [navigate]);

  const onMenu4BtnClick = useCallback(() => {
    navigate("/PolicyOne4");
  }, [navigate]);

  const onMenu3BtnClick = useCallback(() => {
    navigate("/PolicyOne3");
  }, [navigate]);

  const onMenu2BtnClick = useCallback(() => {
    navigate("/PolicyOne2");
  }, [navigate]);

  const onMenu1BtnClick = useCallback(() => {
    navigate("/PolicyOne1");
  }, [navigate]);

  return (
    <div className="policyonechoice-page">
      <Header />
      <img className="choicemenutext-icon" alt="" src={choicemenutext} />
      <button className="menu1-btn" onClick={onMenu1BtnClick}>
        <img className="menu5-btn-div-icon" alt="" src={menu1_btn_div} />
        <img className="menu1-text-icon" alt="" src={menu1_text} />
      </button>
      <button className="menu2-btn" onClick={onMenu2BtnClick}>
        <img className="menu5-btn-div-icon" alt="" src={menu2_btn_div} />
        <img className="menu2-text-icon" alt="" src={menu2_text} />
      </button>
      <button className="menu3-btn" onClick={onMenu3BtnClick}>
        <img className="menu5-btn-div-icon" alt="" src={menu3_btn_div} />
        <img className="menu3-text-icon" alt="" src={menu3_text} />
      </button>
      <button className="menu4-btn" onClick={onMenu4BtnClick}>
        <img className="menu5-btn-div-icon" alt="" src={menu4_btn_div} />
        <img className="menu4-text-icon" alt="" src={menu4_text} />
      </button>
      <button className="menu5-btn" onClick={onMenu5BtnClick}>
        <img className="menu5-btn-div-icon" alt="" src={menu5_btn_div} />
        <img className="menu5-text-icon" alt="" src={menu5_text} />
      </button>
      <Footer />
    </div>
  );
};

export default PolicyOneChoicePage;
