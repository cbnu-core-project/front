import {Routes, Route, NavLink} from "react-router-dom";
import Navigation from "./components/Navigation";
import { Home, Club, Notice, Promotion } from "./pages";

/*라우팅을 위한 태그 */
function App() {
  return (
      <>
          <Navigation/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/club" element={<Club />} />
              <Route path="/notice" element={<Notice />} />
              <Route path="/promotion" element={<Promotion />} />
          </Routes>
      </>

  );
}

export default App;

// 하하호호 히히
