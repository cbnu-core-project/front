export default function ClubBoard() {
  const acitivities = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div className="mx-[64px]">
        <div className="flex">
          <div className="flex gap-2 mb-8">
            {/*카테고리 분류*/}
            <div className="w-[100px] h-[40px] border border-gray2 rounded-full text-black py-[6px] pl-4 font-semibold flex">
              <p>제목</p>
              <button className="material-symbols-outlined ml-[22px]">
                arrow_drop_down
              </button>
            </div>
            {/*동아리 검색 UI*/}
            <form
              className={
                "flex h-[40px] w-[300px] rounded-full border border-gray2"
              }
            >
              <input
                type={"text"}
                className={"rounded-full w-[250px] px-3 outline-0"}
                placeholder={"| 검색어를 입력해보세요."}
                name={"query"}
              />
              <button type={"submit"}>
                <i className="fa-solid fa-magnifying-glass fa-xl pt-2 ml-2"></i>
              </button>
            </form>
          </div>

          <div className="flex ml-[580px] gap-4">
            {/*버튼 UI, 검색*/}
            <button className="w-[133px] h-[40px] rounded-md bg-white text-sub border border-sub flex justify-end transition hover:scale-110">
              <p className="my-3 mx-2">임시저장 목록</p>
              <p className="material-symbols-outlined my-2">chevron_right</p>
            </button>
            <button className="w-[160px] h-[40px] rounded-md bg-sub text-white flex justify-end transition hover:scale-110">
              <p className="my-3 mx-2">활동기록 작성하기</p>
              <p className="material-symbols-outlined my-2">chevron_right</p>
            </button>
          </div>
        </div>
        {/*활동 기록 카드*/}
        <div className="grid grid-cols-4 gap-8">
          {acitivities.map((acitivity) => {
            return (
              <div
                className={
                  "w-[302px] h-[320px] bg-white shadow-lg transition hover:scale-110 rounded-xl"
                }
              >
                <Image />
                <div
                  className={
                    "w-[302px] h-[120px] bg-white shadow-lg rounded-b-xl"
                  }
                >
                  <div className="m-4">
                  <p className="font-bold text-h4 mb-2">코어 디자인팀 회의</p>
                  <p className="">디자인팀은 오늘 작업할 내용을 회의한 후, 동아리 소개 페이지 및 동아리 활동...</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-[200px]" />
    </>
  );
}
const Image = () => {
  return (
    <div className={"h-[200px] 2xl:w-[300px] 2xl:h-[200px] overflow-y-scroll"}>
      <img src="/images/스파크.png" alt="img" className={"rounded-t-lg"} />
    </div>
  );
};
