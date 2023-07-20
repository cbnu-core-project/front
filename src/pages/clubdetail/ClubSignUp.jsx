export default function ClubSignUp() {
  return (
    <>
      <ManagerSignUp />
    </>
  );
}

function UserSignUp() {
  return (
    <div className={"text-h1 font-bold "}>
      <p className={"text-sub ml-[618px]"}> 코어 가입 신청서</p>
      <div className={"w-[780px] h-[948px] rounded-xl shadow-lg mx-auto "}>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex "}>
          <div className={"w-[150px] p-2 mt-[32px]"}>
            이름 <span className={" text-sub"}>(필수)</span>
          </div>
          <input
            className={"bg-gray3 h-[48px] rounded-xl text-h5 p-3 mt-[32px]"}
            placeholder={"ex) 홍길동"}
          ></input>
        </div>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>
            학과 <span className={"text-sub"}>(필수)</span>
          </div>
          <input
            className={"bg-gray3 h-[48px] rounded-xl text-h5 p-3"}
            placeholder={"ex) OO학과"}
          ></input>
        </div>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>
            학번 <span className={"text-sub"}>(필수)</span>
          </div>
          <input
            className={"bg-gray3 h-[48px] rounded-xl text-h5 p-3"}
            placeholder={"ex) 2021070015"}
          ></input>
        </div>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>
            성별 <span className={"text-sub"}>(필수)</span>
          </div>
        </div>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>
            연락처 <span className={"text-sub"}>(필수)</span>
          </div>
          <input
            className={"bg-gray3 h-[48px] rounded-xl text-h5 p-3"}
            placeholder={"ex) 010-0000-0000"}
          ></input>
        </div>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>주소</div>
          <input
            className={"bg-gray3 h-[48px] w-[550px] rounded-xl text-h5 p-3"}
            placeholder={"주소를 작성해주세요."}
          ></input>
        </div>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>지원동기</div>
          <input
            className={
              "bg-gray3 w-[550px] h-[300px] rounded-xl text-h5 overflow-y-scroll p-3"
            }
            placeholder={"지원동기를 작성해주세요."}
          ></input>
        </div>
        <button
          type={"submit"}
          className={"w-[87px] h-[40px] text-h5 text-white bg-sub rounded-md"}
        >
          제출하기
        </button>
      </div>
    </div>
  );
}
function ManagerSignUp() {
  let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 100, 200, 300, 400, 500];
  return (
    <>
      <div className={" ml-[64px] w-[1306px] h-[40px] flex"}>
        <div
          className={"text-h1 font-bold text-sub ml-[580px] "}
        >
          가입신청 현황
        </div>
        <button
          className={
            "ml-auto w-[155px] h-[40px] rounded-md bg-sub text-white flex py-[10px] pl-[14px]"
          }
        >
          <p className="text-h3 font-semibold">가입 양식 설정</p>
          <button className="material-symbols-outlined">chevron_right</button>
        </button>
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
              "my-[16px] mx-[40px] w-[1226px] h-[40px] py-[6px] flex text-h5"
            }
          >
            <div className={"w-[38px]"}>
              <p className="">순번</p>
            </div>
            <div className={"w-[164px]"}>
              <p className="text-center">승인 현황</p>
            </div>
            <div className="w-[85px]">
            <p className="text-center">이름</p>
            </div>
            <div className="w-[160px]">
            <p className={"text-center"}>학과</p>
            </div>
            <div className="w-[155px] ">
            <p className="text-center">학번</p>
            </div>
            <div className="w-[178px] r">
            <p className="text-center">전화번호</p>
            </div>
            <div className="w-[151px]">
            <p className="text-center">신청 일자</p>
            </div>
            <div className="w-[156px] ">
            <p className="text-center">신청서</p>
            </div>
            <div className="ml-auto w-[120px] ">
            <p className="text-center">승인</p>
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
                  <div className={"w-[36px]"}>
                    <div className={"py-[6px]"}>{post}</div>
                  </div>
                  <div className="w-[164px] grid justify-center">
                    <button className={"signup_wait"}>승인대기</button>
                  </div>
                  <div className={"w-[85px]"}>
                    <p className={"text-h5 py-[6px] text-center text-gray"}>
                      황유림
                    </p>
                  </div>
                  <div className={"w-[160px]"}>
                    <p className={"text-h5 text-center py-[6px]"}>
                      소프트웨어학ㅁㅁㄴㅇㅁㄴㅇ과
                    </p>
                  </div>
                  <div className={"w-[155px]"}>
                    <p className={"text-h5 text-center py-[6px]"}>2021070015</p>
                  </div>
                  <div className={"w-[178px]"}>
                    <p className={"text-h5 py-[6px] text-center"}>
                      010-0000-0000
                    </p>
                  </div>
                  <div className={"w-[151px]"}>
                    <p className={"text-h5 text-center py-[6px]"}>2023.07.06</p>
                  </div>
                  <div className={"w-[156px] grid justify-center"}>
                    <button
                      className={
                        "border border-[#C1C1C1] rounded-md w-[100px] h-[40px]"
                      }
                    >
                      신청서보기
                    </button>
                  </div>
                  <div className={"w-[128px] grid justify-end"}>
                    <button className={"signup_accept"}>승인</button>
                  </div>
                </div>
              </li>
            </>
          );
        })}
      </div>
    </>
  );
}
