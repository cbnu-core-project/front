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
} from "./pages";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";
import { useEffect } from "react";
import {
  checkAccessTokenAndRefreshToken,
  getAccessToken,
  setAccessToken,
  setRefreshToken,
} from "./utils/token";
import { tokenState } from "./store";
import { useRecoilState } from "recoil";
import axios from "axios";
import { baseUrl } from "./common/global";

// 토큰 만료기간 확인 후, 만료 처리
function App() {
  const [token, setToken] = useRecoilState(tokenState);
  const PARAMS = new URL(document.location).searchParams;
  const CODE = PARAMS.get("code");
  const STATE = PARAMS.get("state");
  const navigate = useNavigate();

  useEffect(() => {
    // const refresh_token = checkAccessTokenAndRefreshToken();
    // if (refresh_token) {
    //   axios
    //     .post("/api/refresh", { refresh_token: refresh_token })
    //     .then((res) => {
    //       const new_access_token = res.data;
    //       setAccessToken(new_access_token);
    //       setToken(new_access_token);
    //     });
    // }
    let access_token = getAccessToken();
    console.log(access_token);
    if (access_token) {
      // 헤더 등록을 위해 한 번 더 set
      setAccessToken(access_token);
      axios
        .get("/oauth/kakao/protected")
        .then((res) => {
          setToken(access_token);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (CODE) {
      if (STATE == "kakao") {
        axios
          .post(`${baseUrl}/oauth/kakao/login`, { code: CODE })
          .then((res) => {
            const { access_token, refresh_token } = res.data;
            setAccessToken(access_token);
            setRefreshToken(refresh_token);
            navigate("/");
            setToken(access_token);
          })
          .catch((err) => {
            console.log("에러남");
            console.log(err);
          });
      } else if (STATE == "naver") {
        axios
          .post(`${baseUrl}/oauth/kakao/login`, { code: CODE })
          .then((res) => {
            const { access_token, refresh_token } = res.data;
            setAccessToken(access_token);
            setRefreshToken(refresh_token);
            navigate("/");
            setToken(access_token);
          })
          .catch((err) => {
            console.log("에러남");
            console.log(err);
          });
      }
    }
  }, []);

  return (
    <>
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
          <Route path="/kakaologin" element={<div>카카오리다이렉트</div>} />
        </Routes>
      </div>
      <SideBar />
    </>
  );
}

export default App;
