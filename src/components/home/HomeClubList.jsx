import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { homeClubTabState, clubsState } from "../../store";
import { useNavigate } from "react-router-dom";
import { readAllClubs, readSomeClubs } from "../../api/club";
import { usePagination } from "@mantine/hooks";
import { baseUrl } from "../../common/global";

export default function HomeClubList() {
  const [posts, setPosts] = useRecoilState(clubsState);
  const [homeTab, setHomeTab] = useRecoilState(homeClubTabState);
  const [count, setCount] = useState([0, 0]);
  const navigate = useNavigate();
  const [page, onChange] = useState(1);
  const pagination = usePagination({
    total: Math.ceil((count[0] + count[1]) / 8),
    page,
    onChange,
  });

  const getPosts = () => {
    readSomeClubs((page - 1) * 8, 8, homeTab).then((res) => {
      setPosts(res.data);
    });
  };

  const countPosts = () => {
    let i = 0;
    let j = 0;
    readAllClubs(homeTab).then((res) => {
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
      {/* 최소크기 1300px 로 정했음 */}
      <div className={"px-8 2xl:px-16 min-w-[1300px]"}>
        <HomeClubTab pagination={pagination} page={page} />
        <article className={""}>
          <div className={"grid grid-cols-4 gap-10"}>
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
        <div className={"mt-[48px]"} />
        <div className={"grid place-content-center"}>
          <button
            className={
              "w-[200px] h-[46px] text-h6 text-black rounded-3xl border border-gray"
            }
            onClick={() => {
              navigate("/club");
            }}
          >
            전체보기
          </button>
        </div>
      </div>
    </>
  );
}

const HomeClubTab = (props) => {
  const [homeTab, setHomeTab] = useRecoilState(homeClubTabState);
  const [posts, setPosts] = useRecoilState(clubsState);

  const onClickHandler = (tabValue) => {
    setHomeTab(tabValue);
  };

  return (
    <>
      <div>
        <div className={"text-[32px] text-main"}>
          동아리 <span className={"font-bold"}>둘러보기</span>
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

const Image = (props) => {
  return (
    <div className={"h-[200px] w-[302px] overflow-y-scroll"}>
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
        <div className={"text-h3 2xl:text-h3 font-bold"}>
          {props.post.title}
        </div>
        <div
          className={
            " 2xl:w-[80px] 2xl:h-[24px] 2xl:text-h7 text-center text-md border border-gray text-darkgray rounded-xl px-2 py-[2px] mt-[3px]"
          }
        >
          {props.post.classification === 1 ? "중앙 동아리" : "직무 동아리"}
        </div>
      </div>
      <div className={"hidden 2xl:block"}>
        {props.post.main_content.length > 17
          ? props.post.main_content.slice(0, 17) + "..."
          : props.post.main_content}
      </div>
      <div className={"block 2xl:hidden text-h7 mt-[3px]"}>
        {props.post.main_content.length > 12
          ? props.post.main_content.slice(0, 12) + "..."
          : props.post.main_content}
      </div>
      <div className={"gap-1 flex mt-[16px]"}>
        <div
          className={
            "h-[24px] px-2 py-[1.5px] text-center bg-gray3 rounded-lg  text-h7  text-midgray"
          }
        >
          # {props.post.tag1}{" "}
        </div>
        <div
          className={
            "h-[24px] px-2 py-[1.5px] text-center bg-gray3 rounded-lg  text-h7  text-midgray"
          }
        >
          # {props.post.tag2}{" "}
        </div>
        <div
          className={
            "h-[24px] px-2 py-[1.5px] text-center bg-gray3 rounded-lg  text-h7  text-midgray"
          }
        >
          # {props.post.tag3}{" "}
        </div>
      </div>
    </div>
  );
};
