import { Routes, Route, NavLink } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Home, Club, Notice, Promotion, ClubDetail } from "./pages";
import SideBar from "./components/SideBar";

/*라우팅을 위한 태그 */
function App() {
  return (
    <>
      <Navigation />
      <div className={"flex"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/club" element={<Club />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/clubdetail/:id" element={<ClubDetail />} />
        </Routes>
        <SideBar />
      </div>
    </>
  );
}

export default App;

// 하하호호 히히 이상호의 추가 행동
