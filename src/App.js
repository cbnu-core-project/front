import { Routes, Route, NavLink } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Home, Club, ClubDetail, ClubSearch } from "./pages";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";
import { useEffect } from "react";

// access_token 디코딩을 위한 함수
function decodeToken(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  const decodedData = JSON.parse(window.atob(base64));
  return decodedData;
}

function App() {
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
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
          <Route path="/notice" element={<div />} />
          <Route path="/promotion" element={<div />} />
          <Route path="/clubdetail/:id" element={< ClubDetail/>}></Route>
          <Route path="/club/search/" element={<ClubSearch />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <SideBar />
    </>
  );
}

export default App;
