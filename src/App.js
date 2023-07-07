import { Routes, Route, NavLink } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Home, Club, Mypage, Notice, Promotion, ClubDetail, ClubSearch, ClubManagement, ClubSignUp, ClubBoard,ClubFAQ,ClubIntroduce,ClubSchedule} from "./pages";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";
import { useEffect } from "react";
import setAuthorization from "./utils/setAuthorizationToken";
import { tokenState } from "./store";
import { useRecoilState } from "recoil";

// access_token 디코딩을 위한 함수
function decodeToken(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  const decodedData = JSON.parse(window.atob(base64));
  return decodedData;
}

// 토큰 만료기간 확인 후, 만료 처리
function App() {
  const [token, setToken] = useRecoilState(tokenState)

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setAuthorization(token);
      setToken(token)

      const decodedToken = decodeToken(token);
      const currentTime = Math.floor(Date.now() / 1000);
      if (decodedToken.exp < currentTime) {
        // 토큰이 만료되었으므로 로그아웃 또는 새로운 토큰 요청 등의 처리를 수행
        console.log("토큰 만료된거임");
        localStorage.removeItem("access_token");
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
            <Route path="clubboard" element={<ClubBoard/>}></Route>
            <Route path="clubfaq" element={<ClubFAQ/>}></Route>
            <Route path="clubintroduce" element={<ClubIntroduce/>}></Route>
            <Route path="clubmanagement" element={<ClubManagement/>}></Route>
            <Route path="clubschedule" element={<ClubSchedule/>}></Route>
            <Route path="clubsignup" element={<ClubSignUp/>}></Route>
          </Route>
          <Route path="/club/search/" element={<ClubSearch />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
       <SideBar />
    </>
  );
}

export default App;
