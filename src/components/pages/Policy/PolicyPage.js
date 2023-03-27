import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import choice_text1 from "../../../assets/svg/Policy/Policy/choice_text1.svg";
import choice_text2 from "../../../assets/svg/Policy/Policy/choice_text2.svg";
import choice_text3 from "../../../assets/svg/Policy/Policy/choice_text3.svg";
import policy_title from "../../../assets/svg/Policy/Policy/policy_title.svg";

import pregnantimg from "../../../assets/images/Policy/pregnantimg.png";

import "../../styles/Policy/PolicyPage.css";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

const PolicyPage = () => {
  const navigate = useNavigate();

  const onChoice1BtnClick = useCallback(() => {
    navigate("/PolicyMoneyChoice");
  }, [navigate]);

  const onChoice2BtnClick = useCallback(() => {
    navigate("/PolicyPregnant");
  }, [navigate]);

  const onChoice3BtnClick = useCallback(() => {
    navigate("/PolicyOneChoice");
  }, [navigate]);

  return (
    <div className="policypage">
      <Header />
      <img className="policy-title-icon" alt="" src={policy_title} />
      <img
        className="pregnantimg-icon"
        alt=""
        src={pregnantimg}
        data-animate-on-scroll
      />
      <button className="choice1-btn" onClick={onChoice1BtnClick}>
        <div className="choice1-btn-div" />
        <img className="choice-text1-icon" alt="" src={choice_text1} />
      </button>
      <button className="choice2-btn" onClick={onChoice2BtnClick}>
        <div className="choice3-btn-div" />
        <img className="choice-text2-icon" alt="" src={choice_text2} />
      </button>
      <button className="choice3-btn" onClick={onChoice3BtnClick}>
        <div className="choice3-btn-div" />
        <img className="choice-text3-icon" alt="" src={choice_text3} />
      </button>
      <Footer />
    </div>
  );
};

export default PolicyPage;
