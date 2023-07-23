import { useState } from "react";

export default function ClubManagement() {
  return (
    <>
      <ManagerSignUp />
    </>
  );
}
function ManagerSignUp() {
  let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 100, 200, 300, 400, 500];
  let [state, setState] = useState(false);
  return (
    <>
      <div className="w-full relative">
        {state == true ? <Setting /> : null}
        <div className={" ml-[64px] w-[1306px] h-[40px] flex relative"}>
          <div className={"text-h1 font-bold text-sub ml-[580px]"}>
            동아리 멤버 관리
          </div>
        </div>

        <div className={"h-[26px]"} />

        <div
          className={
            "w-[1306px] h-[648px] ml-[64px] rounded-xl overflow-hidden overflow-y-scroll shadow-xl "
          }
        >
          <div
            className={
              "h-[72px] border-b-[2px] border-gray2 grid justify-center"
            }
          >
            <div
              className={
                "my-[16px] mx-[45px] w-[1226px] h-[40px] py-[6px] flex text-h5"
              }
            >
              <div className={"w-[98px]"}>
                <p className="pl-[23px]">직책</p>
              </div>
              <div className="w-[69px]">
                <p className="text-center">이름</p>
              </div>
              <div className="w-[150px]">
                <p className={"text-center"}>닉네임</p>
              </div>
              <div className="w-[160px]">
                <p className={"text-center"}>학과</p>
              </div>
              <div className="w-[142px]">
                <p className="text-center">학번</p>
              </div>
              <div className="w-[178px]">
                <p className="text-center">전화번호</p>
              </div>
              <div className="w-[190px]">
                <p className="text-center">이메일</p>
              </div>
              <div className="w-[140px]">
                <p className="text-center">직책 변경</p>
              </div>
              <div className="ml-auto w-[124px]">
                <p className="text-center">멤버 탈퇴</p>
              </div>
            </div>
          </div>
          {posts.map((post) => {
            return (
              <>
                <li
                  className={
                    post === 10
                      ? "px-[45px] py-[16px] flex justify-between hover:bg-gray3 rounded-[20px]"
                      : "px-[45px] py-[16px] flex justify-between border-b-[0.5px] border-gray2 hover:bg-gray3 "
                  }
                >
                  <div className={"flex w-[1216px] h-[40px]"}>
                    <div className={"w-[98px] h-[40px]"}>
                      <div className={"management_president"}>회장</div>
                    </div>
                    <div className={"w-[69px]"}>
                      <p className={"text-h5 py-[6px] text-center text-gray"}>
                        황유림
                      </p>
                    </div>
                    <div className={"w-[150px]"}>
                      <p className={"text-h5 text-center py-[6px]"}>
                        부리부리대마왕
                      </p>
                    </div>
                    <div className={"w-[160px]"}>
                      <p className={"text-h5 text-center py-[6px]"}>
                        소프트웨어학과
                      </p>
                    </div>
                    <div className={"w-[142px]"}>
                      <p className={"text-h5 text-center py-[6px]"}>
                        2021070015
                      </p>
                    </div>
                    <div className={"w-[178px]"}>
                      <p className={"text-h5 py-[6px] text-center"}>
                        010-0000-0000
                      </p>
                    </div>
                    <div className={"w-[190px]"}>
                      <p className={"text-h5 text-center py-[6px]"}>
                        rusia9217@naver.com
                      </p>
                    </div>
                    <div className={"w-[140px] grid justify-center"}>
                      <button
                        className={
                          "border border-[#C1C1C1] rounded-md w-[100px] h-[40px]"
                        }
                        onClick={() => {
                          setState(!state);
                        }}
                      >
                        설정
                      </button>
                    </div>
                    <div className={"w-[124px] grid justify-end"}>
                      <button className={"member_delete"}>탈퇴</button>
                    </div>
                  </div>
                </li>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
function Setting(props) {
  return (
    <>
        <div className={"absolute z-10 left-1/2 right-1/2 top-1/3"}>
          <div className="w-[262px] h-[383px] bg-white rounded-xl shadow-2xl">
            <div className="ml-[40px]">
              <div className="h-[32px]"></div>
              <p className="text-h2 font-bold ">계정 유형 변경</p>
              <div className="h-[40px]"></div>
              <p className="text-h5">000님의 직책을 선택하세요.</p>
              <div className="h-[32px]"></div>
              <p className="text-h5 font-bold ">직책 선택</p>
              <div className="h-[12px]"></div>
              <div className="w-[182px] h-[96px] text-h5">
                <p>동아리 회장</p>
                <p>동아리 임원</p>
                <p>동아리 부원</p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
