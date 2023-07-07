import React, { useEffect, useState } from "react";
import { selectedDateState, schedulesState } from "../store";
import { useRecoilState } from "recoil";
import axios from "axios";

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
    <div className="w-max-md mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <button
          className="text-midgray hover:text-darkgray"
          onClick={goToPrevMonth}
        >
          Prev
        </button>
        <h2 className="text-h2 font-bold">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button
          className="text-midgray hover:text-darkgray"
          onClick={goToNextMonth}
        >
          Next
        </button>
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
        Selected Date:{" "}
        {selectedDate[2]
          ? `${selectedDate[0]}-${selectedDate[1] + 1}-${selectedDate[2]}`
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
                <p>{schedule.club_name}</p>
                <p>{schedule.title}</p>
                <p>{schedule.content}</p>
                <p>{schedule.place}</p>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Calendar;
