import { useRecoilState } from "recoil";
import { promotionsState, homePromotionTabState } from "../store";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { readAllPromotions, readSomePromotions } from "../api/promotion";
import { usePagination } from "@mantine/hooks";
import { baseUrl } from "../common/global";
import { Pagination } from "@mantine/core";

axios.defaults.baseURL = baseUrl;

export default function Promotion() {
  const [promotions, setPromotions] = useRecoilState(promotionsState);
  const [homeTab, setHomeTab] = useRecoilState(homePromotionTabState);
  const navigate = useNavigate();
  const [count, setCount] = useState([0, 0]);
  const [countAll, setCountAll] = useState([0, 0]);

  const countClassificationPosts = () => {
    let i = 0;
    let j = 0;
    readAllPromotions(homeTab).then((res) => {
      res.data.forEach((post) => (post.classification === 1 ? ++i : ++j));
      setCount([i, j]);
    });
  };

  const countAllPosts = () => {
    let i = 0;
    let j = 0;
    readAllPromotions(0).then((res) => {
      res.data.forEach((post) => (post.classification === 1 ? ++i : ++j));
      setCountAll([i, j]);
    });
  };

  const [page, onChange] = useState(1);

  const pagination = usePagination({
    total: Math.ceil((count[0] + count[1]) / 16),
    page,
    onChange,
  });

  const getPosts = () => {
    readSomePromotions((page - 1) * 16, 16, homeTab).then((res) =>
      setPromotions(res.data)
    );
  };

  useEffect(() => {
    countAllPosts();
  }, []);

  useEffect(() => {
    getPosts();
    countClassificationPosts();
  }, [homeTab, page]);

  return (
    <div className={"w-full min-w-[1300px]"}>
      <div className={""} />
      <div className={"w-full bg-main_mid text-white px-[64px] py-[56px]"}>
        <p className={"text-h1 font-light"}>
          동아리 <span className={"font-bold"}>홍보게시판</span>
        </p>
        <div className={"mt-[10px]"} />
        <p className={"text-h3"}>
          동아리 홍보 및 신입 부원 모집 공고를 둘러보세요!{" "}
        </p>
        <div className={"mt-[32px]"} />
        <ul className={"list-disc list-inside"}>
          <li>
            중앙 동아리 <span className={"font-bold"}>{countAll[0]}개</span> |
            직무 동아리 <span className={"font-bold"}>{countAll[1]}개</span>{" "}
            홍보중
          </li>
        </ul>
      </div>
      <div className={"px-[63px]"}>
        <div className={"flex"}>
          <PromotionTab pagination={pagination} page={page} />
        </div>

        <article className={""}>
          <div className={"grid grid-cols-4 gap-10"}>
            {promotions.map((promotion) => {
              return (
                <div
                  className={
                    "w-[300px] h-[528px] rounded-xl shadow-lg transition hover:scale-110"
                  }
                  onClick={() => {
                    navigate("/promotiondetail/" + promotion._id);
                  }}
                >
                  <div className={"w-[300px] 2h-[440px] rounded-t-xl"}>
                    <Image promotion={promotion} />
                  </div>
                  <div
                    className={
                      "w-[200px] h-[70px] 2xl:w-[300px] 2xl:h-[88px] rounded-b-xl mt-2"
                    }
                  >
                    <Content promotion={promotion} />
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </div>
      <div className={"w-full p-16 flex justify-center"}>
        <div className={""}>
          <Pagination
            total={Math.ceil((count[0] + count[1]) / 16)}
            boundaries={1}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

const PromotionTab = (props) => {
  const [homeTab, setHomeTab] = useRecoilState(homePromotionTabState);
  const navigate = useNavigate();

  const onClickHandler = (tabValue) => {
    setHomeTab(tabValue);
  };

  return (
    <>
      <div>
        <div className={"mt-[43px]"} />
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
          <div className={""}>
            {/* <form
              className={
                "flex h-[40px] w-[300px] rounded-full border border-gray2"
              }
              onSubmit={(e) => {
                // e.preventDefault();
                navigate("/club/search/?query=" + e.target.query.value);
                setHomeTab(0); // 기본 홈탭을 0으로 바꾸기
              }}
            >
              <input
                type={"text"}
                className={"rounded-full w-[250px] px-3 outline-0"}
                placeholder={"동아리를 검색해보세요."}
                name={"query"}
              />
              <button type={"submit"}>
                <i className="fa-solid fa-magnifying-glass fa-xl pt-4 ml-2"></i>
              </button>
            </form> */}
          </div>
        </div>
        <div className={"mt-[32px]"} />
      </div>
    </>
  );
};

const Image = (props) => {
  return (
    <div className={"2xl:w-[300px] 2xl:h-[440px]"}>
      <img
        src={"/images/코어홍보2.png"}
        alt="img"
        className={"rounded-t-lg"}
      />
    </div>
  );
};

const Content = (props) => {
  return (
    <div className={"ml-[20px] my-[16px]"}>
      <div className={"text-h5 2xl:text-xl font-bold"}>
        {props.promotion.title.length > 14
          ? props.promotion.title.slice(0, 14) + "..."
          : props.promotion.title}
      </div>
      <div className={"flex 2xl:flex gap-x-2 mt-2"}>
        <div
          className={
            "text-h8 w-[85px] 2xl:w-[78px] 2xl:h-[24px] 2xl:text-h7 text-center text-md border border-darkgray text-darkgray rounded-xl px-2 py-[2px]"
          }
        >
          {props.promotion.classification === 1 ? "중앙 동아리" : "직무 동아리"}
        </div>
        <div className={"text-h8 text-darkgray mt-[3px]"}>
          {props.promotion.club_name}
        </div>
      </div>
    </div>
  );
};
