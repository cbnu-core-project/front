import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import { readOneClub } from "../../api/club";
import { baseUrl } from "../../common/global";



export default function ClubIntroduce() {
  const { id } = useParams();
  const [posts, setPost] = useState({});
  const [count, setCount] = useState(0);

  function getPost() {
    readOneClub(id).then((res) => setPost(res.data[0]));
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <div className={"p-2 ml-[56px]"}>
        <div className={"flex gap-8"}>
          {/*동아리 활동*/}
          <div
            className={
              "w-[450px] h-[320px] 2xl:w-[637px] 2xl:h-[432px] bg-gray2 drop-shadow-md rounded-xl overflow-hidden overflow-x-scroll"
            }
          >
            <div className={'flex transition -translate-x-['+ count +'00%]'}>
              <img
                src={`${baseUrl}/${posts.image_url}`}
                alt={"1"}
                className={"w-[637px] h-[432px]"}
              ></img>
              <img
                src={`${baseUrl}/${posts.image_url}`}
                alt={"2"}
                className={"w-[637px] h-[432px]"}
              ></img>
              <img
                src={`${baseUrl}/${posts.image_url}`}
                alt={"3"}
                className={"w-[637px] h-[432px]"}
              ></img>
            </div>
            <div
              className={"flex gap-2 absolute inset-x-[300px] bottom-[20px]"}
            >
              <button
                className={count == 0? "w-[6px] h-[6px] rounded-xl z-10  bg-white" : "w-[6px] h-[6px] rounded-xl z-10  bg-gray"}
                onClick={() => {
                  setCount(0);
                }}
                slide
              ></button>
              <button
                className={count == 1? "w-[6px] h-[6px] rounded-xl z-10  bg-white" : "w-[6px] h-[6px] rounded-xl z-10  bg-gray"}
                onClick={() => {
                  setCount(1);
                }}
              ></button>
              <button
                className={count == 2? "w-[6px] h-[6px] rounded-xl z-10  bg-white" : "w-[6px] h-[6px] rounded-xl z-10  bg-gray"}
                onClick={() => {
                  setCount(2);
                }}
              ></button>
            </div>
            
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
                    "h-[20px] 2xl:h-[20px] bg-black text-h7 text-white rounded-md"
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
              "overflow-hidden 2xl:w-[358px] 2xl:h-[512px] rounded-xl shadow-xl grid place-content-center bg-gradient-to-t from-white"
            }
          >
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
            <p className={"font-bold text-h2 py-6"}>주요 활동내역</p>
            <div
              className={
                "overflow-hidden border-t border-gray2 w-[390px] h-[430px] overflow-y-scroll"
              }
            >
              <div className={"mt-6 flex"}>
                <div className={"w-[70px] h-auto text-[30px] font-light "}>
                  2022
                </div>
                <div className={"w-[320px] h-auto"}>
                  <p className={"list-disc list-inside ml-5 "}>
                    {/*나중에 반복문으로 뺄거임*/}
                    <li className={"text-h4 mt-[5px]"}>
                      <span className={"text-h3 mr-6 text-gray"}>06</span>
                      직무분석 경진대회 장려상 수상
                    </li>
                    <li className={"text-h4 mt-6"}>
                      <span className={"text-h3 mr-6 text-gray"}>06</span>
                      직무분석 경진대회 장려상 수상
                    </li>
                    <li className={"text-h4 mt-6"}>
                      <span className={"text-h3 mr-6 text-gray"}>06</span>
                      직무분석 경진대회 장려상 수상
                    </li>
                    <li className={"text-h4 mt-6"}>
                      <span className={"text-h3 mr-6 text-gray"}>06</span>
                      직무분석 경진대회 장려상 수상
                    </li>
                    <li className={"text-h4 mt-6"}>
                      <span className={"text-h3 mr-6 text-gray"}>06</span>
                      직무분석 경진대회 장려상 수상
                    </li>
                    <li className={"text-h4 mt-6"}>
                      <span className={"text-h3 mr-6 text-gray"}>06</span>
                      직무분석 경진대회 장려상 수상
                    </li>
                    <li className={"text-h4 mt-6"}>
                      <span className={"text-h3 mr-6 text-gray"}>06</span>
                      직무분석 경진대회 장려상 수상
                    </li>
                    <li className={"text-h4 mt-6"}>
                      <span className={"text-h3 mr-6 text-gray"}>06</span>
                      직무분석 경진대회 장려상 수상
                    </li>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*홍보 게시판 프로그램*/}
          <div
            className={
              "w-[430px] h-[512px] 2xl:w-[454px] 2xl:h-[512px] rounded-xl shadow-xl grid place-content-center"
            }
          >
            <p className={"font-bold text-h2 py-6 "}>홍보 게시판</p>
            <div className={"border-t border-gray2 w-[390px] h-[430px]"}>
              <div className={"h-[24px]"} />
              <div className={"flex gap-6 ml-[10px]"}>
                <div
                  className={
                    "w-[171px] h-[180px] 2xl:w-[171px] 2xl:h-[322px] rounded-xl shadow-lg transition hover:scale-110"
                  }
                >
                  <img src={`${baseUrl}/${posts.image_url}`} className={"h-[258px]"}></img>
                  <div className={"h-16 text-h5 font-bold px-[10px] py-2"}>
                    디자인팀 신입부원 모집
                  </div>
                </div>
                <div
                  className={
                    "w-[100px] h-[180px] 2xl:w-[171px] 2xl:h-[322px] rounded-xl shadow-lg transition hover:scale-110"
                  }
                >
                  <img src={`${baseUrl}/${posts.image_url}`} className={"h-[258px]"}></img>
                  <div className={"h-16 text-h5 font-bold px-[10px] py-2"}>
                    디자인팀 신입부원 모집
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"h-[80px]"} />
      </div>
    </>
  );
}
