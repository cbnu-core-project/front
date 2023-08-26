import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import {
  Home,
  Club,
  Notice,
  Promotion,
  ClubDetail,
  ClubSearch,
  ClubManagement,
  ClubSignUp,
  ClubBoard,
  ClubFAQ,
  ClubIntroduce,
  ClubSchedule,
  ClubFAQSetting,
  UserApplicationForm,
} from "./pages";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import MyInfo from "./pages/MyInfo";
import { useEffect } from "react";
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "./utils/token";
import { tokenState, userInfoState, sidebar_ui } from "./store";
import { useRecoilState } from "recoil";
import axios from "axios";
import { baseUrl } from "./common/global";
import { useQuery } from "react-query";
import { getCookie } from "./utils/cookie";

// 토큰 만료기간 확인 후, 만료 처리
function App() {
  const [token, setToken] = useRecoilState(tokenState);
  const [sidebarUI, setSiderbarUI] = useRecoilState(sidebar_ui); //사이드바 UI변경 변수
  // 사이드바 대체 함수 임폴트하기

  const PARAMS = new URL(document.location).searchParams;
  const CODE = PARAMS.get("code");
  const STATE = PARAMS.get("state");
  const navigate = useNavigate();

  // 유저정보를 불러와 state에 리코일 저장하기.
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  function postAccessToken() {
    if (getRefreshToken()) {
      return axios
        .post(`${baseUrl}/api/refresh`, {
          refresh_token: getRefreshToken(),
        })
        .then((res) => {
          console.log("Access token 재발급");
          // 카카오 토큰 구조상의 문제로, 보류
          /*
        axios
          .post(`${baseUrl}/api/access_token/logout`, {
            access_token: getAccessToken(),
          })
          .then(); // 그 전 access_token 로그아웃 처리
         */
          setAccessToken(res.data.access_token);
          setToken(res.data.access_token);
          axios.get("/api/user/info").then((res2) => {
            setUserInfo(res2.data);
          });
        })
        .catch((err) => {
          console.log(err);
          setRefreshToken();
          setUserInfo({});
          setToken("");
        });
    }
  }

  // 40분마다 refresh
  useQuery(["refresh_token"], postAccessToken, {
    refetchInterval: 40 * 60 * 1000, // 40분 마다 refresh하여 access_token 재발급
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: false, // 윈도우 포커스 변경에 의한 refetch 비활성화
    cacheTime: 0, // 캐시 시간을 0으로 설정하여 캐시 사용하지 않음
    onError: () => {
      alert("다시 로그인이 필요합니다.");
      setToken("");
      setUserInfo({});
    },
  });

  function kakaoLogin() {
    return axios
      .post(
        `${baseUrl}/oauth/kakao/login${
          process.env.NODE_ENV == "development" ? "/development" : ""
        }`,
        { code: CODE }
      )
      .then((res) => {
        const { access_token, refresh_token } = res.data;
        setAccessToken(access_token);
        setRefreshToken(refresh_token);
        navigate("/");
        setToken(access_token);
        axios.get("/api/user/info").then((res2) => {
          setUserInfo(res2.data);
        });
      })
      .catch((err) => {
        console.log("에러남");
        console.log(err);
      });
  }

  function naverLogin() {
    return axios
      .post(
        `${baseUrl}/oauth/naver/login${
          process.env.NODE_ENV == "development" ? "/development" : ""
        }`,
        { code: CODE }
      )
      .then((res) => {
        const { access_token, refresh_token } = res.data;
        setAccessToken(access_token);
        setRefreshToken(refresh_token);
        navigate("/");
        setToken(access_token);
        axios.get("/api/user/info").then((res2) => {
          setUserInfo(res2.data);
        });
      })
      .catch((err) => {
        console.log("에러남");
        console.log(err);
      });
  }

  useEffect(() => {
    if (CODE) {
      if (STATE == "kakao") {
        kakaoLogin();
      } else if (STATE == "naver") {
        naverLogin();
      }
    }
  }, []);

  return (
    <div className={"font-[Pv]"}>
      <Navigation />
      <div className={"mr-side mt-[80px]"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/club" element={<Club />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/clubdetail/:id" element={<ClubDetail />}>
            <Route path="clubboard" element={<ClubBoard />}></Route>
            <Route path="clubfaq" element={<ClubFAQ />}></Route>
            <Route path="clubintroduce" element={<ClubIntroduce />}></Route>
            <Route path="clubmanagement" element={<ClubManagement />}></Route>
            <Route path="clubschedule" element={<ClubSchedule />}></Route>
            <Route path="clubsignup" element={<ClubSignUp />}></Route>
            <Route
              path="clubfaq/clubfaqsetting"
              element={<ClubFAQSetting />}
            ></Route>
          </Route>
          <Route path="/club/search/" element={<ClubSearch />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      <Sidebarif />
    </div>
  );
}

function Sidebarif() {
  const [sidebarUI, setSiderbarUI] = useRecoilState(sidebar_ui); //사이드바 UI변경 변수

  if (sidebarUI == "standard") return <SideBar></SideBar>;
  if (sidebarUI == "mypage") return <Mypage></Mypage>;
  if (sidebarUI == "myinfo") return <MyInfo></MyInfo>;
}

export default App;
