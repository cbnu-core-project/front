import React, { useEffect, useState } from "react";
import {
  selectedClubScheduleDateState,
  clubSchedulesState,
  postStatusState,
  clubScheduleSelectedStatusState,
  updateScheduleState,
  userInfoState,
} from "../../store";
import { useRecoilState } from "recoil";
import axios from "axios";
import ScheduleDetaile from "../../components/ScheduleDetail";
import { useNavigate, useParams } from "react-router-dom";
import * as dayjs from "dayjs";
import { bg_colors } from "../../common/colors";
import "./ClubSchedule.css";

export default function ClubSchedule() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useRecoilState(
    selectedClubScheduleDateState
  );
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [schedules, setSchedules] = useRecoilState(clubSchedulesState); // user에 맞는 정보 불러와 넣을 곳
  const [selectedStatus, setSelectedStatus] = useRecoilState(
    clubScheduleSelectedStatusState
  );
  const [count, setCount] = useState(-1);
  const [postStatus, setPostStatus] = useRecoilState(postStatusState);
  const { id } = useParams();
  const day_list = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // tailwindcss 사전 빌드 작업을 위해 필요한 class 리스트 (사용x)
  const col_span = [
    "col-span-1",
    "col-span-2",
    "col-span-3",
    "col-span-4",
    "col-span-5",
    "col-span-6",
    "col-span-7",
  ];
  const col_start = [
    "col-start-1",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
  ];

  const left = [
    "left-[0px]",
    "left-[180px]",
    "left-[360px]",
    "left-[540px]",
    "left-[720px]",
    "left-[900px]",
    "left-[1080px]",
    "left-[1260px]",
  ];

  ////////////////////////////////////////////////////////////////////////////
  const getClubSchedules = () => {
    axios.get("/api/user/schedule/club_objid/" + id).then((res) => {
      const schedules = res.data;
      let copy_schedules1 = [];
      let copy_schedules2 = [];

      // 일정이 2일이상이면 맨 앞으로 정렬
      for (let i in schedules) {
        const startDateTime = dayjs(schedules[i].start_datetime);
        const endDateTime = dayjs(schedules[i].end_datetime);

        if (endDateTime.diff(startDateTime, "day") > 0) {
          copy_schedules1.push(schedules[i]);
        } else {
          copy_schedules2.push(schedules[i]);
        }
      }

      setSchedules([...copy_schedules1, ...copy_schedules2]);
    });
  };
  ////////////////////////////////////////////////////////////////////////////

  // 날짜를 클릭할 때 마다 새로운 스케줄 데이터를 불러옴.
  // 이거는 한 번 불러온거로 계속 쓸 건 지, 매번 계속 불러올 건지 선택해야한다.
  useEffect(() => {
    getClubSchedules();
  }, [selectedDate]);

  ////////////////////////////////////////////////////////////////////////////
  // 달력을 구성하는 날짜 배열 생성
  const getCalendarDateMatrix = () => {
    let matrix = [];
    let week = [];
    for (let i = 1; i <= 42; i++) {
      let year = currentDate
        .startOf("month")
        .startOf("week")
        .add(i - 1, "day")
        .get("year");
      let month = currentDate
        .startOf("month")
        .startOf("week")
        .add(i - 1, "day")
        .get("month");
      let date = currentDate
        .startOf("month")
        .startOf("week")
        .add(i - 1, "day")
        .get("date");

      if (i % 7 !== 0) {
        week.push({ year: year, month: month, date: date, scheduleCount: 0 });
        continue;
      }

      week.push({ year: year, month: month, date: date, scheduleCount: 0 });

      // 현재  month와 다른 month의 주로만 이루어진 줄이 생기지 않도록 체크
      let count = 0;
      for (let j = 0; j < 7; j++) {
        if (week[j].month !== currentDate.get("month")) {
          count += 1;
        }
      }
      // 만약 week에 현재 달의 날짜가 포함되어있는 행이면 추가
      if (count < 7) {
        matrix.push(week);
      }

      // 만약 42일로 표현하고 싶으면 위에 대신 밑에 줄 사용
      // matrix.push(week);
      week = [];
    }

    return matrix;
  };
  ////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////
  // 기록할 변수
  let dateMatrix = getCalendarDateMatrix();
  let scheduleFromDate = [];
  for (let i = 0; i < 42; i++) {
    scheduleFromDate.push([]);
  }
  ////////////////////////////////////////////////////////////////////////////

  // 이전 달로 이동
  const goToPrevMonth = () => {
    const currentMonth = currentDate.get("month");
    const prevMonth = currentDate.set("month", currentMonth - 1);
    setCurrentDate(prevMonth);
  };

  // 다음 달로 이동
  const goToNextMonth = () => {
    const currentMonth = currentDate.get("month");
    const nextMonth = currentDate.set("month", currentMonth + 1);
    setCurrentDate(nextMonth);
  };

  // 일정리스트 창을 닫기 위한 함수
  const onListClose = () => {
    setSelectedStatus(false);
  };

  return (
    <>
      {/*
      수정하기/등록하기 버튼 을 눌렀을 때, 캘린더를 수정/등록 화면으로 전부 대체
      */}
      {postStatus ? (
        <ClubSchedulePostAndPut
          getSchedules={getClubSchedules} // 동아리 일정 전체 재 랜더링을 위한 함수
        />
      ) : (
        <div className="mx-auto p-[32px] w-[1326px] relative">
          {/* 날짜를 클릭 시 띄워 줄 그 날의 일정리스트 */}
          {selectedStatus ? (
            <div
              className={"w-screen h-screen fixed z-40 pl-[380px]"}
              onClick={onListClose}
            >
              <ClubDateScheduleList
                scheduleFromDate={scheduleFromDate}
                selectedDate={selectedDate}
                selectedDateIndex={selectedDateIndex}
                setSelectedStatus={setSelectedStatus}
                getSchedules={getClubSchedules} // 동아리 일정 전체 재 랜더링을 위한 함수
              />
            </div>
          ) : null}

          <div className="flex items-center justify-center mb-4 gap-[20px]">
            <span
              className="material-symbols-outlined text-midgray hover:text-darkgray cursor-pointer"
              onClick={goToPrevMonth}
            >
              chevron_left
            </span>
            <h2 className="text-h2 font-bold">
              {`${currentDate.get("year")}.${String(
                currentDate.get("month") + 1
              ).padStart(2, "0")}`}
            </h2>
            <span
              className="material-symbols-outlined text-midgray hover:text-darkgray cursor-pointer"
              onClick={goToNextMonth}
            >
              chevron_right
            </span>
          </div>
          <div className="grid grid-cols-7">
            {day_list.map((day) => (
              <div key={day} className="text-center text-h5 text-midgray">
                {day}
              </div>
            ))}
          </div>

          {/**
         화면 ( -1 ) ( 최하단의 화면 )
         */}
          <div
            className={
              "text-gray2 absolute grid grid-cols-7 border-t border-l border-gray3 -z-10"
            }
          >
            {dateMatrix.map((week, i) => {
              return week.map((day, j) => {
                return (
                  <div
                    className={
                      "w-[180px] h-[180px] border-b border-r border-gray3"
                    }
                  ></div>
                );
              });
            })}
          </div>

          {/**
         화면 ( 0 ) ( 가운데 화면 ) But, 일정버튼만 맨 위로 z-20( 2 )
         */}
          <div className={"text-gray2 absolute"}>
            {dateMatrix.map((week, i) => {
              return (
                // week 박스
                <div
                  className={
                    "h-[180px] grid grid-flow-row-dense grid-cols-7 grid-rows-20 overflow-hidden"
                  }
                  id={"week"}
                >
                  {week.map((day, j) => {
                    return (
                      <>
                        {/*date 표시 박스*/}
                        <div
                          className={`w-[180px] h-[36px] p-[4px] row-start-1 col-start-${
                            j + 1
                          } ${
                            currentDate.get("year") === day.year &&
                            currentDate.get("month") === day.month
                              ? "text-black"
                              : ""
                          }
                        `}
                        >
                          <div className={"flex justify-between"}>
                            <div></div>
                            <div>{day.date}</div>
                          </div>
                        </div>

                        {/*일정 그려주기*/}
                        {schedules.map((schedule, index) => {
                          const startDateTime = dayjs(
                            schedule.calendar_start_datetime
                          );
                          const endDateTime = dayjs(schedule.end_datetime);
                          const scheduleLength = schedule.schedule_length;

                          if (
                            day.year === startDateTime.get("year") &&
                            day.month === startDateTime.get("month") &&
                            day.date === startDateTime.get("date")
                          ) {
                            // 현재 날에 있는 일정들을 구하는 코드
                            for (let k = 0; k < scheduleLength; k++) {
                              scheduleFromDate[i * 7 + j + k].push(schedule);
                            }
                            // console.log(scheduleFromDate);

                            return (
                              <>
                                <div
                                  className={`m-[1px] z-20 h-[16px] ${
                                    bg_colors[schedule.color]
                                  } cursor-pointer rounded-2xl pl-[10px] mx-[4px] col-start-${
                                    startDateTime.get("day") + 1
                                  } col-span-${scheduleLength}`}
                                >
                                  <div
                                    className={"text-gray3 text-h7 font-[400]"}
                                    onClick={() => {
                                      if (count >= 0 && index === count) {
                                        setCount(-1);
                                      } else {
                                        setCount(index);
                                      }
                                    }}
                                  >
                                    {schedule.title.length <= 14 ? (
                                      <span>{schedule.title}</span>
                                    ) : (
                                      <span>
                                        {schedule.title.slice(0, 13)}..
                                      </span>
                                    )}

                                    {/*
                                  {count === index ? (
                                    <div className={`z-30`}>
                                      <ScheduleDetaile
                                        schedule={schedule}
                                        setCount={setCount}
                                        getSchedules={getClubSchedules}
                                      />
                                    </div>
                                  ) : null}
                                  */}
                                  </div>
                                </div>
                                {count === index ? (
                                  <div
                                    className={`col-start-${
                                      startDateTime.get("day") + 1
                                    } col-span-${scheduleLength} flex justify-end`}
                                  >
                                    <ScheduleDetaile
                                      type={"club"}
                                      schedule={schedule}
                                      setCount={setCount}
                                      color={schedule.color}
                                      getSchedules={getClubSchedules}
                                    />
                                  </div>
                                ) : null}
                              </>
                            );
                          }
                        })}
                      </>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/**
         화면 ( 1 ) ( 최상단의 화면 )
         */}
          <div className={"absolute grid grid-cols-7 z-10"}>
            {dateMatrix.map((week, i) => {
              return week.map((day, j) => {
                return (
                  <div
                    className={`w-[180px] h-[180px] hover:bg-main_mid hover:opacity-20 ${
                      selectedDate.get("year") === dateMatrix[i][j].year &&
                      selectedDate.get("month") === dateMatrix[i][j].month &&
                      selectedDate.get("date") === dateMatrix[i][j].date
                        ? "bg-main_mid opacity-20"
                        : ""
                    }`}
                    onClick={() => {
                      setSelectedDate(
                        dayjs(
                          `${dateMatrix[i][j].year}-${
                            dateMatrix[i][j].month + 1
                          }-${dateMatrix[i][j].date}`
                        )
                      );
                      /* 내일 이 부분을 이용해 당일 일정 화면을 띄우자.*/
                      setSelectedStatus(true);
                      setSelectedDateIndex(i * 7 + j);
                    }}
                  ></div>
                );
              });
            })}
          </div>
        </div>
      )}

      {/* 하단 간격 */}
      {postStatus ? (
        <div className={"h-[100px]"} />
      ) : (
        <div className={"h-[1300px]"} />
      )}
    </>
  );
}

const ClubDateScheduleList = (props) => {
  const schedules = props.scheduleFromDate[props.selectedDateIndex];
  const [count, setCount] = useState(-1);

  console.log(props.as); // undefined

  const onClose = () => {
    props.setSelectedStatus(false);
  };

  return (
    <div>
      <div
        className={
          "text-black w-[500px] h-[700px] bg-gray3 p-[32px] rounded-[40px]"
        }
        onClick={(e) => {
          e.stopPropagation(); // 부모요소까지 클릭이 전파되지 않도록 막기
        }}
      >
        <div className={"h-[60px] text-center text-h2 font-[700]"}>
          <span>{props.selectedDate.get("year")}년</span>{" "}
          <span>{props.selectedDate.get("month") + 1}월</span>{" "}
          <span>{props.selectedDate.get("date")}일</span>
        </div>
        <div
          className="ml-[412px] top-[32px] absolute text-center flex flex-col justify-center rounded-full bg-[#C1C1C1] w-[20px] h-[20px] cursor-pointer hover:bg-red_error"
          onClick={onClose}
        >
          <span className="material-symbols-outlined text-white text-[10px] font-thin">
            close
          </span>
        </div>
        <div
          className={`w-full h-[6px] bg-main_mid rounded-full mx-auto`}
        ></div>
        <div className={"flex w-full mt-[40px]"}>
          <div className={"w-[76px]"}>
            <i className="fa-regular fa-calendar-check fa-2xl"></i>
          </div>
          <div>
            {schedules.map((schedule, index) => {
              const startDateTime = dayjs(schedule.start_datetime);
              const endDateTime = dayjs(schedule.end_datetime);
              const day_list = ["일", "월", "화", "수", "목", "금", "토"];

              return (
                <>
                  <div
                    className={"flex gap-[12px]"}
                    onClick={() => {
                      if (count >= 0 && index === count) {
                        setCount(-1);
                      } else {
                        setCount(index);
                      }
                    }}
                  >
                    <div
                      className={`w-[4px] h-[28px] ${
                        bg_colors[schedule.color]
                      } rounded-full`}
                    ></div>
                    <div>
                      <p className={"text-h3 font-[600] w-[360px]"}>
                        {schedule.title}
                      </p>
                      <p className={"text-h5 text-gray font-[400]"}>
                        {startDateTime.get("month") + 1}월{" "}
                        {startDateTime.get("date")}일{" "}
                        {day_list[startDateTime.get("day")]}요일{" "}
                        {startDateTime.get("hour")}:
                        {startDateTime.get("minute")} ~{" "}
                        {endDateTime.get("month") + 1}월{" "}
                        {endDateTime.get("date")}일{" "}
                        {day_list[endDateTime.get("day")]}
                        요일 {endDateTime.get("hour")}:
                        {endDateTime.get("minute")}
                      </p>
                    </div>
                  </div>
                  <div>
                    {count === index ? (
                      <ScheduleDetaile
                        type={"club"}
                        schedule={schedule}
                        setCount={setCount}
                        color={schedule.color}
                        getSchedules={props.getSchedules}
                      />
                    ) : null}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const ClubSchedulePostAndPut = (props) => {
  const [postStatus, setPostStatus] = useRecoilState(postStatusState);
  const [updateSchedule, setUpdateSchedule] =
    useRecoilState(updateScheduleState);
  const [users, setUsers] = useState([]);
  const [userInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    // 유저 정보 리스트 불러오기
    axios
      .post("/api/user/info/user_objid_list", {
        users: updateSchedule.users,
      })
      .then((res) => {
        /* 여기 작업하다가 말음 유저정보 불러와서 users state에 넣어주면 될듯 그리고 출력*/
        setUsers(res.data);
      });
  }, []);

  const changeColor = (color) => {
    let copy = { ...updateSchedule };
    copy.color = color;
    setUpdateSchedule(copy);
  };

  const handleSubmit = () => {
    if (postStatus === "post") {
      return false;
    } else if (postStatus === "put") {
      axios
        .put(
          `/api/user/schedule/${updateSchedule.relative_schedule_unique_id}`,
          {
            user_objid: userInfo._id,
            user_unique_id: userInfo.unique_id,
            realname: userInfo.realname,
            email: userInfo.email,
            club_objid: updateSchedule.club_objid,
            club_name: updateSchedule.club_name,
            title: updateSchedule.title,
            content: updateSchedule.content,
            place: updateSchedule.place,
            users: updateSchedule.users,
            color: updateSchedule.color,
            start_datetime: updateSchedule.start_datetime,
            end_datetime: updateSchedule.end_datetime,
          }
        )
        .then((res) => {
          props.getSchedules();
          setPostStatus(false);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <form
      className={"px-[40px] py-[32px] w-[986px] shadow-2xl rounded-3xl m-auto"}
    >
      <div className={"text-h1"}>일정 등록</div>
      <div className={"h-[40px]"} />
      <div className={"flex h-[48px]"}>
        <label
          className={
            "w-[150px] text-h2 font-[500] flex flex-col justify-center"
          }
          htmlFor={"title"}
        >
          제목
        </label>
        <input
          className={
            "bg-gray3 w-[756px] px-[14px] py-[10px] text-h5 rounded-xl"
          }
          id={"title"}
          name={"title"}
          type={"text"}
          placeholder={"제목을 입력 해 주세요."}
          value={updateSchedule.title}
          onChange={(e) => {
            if (e.target.value.length <= 24) {
              let copy = { ...updateSchedule };
              copy.title = e.target.value;
              setUpdateSchedule(copy);
            }
          }}
        ></input>
      </div>
      <div className={"h-[40px]"} />
      <div className={"flex h-[48px]"}>
        <label
          className={
            "w-[150px] text-h2 font-[500] flex flex-col justify-center"
          }
          htmlFor={"startdatetime"}
        >
          날짜
        </label>
        <div>
          <input
            className={"bg-gray3 px-[14px] py-[10px] text-h5 rounded-xl"}
            id={"startdatetime"}
            name={"startdatetime"}
            type={"datetime-local"}
            value={dayjs(updateSchedule.start_datetime).format(
              "YYYY-MM-DDTHH:mm"
            )}
            onChange={(e) => {
              let copy = { ...updateSchedule };
              copy.start_datetime = e.target.value;
              setUpdateSchedule(copy);
            }}
          ></input>{" "}
          ~{" "}
          <input
            className={"bg-gray3 px-[14px] py-[10px] text-h5 rounded-xl"}
            id={"enddatetime"}
            name={"enddatetime"}
            type={"datetime-local"}
            value={dayjs(updateSchedule.end_datetime).format(
              "YYYY-MM-DDTHH:mm"
            )}
            onChange={(e) => {
              let copy = { ...updateSchedule };
              copy.end_datetime = e.target.value;
              setUpdateSchedule(copy);
            }}
          ></input>
        </div>
      </div>
      <div className={"h-[40px]"} />
      <div className={"flex h-[48px]"}>
        <label
          className={
            "w-[150px] text-h2 font-[500] flex flex-col justify-center"
          }
          htmlFor={"place"}
        >
          장소
        </label>
        <input
          className={
            "bg-gray3 w-[756px] px-[14px] py-[10px] text-h5 rounded-xl"
          }
          id={"place"}
          name={"place"}
          placeholder={"모이는 장소를 입력 해 주세요."}
          value={updateSchedule.place}
          onChange={(e) => {
            if (e.target.value.length <= 15) {
              let copy = { ...updateSchedule };
              copy.place = e.target.value;
              setUpdateSchedule(copy);
            }
          }}
        ></input>
      </div>
      <div className={"h-[40px]"} />
      <div className={"flex h-[48px]"}>
        <label
          className={
            "w-[150px] text-h2 font-[500] flex flex-col justify-center"
          }
        >
          참석자
        </label>
        <div
          className={"grid grid-cols-8 gap-[3px] h-[52px] overflow-y-scroll"}
        >
          {users.map((user) => {
            return (
              <div className={"flex gap-[5px]"}>
                <img
                  src={user.profile_image_url}
                  alt={"profile"}
                  className={"rounded-full w-[24px] h-[24px]"}
                />
                {user.realname.length <= 3 ? (
                  <div className={"pt-[2px]"}>{user.realname}</div>
                ) : (
                  <div className={"pt-[2px]"}>
                    {user.realname.slice(0, 2)}..
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className={"h-[40px]"} />
      <div className={"flex"}>
        <label
          className={
            "w-[150px] text-h2 font-[500] flex flex-col justify-center h-[48px]"
          }
          htmlFor={"content"}
        >
          설명
        </label>
        <textarea
          className={
            "bg-gray3 w-[756px] h-[240px] px-[14px] py-[10px] text-h5 rounded-xl"
          }
          id={"content"}
          name={"content"}
          placeholder={"일정에 대한 설명을 입력 해 주세요."}
          value={updateSchedule.content}
          onChange={(e) => {
            if (e.target.value.length <= 1000) {
              let copy = { ...updateSchedule };
              copy.content = e.target.value;
              setUpdateSchedule(copy);
            }
          }}
        ></textarea>
      </div>
      <div className={"h-[40px]"} />
      <div className={"flex h-[48px]"}>
        <div className={"w-[150px] text-h2 font-[500]"}>색상 선택</div>
        <div className={"flex gap-[20px]"}>
          <div
            className={
              "w-[50px] h-[50px] rounded-full bg-red hover:scale-125 flex flex-col justify-center text-center"
            }
            onClick={() => {
              changeColor("red");
            }}
          >
            {updateSchedule.color === "red" ? (
              <i className="fa-solid fa-check fa-2xl text-black"></i>
            ) : null}
          </div>
          <div
            className={
              "w-[50px] h-[50px] rounded-full bg-orange hover:scale-125 flex flex-col justify-center text-center"
            }
            onClick={() => {
              changeColor("orange");
            }}
          >
            {updateSchedule.color === "orange" ? (
              <i className="fa-solid fa-check fa-2xl text-black"></i>
            ) : null}
          </div>
          <div
            className={
              "w-[50px] h-[50px] rounded-full bg-yellow hover:scale-125 flex flex-col justify-center text-center"
            }
            onClick={() => {
              changeColor("yellow");
            }}
          >
            {updateSchedule.color === "yellow" ? (
              <i className="fa-solid fa-check fa-2xl text-black"></i>
            ) : null}
          </div>
          <div
            className={
              "w-[50px] h-[50px] rounded-full bg-green hover:scale-125 flex flex-col justify-center text-center"
            }
            onClick={() => {
              changeColor("green");
            }}
          >
            {updateSchedule.color === "green" ? (
              <i className="fa-solid fa-check fa-2xl text-black"></i>
            ) : null}
          </div>
          <div
            className={
              "w-[50px] h-[50px] rounded-full bg-blue hover:scale-125 flex flex-col justify-center text-center"
            }
            onClick={() => {
              changeColor("blue");
            }}
          >
            {updateSchedule.color === "blue" ? (
              <i className="fa-solid fa-check fa-2xl text-black"></i>
            ) : null}
          </div>
          <div
            className={
              "w-[50px] h-[50px] rounded-full bg-indigo hover:scale-125 flex flex-col justify-center text-center"
            }
            onClick={() => {
              changeColor("indigo");
            }}
          >
            {updateSchedule.color === "indigo" ? (
              <i className="fa-solid fa-check fa-2xl text-black"></i>
            ) : null}
          </div>
          <div
            className={
              "w-[50px] h-[50px] rounded-full bg-purple hover:scale-125 flex flex-col justify-center text-center"
            }
            onClick={() => {
              changeColor("purple");
            }}
          >
            {updateSchedule.color === "purple" ? (
              <i className="fa-solid fa-check fa-2xl text-black"></i>
            ) : null}
          </div>
        </div>
      </div>
      <div className={"h-[40px]"} />
      <div className={"text-end"}>
        <button
          className={
            "w-[87px] h-[40px] text-h5 text-center text-white bg-sub rounded"
          }
          type={"button"}
          onClick={handleSubmit}
        >
          저장하기
        </button>
        <button
          className={
            "ml-[10px] w-[87px] h-[40px] text-h5 text-center border border-line rounded"
          }
          type={"button"}
          onClick={() => {
            setPostStatus(false);
            setUpdateSchedule({
              club_objid: "",
              club_name: "",
              title: "",
              start_datetime: dayjs(),
              end_datetime: dayjs(),
              place: "",
              users: [],
              content: "",
              color: "red",
            });
          }}
        >
          취소
        </button>
      </div>
    </form>
  );
};
