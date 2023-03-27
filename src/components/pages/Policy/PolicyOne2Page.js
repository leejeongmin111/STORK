import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination } from "swiper";

import policyone2_title from "../../../assets/svg/Policy/PolicyOne/policyone2_title.svg";
import one2back_btn_text from "../../../assets/svg/Policy/PolicyOne/one2back_btn_text.svg";

import Two1_1 from "../../../assets/images/Policy/PolicyOne2/Two1_1.png";
import Two1_2 from "../../../assets/images/Policy/PolicyOne2/Two1_2.png";
import Two1_3 from "../../../assets/images/Policy/PolicyOne2/Two1_3.png";
import Two1_4 from "../../../assets/images/Policy/PolicyOne2/Two1_4.png";
import Two1_5 from "../../../assets/images/Policy/PolicyOne2/Two1_5.png";
import Two1_6 from "../../../assets/images/Policy/PolicyOne2/Two1_6.png";
import Two1_7 from "../../../assets/images/Policy/PolicyOne2/Two1_7.png";
import Two1_8 from "../../../assets/images/Policy/PolicyOne2/Two1_8.png";
import Two1_9 from "../../../assets/images/Policy/PolicyOne2/Two1_9.png";
import Two1_10 from "../../../assets/images/Policy/PolicyOne2/Two1_10.png";
import Two1_11 from "../../../assets/images/Policy/PolicyOne2/Two1_11.png";
import Two1_12 from "../../../assets/images/Policy/PolicyOne2/Two1_12.png";

import "../../styles/Policy/PolicyOne2Page.css";
import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

const PolicyOne2Page = () => {
  const navigate = useNavigate();

  const onOne2BackBtnClick = () => {
    navigate("/PolicyOneChoice");
  };

  const items = [
    { idx: 0, src: Two1_1 },
    { idx: 1, src: Two1_2 },
    { idx: 2, src: Two1_3 },
    { idx: 3, src: Two1_4 },
    { idx: 4, src: Two1_5 },
    { idx: 5, src: Two1_6 },
    { idx: 6, src: Two1_7 },
    { idx: 7, src: Two1_8 },
    { idx: 8, src: Two1_9 },
    { idx: 9, src: Two1_10 },
    { idx: 10, src: Two1_11 },
    { idx: 11, src: Two1_12 },
  ];

  return (
    <div className="policyone2-page">
      <Header />
      <button className="one2back-btn" onClick={onOne2BackBtnClick}>
        <div className="one2back-btn-div" />
        <img
          className="one2back-btn-text-icon"
          alt=""
          src={one2back_btn_text}
        />
      </button>
      <div className="policyone2-title-div">
        <div className="policyone2-title-div1" />
        <img className="policyone2-title-icon" alt="" src={policyone2_title} />
      </div>
      <div className="one2-div">
        <div className="one2-div1" />
        <div className="policyone2-img-div">
          <div className="policyone2-img-div1" />
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
                  <img className="PolicyOne2_images" src={item.src} />
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

export default PolicyOne2Page;
