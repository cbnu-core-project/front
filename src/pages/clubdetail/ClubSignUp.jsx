export default function ClubSignUp() {
  return (
    <>
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
          <button type={"submit"} className={"w-[87px] h-[40px] text-h5 text-white bg-sub rounded-md"}>제출하기</button>
        </div>
      </div>
    </>
  );
}
