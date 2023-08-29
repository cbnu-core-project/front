import { useRecoilState } from "recoil";
import { homePromotionTabState, promotionsState } from "../../store";
import { useNavigate } from "react-router-dom";
import { readAllPromotions, readSomePromotions } from "../../api/promotion";
import { useEffect, useState } from "react";
import { baseUrl } from "../../common/global";
import { usePagination } from "@mantine/hooks";
import { readAllClubs, readSomeClubs } from "../../api/club";

export default function HomePromotionList() {
  const navigate = useNavigate();
  const [promotions, setPromotions] = useRecoilState(promotionsState);
  const [homeTab, setHomeTab] = useRecoilState(homePromotionTabState);
  const [count, setCount] = useState([0, 0]);
  const [page, onChange] = useState(1);
  const pagination = usePagination({
    total: Math.ceil((count[0] + count[1]) / 4),
    page,
    onChange,
  });

  const getPosts = () => {
    readSomePromotions((page - 1) * 4, 4, homeTab).then((res) => {
      setPromotions(res.data);
    });
  };

  const countPosts = () => {
    let i = 0;
    let j = 0;
    readAllPromotions(homeTab).then((res) => {
      res.data.forEach((post) => (post.classification === 1 ? ++i : ++j));
      setCount([i, j]);
    });
  };

  useEffect(() => {
    getPosts();
    countPosts();
  }, [homeTab, page]);

  useEffect(() => {
    // homeTab 변경 시 page 원래대로 1로 되돌리기
    onChange(1);
  }, [homeTab]);

  return (
    <>
      <div className={"px-8 2xl:px-16 min-w-[1300px]"}>
        <HomePromotionTab pagination={pagination} page={page} />
        <div className={"grid grid-cols-4"}>
          {promotions.map((promotion) => {
            return (
              <div className="relative">
                <img
                  className={"w-[300px] h-[440px] overflow-y-scroll"}
                  src={"/images/코어홍보.png"}
                  alt={"marketing"}
                />
                <div
                  className={
                    "w-[300px] h-[440px] rounded-xl transition hover:scale-110 bg-gradient-to-b from-white to-black opacity-20 absolute top-0 z-10"
                  }
                >
                  <div className={""}>
                    <div className={"text-h3 text-white font-bold"}>
                      {promotion.title}
                    </div>
                    <div className={"text-h7 text-white"}>
                      {promotion.club_name}
                    </div>
                    <div
                      className={
                        "w-[76px] h-[24px] rounded-xl border border-white"
                      }
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={"mt-[48px]"} />
        <div className={"grid place-content-center"}>
          <button
            className={
              "w-[200px] h-[46px] text-h6 text-black rounded-3xl border border-gray"
            }
            onClick={() => {
              navigate("/promotion");
            }}
          >
            전체보기
          </button>
        </div>
      </div>
    </>
  );
}

const HomePromotionTab = (props) => {
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
          <div className={"flex text-h6 ml-auto mt-[6px]"}>
            <button
              className={
                "border w-[28px] h-[28px] text-center border-midgray rounded"
              }
              onClick={() => {
                props.pagination.previous();
              }}
            >
              {"<"}
            </button>
            <button
              className={"mx-2"}
              onClick={() => {
                props.pagination.next();
              }}
            >
              {props.page} / {props.pagination.range.at(-1)}
            </button>
            <button
              className={
                "border w-[28px] h-[28px] text-center border-midgray rounded"
              }
              onClick={() => {
                props.pagination.next();
              }}
            >
              {">"}
            </button>
          </div>
        </div>
        <div className={"mt-[32px]"} />
      </div>
    </>
  );
};
