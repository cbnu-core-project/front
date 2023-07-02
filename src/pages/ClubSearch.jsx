import { useRecoilState } from "recoil";
import { homeClubTabState, clubsState } from "../store";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { readAllClubs, searchAllClubs } from "../api/club";
import { baseUrl } from "../common/global";

export default function ClubSearch() {
  const [posts, setPosts] = useRecoilState(clubsState);
  const [homeTab, setHomeTab] = useRecoilState(homeClubTabState);
  const navigate = useNavigate();
  const [count, setCount] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const countPosts = () => {
    let i = 0;
    let j = 0;
    readAllClubs().then((res) => {
      res.data.forEach((post) => (post.classification === 1 ? ++i : ++j));
      setCount([i, j]);
    });
  };

  const getPosts = () => {
    searchAllClubs(query, homeTab).then((res) => setPosts(res.data));
  };

  useEffect(() => {
    console.log("작동");
    getPosts();
    countPosts();
  }, [homeTab]);

  return (
    <div className={"w-full min-w-home2"}>
      <div className={""} />
      <div className={" w-full bg-main_mid text-white px-[64px] py-[56px]"}>
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
          <li>중앙 동아리 {count[0]}개</li>
          <li>직무 동아리 {count[1]}개</li>
        </ul>
      </div>
      <div className={"px-[63px]"}>
        <div className={"flex"}>
          <ClubTab />
        </div>

        <article className={""}>
          <div className={"grid grid-cols-4 gap-10"}>
            {posts.map((post) => {
              return (
                <div
                  className={
                    "w-[200px] h-[240px] 2xl:w-[300px] 2xl:h-[320px] bg-white shadow-lg transition hover:scale-110"
                  }
                  onClick={() => {
                    navigate("/clubdetail/" + post._id);
                  }}
                >
                  <Image post={post} />
                  <Content post={post} />
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </div>
  );
}

const ClubTab = () => {
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
                // 기본 작동을 유지시켜서 새로고침 작동함으로써 재랜더링 되게 만들었음.
                // e.preventDefault();
                navigate("/club/search/?query=" + e.target.query.value);
                setHomeTab(0);
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
    <div className={"2xl:w-[300px] 2xl:h-[200px] overflow-y-scroll"}>
      <img src={`${baseUrl}/${props.post.image_url}`} alt="img" className={"rounded-t-lg"} />
    </div>
  );
};

const Content = (props) => {
  return (
    <div className={"p-2"}>
      <div className={"2xl:flex"}>
        <div className={"text-lg 2xl:text-xl font-bold"}>
          {props.post.title}
        </div>
        <div
          className={
            "text-md w-[115px] 2xl:w-[130px] 2xl:text-lg text-center 2xl:ml-3 text-md border border-darkgray text-darkgray rounded-xl px-3"
          }
        >
          {props.post.classification === 0 ? "중앙 동아리" : "직무 동아리"}
        </div>
      </div>
      <div className={"hidden 2xl:block"}>
        {props.post.content.length > 35
          ? props.post.content.slice(0, 35) + "..."
          : props.post.content}
      </div>
      <div className={"block 2xl:hidden text-sm"}>
        {props.post.content.length > 12
          ? props.post.content.slice(0, 12) + "..."
          : props.post.content}
      </div>
    </div>
  );
};
