// 라우트 모듈 불러오기
import { Routes, Route } from "react-router-dom";
import Page from "./pages/page";

/*라우팅을 위한 태그 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>hello</h1>} />
      <Route path="/page" element={<Page />} />
    </Routes>
  );
}

export default App;
