import { useCallback, useState, useEffect } from "react";

import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

import now_baby_title from "../../../assets/svg/Tip/now_baby_title.svg";
import now_mom_title from "../../../assets/svg/Tip/now_mom_title.svg";
import tip_baby_gobtn_text from "../../../assets/svg/Tip/tip_baby_gobtn_text.svg";
import tip_baby_title from "../../../assets/svg/Tip/tip_baby_title.svg";
import tip_gotop_btn_div from "../../../assets/svg/Tip/tip_gotop_btn_div.svg";
import tip_mom_title from "../../../assets/svg/Tip/tip_mom_title.svg";
import tip_title_text from "../../../assets/svg/Tip/tip_title_text.svg";

import tip_arrow_up from "../../../assets/images/Tip/tip_arrow_up.png";
import baby_img_1 from "../../../assets/images/Tip/baby_img_1.png";
import baby_img_2 from "../../../assets/images/Tip/baby_img_2.png";
import baby_img_3 from "../../../assets/images/Tip/baby_img_3.png";
import baby_img_4 from "../../../assets/images/Tip/baby_img_4.png";
import mom_img_1 from "../../../assets/images/Tip/mom_img_1.png";
import mom_img_2 from "../../../assets/images/Tip/mom_img_2.png";
import mom_img_3 from "../../../assets/images/Tip/mom_img_3.png";
import mom_img_4 from "../../../assets/images/Tip/mom_img_4.png";
import mom_img_5 from "../../../assets/images/Tip/mom_img_5.png";

import "../../styles/Tip/TipPage.css";
import Data_mom from "../../data/Tips_mom_data";
import Data_baby from "../../data/Tips_baby_data";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

const TipPage = () => {
  const onTipGoTopBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='tipTitleText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onTipBabyGoBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='tipBabyTitle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onInspectBtnClick = useCallback(() => {
    // Please sync "Check_Page" to the project
  }, []);

  const mom_arr = [mom_img_1, mom_img_2, mom_img_3, mom_img_4, mom_img_5];
  const baby_arr = [baby_img_1, baby_img_2, baby_img_3, baby_img_4];

  // JSON.parse(localStorage.getItem("baby")).week =>  임신 주차
  const [ch_num, setCh_num] = useState(JSON.parse(localStorage.getItem("baby")).week);
  const [ch_momImg, setCh_momImg] = useState(0);
  const [ch_babyImg, setCh_babyImg] = useState(0);

  function cc() {
    // console.log(Data_mom[ch_num-1])
    let mom_temp = Math.floor(Math.random() * (5 - 0));
    let baby_temp = Math.floor(Math.random() * (4 - 0));
  }

  function change_num(e) {
    setCh_num(e.target.outerText);
    let mom_temp = Math.floor(Math.random() * (5 - 0));
    let baby_temp = Math.floor(Math.random() * (4 - 0));
    setCh_momImg(mom_temp);
    setCh_babyImg(baby_temp);
  }

  return (
    <div className="tip-page">
      <Header />
      <img
        className="tip-title-text-icon"
        alt=""
        src={tip_title_text}
        data-scroll-to="tipTitleText"
      />

      <div className="numbering-div">
        <Stack spacing={2} className="day-change-icon" alignItems="center">
          <Pagination
            count={40}
            size="small"
            defaultPage={JSON.parse(localStorage.getItem("baby")).week}
            onChange={change_num}
          />
        </Stack>
      </div>
      <img className="tip-mom-title-icon" alt="" src={tip_mom_title} />
      <div className="tip-mom-imgdiv">
        <img className="mom-img-icon" alt="" src={mom_arr[ch_momImg]} />
      </div>
      <img className="now-mom-title-icon" alt="" src={now_mom_title} />
      <span className="now-mom-title-text">{Data_mom[ch_num - 1][0]}</span>
      <div className="now-mom-text-div">
        <div className="now-mom-text-div1" />
        <span className="now-mom-text">{Data_mom[ch_num - 1][1]}</span>
      </div>
      <button className="tip-baby-gobtn" onClick={onTipBabyGoBtnClick}>
        <button className="tip-baby-gobtn-div" />
        <img
          className="tip-baby-gobtn-text-icon"
          alt=""
          src={tip_baby_gobtn_text}
        />
      </button>
      <button className="tip-gotop-btn" onClick={onTipGoTopBtnClick}>
        <img
          className="tip-gotop-btn-div-icon"
          alt=""
          src={tip_gotop_btn_div}
        />
        <img className="tip-arrow-up-icon" alt="" src={tip_arrow_up} />
      </button>
      <img
        className="tip-baby-title-icon"
        alt=""
        src={tip_baby_title}
        data-scroll-to="tipBabyTitle"
      />
      <div className="tip-baby-imgdiv">
        <img className="baby-img-icon" alt="" src={baby_arr[ch_babyImg]} />
      </div>
      <img className="now-baby-title-icon" alt="" src={now_baby_title} />
      <span className="now-baby-title-text">{Data_baby[ch_num - 1][0]}</span>
      <div className="now-baby-text-div">
        <div className="now-baby-text-div1" />
        <span className="now-baby-text">{Data_baby[ch_num - 1][1]}</span>
      </div>
      <Footer />
    </div>
  );
};

export default TipPage;
