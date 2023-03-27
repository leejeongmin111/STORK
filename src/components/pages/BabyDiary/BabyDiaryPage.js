import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Buffer } from "buffer";

import bd_cm_title from "../../../assets/svg/BabyDiary/BabyDiary/bd_cm_title.svg";
import bd_graph_go_text from "../../../assets/svg/BabyDiary/BabyDiary/bd_graph_go_text.svg";
import bd_title from "../../../assets/svg/BabyDiary/BabyDiary/bd_title.svg";
import bdcheck_text from "../../../assets/svg/BabyDiary/BabyDiary/bdcheck_text.svg";
import bddate_title from "../../../assets/svg/BabyDiary/BabyDiary/bddate_title.svg";
import bdselectdate_text from "../../../assets/svg/BabyDiary/BabyDiary/bdselectdate_text.svg";
import bdweek_title from "../../../assets/svg/BabyDiary/BabyDiary/bdweek_title.svg";
import bdwrite_btn from "../../../assets/svg/BabyDiary/BabyDiary/bdwrite_btn.svg";
import fl_cm from "../../../assets/svg/BabyDiary/BabyDiary/fl_cm.svg";
import bdac_title from "../../../assets/svg/BabyDiary/BabyDiary/bdac_title.svg";
import bdfl_title from "../../../assets/svg/BabyDiary/BabyDiary/bdfl_title.svg";
import bdcrl_title from "../../../assets/svg/BabyDiary/BabyDiary/bdcrl_title.svg";

import bdpen from "../../../assets/images/Diary/bdpen.png";

import bpd_temp1 from "../../../assets/svg/BabyDiary/BabyDiaryChart/bpd_temp1.svg";
import bpd_temp2 from "../../../assets/svg/BabyDiary/BabyDiaryChart/bpd_temp2.svg";
import bpd from "../../../assets/svg/BabyDiary/BabyDiaryChart/BPD.svg";

import "../../styles/BabyDiary/BabyDiaryPage.css";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

const BabyDiaryPage = () => {
  const [crl, setcrl] = useState("0");
  const [ac, setac] = useState("0");
  const [fl, setfl] = useState("0");
  const [detail, setDetail] = useState("");
  const [hos, sethos] = useState("");
  const [week, setweek] = useState("0");
  const [selectdate, setSelectdate] = useState();
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  const loCrl = [];
  const loAc = [];
  const loFl = [];
  const loWeek = [];
  useEffect(() => {
    axios
      .post("http://127.0.0.1:3001/babyDiary", {
        seq: JSON.parse(localStorage.getItem("user")).seq,
      })
      .then((res) => {
        if (res.data.result == "success") {
          sethos(res.data.bl_hos);
          setSelectdate(res.data.bl_date);
          setcrl(res.data.bl_crl);
          setac(res.data.bl_ac);
          setfl(res.data.bl_fl);
          setweek(res.data.bl_week);
          setDetail(res.data.bl_detail);
          loCrl.push(res.data.bl_crl);
          loAc.push(res.data.bl_ac);
          loFl.push(res.data.bl_fl);
          loWeek.push(res.data.bl_week);

          let imgDt;
          let encode = Buffer.from(res.data.bl_img[0].data).toString("base64");
          imgDt = "data:image/png;base64," + encode;
          setImg(imgDt);
          console.log("아기수첩 초기값 들어오기");
          console.log(selectdate);
        } else {
          console.log("데이터 없거나 오류?");
        }
      })
      .catch(() => {
        console.log("데이터 보내기 실패");
      });
  }, []);

  const onBDwriteBtnClick = useCallback(() => {
    navigate("/BabyDiaryWrite");
  }, [navigate]);

  const onBDGraphGoBtnClick = useCallback(() => {
    navigate("/BabyDiaryChart", {
      state: { crl: loCrl[0], ac: loAc[0], fl: loFl[0], week: loWeek[0] },
    });
  }, [navigate]);

  const outputdate = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3001/outputdate/babylog", {
        seq: JSON.parse(localStorage.getItem("user")).seq,
        selectdate: document.querySelector(".BDDateSelect").value,
      })
      .then((res) => {
        if (res.data.result == "success") {
          setSelectdate(document.querySelector(".BDDateSelect").value);
          sethos(res.data.bl_hos);
          setcrl(res.data.bl_crl);
          setac(res.data.bl_ac);
          setfl(res.data.bl_fl);
          setweek(res.data.bl_week);
          setDetail(res.data.bl_detail);
          let imgDt;
          let encode = Buffer.from(res.data.bl_img[0].data).toString("base64");
          imgDt = "data:image/png;base64," + encode;
          setImg(imgDt);
        } else if (res.data.result == "success0") {
          console.log("데이터 없음");
          setSelectdate(document.querySelector(".BDDateSelect").value);
          sethos(res.data.bl_hos);
          setcrl(res.data.bl_crl);
          setac(res.data.bl_ac);
          setfl(res.data.bl_fl);
          setweek(res.data.bl_week);
          setDetail(res.data.bl_detail);
          let imgDt;
          let encode = Buffer.from(res.data.bl_img[0].data).toString("base64");
          imgDt = "data:image/png;base64," + encode;
          setImg(imgDt);
        } else {
          console.log("데이터베이스 오류");
        }
      })
      .catch(() => {
        console.log("데이터 보내기 실패");
      });
  };
  const getToday = () => {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
  };
  return (
    <div className="babydiary-page">
      <Header />
      <img className="bdselectdate-text-icon" alt="" src={bdselectdate_text} />
      <div className="bdinputdate-div">
        <input className="BDDateSelect" type="date" max={getToday()} />
      </div>
      <button className="bddate-check-btn" onClick={outputdate}>
        <div className="bddate-check-btn1" />
        <img className="bdcheck-text-icon" alt="" src={bdcheck_text} />
      </button>
      <div className="babydiarytextarea">
        <div className="babydiarytextarea-div" />
        <div className="bdtitle-div">
          <div className="bddiary-title-div" />
          <img className="bd-title-icon" alt="" src={bd_title} />
        </div>
        <div className="bdtitle-text-div">
          <div className="bdtitle-text-div1" />
          <span className="bdtitle-text">{hos}</span>
        </div>
        <div className="bddiary-date-div">
          <div className="bdbabydiary-date-div" />
          <img className="bddate-title-icon" alt="" src={bddate_title} />
        </div>
        <div className="bddate-text-div">
          <div className="bddate-text-div1" />
          <span className="bddate-text">{selectdate}</span>
        </div>
        <div className="bddiary-week-div">
          <div className="bddiary-week-div1" />
          <img className="bdweek-title-icon" alt="" src={bdweek_title} />
        </div>
        <div className="bdweek-text-div">
          <div className="bdweek-text-div1" />
          <span className="bdweek-text">{week}</span>
        </div>
        <div className="bd-cm-cover">
          <div className="bd-cm-cover1">
            <div className="bddiary-text-div" />
          </div>
          <div className="babypic-div">
            <img className="babyD_pic" src={img} />
          </div>
          <img className="bd-cm-title-icon" alt="" src={bd_cm_title} />
          <div className="bdcrl-div">
            <div className="bdfl-div1" />
            <img className="bdcrl-title-icon" alt="" src={bpd} />
          </div>
          <div className="bdcrl-text-div">
            <div className="bdfl-text-div1" />
            <span className="bdfl-text">{crl}</span>
          </div>
          <img className="crl-cm-icon" alt="" src={fl_cm} />
          <div className="bdac-div">
            <div className="bdfl-div1" />
            <img className="bdac-title-icon" alt="" src={bdac_title} />
          </div>
          <div className="bdac-text-div">
            <div className="bdfl-text-div1" />
            <span className="bdfl-text">{ac}</span>
          </div>
          <img className="ac-cm-icon" alt="" src={fl_cm} />
          <div className="bdfl-div">
            <div className="bdfl-div1" />
            <img className="bdfl-title-icon" alt="" src={bdfl_title} />
          </div>
          <div className="bdfl-text-div">
            <div className="bdfl-text-div1" />
            <span className="bdfl-text">{fl}</span>
          </div>
          <img className="fl-cm-icon" alt="" src={fl_cm} />
        </div>
        <div className="bd-text-div">
          <div className="bd-text-div1" />
          <span className="bd-text">{detail}</span>
        </div>
      </div>
      <button className="bd-graph-go-btn" onClick={onBDGraphGoBtnClick}>
        <div className="bd-graph-go-btn-div" />
        <img className="bd-graph-go-text-icon" alt="" src={bd_graph_go_text} />
      </button>
      <button className="bdwrite-btn" onClick={onBDwriteBtnClick}>
        <img className="bdwrite-btn-icon" alt="" src={bdwrite_btn} />
        <img className="bdpen-icon" alt="" src={bdpen} />
      </button>
      <Footer />
    </div>
  );
};

export default BabyDiaryPage;
