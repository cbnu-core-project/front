import { useRecoilState } from "recoil";
import { homePromotionTabState } from "../store";
import { useNavigate } from "react-router-dom";

export default function HomePromotionList() {
  const navigation = useNavigate();

  const temp_list = [
    "/images/코어홍보.png",
    "/images/한별홍보.png",
    "/images/꼴로르홍보1.png",
    "/images/꼴로르홍보2.png",
  ];

  return (
    <>
      <div className={"px-8 2xl:px-16"}>
        <HomePromotionTab />
        <div className={"grid grid-cols-4"}>
          {temp_list.map((temp) => {
            return (
              <div
                className={
                  "w-[200px] h-[300px] 2xl:w-[300px] 2xl:h-[440px] transition hover:scale-110"
                }
              >
                <img src={temp} alt={"marketing"} />
              </div>
            );
          })}
        </div>
        <div className={"mt-[48px]"} />
        <div className={"grid place-content-center"}>
          <button
            className={
              "w-[200px] h-[46px] text-h5 text-black rounded-3xl border border-gray"
            }
            onClick={() => {
              navigation("/promotion");
            }}
          >
            전체보기 >
          </button>
        </div>
      </div>
    </>
  );
}

const HomePromotionTab = () => {
  const [homeTab, setHomeTab] = useRecoilState(homePromotionTabState);

  const onClickHandler = (tabValue) => {
    setHomeTab(tabValue);
  };

  return (
    <>
      <div>
        <div className={"text-[32px] text-main"}>
          동아리 <span className={"font-bold"}>홍보 게시판</span>
        </div>
        <div className={"mt-[18px]"} />
        <div className={"flex gap-3"}>
          <button
            className={homeTab === 0 ? "btn-home-tab-focused" : "btn-home-tab"}
            onClick={() => onClickHandler(0)}
          >
            전체
          </button>
          <button
            className={homeTab === 1 ? "btn-home-tab-focused" : "btn-home-tab"}
            onClick={() => onClickHandler(1)}
          >
            중앙 동아리
          </button>
          <button
            className={homeTab === 2 ? "btn-home-tab-focused" : "btn-home-tab"}
            onClick={() => onClickHandler(2)}
          >
            직무 동아리
          </button>
        </div>
        <div className={"mt-[32px]"} />
      </div>
    </>
  );
};
