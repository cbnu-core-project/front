import { useRecoilState } from "recoil";
import { homeClubTabState, clubsState } from "../../store";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { readAllClubs, readSomeClubs } from "../../api/club";
import { baseUrl } from "../../common/global";
import { usePagination } from "@mantine/hooks";

axios.defaults.baseURL = baseUrl;

export default function ClubBoard() {
  const [posts, setPosts] = useRecoilState(clubsState);
  const [homeTab, setHomeTab] = useRecoilState(homeClubTabState);
  const navigate = useNavigate();
  const [count, setCount] = useState([0, 0]);

  const countPosts = () => {
    let i = 0;
    let j = 0;
    readAllClubs(0).then((res) => {
      res.data.forEach((post) => (post.classification === 1 ? ++i : ++j));
      setCount([i, j]);
    });
  };

  const [page, onChange] = useState(1);

  const pagination = usePagination({
    total: Math.ceil((count[0] + count[1]) / 8),
    page,
    onChange,
  });

  const getPosts = () => {
    readSomeClubs(0, 8, homeTab).then((res) => setPosts(res.data));
  };

  useEffect(() => {
    getPosts();
    countPosts();
    document.title = `${posts.length}개의 동아리가 함께 하고 있습니다 | Core`;
  }, [homeTab]);

  return (
    <div className={"w-full min-w-home2"}>
      <div className={"h-[50px] flex justify-end pr-7"}>
        <PromotionTab />
      </div>
      <div className={"px-[48px]"}>
        <article className={""}>
          <div className={"grid grid-cols-4 gap-10"}>
            {posts.map((post) => {
              return (
                <div
                  className={
                    "w-[200px] h-[240px] 2xl:w-[300px] 2xl:h-[320px] bg-white shadow-lg transition hover:scale-110 rounded-xl"
                  }
                >
                  <Image post={post} />
                  <Content post={post} />
                </div>
              );
            })}
          </div>
        </article>
      </div>
      <div className={"w-full p-16 flex"}>
        <div className={"flex-auto"}>
          <button
            className={
              "border w-[60px] h-[35px] text-center text-h7 border-midgray rounded"
            }
            onClick={() => {
              pagination.previous();
            }}
          >
            {"< 이전"}
          </button>
        </div>

        <div className={"flex-auto"}>
          <button className={"font-bold "}>{page}</button>
        </div>

        <div className={"flex-row-reverse"}>
          <button
            className={
              "border w-[60px] h-[35px] text-center text-h7 border-midgray rounded "
            }
            onClick={() => {
              pagination.next();
            }}
          >
            {"다음 >"}
          </button>
        </div>
      </div>
    </div>
  );
}

const PromotionTab = () => {
  const [homeTab, setHomeTab] = useRecoilState(homeClubTabState);
  const navigate = useNavigate();

  return (
    <>
      <div>
        <form
          className={"flex h-[30px] w-[220px] rounded-full border border-gray2"}
          onSubmit={(e) => {
            // e.preventDefault();
            navigate("/club/search/?query=" + e.target.query.value);
            setHomeTab(0); // 기본 홈탭을 0으로 바꾸기
          }}
        >
          <input
            type={"text"}
            className={"rounded-full w-[250px] px-3 text-h6 outline-0"}
            placeholder={"| 검색어를 검색해보세요."}
            name={"query"}
          />
          <button type={"submit"}>
            <i className="fa-solid fa-magnifying-glass flex-auto pt-1 mr-2"></i>
          </button>
        </form>
      </div>

      <div className={"mt-[32px]"} />
    </>
  );
};

const Image = (props) => {
  return (
    <div className={"2xl:w-[300px] 2xl:h-[200px]"}>
      <img
        src={`${baseUrl}/${props.post.image_url}`}
        alt="img"
        className={"rounded-t-lg"}
      />
    </div>
  );
};

const Content = (props) => {
  return (
    <div className={"p-3"}>
      <div className={"gap-2 flex "}>
        <div className={"text-h5 2xl:text-xl font-bold grid content-center"}>
          {props.post.title}
        </div>
      </div>
      <div className={"hidden 2xl:block"}>
        {props.post.content.length > 35
          ? props.post.content.slice(0, 35) + "..."
          : props.post.content}
      </div>
      <div className={"block 2xl:hidden text-h7 mt-[3px]"}>
        {props.post.content.length > 17
          ? props.post.content.slice(0, 17) + "..."
          : props.post.content}
      </div>
    </div>
  );
};
