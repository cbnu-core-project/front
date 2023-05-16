import { useNavigate } from "react-router-dom";

export default function HomeNoticeList() {
  const navigate = useNavigate();

  return (
    <>
      <div className={"px-8 2xl:px-16"}>
        <div className={"text-[32px] text-main"}>
          서비스 <span className={"font-bold"}>공지사항</span>
        </div>
        <div className={"mt-[18px]"} />
        <div>
          <ul className={"bg-background rounded-[20px] text-h4"}>
            {[0, 1, 2, 3, 4].map((post, index) => {
              // 나중에 리스트 대체할 예정. 최대 글 5개 제한.
              return (
                <li
                  className={
                    index === 4
                      ? "px-[24px] py-[21px] flex justify-between hover:bg-gray3"
                      : "px-[24px] py-[21px] flex justify-between border-b-[0.5px] border-gray2 hover:bg-gray3"
                  }
                >
                  <div className={"text-black"}>서비스 이용안내</div>
                  <div className={"text-midgray flex-end"}>2022.04.20</div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={"mt-[48px]"} />
        <div className={"grid place-content-center"}>
          <button
            className={
              "w-[200px] h-[46px] text-h6 text-black rounded-3xl border border-gray"
            }
            onClick={() => {
              navigate("/notice");
            }}
          >
            전체보기 >
          </button>
        </div>
      </div>
    </>
  );
}
