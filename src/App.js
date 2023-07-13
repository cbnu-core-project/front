import { Routes, Route, NavLink } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Home, Club, Mypage, Notice,PromotionDetail, Promotion, ClubDetail, ClubSearch, ClubManagement, ClubSignUp, ClubBoard,ClubFAQ,ClubIntroduce,ClubSchedule} from "./pages";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";
import { useEffect } from "react";
import { checkAccessTokenAndRefreshToken, setAccessToken } from "./utils/token";
import { tokenState } from "./store";
import { useRecoilState } from "recoil";
import axios from "axios";

// 토큰 만료기간 확인 후, 만료 처리
function App() {
  const [token, setToken] = useRecoilState(tokenState);

  useEffect(() => {
    const refresh_token = checkAccessTokenAndRefreshToken();
    if (refresh_token) {
      axios
        .post("/api/refresh", { refresh_token: refresh_token })
        .then((res) => {
          const new_access_token = res.data;
          setAccessToken(new_access_token);
          setToken(new_access_token);
        });
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
          <Route path="/promotiondetail/:id" element={<PromotionDetail/>}></Route>
          <Route path="/club/search/" element={<ClubSearch />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <SideBar />
    </>
  );
}

export default App;
