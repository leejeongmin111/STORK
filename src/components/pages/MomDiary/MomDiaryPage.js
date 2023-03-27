import { useCallback, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import depressed_go_text from "../../../assets/svg/MomDiary/MomDiary/depressed_go_text.svg";
import md_date_title from "../../../assets/svg/MomDiary/MomDiary/md_date_title.svg";
import md_title from "../../../assets/svg/MomDiary/MomDiary/md_title.svg";
import mdcheck_text from "../../../assets/svg/MomDiary/MomDiary/mdcheck_text.svg";
import mdselectdt_title from "../../../assets/svg/MomDiary/MomDiary/mdselectdt_title.svg";
import mdweight_title from "../../../assets/svg/MomDiary/MomDiary/mdweight_title.svg";
import write_btn_div from "../../../assets/svg/MomDiary/MomDiary/write_btn_div.svg";

import pen from "../../../assets/images/Diary/pen.png";

import "../../styles/MomDiary/MomDiaryPage.css";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

const MomDiaryPage = () => {
  const [title, setTitle] = useState("");
  const [selectdate, setSelectdate] = useState();
  const [kg, setKg] = useState("");
  const [detail, setDetail] = useState("");

  const navigate = useNavigate();

  useEffect(()=>{
    axios
      .post("http://127.0.0.1:3001/initialdate", {
        seq:JSON.parse(localStorage.getItem("user")).seq,
      })
      .then((res)=>{
        if (res.data.result == "success") {
          setTitle(res.data.ml_title);
          setSelectdate(res.data.ml_date);
          setKg(res.data.ml_weight);
          setDetail(res.data.ml_content);
        } else {
          console.log("데이터 없거나 오류?");
        }
      })
      .catch(() => {
        console.log("데이터 보내기 실패");
      });
  },[])

  const onWriteBtnClick = () => {
    axios
      .post("http://127.0.0.1:3001/checkmomlog", {
        today:getToday(),
      })
      .then((res)=>{
        navigate("/MomDiaryWrite"); 
        // if (res.data.result == "success") {
        //   console.log("작성된 일기가 있습니다.")
        // } else if(res.data.result == "success0"){
          
        // } else {
        //   console.log("오류?");
        // }
      })
      .catch(() => {
        console.log("데이터 보내기 실패");
      });
    
  };

  const onDepressedGoBtnClick = () => {
    navigate("/MomDiaryChart");
  };

  const outputdate = (e)=>{
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3001/outputdate", {
        seq:JSON.parse(localStorage.getItem("user")).seq,
        selectdate: document.querySelector('.DateSelect').value,
      })
      .then((res)=>{
        if (res.data.result == "success") {
          setTitle(res.data.ml_title);
          setSelectdate(document.querySelector('.DateSelect').value);
          setKg(res.data.ml_weight);
          setDetail(res.data.ml_content);
        } else if(res.data.result == "success0"){
          console.log("데이터 없음");
          setTitle(res.data.ml_title);
          setSelectdate(document.querySelector('.DateSelect').value);
          setKg(res.data.ml_weight);
          setDetail(res.data.ml_content);
        } else {
          console.log("데이터베이스 오류");
        }
      })
      .catch(() => {
        console.log("데이터 보내기 실패");
      });
  }

  const getToday = ()=>{
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
  }

  return (
    <div className="momdiary-page">
      <Header />
      <img className="mdselectdt-title-icon" alt="" src={mdselectdt_title} />
      <div className="inputdate-div">
        <input className="DateSelect" type="date" max={getToday()}/>
      </div>
      <button className="mddate-check-btn" onClick={outputdate}>
        <div className="mddate-check-btn-div" />
        <img className="mdcheck-text-icon" alt="" src={mdcheck_text} />
      </button>
      <div className="momdiarytextarea">
        <div className="momdiarytextarea-div" />
        <div className="md-title-div">
          <div className="md-weight-div1" />
          <img className="md-title-icon" alt="" src={md_title} />
        </div>
        <div className="mdtitle-text-div">
          <div className="mdtitle-text-div1" />
          <span className="mdtitle-text">{title}</span>
        </div>
        <div className="md-date-div">
          <div className="md-date-div1" />
          <img className="md-date-title-icon" alt="" src={md_date_title} />
        </div>
        <div className="mddate-text-div">
          <div className="mddate-text-div1" />
          <span className="mddate-text">{selectdate}</span>
        </div>
        <div className="md-weight-div">
          <div className="md-weight-div1" />
          <img className="mdweight-title-icon" alt="" src={mdweight_title} />
        </div>
        <div className="mdweight-text-div">
          <div className="mdweight-text-div1" />
          <span className="mdweight-text">{kg}</span>
        </div>
        <div className="md-text-div">
          <div className="md-text-div1" />
          <span className="md-text">
            {detail}
          </span>
        </div>
      </div>
      <button className="depressed-go-btn" onClick={onDepressedGoBtnClick}>
        <div className="depressed-go-btn-div" />
        <img
          className="depressed-go-text-icon"
          alt=""
          src={depressed_go_text}
        />
      </button>
      <button className="write-btn" onClick={onWriteBtnClick}>
        <img className="write-btn-div-icon" alt="" src={write_btn_div} />
        <img className="pen-icon" alt="" src={pen} />
      </button>
      <Footer />
    </div>
  );
};

export default MomDiaryPage;
