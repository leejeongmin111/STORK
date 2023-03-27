import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import join_btn_text from "../../../assets/svg/Account/Join/join_btn_text.svg";
import join_divdiv from "../../../assets/svg/Account/Join/join_divdiv.svg";
import join_login_btn_text from "../../../assets/svg/Account/Join/join_login_btn_text.svg";
import join_logindiv_text from "../../../assets/svg/Account/Join/join_logindiv_text.svg";
import join_logo from "../../../assets/svg/Account/Join/join_logo.svg";

import "../../styles/Account/JoinPage.css";

const JoinPage = () => {
  const navigate = useNavigate();

  const onJoinLoginBtnClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const [user_id, setId] = useState("");
  const [user_pw, setPw] = useState("");
  const [user_ckpw, setCkpw] = useState("");
  const [user_name, setName] = useState("");
  const [user_phone, setPhone] = useState("");
  const [user_gender, setGender] = useState("");
  const ck = document.getElementsByClassName("checkpw");

  const join_user = (e) => {
    e.preventDefault();
    // user_pw != e.target.value
    if(user_pw == user_ckpw){
      axios
          .post("http://127.0.0.1:3001/join", {
          id: user_id,
          pw: user_pw,
          name: user_name,
          phone: user_phone,
          gender: user_gender,
        })
        .then((res) => {
          if (res.data.result == "success") {
            console.log("아이디 있음");
            document.getElementsByClassName("checkid")[0].style.display = "block"
          } else if(res.data.result == "success0"){
            console.log("회원가입 성공");
            navigate("/");
          } else {
            console.log("데이터베이스 오류");
          }
        })
        .catch(() => {
          console.log("데이터 보내기 실패");
        });
    } else {
      console.log("비밀번호 일치안함")
    }
  };

  return (
    <div className="join-page">
      <img className="join-divdiv-icon" alt="" src={join_divdiv} />
      <img className="join-logo-icon" alt="" src={join_logo} />
      <form onSubmit={join_user}>
        <div className="join-id-div">
          <input
            id="join_id"
            typ="text"
            placeholder="아이디 입력"
            onChange={(e) => {
              setId(e.target.value);
            }}
            required
          />
        </div>
        <div className='checkid'><h5>이미 사용중인 아이디입니다.</h5></div>
        <div className="join-pw-div">
          <input
            id="join_passdword"
            type="password"
            placeholder="비밀번호 입력"
            onChange={(e) => {
              setPw(e.target.value);
            }}
            required
          />
        </div>
        <div className="join-pwch-div">
          <input
            id="join_passdwordCK"
            type="password"
            placeholder="비밀번호 확인"
            onChange={(e) => {
              if (user_pw != e.target.value && e.target.value) {
                ck[0].style.display = "block"
              } else(
                ck[0].style.display = "none"
              )
              setCkpw(e.target.value)
            }}
            required
          />
        </div>
        <div className='checkpw'><h5>비밀번호가 일치하지 않습니다.</h5></div>
        <div className="join-name-div">
          <input
            id="join_username"
            type="text"
            placeholder="이름 입력"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div className="join-phone-div">
          <input
            id="join_phone"
            type="text"
            maxLength={11}
            placeholder="전화번호 입력"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            required
          />
        </div>
        <div className="join-gender-div">
          <select
            id="join_gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
            required
          >
            <option value="" selected disabled>
              성 별
            </option>
            <option value="F">여</option>
            <option value="M">남</option>
          </select>
        </div>
        <button className="join-btn" type="submit">
          <div className="join-btn-div" />
          <img className="join-btn-text-icon" alt="" src={join_btn_text} />
        </button>
      </form>
      <div className="join-logindiv">
        <div className="join-logindiv1" />
        <img
          className="join-logindiv-text-icon"
          alt=""
          src={join_logindiv_text}
        />
        <button className="join-login-btn" onClick={onJoinLoginBtnClick}>
          <div className="join-login-btn1" />
          <img
            className="join-login-btn-text-icon"
            alt=""
            src={join_login_btn_text}
          />
        </button>
      </div>
    </div>
  );
};

export default JoinPage;
