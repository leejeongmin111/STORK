import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination } from "swiper";

import one1back_btn_text from "../../../assets/svg/Policy/PolicyOne/one1back_btn_text.svg";
import policyone1_title from "../../../assets/svg/Policy/PolicyOne/policyone1_title.svg";

import One1_1 from "../../../assets/images/Policy/PolicyOne1/One1_1.png";
import One1_2 from "../../../assets/images/Policy/PolicyOne1/One1_2.png";
import One1_3 from "../../../assets/images/Policy/PolicyOne1/One1_3.png";
import One1_4 from "../../../assets/images/Policy/PolicyOne1/One1_4.png";

import "../../styles/Policy/PolicyOne1Page.css";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

const PolicyOne1Page = () => {
  const navigate = useNavigate();

  const onOne1BackBtnClick = () => {
    navigate("/PolicyOneChoice");
  };

  const items = [
    { idx: 0, src: One1_1 },
    { idx: 1, src: One1_2 },
    { idx: 2, src: One1_3 },
    { idx: 3, src: One1_4 },
  ];

  return (
    <div className="policyone1-page">
      <Header />
      <button className="one1back-btn" onClick={onOne1BackBtnClick}>
        <div className="one1back-btn-div" />
        <img
          className="one1back-btn-text-icon"
          alt=""
          src={one1back_btn_text}
        />
      </button>
      <div className="policyone1-title-div">
        <div className="policyone1-title-div1" />
        <img className="policyone1-title-icon" alt="" src={policyone1_title} />
      </div>
      <div className="one1-div">
        <div className="one1-div1" />
        <div className="policyone1-img-div">
          <div className="policyone1-img-div1">
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
                    <img className="PolicyOne1_images" src={item.src} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PolicyOne1Page;
