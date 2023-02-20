import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import emergency from "../../../assets/svg/Bar/SideBar/emergency.svg";
import labor from "../../../assets/svg/Bar/SideBar/labor.svg";
import labor_div from "../../../assets/svg/Bar/SideBar/labor_div.svg";

import emergency_icon from "../../../assets/images/Bar/emergency_icon.png";
import labor_icon from "../../../assets/images/Bar/labor_icon.png";

import "../../styles/Bar/SideBar.css";
import BannerImg from "./BannerImg";

const SideBar = () => {
  const navigate = useNavigate();

  const onLaborBtnClick = useCallback(() => {
    navigate("/Labor");
  }, [navigate]);

  const onEmergencyBtnClick = useCallback(() => {
    navigate("/Emergency");
  }, [navigate]);

  return (
    <div className="sidebar">
      <div className="sidebar-div" />
      <img className="labor-icon" alt="" src={labor} />
      <button className="labor-btn" onClick={onLaborBtnClick}>
        <img className="labor-div-icon" alt="" src={labor_div} />
        <img className="labor-icon1" alt="" src={labor_icon} />
      </button>
      <div className="banner-div">
        <BannerImg />
      </div>
      <img className="emergency-icon" alt="" src={emergency} />
      <button className="emergency-btn" onClick={onEmergencyBtnClick}>
        <img className="labor-div-icon" alt="" src={labor_div} />
        <img className="emergency-icon1" alt="" src={emergency_icon} />
      </button>
    </div>
  );
};

export default SideBar;
