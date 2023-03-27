import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import help_emergency from "../../../assets/svg/Bar/HelpSideBar/help_emergency.svg";
import help_labor_div from "../../../assets/svg/Bar/HelpSideBar/help_labor_div.svg";
import help_labor from "../../../assets/svg/Bar/HelpSideBar/help_labor.svg";
import help_stork from "../../../assets/svg/Bar/HelpSideBar/help_stork.svg";
import help_emergency_div from "../../../assets/svg/Bar/HelpSideBar/help_emergency_div.svg";

import help_labor_icon from "../../../assets/images/Bar/help_labor_icon.png";
import help_emergency_icon from "../../../assets/images/Bar/help_emergency_icon.png";

import "../../styles/Bar/HelpSideBar.css";

const HelpSideBar = () => {
  const navigate = useNavigate();

  const onHelpLaborBtnClick = useCallback(() => {
    navigate("/Labor");
  }, [navigate]);

  const onHelpEmergencyBtnClick = useCallback(() => {
    navigate("/Emergency");
  }, [navigate]);

  return (
    <div className="help-sidebar">
      <div className="help-sidebar-div" />
      <button className="help-emergency-btn" onClick={onHelpEmergencyBtnClick}>
        <img className="help-labor-div-icon" alt="" src={help_emergency_div} />
        <img
          className="help-emergency-icon1"
          alt=""
          src={help_emergency_icon}
        />
      </button>
      <img className="help-emergency-icon" alt="" src={help_emergency} />
      <img className="help-stork-icon" alt="" src={help_stork} />
      <button className="help-labor-btn" onClick={onHelpLaborBtnClick}>
        <img className="help-labor-div-icon" alt="" src={help_labor_div} />
        <img className="help-labor-icon1" alt="" src={help_labor_icon} />
      </button>
      <img className="help-labor-icon" alt="" src={help_labor} />
    </div>
  );
};

export default HelpSideBar;
