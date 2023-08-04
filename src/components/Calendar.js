import React, { useEffect, useState } from "react";
import { selectedUserScheduleDateState, userSchedulesState } from "../store";
import { useRecoilState } from "recoil";
import axios from "axios";
import ScheduleDetaile from "./ScheduleDetail";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useRecoilState(
    selectedUserScheduleDateState
  );
  const [schedules, setSchedules] = useRecoilState(userSchedulesState); // user에 맞는 정보 불러와 넣을 곳
  const [selectedStatus, setSelectedStatus] = useState(true);

  const getUserSchedules = () => {
    axios.get("/api/user/schedule").then((res) => {
      setSchedules(res.data);
    });
  };

  // 날짜를 클릭할 때 마다 새로운 스케줄 데이터를 불러옴?
  // 이거는 한 번 불러온거로 계속 쓸 건 지, 매번 계속 불러올 건지 선택해야한다.
  useEffect(() => {
    getUserSchedules();
  }, [selectedDate]);

  // 달력을 구성하는 날짜 배열 생성
  const getCalendarDayts = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); // month ( 0 ~ 11 범위인 것 주의!! )
    const firstDay = new Date(year, month, 1).getDay(); // 요일도 0 ~ 6 범위 주의
    const lastDay = new Date(year, month + 1, 0).getDate();

    // console.log(year, month, firstDay, lastDay);
    // console.log(currentDate)
    // console.log(selectedDate)

    const days = [];
    for (let i = 1; i <= lastDay; i++) {
      days.push(i);
    }

    const emptyDays = Array(firstDay).fill(null);
    const filledDays = [...emptyDays, ...days];
    const remainingDays = 42 - filledDays.length;
    const calendarDays = filledDays.concat(Array(remainingDays).fill(null));

    return calendarDays;
  };

  // 이전 달로 이동
  const goToPrevMonth = () => {
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1
    );
    setCurrentDate(prevMonth);
  };

  // 다음 달로 이동
  const goToNextMonth = () => {
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
    setCurrentDate(nextMonth);
  };

  return (
    <>
    <div className="w-max-md mx-auto p-4 bg-white mt-[10px] rounded-3xl h-[368px]">
      <div className="flex items-center justify-between mb-4">
        <span
          className="material-symbols-outlined text-midgray hover:text-darkgray cursor-pointer"
          onClick={goToPrevMonth}
        >
          chevron_left
        </span>
        <h2 className="text-h2 font-bold">
          {/* {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })} */}
          {`${currentDate.getFullYear()}.${String(
            currentDate.getMonth() + 1
          ).padStart(2, "0")}`}
        </h2>
        <span
          className="material-symbols-outlined text-midgray hover:text-darkgray cursor-pointer"
          onClick={goToNextMonth}
        >
          chevron_right
        </span>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center text-h7 text-midgray">
            {day}
          </div>
        ))}
        {getCalendarDayts().map((date, index) =>
          date ? (
            <div className={"relative"}>
              <div
                key={index}
                className={`text-center text-black font-bold ${
                  date
                    ? "cursor-pointer rounded-xl hover:border hover:border-main_mid hover:border-2"
                    : ""
                } rounded p-2 ${
                  currentDate.getFullYear() == selectedDate.getFullYear() &&
                  currentDate.getMonth() == selectedDate.getMonth() &&
                  date == selectedDate.getDate()
                    ? "border border-main_mid border-2"
                    : ""
                }`}
                onClick={() => {
                  setSelectedStatus(true);
                  setSelectedDate(
                    new Date(
                      currentDate.getFullYear(),
                      currentDate.getMonth(),
                      date
                    )
                  );
                }}
              >
                {date}
              </div>
              {schedules.map((schedule, i) => {
                const startDateTime = new Date(schedule.start_datetime);
                const endDateTime = new Date(schedule.end_datetime);

                if (
                  currentDate.getFullYear() === startDateTime.getFullYear() &&
                  currentDate.getMonth() === startDateTime.getMonth() &&
                  date === startDateTime.getDate()
                ) {
                  // console.log("일정있는 날 선택");
                  return (
                    <div
                      className={`absolute top-[5px] left-[30px] bg-main_mid rounded-full w-[5px] h-[5px]`}
                    />
                  );
                }
              })}
            </div>
          ) : (
            <div></div>
          )
        )}
      </div>
      {/* <div className="mt-4 text-center font-bold text-h2 text-black">
        {selectedStatus
          ? `${selectedDate.getFullYear()}년 ${
              selectedDate.getMonth() + 1
            }월 ${selectedDate.getDate()}일의 일정`
          : "None"}
      </div> */}
      
    </div>
    <div className={"mt-[15px]"} />
    {selectedStatus ? <SelectedDateSchedule /> : null}
    </>
  );
};

const SelectedDateSchedule = () => {
  const [selectedDate, setSelectedDate] = useRecoilState(
    selectedUserScheduleDateState
  ); // [year, month, day] 리스트로 만듬
  const [schedules, setSchedules] = useRecoilState(userSchedulesState); // user에 맞는 정보 불러와 넣을 곳
  const [count, setCount] = useState(-1);

  const getUserSchedules = () => {
    axios.get("/api/user/schedule").then((res) => {
      setSchedules(res.data);
    });
  };

  // 0 ~ 6 ( 일 ~ 토 ) 임을 주의하자.
  const day_list = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <>
      <div>
        {schedules.map((schedule, i) => {
          const startDateTime = new Date(schedule.start_datetime);
          const endDateTime = new Date(schedule.end_datetime);

          if (startDateTime.toDateString() === selectedDate.toDateString()) {
            return (
              <div>
                <div
                  className="flex mt-[10px] gap-[5px]"
                  onClick={() => {
                    if (count >= 0 && i === count) {
                      setCount(-1);
                    } else {
                      setCount(i);
                    }
                  }}
                >
                  <div className="w-[58px] h-[90px] bg-main_mid rounded-2xl flex flex-col text-center justify-center">
                    <div className="text-[13px] font-[200] text-white">
                      {day_list[startDateTime.getDay()]}
                    </div>
                    <div className="text-h4 font-[600]  text-white">
                      {startDateTime.getDate()}
                    </div>
                  </div>
                  <div className="flex flex-col w-full h-[90px] ml-[5px] bg-white pl-[10px] pt-[10px] rounded-2xl">
                    <div className="text-black text-h7 font-[300]">
                      [{schedule.club_name}] {schedule.title}
                    </div>
                    <div className="text-gray text-h7 font-[300]">
                      {startDateTime.getHours()}:{startDateTime.getMinutes()}~
                      {endDateTime.getHours()}:{endDateTime.getMinutes()}
                    </div>
                    <div className="text-gray text-h7 font-[300]">
                      {schedule.place}
                    </div>
                  </div>
                </div>
                {count === i ? (
                  <ScheduleDetaile
                    type={"user"}
                    schedule={schedule}
                    setCount={setCount}
                    color={schedule.color}
                    getSchedules={getUserSchedules}
                  />
                ) : null}
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Calendar;
