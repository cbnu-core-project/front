import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { countState } from "../store";

function Home() {
  let [count, setCount] = useRecoilState(countState);

  let navigate = useNavigate();

  const onClicK = () => {
    setCount(++count);
  };

  return (
    <>
      <div>
        <span onClick={() => onClicK()}>count {count}</span>
      </div>
    </>
  );
}

export default Home;
