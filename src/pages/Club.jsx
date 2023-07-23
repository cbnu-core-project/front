import { useRecoilState } from "recoil";
import { homeClubTabState, clubsState } from "../store";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { readAllClubs, readSomeClubs } from "../api/club";
import { baseUrl } from "../common/global";
import { usePagination } from "@mantine/hooks";
import { Pagination } from "@mantine/core";

axios.defaults.baseURL = baseUrl;

export default function Club() {
  const [posts, setPosts] = useRecoilState(clubsState);
  const [homeTab, setHomeTab] = useRecoilState(homeClubTabState);
  const navigate = useNavigate();
  const [count, setCount] = useState([0, 0]);
  const [countAll, setCountAll] = useState([0, 0]);
  const [page, onChange] = useState(1);
  const pagination = usePagination({
    total: Math.ceil((count[0] + count[1]) / 16),
    page,
    onChange,
  });

  const countClassificationPosts = () => {
    let i = 0;
    let j = 0;
    readAllClubs(homeTab).then((res) => {
      res.data.forEach((post) => (post.classification === 1 ? ++i : ++j));
      setCount([i, j]);
    });
  };

  const countAllPosts = () => {
    let i = 0;
    let j = 0;
    readAllClubs(0).then((res) => {
      res.data.forEach((post) => (post.classification === 1 ? ++i : ++j));
      setCountAll([i, j]);
    });
  };

  const getPosts = () => {
    readSomeClubs((page - 1) * 16, 16, homeTab).then((res) =>
      setPosts(res.data)
    );
  };

  useEffect(() => {
    countAllPosts();
  }, []);

  useEffect(() => {
    getPosts();
    countClassificationPosts();
    // document.title = `${count[0] + count[1]}개의 동아리가 함께 하고 있습니다 | Core`;
    console.log("af");
  }, [homeTab, page]);

  return (
    <div className={"w-full min-w-home2"}>
      <div className={""} />
      <div className={"w-full bg-main_mid text-white px-[64px] py-[56px]"}>
        <p className={"text-h1 font-light"}>
          충북대학교 <span className={"font-bold"}>동아리</span>
        </p>
        <div className={"mt-[10px]"} />
        <p className={"text-h3"}>
          충북대학교 동아리는 중앙 동아리와 직무 동아리 두 가지로 이루어져
          있습니다.{" "}
          <span className={"block 2xl:inline"}>
            다양한 동아리에 가입하고 새로운 경험해보세요!
          </span>
        </p>
        <div className={"mt-[32px]"} />
        <ul className={"list-disc list-inside"}>
          <li>중앙 동아리 {countAll[0]}개</li>
          <li>직무 동아리 {countAll[1]}개</li>
        </ul>
      </div>
      <div className={"px-[63px]"}>
        <div className={"flex"}>
          <PromotionTab />
        </div>

        <article className={""}>
          <div className={"grid grid-cols-3 gap-10 2xl:grid-cols-4"}>
            {posts.map((post) => {
              return (
                <div
                  className={
                    "w-[302px] h-[320px] bg-white shadow-lg transition hover:scale-110 rounded-xl"
                  }
                  onClick={() => {
                    navigate("/clubdetail/" + post._id);
                  }}
                >
                  <Image post={post} />
                  <div
                    className={
                      "w-[302px] h-[120px] bg-white shadow-lg rounded-b-xl"
                    }
                  >
                    <Content post={post} />
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </div>
      <div className={"w-full p-16 flex justify-center"}>
        {/*<div className={"flex-auto"}>*/}
        {/*  <button*/}
        {/*    className={*/}
        {/*      "border w-[60px] h-[35px] text-center text-h7 border-midgray rounded"*/}
        {/*    }*/}
        {/*    onClick={() => {*/}
        {/*      pagination.previous();*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    {"< 이전"}*/}
        {/*  </button>*/}
        {/*</div>*/}

        <div className={""}>
          <Pagination
            total={Math.ceil((count[0] + count[1]) / 16)}
            boundaries={1}
            onChange={onChange}
          />
          {/*<button className={"font-bold "}>{page}</button>*/}
        </div>

        {/*<div className={"flex-row-reverse"}>*/}
        {/*  <button*/}
        {/*    className={*/}
        {/*      "border w-[60px] h-[35px] text-center text-h7 border-midgray rounded "*/}
        {/*    }*/}
        {/*    onClick={() => {*/}
        {/*      pagination.next();*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    {"다음 >"}*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}

const PromotionTab = () => {
  const [homeTab, setHomeTab] = useRecoilState(homeClubTabState);
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
            <form
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
            </form>
          </div>
        </div>
        <div className={"mt-[32px]"} />
      </div>
    </>
  );
};

const Image = (props) => {
  return (
    <div className={"h-[200px] 2xl:w-[300px] 2xl:h-[200px] overflow-y-scroll"}>
      <img
        src={`${baseUrl}/${props.post.image_urls[0]}`}
        alt="img"
        className={"rounded-t-lg"}
      />
    </div>
  );
};

const Content = (props) => {
  return (
    <div className={"mx-[20px] my-[16px]"}>
      <div className={"gap-[10px] flex"}>
        <div className={"text-h3 2xl:text-h3 font-bold grid content-center"}>
          {props.post.title}
        </div>
        <div
          className={
            "2xl:w-[80px] 2xl:h-[24px] 2xl:text-h7 text-center text-md border border-gray text-darkgray rounded-xl px-2 py-[2px] mt-[3px]"
          }
        >
          {props.post.classification === 0 ? "중앙 동아리" : "직무 동아리"}
        </div>
      </div>
      <div className={"hidden 2xl:block text-h6 mt-[2px]"}>
        {props.post.main_content.length > 35
          ? props.post.main_content.slice(0, 35) + "..."
          : props.post.main_content}
      </div>
      <div className={"block 2xl:hidden text-h6"}>
        {props.post.main_content.length > 19
          ? props.post.main_content.slice(0, 19) + "..."
          : props.post.main_content}
      </div>
      <div className={"gap-2 flex mt-[18px]"}>
        <div
          className={
            "h-[24px] px-2 py-[1.5px] text-center bg-gray3 rounded-lg  text-h7  text-midgray"
          }
        >
          #{props.post.tag1}
        </div>
        <div
          className={
            "h-[24px] px-2 py-[1.5px] text-center bg-gray3 rounded-lg text-h7 text-midgray"
          }
        >
          #{props.post.tag2}
        </div>
        <div
          className={
            "h-[24px] px-2 py-[1.5px] text-center bg-gray3 rounded-lg text-h7 text-midgray"
          }
        >
          #{props.post.tag3}
        </div>
      </div>
    </div>
  );
};
