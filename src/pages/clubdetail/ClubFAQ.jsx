import axios from "axios";
import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { baseUrl } from "../../common/global";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { tokenState, userInfoState } from "../../store";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = baseUrl;

export default function ClubFAQ() {
  const { id } = useParams();
  const [post, setPost] = useState({ faqs: [] }); //useEffect 실행속도가 느려서 데이터가 나중에들어가는데, 오류 방지를 위해 빈리스트 삽입
  const [count, setCount] = useState(-1);
  const [token, setToken] = useRecoilState(tokenState);
  const [authorityOfClub, setAuthorityOfClub] = useState(0);

  useEffect(() => {
    axios.get("/api/club_faq/" + id).then((res) => {
      if (res.data.length) {
        setPost(res.data[0]);
      }
    });
  }, []);

  useEffect(() => {
    axios.get("/api/user/authority_of_club/" + id).then((res) => {
      setAuthorityOfClub(res.data);
    });
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div
        className={
          "text-[32px] font-bold text-sub flex ml-[628px] justify-between"
        }
      >
        자주 묻는 질문
        {authorityOfClub <= 4 && token ? (
          <button
            className={
              "w-[155px] h-[40px] mt-2 font-[Pv] text-[20px] font-bold bg-sub text-white rounded-md mr-[64px]"
            }
            onClick={() => {
              navigate("./clubfaqsetting");
            }}
          >
            FAQ 설정하기
          </button>
        ) : (
          ""
        )}
      </div>
      <div className={"mt-[36px]"} />

      {/* 데이터 자체가 없을 경우 빈 화면 띄워주기 */}
      {post.faqs.length === 0 ? 
        <div className={'mt-[150px]'}>
          <img src = {"/images/금지표시.jpg"}
              alt="img"
              className={'rounded-lg h-[150px] ml-[628px]'}/>
          <div className={'ml-[530px] mt-12 w-[360px] px-[24px] py-[32px] font-[Pv] rounded-md font-bold text-center text-h5 text-white bg-sub '}> 아직 FAQ가 생성되지 않았습니다! <br/> FAQ설정을 통해, 동아리 FAQ를 만들어주세요.</div>
        </div> : (
        <div>
          <ul
            className={
              "overflow-hidden rounded-[20px] text-h4 w-[1306px] shadow-lg overflow-y-scroll mx-auto"
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
                      <p className={"ml-5"}>{faq.question}</p>
                    </div>
                    <button
                      class="material-symbols-outlined"
                      onClick={() => {
                        if (index === count) {
                          setCount(-1);
                        } else {
                          setCount(index);
                        }
                      }}
                    >
                      {index === count ? "expand_less" : "expand_more"}{" "}
                    </button>
                  </li>
                  {index === count ? (
                    <div className={"bg-background px-[24px] py-[32px]"}>
                      <span className={"text-main text-h4 "}>A</span>
                      <span className={"font-[Pv] ml-5"}>{faq.answer}</span>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </ul>
          {token ? (
            <a
              href={post.open_url} //<아무것도 없으면로컬호스트쪽으로
              target="blank"
              className={
                "flex ml-[628px] justify-center mt-8 px-[12px] py-[8px] w-[170px] text-h3 text-white font-[Pv] bg-sub rounded-md "
              }
            >
              질문하기
            </a>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}
