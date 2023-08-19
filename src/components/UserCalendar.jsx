import React, { useEffect, useState } from "react";
import { selectedUserScheduleDateState, userSchedulesState } from "../store";
import { useRecoilState } from "recoil";
import axios from "axios";
import ScheduleDetaile from "./ScheduleDetail";
import * as dayjs from "dayjs";
import { bg_colors } from "../common/colors";

const UserCalendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useRecoilState(
    selectedUserScheduleDateState
  );
  const [schedules, setSchedules] = useRecoilState(userSchedulesState); // user에 맞는 정보 불러와 넣을 곳
  const [selectedStatus, setSelectedStatus] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getUserSchedules = () => {
    axios.get("/api/user/schedule").then((res) => {
      setSchedules(res.data);
    });
  };

  // 날짜를 클릭할 때 마다 새로운 스케줄 데이터를 불러옴?
  // 이거는 한 번 불러온거로 계속 쓸 건 지, 매번 계속 불러올 건지 선택해야한다.
  // 근데 이거는 처음에만 한 번 불러오자.
  useEffect(() => {
    getUserSchedules();
  }, []);

  ////////////////////////////////////////////////////////////////////////////
  // 달력을 구성하는 날짜 배열 생성
  const getCalendarDate = () => {
    let calendarDate = [];
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

      calendarDate.push({
        year: year,
        month: month,
        date: date,
        scheduleCount: 0,
      });
    }

    return calendarDate;
  };
  ////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////
  // 기록할 변수
  let dateList = getCalendarDate();
  let scheduleFromDate = [];
  for (let i = 0; i < 42; i++) {
    scheduleFromDate.push([]);
  }

  // 현재 일정 42칸의 스케줄들을 일별로 쪼개서 넣어줌
  schedules.map((schedule, index) => {
    const startDateTime = dayjs(schedule.calendar_start_datetime);
    const endDateTime = dayjs(schedule.end_datetime);
    const scheduleLength = schedule.schedule_length;

    dateList.map((day, index) => {
      if (
        day.year === startDateTime.get("year") &&
        day.month === startDateTime.get("month") &&
        day.date === startDateTime.get("date")
      ) {
        for (let k = 0; k < scheduleLength; k++) {
          scheduleFromDate[index + k].push(schedule);
        }
      }
    });
  });

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

  return (
    <>
      <div className="w-max-md mx-auto p-4 bg-white mt-[10px] rounded-3xl">
        <div className="flex items-center justify-between mb-4">
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
        <div className="grid grid-cols-7 gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center text-h7 text-midgray">
              {day}
            </div>
          ))}
          {dateList.map((date, index) => (
            <div className={"relative"}>
              <div
                key={index}
                className={`text-center ${
                  date.year === currentDate.get("year") &&
                  date.month === currentDate.get("month")
                    ? "text-black"
                    : "text-gray2"
                } font-bold cursor-pointer rounded-xl border-2 hover:border-main_mid rounded p-2 ${
                  date.year === selectedDate.get("year") &&
                  date.month === selectedDate.get("month") &&
                  date.date === selectedDate.get("date")
                    ? "border-main_mid"
                    : "border-white"
                }`}
                onClick={() => {
                  setSelectedIndex(index);
                  setSelectedStatus(true);
                  setSelectedDate(
                    dayjs([date.year, date.month + 1, date.date]) // 여기는 1 ~ 12가 month인 것 같다..
                  );
                }}
              >
                {date.date}
              </div>
              {scheduleFromDate[index].length === 0 ? null : (
                <div
                  className={`absolute top-[5px] left-[30px] bg-main_mid rounded-full w-[5px] h-[5px]`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={"mt-[15px]"} />
      {selectedStatus ? (
        <SelectedDateSchedule
          selectedIndex={selectedIndex}
          scheduleFromDate={scheduleFromDate}
          currentDate={currentDate}
          dateList={dateList}
        />
      ) : null}
    </>
  );
};

const SelectedDateSchedule = (props) => {
  const [schedules, setSchedules] = useRecoilState(userSchedulesState); // user에 맞는 정보 불러와 넣을 곳
  const [count, setCount] = useState(-1);
  let selectedSchedules = props.scheduleFromDate[props.selectedIndex];

  if (props.selectedIndex === -1) {
    ////////////////////////////
    /* 현재 날짜 인덱스 구하고, 당일일정으로 바꾸기 */
    props.dateList.map((date, i) => {
      if (
        date.year === props.currentDate.get("year") &&
        date.month === props.currentDate.get("month") &&
        date.date === props.currentDate.get("date")
      ) {
        selectedSchedules = props.scheduleFromDate[i];
      }
    });
    ////////////////////////////
  }

  const getUserSchedules = () => {
    axios.get("/api/user/schedule").then((res) => {
      setSchedules(res.data);
    });
  };

  // 0 ~ 6 ( 일 ~ 토 ) 임을 주의하자.
  const day_list = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day_list_kor = ["일", "월", "화", "수", "목", "금", "토"];

  if (selectedSchedules.length === 0) {
    return null;
  }

  return (
    <>
      <div>
        {selectedSchedules.map((schedule, i) => {
          const startDateTime = dayjs(schedule.start_datetime);
          const endDateTime = dayjs(schedule.end_datetime);

          {
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
                    <div className="text-h4 font-[600] text-white">
                      {/*{startDateTime.get("date")}*/}
                    </div>
                    <div className="text-h4 font-[600]  text-white">
                      {/*{endDateTime.get("date")}*/}
                    </div>
                  </div>
                  <div className="flex flex-col w-full h-[90px] ml-[5px] bg-white pl-[10px] pt-[10px] rounded-2xl">
                    <div className="text-black text-h7 font-[300] flex gap-[4px]">
                      <div
                        className={`w-[3px] ${
                          bg_colors[schedule.color]
                        } rounded-full`}
                      ></div>{" "}
                      <div className={""}>
                        [{schedule.club_name}] {schedule.title}
                      </div>
                    </div>
                    <div className="text-gray text-h7 font-[300]">
                      {startDateTime.get("month") + 1}월{" "}
                      {startDateTime.get("date")}일{" "}
                      {day_list_kor[startDateTime.get("day")]}요일{" "}
                      {startDateTime.get("hour")}:{startDateTime.get("minute")}{" "}
                      ~ {endDateTime.get("month") + 1}월{" "}
                      {endDateTime.get("date")}일{" "}
                      {day_list_kor[endDateTime.get("day")]}
                      요일 {endDateTime.get("hour")}:{endDateTime.get("minute")}
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

export default UserCalendar;
