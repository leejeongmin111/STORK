import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import nav_calendar from "../../../assets/svg/Bar/Footer/nav_calendar.svg";
import nav_check from "../../../assets/svg/Bar/Footer/nav_check.svg";
import nav_home from "../../../assets/svg/Bar/Footer/nav_home.svg";
import nav_policy from "../../../assets/svg/Bar/Footer/nav_policy.svg";
import nav_tip from "../../../assets/svg/Bar/Footer/nav_tip.svg";

import nav_calendar_icon from "../../../assets/images/Bar/nav_calendar_icon.png";
import nav_check_icon from "../../../assets/images/Bar/nav_check_icon.png";
import nav_home_icon from "../../../assets/images/Bar/nav_home_icon.png";
import nav_policy_icon from "../../../assets/images/Bar/nav_policy_icon.png";
import nav_tip_icon from "../../../assets/images/Bar/nav_tip_icon.png";

import "../../styles/Bar/Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const pathna = window.location.pathname;
  const a = [
    "/Policy",
    "/PolicyMoneyChoice",
    "/PolicyPregnant",
    "/PolicyOneChoice",
    "/PolicyOne1",
    "/PolicyOne2",
    "/PolicyOne3",
    "/PolicyOne4",
    "/PolicyOne5",
    "/PolicyMoney",
  ];

  const onNAVCheckBtnClick = useCallback(() => {
    navigate("/Inspect");
  }, [navigate]);

  const onNAVTipBtnClick = useCallback(() => {
    navigate("/Tip");
  }, [navigate]);

  const onNAVHomeBtnClick = useCallback(() => {
    navigate("/Main");
  }, [navigate]);

  const onNAVCalendarBtnClick = useCallback(() => {
    navigate("/Calendar");
  }, [navigate]);

  const onNAVPolicyBtnClick = useCallback(() => {
    navigate("/Policy");
  }, [navigate]);

  return (
    <div className="footer">
      <div className="footer-div" />
      <button
        className={
          a.some((item) => {
            return item == pathna;
          })
            ? "nav-policy-btn success"
            : "nav-policy-btn failure"
        }
        onClick={onNAVPolicyBtnClick}
      >
        <div className="nav-check-btn-div" />
        <img className="nav-policy-icon" alt="" src={nav_policy} />
        <img className="nav-home-icon" alt="" src={nav_policy_icon} />
      </button>
      <button
        className={
          pathna == "/Calendar"
            ? "nav-calendar-btn success"
            : "nav-calendar-btn failure"
        }
        onClick={onNAVCalendarBtnClick}
      >
        <div className="nav-check-btn-div" />
        <img className="nav-calendar-icon" alt="" src={nav_calendar} />
        <img className="nav-home-icon" alt="" src={nav_calendar_icon} />
      </button>
      <button
        className={
          pathna == "/Main"||pathna == "/Main/" ? "nav-home-btn success" : "nav-home-btn failure"
        }
        onClick={onNAVHomeBtnClick}
      >
        <div className="nav-check-btn-div" />
        <img className="nav-home-icon" alt="" src={nav_home_icon} />
        <img className="nav-home-icon1" alt="" src={nav_home} />
      </button>
      <button
        className={
          pathna == "/Tip" ? "nav-tip-btn success" : "nav-tip-btn failure"
        }
        onClick={onNAVTipBtnClick}
      >
        <div className="nav-check-btn-div" />
        <img className="nav-tip-icon" alt="" src={nav_tip_icon} />
        <img className="nav-tip-icon1" alt="" src={nav_tip} />
      </button>
      <button
        className={
          pathna == "/Inspect" ? "nav-check-btn success" : "nav-check-btn failure"
        }
        onClick={onNAVCheckBtnClick}
      >
        <div className="nav-check-btn-div" />
        <img className="nav-check-icon" alt="" src={nav_check_icon} />
        <img className="nav-check-icon1" alt="" src={nav_check} />
      </button>
    </div>
  );
};

export default Footer;
