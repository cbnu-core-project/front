import { useEffect } from "react";
import { useRecoilState } from "recoil";
import Login from "../pages/Login";
import { sidebar_ui, tokenState, userInfoState } from "../store";
import {
  getAccessToken,
  setAccessToken,
  setRefreshToken,
} from "../utils/token";
import axios from "axios";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>;
export default function Mypage() {
  let [sidebarUI, setSiderbarUI] = useRecoilState(sidebar_ui); //사이드바 UI변경 변수
  let [token, setToken] = useRecoilState(tokenState); //토큰
  let [userInfo] = useRecoilState(userInfoState); //유저 정보가 담긴 변수만 가져옴

  if (token) {
    //로그인 됐을 때만 보임
    return (
      <>
        <div className="bg-background pl-[40px] pr-[40px] w-side fixed z-50 h-screen overflow-y-scroll top-0 right-0 pt-[25px] pb-[25px] ">
          <div className="flex justify-between">
            <span
              class="material-symbols-outlined cursor-pointer mt-auto mb-auto text-[30px] text-midgray"
              onClick={() => {
                setSiderbarUI("standard");
              }}
            >
              chevron_left
            </span>
            <div className="text-main_default font-[700] text-center text-[20px] ">
              프로필 설정
            </div>
            <span
              class="cursor-pointer ml-outo material-symbols-outlined mt-auto mb-auto text-[#1C1B1F] text-[30px]"
              onClick={() => {
                alert("서비스 준비중입니다");
              }}
            >
              notifications
            </span>
          </div>
          <span class="flex justify-center material-symbols-outlined text-gray text-[100px] mt-[50px]">
            account_circle
          </span>
          <div className="flex justify-center mt-[7px] font-[700]">
            {userInfo.nickname}
          </div>
          <div className="flex flex-col justify-between h-[790px]">
            <div className="grid place-content-center mt-[65px] gap-[25px]">
              <div
                className="flex justify-between w-[360px] h-[48px] rounded-xl bg-white px-[5px] cursor-pointer"
                onClick={() => {
                  setSiderbarUI("myinfo");
                }}
              >
                <div className="flex gap-[15px]">
                  <span class="material-symbols-outlined text-gray  mt-auto mb-auto ml-[10px]">
                    badge
                  </span>
                  <div className="text-center text-black mt-auto mb-auto">
                    내정보 변경
                  </div>
                </div>
                <span class="material-symbols-outlined cursor-pointer mt-auto mb-auto text-[35px] text-midgray">
                  chevron_right
                </span>
              </div>

              <div className="flex justify-between w-[360px] h-[48px] rounded-xl bg-white px-[5px]">
                <div className="flex gap-[15px]">
                  <span class="material-symbols-outlined text-gray  mt-auto mb-auto ml-[10px]">
                    help
                  </span>
                  <div className="text-center text-black mt-auto mb-auto">
                    고객 센터
                  </div>
                </div>
                <span class="material-symbols-outlined cursor-pointer mt-auto mb-auto text-[35px] text-midgray">
                  chevron_right
                </span>
              </div>

              <div className="flex justify-between w-[360px] h-[48px] rounded-xl bg-white px-[5px]">
                <div className="flex gap-[15px]">
                  <span class="material-symbols-outlined text-gray  mt-auto mb-auto ml-[10px]">
                    grading
                  </span>
                  <div className="text-center text-black mt-auto mb-auto">
                    개인정보 처리방침
                  </div>
                </div>
                <span class="material-symbols-outlined cursor-pointer mt-auto mb-auto text-[35px] text-midgray">
                  chevron_right
                </span>
              </div>

              <div className="flex justify-between w-[360px] h-[48px] rounded-xl bg-white px-[5px]">
                <div className="flex gap-[15px]">
                  <span class="material-symbols-outlined text-gray  mt-auto mb-auto ml-[10px]">
                    grading
                  </span>
                  <div className="text-center text-black mt-auto mb-auto">
                    서비스 이용 약관 및 정책 표시
                  </div>
                </div>
                <span class="material-symbols-outlined cursor-pointer mt-auto mb-auto text-[35px] text-midgray">
                  chevron_right
                </span>
              </div>
            </div>

            <div className="flex gap-[20px] justify-center text-midgray cursor-pointer">
              <div
                onClick={() => {
                  axios
                    .post("/api/header/access_token/logout", {
                      access_token: getAccessToken(),
                    })
                    .then((res) => {
                      // 로그아웃
                      setAccessToken();
                      setRefreshToken();
                      setToken(""); //빈 토큰 설정==로그아웃
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                로그아웃
              </div>
              <div className="w-[1px] h-[15px] bg-midgray mt-[5px]"></div>
              <div>회원 탈퇴</div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    //로그아웃 시에 보임
    return (
      <div className="bg-background pl-[40px] pr-[40px] w-side fixed h-screen overflow-y-scroll top-0 right-0">
        <Login></Login>
      </div>
    );
  }
}
