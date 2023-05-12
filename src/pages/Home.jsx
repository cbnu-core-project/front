import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { countState } from "../store";

export default function Home() {
  let [count, setCount] = useRecoilState(countState);

  let navigate = useNavigate();

  const onClicK = () => {
    setCount(++count);
  };

  return (
    <>
      <div>
        <button className={'bg-blue-500 text-white p-2 rounded-xl m-5'} onClick={onClicK}>count {count}</button>
      </div>
    </>
  );
}
