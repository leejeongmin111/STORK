import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/Bar/MyHeader.css";

import logout_img from "../../../assets/images/Bar/logout_img.png";
import logout_text from "../../../assets/svg/Bar/Header/logout_text.svg";
import my_stork from "../../../assets/svg/Bar/Header/my_stork.svg";

const MyHeader = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <header className="my-header">
      <div className="my-header1" />
      <img className="my-stork-icon" alt="" src={my_stork} />
      <button className="logout-btn" onClick={logout}>
        <div className="logout-btn-div" />
        <img className="logout-text-icon" alt="" src={logout_text} />
        <img className="logout-img-icon" alt="" src={logout_img} />
      </button>
    </header>
  );
};

export default MyHeader;
