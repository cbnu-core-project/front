import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../common/global";
import { useState } from "react";


axios.defaults.baseURL = baseUrl;


export default function ClubFAQ() {
  const { id } = useParams();
  const [post, setPost] = useState({faqs:[]}); //useEffect 실행속도가 느려서 데이터가 나중에들어가는데, 오류 방지를 위해 빈리스트 삽입
  const [count, setCount] = useState(-1);
  const [token, setToken] = useRecoilState(tokenState);

  useEffect(() => {
    axios.get('/api/club_faq/' + id).then((res) => {
      setPost(res.data[0]);
    });
  }, [])

  return (
    <>
      <div className={"text-[38px] font-bold text-sub ml-[628px]"}>자주 묻는 질문</div>
      <div className={"mt-[36px]"} />
      <ul
        className={
          "overflow-hidden rounded-[20px] text-h4 w-[1306px] h-[704px] shadow-lg overflow-y-scroll mx-auto"
        }
      >
        {post.faqs.map((faq, index) => {
          return (
            <>
              <li
                className={
                  index === 10
                    ? "px-[24px] py-[32px] flex justify-between hover:bg-gray3 rounded-[20px]"
                    : "px-[24px] py-[32px] flex justify-between border-b-[0.5px] border-gray2 hover:bg-gray3 "
                }
              >
                <div className={"flex"}>
                  <p className={"text-main text-h4 "}>Q</p>
                  <p className={"ml-5"}>
                    {faq.question}
                  </p>
                </div>
                <button
                  class="material-symbols-outlined"

                  onClick={() => {
                    setCount(index);
                  }}>
                  expand_more </button>
              </li>
              {index === count
                ? <div className={'bg-background px-[24px] py-[32px]'}>
                  <span className={"text-main text-h4 "}>A</span>
                  <span className={'font-[Pv] ml-5'}>{faq.answer}</span>
                </div> 
                : ''}
            </>);
        })}
      </ul>
      <div className={"h-[117px]"} />
    </>
  );
}
