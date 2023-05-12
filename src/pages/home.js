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
      <button
        className="bg-blue-500 w-24 h-8 rounded-xl text-lg font-bold text-slate-200 transition duration-500 hover:bg-red-500 shadow-lg hover:shadow-xl hover:shadow-red-500 hover:scale-110"
        onClick={() => {
          navigate("/page");
        }}
      >
        이동
      </button>
    </>
  );
}

export default Home;
