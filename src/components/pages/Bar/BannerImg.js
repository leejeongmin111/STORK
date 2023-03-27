import banneradd_text from "../../../assets/svg/Bar/SideBar/banneradd_text.svg";

import "../../styles/Bar/BannerImg.css";

const BannerImg = () => {
  return (
    <div className="banner-img">
      <div className="banner-img-div" />
      <img className="banneradd-text-icon" alt="" src={banneradd_text} />
    </div>
  );
};

export default BannerImg;
