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
      `<option value="" selected disabled>지역</option>
      <option value="강남구">강남구</option>
      <option value="강동구">강동구</option>
      <option value="강북구">강북구</option>
      <option value="강서구">강서구</option>
      <option value="관악구">관악구</option>
      <option value="광진구">광진구</option>
      <option value="구로구">구로구</option>
      <option value="금천구">금천구</option>
      <option value="노원구">노원구</option>
      <option value="도봉구">도봉구</option>
      <option value="동대문구">동대문구</option>
      <option value="동작구">동작구</option>
      <option value="마포구">마포구</option>
      <option value="서대문구">서대문구</option>
      <option value="서초구">서초구</option>
      <option value="성동구">성동구</option>
      <option value="성북구">성북구</option>
      <option value="송파구">송파구</option>
      <option value="양천구">양천구</option>
      <option value="영등포구">영등포구</option>
      <option value="용산구">용산구</option>
      <option value="은평구">은평구</option>
      <option value="종로구">종로구</option>
      <option value="중구">중구</option>
      <option value=" 중구 ">중랑구</option>`
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
      `<option value="" selected disabled>지역</option>
      <option value="가평군">가평군</option>
      <option value="고양시">고양시</option>
      <option value="과천시">과천시</option>
      <option value="광명시">광명시</option>
      <option value="광주시">광주시</option>
      <option value="구리시">구리시</option>
      <option value="김포시">김포시</option>
      <option value="남양주시">남양주시</option>
      <option value="동두천시">동두천시</option>
      <option value="부천시">부천시</option>
      <option value="성남시">성남시</option>
      <option value="수원시">수원시</option>
      <option value="시흥시">시흥시</option>
      <option value="안산시">안산시</option>
      <option value="안성시">안성시</option>
      <option value="안양시">안양시</option>
      <option value="양주시">양주시</option>
      <option value="양평군">양평군</option>
      <option value="여주시">여주시</option>
      <option value="연천군">연천군</option>
      <option value="오산시">오산시</option>
      <option value="용인시">용인시</option>
      <option value="의왕시">의왕시</option>
      <option value="의정부시">의정부시</option>
      <option value="이천시">이천시</option>
      <option value="파주시">파주시</option>
      <option value="평택시">평택시</option>
      <option value="포천시">포천시</option>
      <option value="하남시">하남시</option>
      <option value="화성시">화성시</option>
      <option value="인천">인천</option>`
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
      `<option value="" selected disabled>지역</option>
      <option value="계룡시">계룡시</option>
      <option value="공주시">공주시</option>
      <option value="금산군">금산군</option>
      <option value="논산시">논산시</option>
      <option value="당진시">당진시</option>
      <option value="보령시">보령시</option>
      <option value="부여군">부여군</option>
      <option value="서산시">서산시</option>
      <option value="서천군">서천군</option>
      <option value="아산시">아산시</option>
      <option value="예산군">예산군</option>
      <option value="천안시">천안시</option>
      <option value="청양군">청양군</option>
      <option value="태안군">태안군</option>
      <option value="홍성군">홍성군</option>
      <option value="대전광역시">대전광역시</option>`
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
      `<option value="" selected disabled>지역</option>
      <option value="괴산군">괴산군</option>
      <option value="단양군">단양군</option>
      <option value="보은군">보은군</option>
      <option value="영동군">영동군</option>
      <option value="옥천군">옥천군</option>
      <option value="음성군">음성군</option>
      <option value="제천시">제천시</option>
      <option value="증평군">증평군</option>
      <option value="진천군">진천군</option>
      <option value="청주시">청주시</option>`
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
      `<option value="" selected disabled>지역</option>
      <option value="강릉시">강릉시</option>
      <option value="고성군">고성군</option>
      <option value="동해시">동해시</option>
      <option value="삼척시">삼척시</option>
      <option value="속초시">속초시</option>
      <option value="양구군">양구군</option>
      <option value="양양군">양양군</option>
      <option value="영월군">영월군</option>
      <option value="원주시">원주시</option>
      <option value="인제군">인제군</option>
      <option value="정선군">정선군</option>
      <option value="철원군">철원군</option>
      <option value="태백시">태백시</option>
      <option value="평창군">평창군</option>
      <option value="홍천군">홍천군</option>
      <option value="화천군">화천군</option>
      <option value="횡성군">횡성군</option>`
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
      `<option value="" selected disabled>지역</option>
      <option value="경산시">경산시</option>
      <option value="경주시">경주시</option>
      <option value="고령군">고령군</option>
      <option value="구미시">구미시</option>
      <option value="군위군">군위군</option>
      <option value="김천시">김천시</option>
      <option value="문경시">문경시</option>
      <option value="봉화군">봉화군</option>
      <option value="상주시">상주시</option>
      <option value="성주군">성주군</option>
      <option value="안동시">안동시</option>
      <option value="영덕군">영덕군</option>
      <option value="영양군">영양군</option>
      <option value="대구광역시">대구광역시</option>
      <option value="울산광역시">울산광역시</option>`
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
      `<option value="" selected disabled>지역</option>
      <option value="거제시">거제시</option>
      <option value="김해시">김해시</option>
      <option value="남해군">남해군</option>
      <option value="마산시">마산시</option>
      <option value="밀양시">밀양시</option>
      <option value="사천시">사천시</option>
      <option value="산청군">산청군</option>
      <option value="진주시">진주시</option>
      <option value="창원시">창원시</option>
      <option value="통영시">통영시</option>
      <option value="하동군">하동군</option>
      <option value="합천군">합천군</option>
      <option value="울주군">울주군</option>`
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
      `<option value="" selected disabled>지역</option>
      <option value="고창군">고창군</option>
      <option value="군산시">군산시</option>
      <option value="김제시">김제시</option>
      <option value="남원시">남원시</option>
      <option value="무주군">무주군</option>
      <option value="부안군">부안군</option>
      <option value="순창군">순창군</option>`
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
      `<option value="" selected disabled>지역</option>
      <option value="광주광역시">광주광역시</option>
      <option value="강진군">강진군</option>
      <option value="고흥군">고흥군</option>
      <option value="곡성군">곡성군</option>
      <option value="광양시">광양시</option>
      <option value="구례군">구례군</option>
      <option value="나주시">나주시</option>
      <option value="담양군">담양군</option>
      <option value="목포시">목포시</option>
      <option value="무안군">무안군</option>
      <option value="보성군">보성군</option>
      <option value="순천시">순천시</option>
      <option value="신안군">신안군</option>
      <option value="여수시">여수시</option>
      <option value="영광군">영광군</option>
      <option value="영암군">영암군</option>
      <option value="완도군">완도군</option>
      <option value="장성군">장성군</option>
      <option value="장흥군">장흥군</option>
      <option value="진도군">진도군</option>
      <option value="함평군">함평군</option>
      <option value="해남군">해남군</option>
      <option value="화순군">화순군</option>`
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
      `<option value="" selected disabled>지역</option>
      <option value='제주도'>제주도</option>`
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
