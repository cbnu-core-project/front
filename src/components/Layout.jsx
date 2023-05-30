import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="grid grid-cols-[1100px,450px] grid-rows-[80px,1fr]">
        <Headers></Headers>
        <Outlet></Outlet>
        <SideBar></SideBar>
      </div>
    </>
  );
}

function Headers() {
  let [mystate, setMyState] = useState(false);
  let [userId, setUserId] = useState();

  useEffect(() => {
    axios.get("/api/register");
  });

  return (
    <>
      <div className="bg-white items-center opacity-80 flex pl-2 pr-16 gap-[48px] shadow-md backdrop-opacity-[25px] mt-0">
        <h1 className="w-[109px] h-[29px] text-main text-h2 font-[900] ml-[72px]">
          동아리
        </h1>
        <ul className="grid grid-cols-3 items-start gap-[80px]">
          <li className="side_tab_btn_focused">동아리</li>
          <li className="side_tab_btn">홍보게시판</li>
          <li className="side_tab_btn">공지사항</li>
        </ul>
      </div>
      <div className="bg-background pl-[40px] ">
        <div className="flex items-center mt-[15px]">
          <div className="h-[56px] w-[56px] bg-black rounded-full p-0 m-0"></div>
          <div className="pl-[8px]">
            <div>안녕하세요,</div>
            <div className="font-[600] ">부리부리 대마왕님</div>
          </div>
          <button
            className="mt-[25px] ml-[5px] material-symbols-outlined"
            onClick={() => {
              setMyState(!mystate);
            }}
          >
            expand_more
          </button>
          <span class="ml-[100px] material-symbols-outlined">
            notifications
          </span>
        </div>
        {mystate == true ? <Modal /> : null}
      </div>
    </>
  );
}

function SideBar() {
  let [myclub, setMyclub] = useState(true);
  let [schedule, setSchedule] = useState(true);
  let [register, setRegister] = useState(true);
  let [interesting, setInteresting] = useState(true);
  let [mytext, setMyText] = useState(true);

  return (
    <div className="bg-background pl-[40px]">
      <div className="flex mt-[40px]">
        <div className="side_title">나의 동아리</div>
        <button
          class="ml-[215px] material-symbols-outlined"
          onClick={() => {
            setMyclub(!myclub);
          }}
        >
          expand_more
        </button>
      </div>
      {myclub == true ? <MyClub /> : null}
      <div className="side_title mt-[20px]">월간 일정</div>
      <div className="flex mt-[25px]">
        <div className="side_title">이번주 일정</div>
        <button
          class="ml-[215px] material-symbols-outlined"
          onClick={() => {
            setSchedule(!schedule);
          }}
        >
          expand_more
        </button>
      </div>
      {schedule == true ? <WeekSchedule /> : null}
      <div className="flex mt-[20px]">
        <div className="side_title">동아리 신청 내역</div>
        <button
          className="ml-[175px] material-symbols-outlined"
          onClick={() => {
            setRegister(!register);
          }}
        >
          expand_more
        </button>
      </div>
      {register == true ? <Register /> : null}
      <div className="flex mt-[20px]">
        <div className="side_title">관심 동아리</div>
        <button
          class="ml-[215px] material-symbols-outlined"
          onClick={() => {
            setInteresting(!interesting);
          }}
        >
          expand_more
        </button>
      </div>
      {interesting == true ? <Interesting /> : null}

      <div className="flex mt-[20px]">
        <div className="side_title">내가 작성한 글</div>
        <button
          class="ml-[195px] material-symbols-outlined"
          onClick={() => {
            setMyText(!mytext);
          }}
        >
          expand_more
        </button>
      </div>
      {mytext == true ? <MyText /> : null}
    </div>
  );
}

function Modal() {
  return (
    <>
      <div className="relative">
        <div
          className={
            "grid grid-rows-2 pt-[15px] pl-[15px] absolute w-[150px] h-[100px] ml-[75px] bg-white rounded-xl shadow-md z-1"
          }
        >
          <div className="flex gap-2">
            <span class="material-symbols-outlined">account_circle</span>
            <div>프로필 사용</div>
          </div>
          <div className="flex gap-2">
            <span class="material-symbols-outlined">power_rounded</span>
            <div>로그아웃</div>
          </div>
        </div>
      </div>
    </>
  );
}

function MyClub() {
  return (
    <div className="flex gap-[18px] mt-[10px]">
      <div flex flex-row>
        <div className="club_icon"></div>
        <div className="club_text">코어</div>
      </div>
      <div flex flex-row>
        <div className="club_icon">물</div>
        <div className="club_text">물밑세상</div>
      </div>
    </div>
  );
}

function Register() {
  return (
    <div className="w-[355px] h-[55px] bg-white flex rounded-2xl mt-[10px]">
      <div className="flex flex-col justify-center ml-[10px]">
        <div className="text-black text-h7 font-[300]">[코어] 직무 동아리</div>
        <div className="text-gray text-h7 font-[300]">
          합격발표: 2023.05.16 (화) 1:30
        </div>
      </div>
      <div className="w-[60px] h-[23px] bg-[#EDEDED] text-darkgray text-h7 font-[400] rounded-lg text-center pt-[3px] ml-[100px] mt-[15px]">
        대기중
      </div>
    </div>
  );
}

function WeekSchedule() {
  return (
    <div className="flex mt-[10px] gap-[5px]">
      <div className="w-[50px] h-[80px] bg-main_mid rounded-2xl flex flex-col text-center justify-center">
        <div className="text-[10px] font-[200] text-white">Sun</div>
        <div className="text-h6 font-[600]  text-white">15</div>
      </div>
      <div className="flex flex-col w-[300px] h-[80px] bg-white pl-[10px] pt-[10px]">
        <div className="text-black text-h7 font-[300]">코어 동아리 회의</div>
        <div className="text-gray text-h7 font-[300]">18:00~22:00</div>
        <div className="text-gray text-h7 font-[300]">NH관 202호</div>
      </div>
    </div>
  );
}

function Interesting() {
  return (
    <div className="flex gap-[18px] mt-[10px]">
      <div flex flex-row>
        <div className="club_icon"></div>
        <div className="club_text">코어</div>
      </div>
      <div flex flex-row>
        <div className="club_icon">물</div>
        <div className="club_text">물밑세상</div>
      </div>
    </div>
  );
}

function MyText() {
  return (
    <div className="w-[355px] h-[55px] bg-white rounded-2xl mt-[10px]">
      <div className="flex flex-col justify-center ml-[13px]">
        <div className="flex mt-[10px]">
          <div className="w-[2px] h-[13px] bg-main_mid mt-[3px] rounded-sm"></div>
          <div className=" text-gray text-h7 font-[300] ml-[3px]">
            우리 동아리 게시판
          </div>
        </div>
        <div className="flex">
          <div className=" text-black text-h7 font-[300]">제목입니다.</div>
          <div className=" text-gray text-[10px] font-[300] ml-[200px]">
            2023.05.17
          </div>
        </div>
      </div>
    </div>
  );
}
