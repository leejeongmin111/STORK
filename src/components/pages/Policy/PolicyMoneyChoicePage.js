import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery"

import title_text from "../../../assets/svg/Policy/PolicyMoneyChoice/title_text.svg";
import subtitle_text from "../../../assets/svg/Policy/PolicyMoneyChoice/subtitle_text.svg";
import chungbuk_text from "../../../assets/svg/Policy/PolicyMoneyChoice/chungbuk_text.svg";
import chungnam_text from "../../../assets/svg/Policy/PolicyMoneyChoice/chungnam_text.svg";
import junbuk_text from "../../../assets/svg/Policy/PolicyMoneyChoice/junbuk_text.svg";
import junnam_text from "../../../assets/svg/Policy/PolicyMoneyChoice/junnam_text.svg";
import kangwon_text from "../../../assets/svg/Policy/PolicyMoneyChoice/kangwon_text.svg";
import kyungbuk_text from "../../../assets/svg/Policy/PolicyMoneyChoice/kyungbuk_text.svg";
import kyungki_text from "../../../assets/svg/Policy/PolicyMoneyChoice/kyungki_text.svg";
import kyungnam_text from "../../../assets/svg/Policy/PolicyMoneyChoice/kyungnam_text.svg";
import seoul_text from "../../../assets/svg/Policy/PolicyMoneyChoice/seoul_text.svg";
import AreaCheck_text from "../../../assets/svg/Policy/PolicyMoneyChoice/AreaCheck_text.svg";
import jeju_text from "../../../assets/svg/Policy/PolicyMoneyChoice/jeju_text.svg";

import map from "../../../assets/images/Policy/map.png";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

import "../../styles/Policy/PolicyMoneyChoicePage.css";

const PolicyMoneyChoicePage = () => {
  const [region, setRegion] = useState("");
  const navigate = useNavigate();

  const sty = ()=>{
    document.getElementsByClassName('policymoneychoice-page')[0].style.height = "950px";
    document.getElementsByClassName('choice-div')[0].style.display = "block";
    document.getElementsByClassName('areacheck-btn')[0].style.display = "block";
  }

  const onAreaCheckBtnClick = ()=>{
    navigate("/PolicyMoney",{state:region});
  };

  const onSeoulBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='choiceDiv']");
    sty()
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    $('#region option').remove();
    $('#region').append(
      `<option value="" selected disabled>??????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="????????????">????????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="????????????">????????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="????????????">????????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="??????">??????</option>
      <option value=" ?????? ">?????????</option>`
    )
  }, []);

  const onKyungkiBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='choiceDiv']");
    sty()
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    $('#region option').remove();
    $('#region').append(
      `<option value="" selected disabled>??????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="????????????">????????????</option>
      <option value="????????????">????????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="????????????">????????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="??????">??????</option>`
    )
  }, []);

  const onChungnamBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='choiceDiv']");
    sty()
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    $('#region option').remove();
    $('#region').append(
      `<option value="" selected disabled>??????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="???????????????">???????????????</option>`
    )
  }, []);

  const onChungbukBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='choiceDiv']");
    sty()
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    $('#region option').remove();
    $('#region').append(
      `<option value="" selected disabled>??????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>`
    )
  }, []);

  const onKangwonBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='choiceDiv']");
    sty()
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    $('#region option').remove();
    $('#region').append(
      `<option value="" selected disabled>??????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>`
    )
  }, []);

  const onKyungbukBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='choiceDiv']");
    sty()
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    $('#region option').remove();
    $('#region').append(
      `<option value="" selected disabled>??????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="???????????????">???????????????</option>
      <option value="???????????????">???????????????</option>`
    )
  }, []);

  const onKyungnamBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='choiceDiv']");
    sty()
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    $('#region option').remove();
    $('#region').append(
      `<option value="" selected disabled>??????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>`
    )
  }, []);

  const onJunbukBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='choiceDiv']");
    sty()
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    $('#region option').remove();
    $('#region').append(
      `<option value="" selected disabled>??????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>`
    )
  }, []);

  const onJunnamBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='choiceDiv']");
    sty()
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    $('#region option').remove();
    $('#region').append(
      `<option value="" selected disabled>??????</option>
      <option value="???????????????">???????????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>
      <option value="?????????">?????????</option>`
    )
  }, []);

  const onJejuBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='choiceDiv']");
    sty()
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    $('#region option').remove();
    $('#region').append(
      `<option value="" selected disabled>??????</option>
      <option value='?????????'>?????????</option>`
    )
  }, []);


  return (
    <div className="policymoneychoice-page">
      <Header />
      <img className="title-text-icon" alt="" src={title_text} />
      <img className="subtitle-text-icon" alt="" src={subtitle_text} />
      <img className="map-icon" alt="" src={map} />

      <button className="seoul-btn" onClick={onSeoulBtnClick}>
        <div className="seoul-btn-div" />
        <img className="seoul-text-icon" alt="" src={seoul_text} />
      </button>
      <button className="kyungki-btn" onClick={onKyungkiBtnClick}>
        <div className="seoul-btn-div" />
        <img className="kyungki-text-icon" alt="" src={kyungki_text} />
      </button>
      <button className="chungnam-btn" onClick={onChungnamBtnClick}>
        <div className="seoul-btn-div" />
        <img className="chungnam-text-icon" alt="" src={chungnam_text} />
      </button>
      <button className="chungbuk-btn" onClick={onChungbukBtnClick}>
        <div className="seoul-btn-div" />
        <img className="chungbuk-text-icon" alt="" src={chungbuk_text} />
      </button>
      <button className="kangwon-btn" onClick={onKangwonBtnClick}>
        <div className="seoul-btn-div" />
        <img className="kangwon-text-icon" alt="" src={kangwon_text} />
      </button>
      <button className="kyungbuk-btn" onClick={onKyungbukBtnClick}>
        <div className="seoul-btn-div" />
        <img className="kyungbuk-text-icon" alt="" src={kyungbuk_text} />
      </button>
      <button className="kyungnam-btn" onClick={onKyungnamBtnClick}>
        <div className="seoul-btn-div" />
        <img className="kyungnam-text-icon" alt="" src={kyungnam_text} />
      </button>
      <button className="junbuk-btn" onClick={onJunbukBtnClick}>
        <div className="seoul-btn-div" />
        <img className="junbuk-text-icon" alt="" src={junbuk_text} />
      </button>
      <button className="junnam-btn" onClick={onJunnamBtnClick}>
        <div className="seoul-btn-div" />
        <img className="junnam-text-icon" alt="" src={junnam_text} />
      </button>
      <button className="jeju-btn" onClick={onJejuBtnClick}>
        <div className="seoul-btn-div" />
        <img className="jeju-text-icon" alt="" src={jeju_text} />
      </button>
      <button className="areacheck-btn" onClick={onAreaCheckBtnClick}>
        <div className="areacheck-btn-div" />
        <img className="areacheck-text-icon" alt="" src={AreaCheck_text} />
      </button>
      <div className="choice-div" data-scroll-to="choiceDiv">
        <select id="region" onChange={(e) => {
              setRegion(e.target.value)
              console.log(e.target.value)
            }}
            required
          >
          </select>
      </div>
      <Footer />
    </div>
  );
};
export default PolicyMoneyChoicePage;
