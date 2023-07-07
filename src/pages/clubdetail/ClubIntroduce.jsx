import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { readOneClub } from "../../api/club";

export default function ClubIntroduce() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  function getPost() {
    readOneClub(id).then((res) => setPost(res.data[0]));
  }

  useEffect(()=>{
    getPost()
  }, [])

  return (
    <>
      <div className={"p-2 ml-[56px]"}>
        <div className={"flex gap-8"}>
          {/*동아리 활동*/}
          <div
            className={
              "w-[450px] h-[320px] 2xl:w-[637px] 2xl:h-[432px] bg-gray2 drop-shadow-md rounded-xl"
            }
          ></div>
          <div
            className={
              "w-[450px] h-[320px] 2xl:w-[637px] 2xl:h-[432px] shadow-lg rounded-xl"
            }
          >
            <div className={"flex p-2 ml-[9px] gap-3"}>
              <p className={"text-h2 font-bold "}>{post.title}</p>

              <div className={"gap-2 flex mt-[9px]"}>
                <div
                  className={
                    "h-[20px] 2xl:h-[20px] bg-black text-h7 text-white rounded-md"
                  }
                >
                  직무동아리
                </div>
                <div
                  className={
                    "h-[20px] 2xl:h-[20px] bg-black text-h7 text-white rounded-md"
                  }
                >
                  IT/개발
                </div>
              </div>
            </div>
            <p className={"text-h3 ml-8"}>세상의 중심에서 코딩을 외치다!</p>
            <p className={"text-h6 px-8 py-4 text-darkgray"}>
              코어는 IT/개발 직군 취창업을 목표로 하는 직무동아리 소속
              동아리입니다. 전공과 무관하게 해당 직군으로 취업을 희망하시는 모든
              학우분들 환영합니다!
            </p>
            <div className={"grid place-content-center"}>
              <div className={"border-t mt-2 border-gray2 w-[573px] h-[120px]"}>
                <div className={"mt-[24px]"} />
                <p className={"font-bold text-h4"}>우리는 이런 활동을 해요!</p>
                <div
                  className={
                    "flex grid grid-cols-4 gap-[10px] text-center mt-[16px]"
                  }
                >
                  <div
                    className={"border border-sub text-sub rounded-lg h-[30px]"}
                  >
                    코딩스터디
                  </div>
                  <div
                    className={"border border-sub text-sub rounded-lg h-[30px]"}
                  >
                    직무분석
                  </div>
                  <div
                    className={"border border-sub text-sub rounded-lg h-[30px]"}
                  >
                    IT직무
                  </div>
                  <div
                    className={"border border-sub text-sub rounded-lg h-[30px]"}
                  >
                    현직자 멘토링
                  </div>
                  <div
                    className={"border border-sub text-sub rounded-lg h-[30px]"}
                  >
                    웹/앱 개발
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
              "2xl:w-[358px] 2xl:h-[512px] rounded-xl shadow-xl grid place-content-center"
            }
          >
            <p className={"font-bold text-h2 py-6"}>동아리 프로그램</p>
            <div className={"border-t border-gray2 w-[294px] h-[430px]"}></div>
          </div>
          {/*주요 활동내역 프로그램*/}
          <div
            className={
              "w-[454px] h-[512px] 2xl:w-[454px] 2xl:h-[512px] rounded-xl shadow-xl grid place-content-center"
            }
          >
            <p className={"font-bold text-h2 py-6"}>주요 활동내역</p>
            <div className={"border-t border-gray2 w-[390px] h-[430px]"}></div>
          </div>
          {/*홍보 게시판 프로그램*/}
          <div
            className={
              "w-[430px] h-[512px] 2xl:w-[454px] 2xl:h-[512px] rounded-xl shadow-xl grid place-content-center"
            }
          >
            <p className={"font-bold text-h2 py-6 "}>홍보 게시판</p>
            <div className={"border-t border-gray2 w-[390px] h-[430px] mx-auto"}>
              <div className={"h-[24px]"} />
              <div className={"flex gap-6"}>
                <div
                  className={
                    "w-[171px] h-[180px] 2xl:w-[171px] 2xl:h-[322px] rounded-xl shadow-lg transition hover:scale-110"
                  }
                >
                  <div className={"h-[258px]"}></div>
                  <div className={"h-16 text-h5 font-bold px-[10px] py-2"}>디자인팀 신입부원 모집</div>
                </div>
                <div
                  className={
                    "w-[100px] h-[180px] 2xl:w-[171px] 2xl:h-[322px] rounded-xl shadow-lg transition hover:scale-110"
                  }
                >
                  <div className={"h-[258px]"}></div>
                  <div className={"h-16 text-h5 font-bold px-[10px] py-2"}>디자인팀 신입부원 모집</div>
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
