import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination } from "swiper";

import policyone3_title from "../../../assets/svg/Policy/PolicyOne/policyone3_title.svg";
import one3back_btn_text from "../../../assets/svg/Policy/PolicyOne/one3back_btn_text.svg";

import Three1_1 from "../../../assets/images/Policy/PolicyOne3/Three1_1.png";
import Three1_2 from "../../../assets/images/Policy/PolicyOne3/Three1_2.png";
import Three1_3 from "../../../assets/images/Policy/PolicyOne3/Three1_3.png";

import "../../styles/Policy/PolicyOne3Page.css";
import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

const PolicyOne3Page = () => {
  const navigate = useNavigate();

  const onOne3BackBtnClick = () => {
    navigate("/PolicyOneChoice");
  };

  const items = [
    { idx: 0, src: Three1_1 },
    { idx: 1, src: Three1_2 },
    { idx: 2, src: Three1_3 },
  ];

  return (
    <div className="policyone3-page">
      <Header />
      <button className="one3back-btn" onClick={onOne3BackBtnClick}>
        <div className="one3back-btn-div" />
        <img
          className="one3back-btn-text-icon"
          alt=""
          src={one3back_btn_text}
        />
      </button>
      <div className="policyone3-title-div">
        <div className="policyone3-title-div1" />
        <img className="policyone3-title-icon" alt="" src={policyone3_title} />
      </div>
      <div className="one3-div">
        <div className="one3-div1" />
        <div className="policyone3-img-div">
          <div className="policyone3-img-div1" />
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
                  <img className="PolicyOne3_images" src={item.src} />
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

export default PolicyOne3Page;
