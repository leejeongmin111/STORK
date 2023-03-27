import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import bdw_cmdiv_text from "../../../assets/svg/BabyDiary/BabyDiaryWrite/bdw_cmdiv_text.svg";
import bdw_pic_upload_text from "../../../assets/svg/BabyDiary/BabyDiaryWrite/bdw_pic_upload_text.svg";
import bdw_title from "../../../assets/svg/BabyDiary/BabyDiaryWrite/bdw_title.svg";
import bdwac_title from "../../../assets/svg/BabyDiary/BabyDiaryWrite/bdwac_title.svg";
import bdwdate_title from "../../../assets/svg/BabyDiary/BabyDiaryWrite/bdwdate_title.svg";
import bdwfl_cm from "../../../assets/svg/BabyDiary/BabyDiaryWrite/bdwfl_cm.svg";
import bdwfl_title from "../../../assets/svg/BabyDiary/BabyDiaryWrite/bdwfl_title.svg";
import bdwritecancle_text from "../../../assets/svg/BabyDiary/BabyDiaryWrite/bdwritecancle_text.svg";
import bdwritecomplete_text from "../../../assets/svg/BabyDiary/BabyDiaryWrite/bdwritecomplete_text.svg";
import bdwritediary_title from "../../../assets/svg/BabyDiary/BabyDiaryWrite/bdwritediary_title.svg";
import bdwweektitle from "../../../assets/svg/BabyDiary/BabyDiaryWrite/bdwweektitle.svg";

import upload_btnimg from "../../../assets/images/Diary/upload_btnimg.png";

import bpd_temp1 from "../../../assets/svg/BabyDiary/BabyDiaryChart/bpd_temp1.svg";
import bpd_temp2 from "../../../assets/svg/BabyDiary/BabyDiaryChart/bpd_temp2.svg";
import bpd from "../../../assets/svg/BabyDiary/BabyDiaryChart/BPD.svg";

import "../../styles/BabyDiary/BabyDiaryWritePage.css";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

const BabyDiaryWritePage = () => {
  const [crl, setcrl] = useState("");
  const [ac, setac] = useState("");
  const [fl, setfl] = useState("");
  const [detail, setDetail] = useState("");
  const [hos, sethos] = useState("");
  const [week, setweek] = useState("0");
  const [imgSrc, setimgSrc] = useState("");
  const [img, setImg] = useState();

  const getToday = () => {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
  };
  const formData = new FormData();

  //flask에 데이터 전송
  const srcChange = (e) => {
    setimgSrc(URL.createObjectURL(e.target.files[0]));
    setImg(e.target.files[0]);
    const uploadFile = e.target.files[0];
    // console.log(uploadFile);
    formData.append("files", uploadFile);
    axios
      .post("http://localhost:5000/realyolo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("성공");
        console.log(res.data.ac);
        if (res.data.ac !== null) {
          setac(res.data.ac);
        }
        if (res.data.crl !== null) {
          setcrl(res.data.crl);
        }
        if (res.data.fl !== null) {
          setfl(res.data.fl);
        }
      })
      .catch((err) => {
        console.log("실패 : " + err);
      });
  };

  const navigate = useNavigate();

  // 데이터 전송
  const onBDwritecompleteDivClick = () => {
    formData.append("seq", JSON.parse(localStorage.getItem("user")).seq);
    formData.append("hos", hos);
    formData.append("week", week);
    formData.append("date", getToday());
    formData.append("crl", crl);
    formData.append("ac", ac);
    formData.append("fl", fl);
    formData.append("detail", detail);
    formData.append("img", img);

    axios
      .post("http://127.0.0.1:3001/babywrite", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        console.log("아기수첩 데이터 주고받기 성공");
      })
      .catch((err) => {
        console.log("아기수첩데이터주고받기실패" + err);
      });
    navigate("/BabyDiary");
  };

  const onBDwriteCancleDivClick = useCallback(() => {
    navigate("/BabyDiary");
  }, [navigate]);

  return (
    <form
      onSubmit={onBDwritecompleteDivClick}
      method="post"
      encType="multipart/form-data"
    >
      <div className="babydiarywrite-page">
        <Header />
        <img
          className="bdwritediary-title-icon"
          alt=""
          src={bdwritediary_title}
        />
        <div className="babydiarywritetextarea">
          <div className="babydiarywritetextarea1" />
          <div className="bdw-title-div">
            <div className="bdw-title-div1" />
            <img className="bdw-title-icon" alt="" src={bdw_title} />
          </div>
          <div className="bdwtitle-text-div">
            <div className="bdwtitle-text-div1">
              <textarea
                className="BDWtitle_textarea"
                placeholder="병원 이름을 입력해주세요"
                onChange={(e) => {
                  sethos(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="bdw-date-div">
            <div className="bdw-date-div1" />
            <img className="bdwdate-title-icon" alt="" src={bdwdate_title} />
          </div>
          <div className="bdwdate-text-div">
            <div className="bdwdate-text-div1" />
            <span className="bdw-text">{getToday()}</span>
          </div>
          <div className="bdw-weight-div">
            <div className="bdw-weight-div1" />
            <img className="bdwweek-title-icon" alt="" src={bdwweektitle} />
          </div>
          <div className="bdwweek-text-div">
            <div className="bdwweek-text-div1">
              <textarea
                className="BDWweek_textarea"
                placeholder="주차"
                onChange={(e) => {
                  setweek(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="bdw-cm-cover">
            <div className="bdw-cm-cover1" />
            <div className="bdw-pic-div">
              <img className="bdw_pic" src={imgSrc} />
            </div>
            <button className="bdw-pic-upload-btn" type="button">
              <img className="upload-btnimg-icon" alt="" src={upload_btnimg} />
              <div className="bdw-pic-upload-btn-div" />
              <label for="inpic">
                <input
                  accept="image/*"
                  type="file"
                  name="img"
                  onChange={srcChange}
                  id="inpic"
                />
              </label>
              <img
                className="bdw-pic-upload-text-icon"
                alt=""
                src={bdw_pic_upload_text}
              />
            </button>
            <img className="bdw-cmdiv-text-icon" alt="" src={bdw_cmdiv_text} />
            <div className="bdwcrl-title-div">
              <div className="bdwfl-title-div1" />
              <img className="bdwcrl-title-icon" alt="" src={bpd} />
            </div>
            <div className="bdwcrl-text-div">
              <div className="bdwfl-text-div1">
                <textarea
                  className="BDWCRL_textarea"
                  placeholder="머리"
                  value={crl}
                  onChange={(e) => {
                    setcrl(e.target.value);
                  }}
                />
              </div>
            </div>
            <img className="bdwcrl-cm-icon" alt="" src={bdwfl_cm} />
            <div className="bdwac-title-div">
              <div className="bdwfl-title-div1" />
              <img className="bdwac-title-icon" alt="" src={bdwac_title} />
            </div>
            <div className="bdwac-text-div">
              <div className="bdwfl-text-div1">
                <textarea
                  className="BDAC_textarea"
                  placeholder="복부"
                  value={ac}
                  onChange={(e) => {
                    setac(e.target.value);
                  }}
                />
              </div>
            </div>
            <img className="bdwac-cm-icon" alt="" src={bdwfl_cm} />
            <div className="bdwfl-title-div">
              <div className="bdwfl-title-div1" />
              <img className="bdwfl-title-icon" alt="" src={bdwfl_title} />
            </div>
            <div className="bdwfl-text-div">
              <div className="bdwfl-text-div1">
                <textarea
                  className="BDFL_textarea"
                  placeholder="대퇴부"
                  value={fl}
                  onChange={(e) => {
                    setfl(e.target.value);
                  }}
                />
              </div>
            </div>
            <img className="bdwfl-cm-icon" alt="" src={bdwfl_cm} />
          </div>
          <div className="bdw-text-div">
            <div className="bdw-text-div1">
              <textarea
                className="BDWtext_textarea"
                placeholder="진료 내용을 입력해주세요"
                onChange={(e) => {
                  setDetail(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <button className="bdwritecancle-div" onClick={onBDwriteCancleDivClick}>
          <div className="bdwritecancle-div1" />
          <img
            className="bdwritecancle-text-icon"
            alt=""
            src={bdwritecancle_text}
          />
        </button>
        <button className="bdwritecomplete-div" type="submit">
          <div className="bdwritecomplete-div1" />
          <img
            className="bdwritecomplete-text-icon"
            alt=""
            src={bdwritecomplete_text}
          />
        </button>
        <Footer />
      </div>
    </form>
  );
};

export default BabyDiaryWritePage;
