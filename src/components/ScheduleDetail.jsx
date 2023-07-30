import { useEffect, useState } from "react";
import axios from "axios";

const ScheduleDetaile = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .post("/api/user/info/user_objid_list", {
        users: props.schedule.users,
      })
      .then((res) => {
        /* 여기 작업하다가 말음 유저정보 불러와서 users state에 넣어주면 될듯 그리고 출력*/
        setUsers(res.data);
      });
  }, []);

  const handleDelete = () => {};

  const startDateTime = new Date(props.schedule.start_datetime);
  const endDateTime = new Date(props.schedule.end_datetime);
  const day_list = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <div className="mt-[10px] w-[332px] h-[489px] bg-white pl-[10px] pt-[10px] rounded-2xl shadow-xl absolute z-10">
      <div className={"w-[284px] h-[4px] bg-gray2 rounded-full mx-auto"}></div>
      <div className={"h-[24px]"} />
      <div className={"px-[24px]"}>
        <div className={"flex gap-[10px]"}>
          <div className={"w-[24px] h-[24px]"}>
            <img src={"/images/event.png"} />
          </div>
          <div>
            <p className={"text-h4 font-[700]"}>{props.schedule.title}</p>
            <p className={"text-h5 font-[400]"}>
              {startDateTime.getMonth() + 1}월 {startDateTime.getDate()}일{" "}
              {day_list[startDateTime.getDay()]}요일, {startDateTime.getHours()}
              :{startDateTime.getMinutes()}~{endDateTime.getHours()}:
              {endDateTime.getMinutes()}
            </p>
          </div>
          <div
            className="text-center flex flex-col justify-center rounded-full bg-[#C1C1C1] w-[20px] h-[20px] cursor-pointer hover:bg-red_error"
            onClick={() => {
              props.setCount(-1);
            }}
          >
            <span className="material-symbols-outlined text-white text-[10px] font-thin">
              close
            </span>
          </div>
        </div>
        <div className={"h-[24px]"} />
        <div className={"flex gap-[10px]"}>
          <div className={"w-[24px] h-[24px]"}>
            <img src={"/images/location_on.png"} />
          </div>
          <div>
            <p className={"text-h5 font-[400]"}>{props.schedule.place}</p>
          </div>
        </div>
        <div className={"h-[24px]"} />
        <div className={"flex gap-[10px]"}>
          <div className={"w-[24px] h-[24px]"}>
            <img src={"/images/person.png"} />
          </div>
          <div>
            <p>{users.length}명</p>
          </div>
        </div>
        <div className={"grid grid-cols-4 gap-[3px]"}>
          {users.map((user) => {
            return (
              <div className={"flex"}>
                <img
                  src={user.profile_image_url}
                  alt={"profile"}
                  className={"rounded-full w-[24px] h-[24px]"}
                />
                <span>{user.nickname}</span>
              </div>
            );
          })}
        </div>
        <div className={"h-[24px]"} />
        <div className={"flex gap-[10px]"}>
          <div className={"w-[24px] h-[24px]"}>
            <img src={"/images/format_align_left.png"} />
          </div>
          <div className={"w-full"}>
            <div className={"text-h5 font-[400] h-[120px] overflow-y-scroll"}>
              {props.schedule.content}
            </div>
          </div>
        </div>
        <div className={"h-[72px]"} />
        <div className={"flex flex-end"}>
          <button
            type={"button"}
            className={
              "text-h7 text-white font-[400] bg-gray w-[72px] h-[32px] rounded-xl ml-auto"
            }
            onClick={handleDelete}
          >
            일정 삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDetaile;
