import { useCallback, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import login_btn_text from "../../../assets/svg/Account/Login/login_btn_text.svg";
import login_join_btn_text from "../../../assets/svg/Account/Login/login_join_btn_text.svg";
import login_joindiv_text from "../../../assets/svg/Account/Login/login_joindiv_text.svg";
import login_logo from "../../../assets/svg/Account/Login/login_logo.svg";
import login_divdiv from "../../../assets/svg/Account/Login/login_divdiv.svg";

import "../../styles/Account/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const onLoginJoinBtnClick = useCallback(() => {
    navigate("/Join");
  }, [navigate]);

  const [ids, setID] = useState("");
  const [pws, setPw] = useState("");
  const url = "http://127.0.0.1:3001/Login"

  const checkuser = async(e) => {
    e.preventDefault();
    await axios
      .post(url, {
        id: ids,
        pw: pws,
      })
      .then((res) => {
        if (res.data.result == "success") {
          try {
            console.log("성공");
            localStorage.setItem(
              "user",
              JSON.stringify({
                seq: res.data.seq,
                id: res.data.id,
                name: res.data.name,
                gender: res.data.gender,
              })
            );
          } catch (error) {
            console.log("값 안들어가졌다");
          }
          console.log(JSON.parse(localStorage.getItem("user")).name);
          navigate("/Main");
        } else {
          console.log("회원정보확인");
          document.getElementsByClassName("check")[0].style.display = "block";
          document.getElementById("login_username").value = "";
          document.getElementById("login_passdword").value = "";
        }
      })
      .catch(() => {
        console.log("데이터 보내기 실패", url);
      });
  };

  return (
    <div className="login-page">
      <img className="login-divdiv-icon" alt="" src={login_divdiv} />
      <div className="login-joindiv">
        <div className="login-joindiv1" />
        <button className="login-join-btn" onClick={onLoginJoinBtnClick}>
          <div className="login-join-btn1" />
          <img
            className="login-join-btn-text-icon"
            alt=""
            src={login_join_btn_text}
          />
        </button>
        <img
          className="login-joindiv-text-icon"
          alt=""
          src={login_joindiv_text}
        />
      </div>
      <form className="login_form" onSubmit={checkuser}>
        <img className="login-logo-icon" alt="" src={login_logo} />
        <div className="login-id-div">
          <input
            id="login_username"
            type="text"
            placeholder="아이디 입력"
            onChange={(e) => {
              setID(e.target.value);
            }}
            required
          />
        </div>
        <div className="login-pw-div">
          <input
            id="login_passdword"
            type="password"
            placeholder="비밀번호 입력"
            onChange={(e) => {
              setPw(e.target.value);
            }}
            required
          />
        </div>
        <div className='check'><h5>아이디 또는 비밀번호를 잘못 입력했습니다.</h5></div>
        <button className="login-btn" type="submit">
          <div className="login-btn-div" />
          <img className="login-btn-text-icon" alt="" src={login_btn_text} />
        </button>
        <div className="naver-logindiv" />
        <div className="kakao-logindiv" />
      </form>
    </div>
  );
};

export default LoginPage;
