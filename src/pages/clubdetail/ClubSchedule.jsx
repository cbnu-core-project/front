import React, { useEffect, useState } from "react";
import { selectedClubScheduleDateState, clubSchedulesState } from "../../store";
import { useRecoilState } from "recoil";
import axios from "axios";
import ScheduleDetaile from "../../components/ScheduleDetail";
import { useParams } from "react-router-dom";
import * as dayjs from "dayjs";
import Calendar from "../../components/Calendar";

export default function ClubSchedule() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useRecoilState(
    selectedClubScheduleDateState
  );
  const [schedules, setSchedules] = useRecoilState(clubSchedulesState); // user에 맞는 정보 불러와 넣을 곳
  // const [selectedStatus, setSelectedStatus] = useState(true);
  // const [count, setCount] = useState(-1);
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

  ////////////////////////////////////////////////////////////////////////////
  const getClubSchedules = () => {
    axios.get("/api/user/schedule/club_objid/" + id).then((res) => {
      const schedules = res.data;
      let copy_schedules1 = [];
      let copy_schedules2 = [];

      console.log(currentDate);
      console.log(currentDate.startOf("month").startOf("week"));

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
      // console.log([...copy_schedules1, ...copy_schedules2]);

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

      week.push({ year: year, month: month, date: date });
      matrix.push(week);
      week = [];
    }

    return matrix;
  };
  ////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////
  // 기록할 변수
  let dateMatrix = getCalendarDateMatrix();
  let calendarCount = [];
  for (let i = 0; i < 42; i++) {
    calendarCount.push(0);
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

  return (
    <>
      <div className="mx-auto p-[32px] w-[1326px]">
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
        <div className={"text-gray2 border border-gray3"}>
          {dateMatrix.map((week, i) => {
            return (
              // week 박스
              <div
                className={
                  "h-[180px] grid grid-flow-row-dense grid-cols-7 grid-rows-5"
                }
                id={"week"}
              >
                {week.map((day, j) => {
                  return (
                    <>
                      {/*date 표시 박스*/}
                      <div
                        className={`w-[180px] h-[36px] row-start-1 col-start-${
                          j + 1
                        } ${
                          currentDate.get("year") === day.year &&
                          currentDate.get("month") === day.month
                            ? "text-black"
                            : ""
                        }
                        `}
                      >
                        {day.date}
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
                          for (let k = 0; k < scheduleLength; k++) {
                            calendarCount[
                              startDateTime.get("date") - 1 + k
                            ] += 1;
                          }

                          console.log(calendarCount);

                          return (
                            <div
                              className={`h-[36px] bg-gray col-start-${
                                startDateTime.get("day") + 1
                              } col-span-${scheduleLength}`}
                            >
                              {schedule.title}
                            </div>
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
      </div>
      <div className={"h-[160px]"} />
    </>
  );
}
