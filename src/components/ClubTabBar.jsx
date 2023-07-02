import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ClubTabBar() {
  let [clubtab, setClubTab] = useState(0);
  let navigate = useNavigate();

  // 처음 실행 될 때 동아리소개 페이지로 이동
  useEffect(()=>{
    navigate('./clubintroduce')
  }, []);

  return (
    <>
      <div className={"flex gap-4"}>
        <button
          className={clubtab === 0 ? "btn-home-tab-focused" : "btn-home-tab"}
          onClick={() => {
            setClubTab(0);
            navigate("./clubintroduce");
          }}
        >
          동아리 소개
        </button>
        <button
          className={clubtab === 1 ? "btn-home-tab-focused" : "btn-home-tab"}
          onClick={() => {
            setClubTab(1);
            navigate("./clubboard");
          }}
        >
          활동기록
        </button>
        <button
          className={clubtab === 2 ? "btn-home-tab-focused" : "btn-home-tab"}
          onClick={() => {
            setClubTab(2);
            navigate("./clubschedule");
          }}
        >
          일정
        </button>
        <button
          className={clubtab === 3 ? "btn-home-tab-focused" : "btn-home-tab"}
          onClick={() => {
            setClubTab(3);
            navigate("./clubsignup");
          }}
        >
          가입신청
        </button>
        <button
          className={clubtab === 4 ? "btn-home-tab-focused" : "btn-home-tab"}
          onClick={() => {
            setClubTab(4);
            navigate("./clubfaq");
          }}
        >
          FAQ
        </button>
        <button
          className={clubtab === 5 ? "btn-home-tab-focused" : "btn-home-tab"}
          onClick={() => {
            setClubTab(5);
            navigate("./clubmanagement");
          }}
        >
          동아리 관리
        </button>
      </div>
    </>
  );
}
