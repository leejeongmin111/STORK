import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import mdwritecancle_text from "../../../assets/svg/MomDiary/MomDiaryWrite/mdwritecancle_text.svg";
import mdwritecomplete_text from "../../../assets/svg/MomDiary/MomDiaryWrite/mdwritecomplete_text.svg";
import momdiarywrite_date_title from "../../../assets/svg/MomDiary/MomDiaryWrite/momdiarywrite_date_title.svg";
import momdiarywrite_title_title from "../../../assets/svg/MomDiary/MomDiaryWrite/momdiarywrite_title_title.svg";
import momdiarywrite_title from "../../../assets/svg/MomDiary/MomDiaryWrite/momdiarywrite_title.svg";
import momdiarywrite_weight_title from "../../../assets/svg/MomDiary/MomDiaryWrite/momdiarywrite_weight_title.svg";

import "../../styles/MomDiary/MomDiaryWritePage.css";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

const MomDiaryWritePage = () => {
  const [title, setTitle] = useState("");
  const [kg, setKg] = useState("");
  const [detail, setDetail] = useState("");

  const navigate = useNavigate();

  const onMDwritecompleteDivClick = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/nlp", {detail:detail})
      console.log(res)
      axios
        .post("http://127.0.0.1:3001/diarywrite", {
          seq:JSON.parse(localStorage.getItem("user")).seq,
          title: title,
          date: getToday(),
          kg: kg,
          detail: detail,
          score : 100-Math.round(parseFloat(res.data)*100),
        })
        .then(
          navigate("/MomDiary")
        )
        .catch(() => {
          console.log("데이터 보내기 실패");
        });
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const onMDwriteCancleDivClick = useCallback(() => {
    navigate("/MomDiary");
  }, [navigate]);

  const getToday = ()=>{
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
  }

  return (
    <form onSubmit={onMDwritecompleteDivClick}>
      <div className="momdiarywrite-page">
        <Header />
        <img
          className="momdiarywrite-title-icon"
          alt=""
          src={momdiarywrite_title}
        />
        <div className="momdiarywrite-div">
          <div className="momdiarywrite-div1" />
          <div className="momdiarywrite-title-div">
            <div className="momdiarywrite-weight-div1" />
            <img
              className="momdiarywrite-title-title-icon"
              alt=""
              src={momdiarywrite_title_title}
            />
          </div>
          <div className="momdiarywrite-title-text-div">
            <div className="momdiarywrite-title-text-div1">
              <textarea
                className="MDtitle_textarea"
                placeholder="제목을 입력해주세요"
                onChange={(e)=>{setTitle(e.target.value)}}
                required
              />
            </div>
          </div>
          <div className="momdiarywrite-date-div">
            <div className="momdiarywrite-date-div1" />
            <img
              className="momdiarywrite-date-title-icon"
              alt=""
              src={momdiarywrite_date_title}
            />
          </div>
          <div className="momdiarywrite-date-text-div">
            <div className="momdiarywrite-date-text-div1" />
            <span className="momdiarywrite-date-text">{getToday()}</span>
          </div>
          <div className="momdiarywrite-weight-div">
            <div className="momdiarywrite-weight-div1" />
            <img
              className="momdiarywrite-weight-title-icon"
              alt=""
              src={momdiarywrite_weight_title}
            />
          </div>
          <div className="momdiarywrite-weight-text-div">
            <div className="momdiarywrite-weight-text-div1">
              <input type="number" className="MDweight_textarea" placeholder="몸무게" onChange={(e)=>{setKg(e.target.value)}} required/>
            </div>
          </div>
          <div className="momdiarywrite-text-div">
            <div className="momdiarywrite-text-div1">
              <textarea
                className="MDtext_textarea"
                placeholder="내용을 입력해주세요"
                onChange={(e)=>{setDetail(e.target.value)}}
                required
              />
            </div>
          </div>
        </div>
        <button className="mdwritecancle-div" onClick={onMDwriteCancleDivClick}>
          <div className="mdwritecancle-div1" />
          <img
            className="mdwritecancle-text-icon"
            alt=""
            src={mdwritecancle_text}
          />
        </button>
        <button
          className="mdwritecomplete-div"
          type="submit"
        >
          <div className="mdwritecomplete-div1" />
          <img
            className="mdwritecomplete-text-icon"
            alt=""
            src={mdwritecomplete_text}
          />
        </button>
        <Footer />
      </div>
    </form>
  );
};

export default MomDiaryWritePage;
