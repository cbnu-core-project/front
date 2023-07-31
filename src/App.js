import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import {
  Home,
  Club,
  Mypage,
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
  UserApplicationForm,
} from "./pages";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";
import { useEffect } from "react";
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "./utils/token";
import { tokenState, userInfoState } from "./store";
import { useRecoilState } from "recoil";
import axios from "axios";
import { baseUrl } from "./common/global";
import { useQuery } from "react-query";
import { getCookie } from "./utils/cookie";

// 토큰 만료기간 확인 후, 만료 처리
function App() {
  const [token, setToken] = useRecoilState(tokenState);
  const PARAMS = new URL(document.location).searchParams;
  const CODE = PARAMS.get("code");
  const STATE = PARAMS.get("state");
  const navigate = useNavigate();
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
      .post(`${baseUrl}/oauth/kakao/login`, { code: CODE })
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
      .post(`${baseUrl}/oauth/naver/login`, { code: CODE })
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
    // let access_token = getAccessToken();
    // if (access_token) {
    //   // 헤더 등록을 위해 한 번 더 set
    //   setAccessToken(access_token);
    //   axios
    //     .get("/api/common/protected")
    //     .then((res) => {
    //       setToken(access_token);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
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
          <Route path="/mypage/" element={<Mypage />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/clubdetail/:id" element={<ClubDetail />}>
            <Route path="clubboard" element={<ClubBoard />}></Route>
            <Route path="clubfaq" element={<ClubFAQ />}></Route>
            <Route path="clubintroduce" element={<ClubIntroduce />}></Route>
            <Route path="clubmanagement" element={<ClubManagement />}></Route>
            <Route path="clubschedule" element={<ClubSchedule />}></Route>
            <Route path="clubsignup" element={<ClubSignUp />}></Route>
          </Route>
          <Route path="/club/search/" element={<ClubSearch />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <SideBar />
    </div>
  );
}

export default App;
