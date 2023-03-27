import "../../styles/Inspect/Inspect_left.css"
import ellipse13 from "../../../assets/svg/Inspect/ellipse13.svg";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const InspectLeft = (props) => {
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
    <div className="inspect-left">
      <b className="b_left" onClick={click_nav}>{title}</b>
      <div className="inspect-left-child" />
      <img className="inspect-left-item" alt="" src={ellipse13} />
    </div>
  );
};

export default InspectLeft;
