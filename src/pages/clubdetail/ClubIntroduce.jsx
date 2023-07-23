import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { readOneClub } from "../../api/club";
import { readAllPromotions, readOnePromotion } from "../../api/promotion";
import { baseUrl } from "../../common/global";
import { promotionsState } from "../../store";
import { useRecoilState } from "recoil";
import axios from "axios";

axios.defaults.baseURL = baseUrl;

export default function ClubIntroduce() {
  const { id } = useParams();
  const [posts, setPosts] = useState({});
  const [promotions, setPromotions] = useRecoilState(promotionsState);
  const [count, setCount] = useState(0);
  const [activity, setActivity] = useState([]); //동아리 주요활동 내역
  let prev_length; //주요활동내역의 년도 시각화에 필요한 변수1
  let list = []; //2
  let after_length; //3

  const navigate = useNavigate();

  function getClubPost() {
    readOneClub(id).then((res) => setPosts(res.data[0]));
  }

  function getPromotionPost() {
    readAllPromotions(0).then((res) => setPromotions(res.data));
  }

  function getClubActivityHistory() {
    //주요활동내역 가져옴
    axios
      .get(`api/club_activity_history/${id}`)
      .then((res) => setActivity(res.data));
  }

  activity.sort((a, b) => {
    //주요활동내역 연도별 정렬
    if (a.year > b.year) return -1;
    if (a.year < b.year) return 1;
    return 0;
  });

  activity.sort((a, b) => {
    //주요활동내역 달별 정렬
    if (a.year === b.year) if (a.month < b.month) return -1;
    if (a.month > b.month) return 1;
    return 0;
  });

  activity.sort((a, b) => {
    //주요활동내역 내용 ㄱㄴㄷ순 정렬
    if (a.month === b.month && a.year === b.year)
      if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  useEffect(() => {
    getClubPost();
    getPromotionPost();
    getClubActivityHistory();
  }, []);

  return (
    <>
      <div className={"p-2 ml-[56px]"}>
        <div className={"flex gap-8"}>
          {/*동아리 활동*/}
          <div
            className={
              "w-[450px] h-[320px] 2xl:w-[637px] 2xl:h-[432px] bg-gray2 drop-shadow-md rounded-xl overflow-hidden"
            }
          >
            <img
              src={`${baseUrl}/${posts.image_url}`}
              className={"w-[637px] h-[432px]"}
            ></img>
          </div>

          <div
            className={
              "w-[450px] h-[320px] 2xl:w-[637px] 2xl:h-[432px] shadow-lg rounded-xl"
            }
          >
            <div className={"flex p-2 mt-[20px] ml-[24px] gap-3"}>
              <p className={"text-h2 font-bold "}>{posts.title}</p>
              <div className={"gap-2 flex mt-[9px]"}>
                <div
                  className={
                    "h-[20px] 2xl:h-[20px] bg-black text-h7 text-white rounded-md px-[8px] py-[]"
                  }
                >
                  {posts.tag1}
                </div>
                <div
                  className={
                    "h-[20px] 2xl:h-[20px] bg-black text-h7 text-white rounded-md"
                  }
                >
                  {posts.tag2}
                </div>
                <div
                  className={
                    "h-[20px] 2xl:h-[20px] bg-black text-h7 text-white rounded-md"
                  }
                >
                  {posts.tag3}
                </div>
              </div>
            </div>
            <p className={"text-h3 ml-8"}>{posts.content}</p>
            <p className={"text-h6 px-8 py-4 text-darkgray"}>{posts.content}</p>
            <div className={"grid place-content-center"}>
              <div className={"border-t mt-2 border-gray2 w-[573px] h-[120px]"}>
                <div className={"mt-[24px]"} />
                <div className={"flex gap-4"}>
                  <p className={"font-bold text-h2"}>
                    우리는 이런 활동을 해요!
                  </p>
                  <p
                    className={
                      "text-midgray list-disc list-outside text-h4 mt-[5px]"
                    }
                  >
                    가입 인원 <span className={"font-bold"}>15</span>명
                  </p>
                </div>
                <div
                  className={
                    "flex grid grid-cols-4 gap-[10px] text-center mt-[16px]"
                  }
                >
                  <div
                    className={"border border-sub text-sub rounded-lg h-[30px]"}
                  >
                    {posts.tag1}
                  </div>
                  <div
                    className={"border border-sub text-sub rounded-lg h-[30px]"}
                  >
                    {posts.tag2}
                  </div>
                  <div
                    className={"border border-sub text-sub rounded-lg h-[30px]"}
                  >
                    {posts.tag3}
                  </div>
                  <div
                    className={"border border-sub text-sub rounded-lg h-[30px]"}
                  >
                    {posts.tag1}
                  </div>
                  <div
                    className={"border border-sub text-sub rounded-lg h-[30px]"}
                  >
                    {posts.tag2}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"h-[40px]"} />

        <div className={"flex gap-8"}>
          {/*동아리 프로그램*/}
          <div
            className={
              "overflow-hidden 2xl:w-[358px] 2xl:h-[512px] rounded-xl shadow-xl grid place-content-center relative"
            }
          >
            {/* <div className="bg-main from-white absolute z-10 top-0"></div> */}
            <p className={"font-bold text-h2 py-6"}>동아리 프로그램</p>
            <div
              className={
                "w-[294px] h-[430px] border-t border-gray2 overflow-y-scroll"
              }
            >
              {/*나중에 반복문으로 빼자*/}
              <div className={"my-6"}>
                <div className={"h-[50px] my-6 flex gap-2"}>
                  <img
                    src={"/images/소프트웨어야놀자.png"}
                    className={"w-[100px] h-[50px] rounded-xl"}
                  ></img>
                  <div>
                    <p className={"text-h4 text-black"}>
                      소프트웨어야 놀자 멘토단
                    </p>
                    <p className={"text-h7 text-darkgray"}>간단한 소개 작성</p>
                  </div>
                </div>
                <div className={"h-[50px] my-6 flex gap-2"}>
                  <img
                    src={"/images/소프트웨어야놀자.png"}
                    className={"w-[100px] h-[50px] rounded-xl"}
                  ></img>
                  <div>
                    <p className={"text-h4 text-black"}>
                      소프트웨어야 놀자 멘토단
                    </p>
                    <p className={"text-h7 text-darkgray "}>간단한 소개 작성</p>
                  </div>
                </div>
                <div className={"h-[50px] my-6 flex gap-2"}>
                  <img
                    src={"/images/소프트웨어야놀자.png"}
                    className={"w-[100px] h-[50px] rounded-xl"}
                  ></img>
                  <div>
                    <p className={"text-h4 text-black"}>
                      소프트웨어야 놀자 멘토단
                    </p>
                    <p className={"text-h7 text-darkgray"}>간단한 소개 작성</p>
                  </div>
                </div>
                <div className={"h-[50px] my-6 flex gap-2"}>
                  <img
                    src={"/images/소프트웨어야놀자.png"}
                    className={"w-[100px] h-[50px] rounded-xl"}
                  ></img>
                  <div>
                    <p className={"text-h4 text-black"}>
                      소프트웨어야 놀자 멘토단
                    </p>
                    <p className={"text-h7 text-darkgray"}>간단한 소개 작성</p>
                  </div>
                </div>
                <div className={"h-[50px] my-6 flex gap-2"}>
                  <img
                    src={"/images/소프트웨어야놀자.png"}
                    className={"w-[100px] h-[50px] rounded-xl"}
                  ></img>
                  <div>
                    <p className={"text-h4 text-black"}>
                      소프트웨어야 놀자 멘토단
                    </p>
                    <p className={"text-h7 text-darkgray"}>간단한 소개 작성</p>
                  </div>
                </div>
                <div className={"h-[50px] my-6 flex gap-2"}>
                  <img
                    src={"/images/소프트웨어야놀자.png"}
                    className={"w-[100px] h-[50px] rounded-xl"}
                  ></img>
                  <div>
                    <p className={"text-h4 text-black"}>
                      소프트웨어야 놀자 멘토단
                    </p>
                    <p className={"text-h7 text-darkgray"}>간단한 소개 작성</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*주요 활동내역 프로그램*/}
          <div
            className={
              "w-[454px] h-[512px] 2xl:w-[454px] 2xl:h-[512px] rounded-xl shadow-xl grid place-content-center"
            }
          >
            <div className={"font-bold text-h2 py-6"}>주요 활동내역</div>

            <div
              className={
                "overflow-hidden border-t border-gray2 w-[390px] h-[430px] overflow-y-scroll"
              }
            >
              {activity.map((acti) => {
                prev_length = list.length;
                if (list.find((element) => element == acti.year) == null) {
                  list.push(acti.year);
                }
                // 추가하는 코드
                //리스트 중복제거 코드
                after_length = list.length;

                return (
                  <>
                    <div className={"mt-6 flex"}>
                      {prev_length != after_length ? (
                        <div
                          className={"w-[70px] h-auto text-[30px] font-light"}
                        >
                          {acti.year}
                        </div>
                      ) : null}
                      <div className={"w-[320px] h-auto"}>
                        <ul
                          className={
                            "marker:text-main_default list-disc list-inside ml-5 "
                          }
                        >
                          {/*나중에 반복문으로 뺄거임*/}
                          <li className={"text-h4 mt-[5px]"}>
                            <span className={"text-h3 mr-6 text-gray"}>
                              {String(acti.month).padStart(2, "0")}
                            </span>
                            {acti.title}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className={"h-[80px]"} />
      </div>
    </>
  );
}
