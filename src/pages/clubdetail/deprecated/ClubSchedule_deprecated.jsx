import React, { useEffect, useState } from "react";
import {
  selectedClubScheduleDateState,
  clubSchedulesState,
} from "../../../store";
import { useRecoilState } from "recoil";
import axios from "axios";
import ScheduleDetaile from "../../../components/ScheduleDetail";
import { useParams } from "react-router-dom";
//
import moment from "moment";
//

export default function ClubSchedule_deprecated() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useRecoilState(
    selectedClubScheduleDateState
  );
  const [schedules, setSchedules] = useRecoilState(clubSchedulesState); // user에 맞는 정보 불러와 넣을 곳
  const [selectedStatus, setSelectedStatus] = useState(true);
  const [count, setCount] = useState(-1);
  const { id } = useParams();

  const getClubSchedules = () => {
    axios.get("/api/user/schedule/club_objid/" + id).then((res) => {
      const schedules = res.data;
      let copy_schedules1 = [];
      let copy_schedules2 = [];

      // 일정이 2일이상이면 맨 앞으로 정렬
      for (let i in schedules) {
        const startDateTime = moment(schedules[i].start_datetime);
        const endDateTime = moment(schedules[i].end_datetime);

        if (endDateTime.diff(startDateTime, "days") > 0) {
          copy_schedules1.push(schedules[i]);
        } else {
          copy_schedules2.push(schedules[i]);
        }
      }
      // console.log([...copy_schedules1, ...copy_schedules2]);

      setSchedules([...copy_schedules1, ...copy_schedules2]);
    });
  };

  // 날짜를 클릭할 때 마다 새로운 스케줄 데이터를 불러옴.
  // 이거는 한 번 불러온거로 계속 쓸 건 지, 매번 계속 불러올 건지 선택해야한다.
  useEffect(() => {
    getClubSchedules();
  }, [selectedDate]);

  // 달력을 구성하는 날짜 배열 생성
  const getCalendarDayts = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); // month ( 0 ~ 11 범위인 것 주의!! )
    const firstDay = new Date(year, month, 1).getDay(); // 요일도 0 ~ 6 범위 주의
    const lastDay = new Date(year, month + 1, 0).getDate();

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
      <div className="flex items-center justify-center mb-4 gap-[20px]">
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
      <div className="grid grid-cols-7 border-collapse">
        {[
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ].map((day) => (
          <div key={day} className="text-center text-h5 text-midgray">
            {day}
          </div>
        ))}
      </div>
      <div className={"grid grid-cols-7"}>
        {getCalendarDayts().map((date, index) =>
          date ? (
            <div className={"relative"}>
              <div
                key={index}
                className={`text-center text-black font-bold rounded-none border border-gray2 ${
                  date
                    ? "w-full h-[155px] hover:border-main_mid hover:border"
                    : ""
                } rounded p-2 ${
                  currentDate.getFullYear() == selectedDate.getFullYear() &&
                  currentDate.getMonth() == selectedDate.getMonth() &&
                  date == selectedDate.getDate()
                    ? "border border-main_mid"
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
                {currentDate.getFullYear() == selectedDate.getFullYear() &&
                currentDate.getMonth() == selectedDate.getMonth() &&
                date == selectedDate.getDate() ? (
                  <span className="material-symbols-outlined absolute left-[10px] cursor-pointer hover:text-main_default">
                    add_circle
                  </span>
                ) : null}
                <div>{date}</div>
                {schedules.map((schedule, i) => {
                  const startDateTime = new Date(schedule.start_datetime);
                  const endDateTime = new Date(schedule.end_datetime);
                  const startMoment = new moment(startDateTime);
                  const endMoment = new moment(endDateTime);

                  if (
                    currentDate.getFullYear() === startDateTime.getFullYear() &&
                    currentDate.getMonth() === startDateTime.getMonth() &&
                    date === startDateTime.getDate()
                  ) {
                    return (
                      <div>
                        <div
                          className={
                            "w-full text-h6 font-[400] mt-[4px] bg-gray3 h-[32px] rounded-xl text-center flex flex-col justify-center cursor-pointer"
                          }
                          onClick={() => {
                            if (count >= 0 && i === count) {
                              setCount(-1);
                            } else {
                              setCount(i);
                            }
                          }}
                        >
                          {schedule.title}
                        </div>
                        {count === i ? (
                          <ScheduleDetaile
                            schedule={schedule}
                            setCount={setCount}
                            getSchedules={getClubSchedules}
                          />
                        ) : null}
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          ) : (
            <div className={"rounded-none border border-gray2"}></div>
          )
        )}
      </div>
      <div className={"h-[160px]"} />
      <div className="grid grid-flow-row-dense grid-cols-7 grid-rows-4">
        <div className="bg-red_error col-start-1 col-span-3 cursor-pointer">
          01
        </div>
        <div className="bg-gray3 col-start-2 col-span-4">02</div>
        <div className={"bg-gray2 col-start-5 col-span-3"}>03</div>
        <div className={"bg-gray col-start-3 col-span-6"}>04</div>
        <div className={"bg-main col-start-1 col-span-7"}>05</div>
      </div>
      <div className="grid grid-flow-row-dense grid-cols-7 grid-rows-4">
        <div className={"bg-gray col-start-1 col-span-1"}>04</div>
      </div>
    </div>
  );
}
