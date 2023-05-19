import { Routes, Route, NavLink } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Home, Club, Notice, Promotion, ClubDetail, ClubSearch } from "./pages";
import SideBar from "./components/SideBar";

/*라우팅을 위한 태그 */
function App() {
  return (
    <>
      <Navigation />
      <div className={"mr-side"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/club" element={<Club />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/clubdetail/:id" element={<ClubDetail />} />
          <Route path="/club/search/" element={<ClubSearch />} />
        </Routes>
      </div>
      <SideBar />
    </>
  );
}

export default App;
