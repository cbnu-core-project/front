import axios from "axios";
import { baseUrl } from "../common/global";
import { useState } from "react";
import { setAccessToken, setRefreshToken } from "../utils/token";
import { Location } from "react-router-dom";
import { useRecoilState } from "recoil";
import { tokenState } from "../store";
import Swal from "sweetalert2";

axios.defaults.baseURL = baseUrl;

export default function Login() {
  const [message, setMessage] = useState("");
  const [token, setToken] = useRecoilState(tokenState);

  const REST_API_KEY = "40d478c8d7447b20143b402959fd7ed8";
  const REDIRECT_URI = "http://localhost:3000";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <>
      <div className={"text-h0 font-[Pv] font-extrabold text-center mt-64"}>
        SIGN UP
      </div>
      <div className={"text-h4 font-[Pv] text-center mt-2"}>
        {" "}
        서비스 이용을 위해 로그인 해주세요.
      </div>
      <div>
        <form
          className={"text-center "}
          onSubmit={(e) => {
            e.preventDefault();

            const form_data = {
              username: e.target.username.value,
              password: e.target.password.value,
            };

            axios
              .post("/api/login", form_data, {
                headers: {
                  "content-type": "application/x-www-form-urlencoded",
                },
              })
              .then((res) => {
                const { access_token, refresh_token } = res.data;
                setMessage("로그인 성공!");
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "로그인 성공 !",
                  showConfirmButton: false,
                  timer: 1000,
                });
                setToken(access_token);
                setAccessToken(access_token);
                setRefreshToken(refresh_token);
                // window.location.reload();
              })
              .catch((err) => {
                // console.log(err.response.data.detail);
                setMessage(err.response.data.detail);
                Swal.fire({
                  title: "로그인 실패!",
                  text: err.response.data.detail,
                  icon: "error",
                  confirmButtonText: "확인",
                });
              });
          }}
        >
          <div>
            <input
              className={"rounded-3xl p-5 w-[406px] mt-20"}
              type="text"
              name="username"
              placeholder="아이디를 입력하세요"
            />
          </div>
          <div>
            <input
              className={"rounded-3xl p-5 mt-3 w-[406px]"}
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <div>{message}</div>
          <button
            type={"submit"}
            className={
              "rounded-3xl p-5 mt-8 font-[Pv] text-h6 font-bold text-white bg-main_mid w-[406px]"
            }
          >
            로그인
          </button>
        </form>

        <div className={"text-h6 font-[Pv] text-center mt-5"}>
          <span className={"mr-5"}> 아이디 찾기 </span>
          <span> │ </span>
          <span className={"mx-5"}> 비밀번호 찾기 </span>
          <span> │ </span>
          <span className={"ml-5"}> 회원가입 </span>
        </div>

        <div>
          <button
            onClick={() => {
              axios
                .get("/protected")
                .then((res) => {
                  setMessage("로그인 되어있네" + res.data);
                })
                .catch((err) => {
                  setMessage(err.response.data.detail);
                  // console.log(err.response.data.detail);
                });
            }}
          >
            loginTest
          </button>
        </div>

        <div
          className={
            "mt-20 text-center text-darkgray text-h6 font-[Pv] font-bold"
          }
        >
          ──────── SNS 계정으로 로그인 ────────
        </div>

        <div className={"text-black text-center font-[Pv] font-bold"}>
          <button className={"bg-red_error"} onClick={handleLogin}>
            카카오로 바로 시작
          </button>
        </div>
      </div>
    </>
  );
}
