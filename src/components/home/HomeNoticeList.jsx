import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { noticesState } from "../../store";
import { useEffect } from "react";
import { readSomeNotices } from "../../api/notice";

export default function HomeNoticeList() {
  const navigate = useNavigate();
  const [notices, setNotices] = useRecoilState(noticesState);

  const getPosts = () => {
    readSomeNotices(0, 5).then((res) => {
      setNotices(res.data);
    });
  };

  useEffect(() => getPosts(), []);

  return (
    <>
      <div className={"px-8 2xl:px-16"}>
        <div className={"text-[32px] text-main"}>
          서비스 <span className={"font-bold"}>공지사항</span>
        </div>
        <div className={"mt-[18px]"} />
        <div>
          <ul className={"bg-background rounded-[20px] text-h4"}>
            {notices.map((notice, index) => {
              return (
                <li
                  className={
                    index === 4
                      ? "px-[24px] py-[21px] flex justify-between hover:bg-gray3 rounded-[20px]"
                      : "px-[24px] py-[21px] flex justify-between border-b-[0.5px] border-gray2 hover:bg-gray3"
                  }
                >
                  <div className={"text-black"}>
                    {notice.title.length > 50
                    ? notice.title.slice(0, 50) + "..."
                    : notice.title}</div>
                  <div className={"text-midgray flex-end"}>{DateFromObject(notice._id).toISOString().substring(0, 10)}</div>
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
            전체보기
          </button>
        </div>
      </div>
    </>
  );
}

function DateFromObject(objid) { //오브젝트 아이디로부터 시간 받아오는 함수
  return new Date(parseInt(objid.substring(0, 8), 16) * 1000);
}
