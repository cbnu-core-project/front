import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

/*라우팅을 위한 태그 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
// 안녕
