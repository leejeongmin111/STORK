import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import my_profile_text from "../../../assets/svg/Bar/Header/my_profile_text.svg";
import stork from "../../../assets/svg/Bar/Header/stork.svg";
import my_profile_icon from "../../../assets/images/Bar/my_profile_icon.png";

import "../../styles/Bar/Header.css";

const Header = () => {
  const navigate = useNavigate();

  const onMyProfileBtnClick = useCallback(() => {
    navigate("/MyProfile");
  }, [navigate]);

  return (
    <header className="header">
      <div className="header-div" />
      <img className="stork-icon" alt="" src={stork} />
      <button className="myprofile-btn" onClick={onMyProfileBtnClick}>
        <img className="my-profile-icon" alt="" src={my_profile_icon} />
        <img className="my-profile-text-icon" alt="" src={my_profile_text} />
        <div className="myprofile-btn-div" />
      </button>
    </header>
  );
};

export default Header;
