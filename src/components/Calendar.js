import React, { useEffect, useState } from "react";
import { selectedDateState, schedulesState } from "../store";
import { useRecoilState } from "recoil";
import axios from "axios";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>;
//구글아이콘 링크

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState); // [year, month, day] 리스트로 만듬
  const [schedules, setSchedule] = useRecoilState(schedulesState); // user에 맞는 정보 불러와 넣을 곳

  useEffect(() => {
    axios.get("/api/user/schedule").then((res) => {
      setSchedule(res.data);
      // console.log(res.data);
    });
  }, [selectedDate]);

  // 날짜를 선택 할 때 마다 실행 되는 훅
  useEffect(() => {
    // console.log(selectedDate);
  }, [selectedDate]);

  // 달력을 구성하는 날짜 배열 생성
  const getCalendarDays = () => {
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
    <div className="w-max-md mx-auto p-4 bg-white mt-[10px] rounded-3xl">
      <div className="flex items-center justify-between mb-4">
        <span
          className="material-symbols-outlined text-midgray hover:text-darkgray"
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
          className="material-symbols-outlined text-midgray hover:text-darkgray"
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
        {getCalendarDays().map((day, index) =>
          day ? (
            <div className={"relative"}>
              <div
                key={index}
                className={`text-center text-black font-bold ${
                  day
                    ? "cursor-pointer rounded-xl hover:border hover:border-main_mid hover:border-2"
                    : ""
                } rounded p-2 ${
                  currentDate.getFullYear() == selectedDate[0] &&
                  currentDate.getMonth() == selectedDate[1] &&
                  day == selectedDate[2]
                    ? "border border-main_mid border-2"
                    : ""
                }`}
                onClick={() =>
                  setSelectedDate([
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    day,
                  ])
                }
              >
                {day}
              </div>
              {schedules.map((schedule, i) => {
                if (
                  currentDate.getFullYear() == schedule.year &&
                  currentDate.getMonth() == schedule.month - 1 &&
                  day == schedule.date
                ) {
                  // console.log("일정있는 날 선택");
                  return (
                    <div
                      className={`absolute top-0 left-1/2 bg-main_mid rounded-full w-[5px] h-[5px]`}
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
      <div className="mt-4">
        {selectedDate[2]
          ? `${selectedDate[0]}년 ${selectedDate[1] + 1}월 ${
              selectedDate[2]
            }일의 일정`
          : "None"}
      </div>
      <div className={"mt-[40px]"} />
      <SelectedDateSchedule />
    </div>
  );
};

const SelectedDateSchedule = () => {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState); // [year, month, day] 리스트로 만듬
  const [schedules, setSchedule] = useRecoilState(schedulesState); // user에 맞는 정보 불러와 넣을 곳

  // 0 ~ 6 ( 일 ~ 토 ) 임을 주의하자.
  const day_list = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <>
      <div>
        {schedules.map((schedule, i) => {
          if (
            schedule.year == selectedDate[0] &&
            schedule.month == selectedDate[1] + 1 &&
            schedule.date == selectedDate[2]
          ) {
            return (
              <div>
                <div className="flex mt-[10px] gap-[5px]">
                  <div className="w-[50px] h-[80px] bg-main_mid rounded-2xl flex flex-col text-center justify-center">
                    <div className="text-[10px] font-[200] text-white">
                      {day_list[schedule.day]}
                    </div>
                    <div className="text-h6 font-[600]  text-white">
                      {schedule.date}
                    </div>
                  </div>
                  <div className="flex flex-col w-full h-[80px] bg-white pl-[10px] pt-[10px]">
                    <div className="text-black text-h7 font-[300]">
                      {schedule.club_name} - {schedule.title}
                    </div>
                    <div className="text-gray text-h7 font-[300]">
                      {schedule.start_hour}:{schedule.start_minute}~
                      {schedule.end_hour}:{schedule.end_minute}
                    </div>
                    <div className="text-gray text-h7 font-[300]">
                      {schedule.place}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Calendar;
