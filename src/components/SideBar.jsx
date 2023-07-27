import { useEffect, useState } from "react";
import Calendar from "./Calendar";
import axios from "axios";
import { baseUrl } from "../common/global";
import Login from "../pages/Login";
import { useNavigate } from "react-router-dom";
import {
  getAccessToken,
  setAccessToken,
  setRefreshToken,
} from "../utils/token";
import { useRecoilState } from "recoil";
import { schedulesState, tokenState } from "../store";
import { readAllClubs } from "../api/club";

axios.defaults.baseURL = baseUrl;

//google icon 불러오는 링크
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>;

export default function SideBar() {
  const navigate = useNavigate();
  //사이드바 세부적인 열기/닫기 기능 구현을 위한 변수들, 구역마다 함수로 빼놓음
  let [myclub, setMyclub] = useState(true); //나의 동아리
  let [calender, setCalender] = useState(true); //월간 일정
  let [schedule, setSchedule] = useState(true); //이번주 일정
  let [register, setRegister] = useState(true); //동아리 신청내역
  let [interesting, setInteresting] = useState(true); //관심 동아리
  let [mytext, setMyText] = useState(true); //내가 작성한 글
  let [mystate, setMyState] = useState(false); //닉네임 옆 역삼각형 누를 때 생기는 창(모달)

  let [user, setUser] = useState({}); //유저 정보
  let [token, setToken] = useRecoilState(tokenState); //토큰

  useEffect(() => {
    //유저 정보 받아옴
    axios.get("api/user/info").then((response) => {
      setUser(response.data);
    });
  }, [token]);

  if (token) {
    //로그인 됐을 때만 보임
    return (
      <div
        className="bg-background pl-[40px] pr-[40px] w-side fixed h-screen overflow-y-scroll top-0 right-0 z-10"
        onClick={() => {
          setMyState(false); //닉네임 옆 역삼각형 아이콘 외에 다른 구역을 클릭하면 모달창이 닫히도록 하기 위함
        }}
      >
        <div className="w-full flex items-center mt-[15px]">
          <span
            class="text-[56px] text-4F4F4F material-symbols-outlined cursor-pointer"
            onClick={() => {
              navigate("/mypage/"); //프로필 클릭 시 마이페이지로 이동
            }}
          >
            account_circle
          </span>
          <div className="pl-[8px] leading-[20px] w-full">
            <div>안녕하세요,</div>
            {/* 유저 닉네임 들어감 */}
            <div>
              {user.nickname}님
              <i
                className="cursor-pointer ml-[8px] fa-solid fa-play fa-rotate-90 fa-2xs"
                style={{ color: "#a7aaae" }}
                onClick={(event) => {
                  setMyState(!mystate); //클릭 시 창 열림/닫힘
                  event.stopPropagation(); //배경에 설정해놓은 setMyState(false)가 이 구역에서는 실행되지 않도록 함
                }}
              ></i>
            </div>
          </div>

          <span class="cursor-pointer ml-outo material-symbols-outlined" 
          onClick={() => {
                  alert("서비스 준비중입니다");
                }}>
            notifications
          </span>
          {/* 참일 때 닉네임 옆 역삼각형 누를 때 나오는 창이 뜸 */}
        </div>
        {mystate == true ? <Modal /> : null}
        <div className="flex mt-[40px] ">
          <div className="side_title ">나의 동아리</div>
          <button
            class="ml-auto material-symbols-outlined "
            onClick={() => {
              setMyclub(!myclub);
            }} //버튼 클릭 시에 '나의 동아리' 정보 열림/닫힘
          >
            expand_more
          </button>
          {/* 참일 때 '나의 동아리' 정보 열림*/}
        </div>
        {myclub == true ? <MyClub /> : null}

        <div className="flex mt-[20px] w-full">
          <div className="side_title ">월간 일정</div>
          <button
            class="ml-auto material-symbols-outlined"
            onClick={() => {
              setCalender(!calender); //버튼 클릭 시에 '월간 일정' 정보 열림/닫힘
            }}
          >
            expand_more
          </button>
        </div>
        {calender == true ? <Calendar /> : null}
        {/* 참일 때 '이번주 일정' 정보 열림*/}
        <div className="flex mt-[25px] w-full">
          <div className="side_title">이번주 일정</div>
          <button
            class="ml-auto material-symbols-outlined"
            onClick={() => {
              setSchedule(!schedule);
            }} //버튼 클릭 시에 '이번주 일정' 정보 열림/닫힘
          >
            expand_more
          </button>
        </div>
        {schedule == true ? <WeekSchedule /> : null}
        {/* 참일 때 '이번주 일정' 정보 열림*/}
        {/* <div className="flex mt-[20px] w-full">
          <div className="side_title">동아리 신청 내역</div>
          <button
            className="ml-auto material-symbols-outlined"
            onClick={() => {
              setRegister(!register);
            }}
          >
            expand_more
          </button>
        </div>
        {register == true ? <Register /> : null} */}
        {/* 참일 때 '동아리 신청 내역' 정보 열림*/}
        <div className="flex mt-[20px]">
          <div className="side_title w-full ">관심 동아리</div>
          <button
            class="ml-outo material-symbols-outlined"
            onClick={() => {
              setInteresting(!interesting); //버튼 클릭 시에 '관심 동아리' 정보 열림/닫힘
            }}
          >
            expand_more
          </button>
        </div>
        {interesting == true ? <Interesting /> : null}
        {/* 참일 때 '관심동아리' 정보 열림*/}
        {/* <div className="flex mt-[20px] w-full">
          <div className="side_title">내가 작성한 글</div>
          <button
            class="ml-auto material-symbols-outlined"
            onClick={() => {
              setMyText(!mytext); //버튼 클릭 시에 '내가 작성한 글' 정보 열림/닫힘
            }}
          >
            expand_more
          </button>
        </div>
        {mytext == true ? <MyText /> : null} */}
        {/* 참일 때 '내가 작성한 글' 정보 열림*/}
        <div className={"mt-[32px]"} />
      </div>
    );
  } else {
    //로그아웃 시에 보임
    return (
      <div className="bg-background pl-[40px] pr-[40px] w-side fixed h-screen overflow-y-scroll top-0 right-0 z-10">
        <Login></Login>
      </div>
    );
  }
}

function Modal() {
  //최상단 닉네임 옆 역삼각형 누르면 뜨는 창
  const [token, setToken] = useRecoilState(tokenState);

  return (
    <>
      <div className="relative">
        <div
          className={
            "grid grid-rows-2 pt-[15px] pl-[15px] absolute w-[150px] h-[100px] ml-[50px] bg-white rounded-xl shadow-md z-1"
          }
        >
          <div className="flex gap-2">
            <span class="material-symbols-outlined">account_circle</span>
            <div>프로필 사용</div>
          </div>
          <div
            className="flex gap-2 cursor-pointer"
            onClick={() => {
              axios
                .post("/api/header/access_token/logout", {
                  access_token: getAccessToken(),
                })
                .then((res) => {
                  // 로그아웃
                  setAccessToken();
                  setRefreshToken();
                  setToken(""); //빈 토큰 설정==로그아웃
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            <span class="material-symbols-outlined">power_rounded</span>
            <div>로그아웃</div>
          </div>
        </div>
      </div>
    </>
  );
}

function MyClub() {
  //'내 동아리'정보
  let [userInfo, setUserInfo] = useState([]); //유저 동아리 정보
  let [token, setToken] = useRecoilState(tokenState);
  let [clubs, setClubs] = useState([]); //모든 동아리 이름 정보

  const navigate = useNavigate();

  useEffect(() => {
    //유저 동아리 정보 불러옴
    axios.get("api/user/clubs").then((response) => {
      setUserInfo(response.data);
    });
  }, [token]);

  useEffect(() => {
    //모든 동아리 정보 불러옴
    readAllClubs(0).then((res) => {
      setClubs(res.data);
    });
  }, [userInfo]);

  return (
    <>
      <div className="grid grid-cols-5 gap-[18px] mt-[10px]">
        {clubs.map((club) => {
          for (let i = 0; i < userInfo.length; i++) {
            if (club["_id"] == userInfo[i]) {
              //모든 동아리 아이디 하나씩 유저 동아리와 동일한지 비교
              return (
                //일치하면 실행
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    navigate("/clubdetail/" + userInfo[i] + "/clubintroduce");
                    // window.location.reload();
                    // navigate로 부드럽게 이동하도록 수정. id를 deps에 줌.
                  }}
                >
                  {/* 사각 아이콘 안에 첫글자만 보여줌 */}
                  <div className="grid justify-center">
                    <div className="club_icon">{club.title.charAt(0)}</div>
                  </div>
                  <div className="text-center ">{club.title}</div>
                  {/* 동아리 이름 출력 */}
                </div>
              );
            }
          }
        })}
      </div>
    </>
  );
}

function Register() {
  //'동아리 신청내역'정보
  return (
    <div className="w-full h-[55px] bg-white flex rounded-2xl mt-[10px]">
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
  //'이번주 일정'정보
  const [schedules, setSchedule] = useRecoilState(schedulesState);
  const day_list = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; // 0 ~ 6 ( 일 ~ 토 ) 임을 주의하자.
  let today = new Date();
  let this_week_monday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - today.getDay() + 1,
    0,
    0,
    0
  );
  let this_week_sunday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - today.getDay() + 1 + 6,
    24,
    0,
    0
  );

  // return 여기 빠트려서 오래 헤맸음.. 기억해두자.
  return schedules.map((schedule) => {
    const startDateTime = new Date(schedule.start_datetime);
    const endDateTime = new Date(schedule.end_datetime);

    // console.log(this_week_monday.getTime());
    // console.log(startDateTime.getTime());
    // console.log(this_week_sunday.getTime());
    // console.log(this_week_sunday);
    if (
      this_week_monday.getTime() <= startDateTime.getTime() &&
      startDateTime.getTime() <= this_week_sunday.getTime()
    ) {
      return (
        <div className="flex mt-[10px] gap-[5px]">
          <div className="w-[50px] h-[80px] bg-main_mid rounded-2xl flex flex-col text-center justify-center">
            <div className="text-[10px] font-[200] text-white">
              {day_list[startDateTime.getDay()]}
            </div>
            <div className="text-h6 font-[600]  text-white">
              {startDateTime.getDate()}
            </div>
          </div>
          <div className="flex flex-col w-full h-[80px] bg-white pl-[10px] pt-[10px]">
            <div className="text-black text-h7 font-[300]">
              {schedule.club_name} - {schedule.title}
            </div>
            <div className="text-gray text-h7 font-[300]">
              {startDateTime.getHours()}:{startDateTime.getMinutes()}~
              {endDateTime.getHours()}:{endDateTime.getMinutes()}
            </div>
            <div className="text-gray text-h7 font-[300]">{schedule.place}</div>
          </div>
        </div>
      );
    }
  });
}

function Interesting() {
  //'관심동아리'정보
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
  //'내가 작성한 글'정보
  return (
    <div className="w-full h-[55px] bg-white rounded-2xl mt-[10px]">
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
