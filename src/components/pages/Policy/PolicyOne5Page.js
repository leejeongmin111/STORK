import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination } from "swiper";

import policyone5_title from "../../../assets/svg/Policy/PolicyOne/policyone5_title.svg";
import one5back_btn_text from "../../../assets/svg/Policy/PolicyOne/one5back_btn_text.svg";

import Five1_1 from "../../../assets/images/Policy/PolicyOne5/Five1_1.png";
import Five1_2 from "../../../assets/images/Policy/PolicyOne5/Five1_2.png";
import Five1_3 from "../../../assets/images/Policy/PolicyOne5/Five1_3.png";
import Five1_4 from "../../../assets/images/Policy/PolicyOne5/Five1_4.png";
import Five1_5 from "../../../assets/images/Policy/PolicyOne5/Five1_5.png";

import "../../styles/Policy/PolicyOne5Page.css";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

const items = [
  { idx: 0, src: Five1_1 },
  { idx: 1, src: Five1_2 },
  { idx: 2, src: Five1_3 },
  { idx: 3, src: Five1_4 },
  { idx: 4, src: Five1_5 },
];
const PolicyOne5Page = () => {
  const navigate = useNavigate();

  const onOne5BackBtnClick = () => {
    navigate("/PolicyOneChoice");
  };

  return (
    <div className="policyone5-page">
      <Header />
      <button className="one5back-btn" onClick={onOne5BackBtnClick}>
        <div className="one5back-btn-div" />
        <img
          className="one5back-btn-text-icon"
          alt=""
          src={one5back_btn_text}
        />
      </button>
      <div className="policyone5-title-div">
        <div className="policyone5-title-div1" />
        <img className="policyone5-title-icon" alt="" src={policyone5_title} />
      </div>
      <div className="one5-div">
        <div className="one5-div1" />
        <div className="policyone5-img-div">
          <div className="policyone5-img-div1" />
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

export default PolicyOne5Page;
