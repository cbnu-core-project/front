import axios from "axios";
import { baseUrl } from "../common/global";
import { useState } from "react";
import { setAccessToken, setRefreshToken } from "../utils/token";
import { Location } from "react-router-dom";
import { useRecoilState } from "recoil";
import { tokenState } from "../store";

axios.defaults.baseURL = baseUrl;

export default function Login() {
  const [token, setToken] = useRecoilState(tokenState);

  const KAKAO_REST_API_KEY = "40d478c8d7447b20143b402959fd7ed8";
  const KAKAO_STATE = "kakao";
  let KAKAO_REDIRECT_URI = "http://localhost:3000";
  if (process.env.NODE_ENV == "development") {
    KAKAO_REDIRECT_URI = "http://localhost:3000";
  } else if (process.env.NODE_ENV == "production") {
    KAKAO_REDIRECT_URI = "http://cbnucore.site";
  }

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code&state=${KAKAO_STATE}`;

  const NAVER_CLIENT_ID = "zB5gfqdBq1a0jq6vr_zv";
  const NAVER_STATE = "naver";
  let NAVER_REDIRECT_URI = "http://localhost:3000";
  if (process.env.NODE_ENV == "development") {
    NAVER_REDIRECT_URI = "http://localhost:3000";
  } else if (process.env.NODE_ENV == "production") {
    NAVER_REDIRECT_URI = "http://cbnucore.site";
  }
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${NAVER_STATE}&redirect_uri=${NAVER_REDIRECT_URI}`;

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const handleNaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
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
        <div
          className={"text-black text-center font-[Pv] font-bold mt-[150px]"}
        >
          <button
            className={
              "px-[8px] py-[10px] w-[406px] bg-white rounded-lg flex justify-center"
            }
            onClick={handleKakaoLogin}
          >
            <img src={"/images/카카오.png"} width={30} />
            <div className={"mt-2 ml-3 font-[Pv] text-h6 font-bold"}>
              {" "}
              카카오로 로그인하기{" "}
            </div>
          </button>
          <button
            className={
              "mt-3 px-[8px] py-[10px] w-[406px] bg-white rounded-lg flex justify-center"
            }
            onClick={handleNaverLogin}
          >
            <img src={"/images/네이버.png"} width={30} />
            <div className={"mt-2 ml-3 font-[Pv] text-h6 font-bold"}>
              {" "}
              네이버로 로그인하기{" "}
            </div>
          </button>
          <button
            className={
              "mt-3 px-[8px] py-[10px] w-[406px] bg-white rounded-lg flex justify-center"
            }
            onClick={() => {
              alert("구현중");
            }}
          >
            <img src={"/images/구글.png"} width={30} />
            <div className={"mt-2 ml-3 font-[Pv] text-h6 font-bold"}>
              {" "}
              구글로 로그인하기{" "}
            </div>
          </button>
          <button
            className={
              "mt-3 px-[8px] py-[10px] w-[406px] bg-white rounded-lg flex justify-center"
            }
            onClick={() => {
              alert("구현중");
            }}
          >
            <img src={"/images/페이스북.png"} width={30} />
            <div className={"mt-2 ml-3 font-[Pv] text-h6 font-bold"}>
              {" "}
              페이스북으로 로그인하기{" "}
            </div>
          </button>
        </div>
        <div className={"mt-[120px]"} />
      </div>
    </>
  );
}

// 안 쓰이는 기존 로그인 폼 컴포넌트
// const _deprecated_form = () => {
//   return (
//     <>
//       <form
//         className={"text-center "}
//         onSubmit={(e) => {
//           e.preventDefault();
//
//           const form_data = {
//             username: e.target.username.value,
//             password: e.target.password.value,
//           };
//
//           axios
//             .post("/api/login", form_data, {
//               headers: {
//                 "content-type": "application/x-www-form-urlencoded",
//               },
//             })
//             .then((res) => {
//               const { access_token, refresh_token } = res.data;
//               Swal.fire({
//                 position: "top-end",
//                 icon: "success",
//                 title: "로그인 성공 !",
//                 showConfirmButton: false,
//                 timer: 1000,
//               });
//               setToken(access_token);
//               setAccessToken(access_token);
//               setRefreshToken(refresh_token);
//               // window.location.reload();
//             })
//             .catch((err) => {
//               // console.log(err.response.data.detail);
//               Swal.fire({
//                 title: "로그인 실패!",
//                 text: err.response.data.detail,
//                 icon: "error",
//                 confirmButtonText: "확인",
//               });
//             });
//         }}
//       >
//         <div>
//           <input
//             className={"rounded-3xl p-5 w-[406px] mt-20"}
//             type="text"
//             name="username"
//             placeholder="아이디를 입력하세요"
//           />
//         </div>
//         <div>
//           <input
//             className={"rounded-3xl p-5 mt-3 w-[406px]"}
//             type="password"
//             name="password"
//             placeholder="비밀번호를 입력하세요"
//           />
//         </div>
//         <button
//           type={"submit"}
//           className={
//             "rounded-3xl p-5 mt-8 font-[Pv] text-h6 font-bold text-white bg-main_mid w-[406px]"
//           }
//         >
//           로그인
//         </button>
//       </form>
//
//       <div className={"text-h6 font-[Pv] text-center mt-5"}>
//         <span className={"mr-5"}> 아이디 찾기 </span>
//         <span> │ </span>
//         <span className={"mx-5"}> 비밀번호 찾기 </span>
//         <span> │ </span>
//         <span className={"ml-5"}> 회원가입 </span>
//       </div>
//
//       <div
//         className={
//           "mt-20 text-center text-darkgray text-h6 font-[Pv] font-bold"
//         }
//       >
//         ──────── SNS 계정으로 로그인 ────────
//       </div>
//     </>
//   );
// };
