import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination } from "swiper";

import policyone4_title from "../../../assets/svg/Policy/PolicyOne/policyone4_title.svg";
import one4back_btn_text from "../../../assets/svg/Policy/PolicyOne/one4back_btn_text.svg";

import Four1_1 from "../../../assets/images/Policy/PolicyOne4/Four1_1.png";
import Four1_2 from "../../../assets/images/Policy/PolicyOne4/Four1_2.png";
import Four1_3 from "../../../assets/images/Policy/PolicyOne4/Four1_3.png";
import Four1_4 from "../../../assets/images/Policy/PolicyOne4/Four1_4.png";

import "../../styles/Policy/PolicyOne4Page.css";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

const items = [
  { idx: 0, src: Four1_1 },
  { idx: 1, src: Four1_2 },
  { idx: 2, src: Four1_3 },
  { idx: 3, src: Four1_4 },
];

const PolicyOne4Page = () => {
  const navigate = useNavigate();

  const onOne4BackBtnClick = () => {
    navigate("/PolicyOneChoice");
  };

  return (
    <div className="policyone4-page">
      <Header />
      <button className="one4back-btn" onClick={onOne4BackBtnClick}>
        <div className="one4back-btn-div" />
        <img
          className="one4back-btn-text-icon"
          alt=""
          src={one4back_btn_text}
        />
      </button>
      <div className="policyone4-title-div">
        <div className="policyone4-title-div1" />
        <img className="policyone4-title-icon" alt="" src={policyone4_title} />
      </div>
      <div className="one4-div">
        <div className="one4-div1" />
        <div className="policyone4-img-div">
          <div className="policyone4-img-div1" />
          <Swiper
            style={{
              width: "312px",
              height: "518.42px",
              borderRadius: "9px",
            }}
            effect={"fade"}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Pagination]}
            className="mySwiper"
            loop={true}
          >
            {items.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <img className="PolicyOne5_images" src={item.src} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PolicyOne4Page;
