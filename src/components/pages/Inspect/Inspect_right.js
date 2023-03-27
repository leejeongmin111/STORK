import "../../styles/Inspect/Inspect_right.css"
import ellipse14 from "../../../assets/svg/Inspect/ellipse14.svg";

import { useNavigate } from "react-router-dom";
import { useState } from "react";


const InspectRight = (props) => {
  const{
    title,
    subtitle,
    sub,
    cmts,
    } = props;
    const nav = useNavigate();

    function click_nav(e){
      nav('/ins_click',{state : e.target.outerText})
    }

  return (
    <div className="inspect-right">
      <b className="b_right" onClick={click_nav}>{title}</b>
      <div className="inspect-right-child" />
      <img className="inspect-right-item" alt="" src={ellipse14} />
    </div>
  );
};

export default InspectRight;
