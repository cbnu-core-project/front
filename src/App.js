// 라우트 모듈 불러오기
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Page from "./pages/page";
import Page2 from "./pages/page2";

/*라우팅을 위한 태그 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}

export default App;
