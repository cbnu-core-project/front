import { useEffect, useState } from "react";
import axios from "axios";
import {
  commonDeleteConfirmAlert,
  commonErrorAlert,
} from "../alerts/commonAlert";
import { bg_colors, text_colors } from "../common/colors";
import "./ScheduleDetail.css";
import { useRecoilState } from "recoil";
import {
  clubScheduleSelectedStatusState,
  postStatusState,
  updateScheduleState,
} from "../store";

const ScheduleDetaile = (props) => {
  const [users, setUsers] = useState([]);
  const [authority, setAuthority] = useState(5);
  const [postStatus, setPostStatus] = useRecoilState(postStatusState); // 글 작성/수정 컴포넌트
  const [updateSchedule, setUpdateSchedule] =
    useRecoilState(updateScheduleState);
  const [clubScheduleSelectedStatus, setClubScheduleSelectedStatus] =
    useRecoilState(clubScheduleSelectedStatusState);

  useEffect(() => {
    // 유저 정보 리스트 불러오기
    axios
      .post("/api/user/info/user_objid_list", {
        users: props.schedule.users,
      })
      .then((res) => {
        /* 여기 작업하다가 말음 유저정보 불러와서 users state에 넣어주면 될듯 그리고 출력*/
        setUsers(res.data);
      });

    // 권한 불러오기
    axios
      .get("/api/user/authority_of_club/" + props.schedule.club_objid)
      .then((res) => {
        setAuthority(res.data);
      });
  }, []);

  const clickUpdate = () => {
    // setState (수정하기 모달창 띄워주는 여부)
    setUpdateSchedule(props.schedule);
    setPostStatus("put");
    props.setCount(-1);
    setClubScheduleSelectedStatus(false);
  };

  const handleDelete = () => {
    const deleteFunction = () =>
      axios
        .delete(
          "/api/user/schedule/" + props.schedule.relative_schedule_unique_id
        )
        .then((res) => {
          props.getSchedules(); // 재 랜더링을 위한 함수
          props.setCount(-1);
        })
        .catch((error) => {
          commonErrorAlert(error, "삭제 실패 !");
        });
    // 삭제 확인 여부 alert
    commonDeleteConfirmAlert(deleteFunction);
  };

  const startDateTime = new Date(props.schedule.start_datetime);
  const endDateTime = new Date(props.schedule.end_datetime);
  const day_list = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <div className="mt-[10px] w-[332px] h-[489px] bg-white text-black pl-[10px] pt-[10px] rounded-2xl shadow-2xl absolute z-30">
      <div
        className={`w-[284px] h-[4px] ${
          bg_colors[props.color]
        } rounded-full mx-auto`}
      ></div>
      <div className={"h-[24px]"} />
      <div className={"px-[24px]"}>
        <div className={"flex gap-[10px]"}>
          <div className={`w-[24px] h-[24px]`}>
            <span
              className={`material-symbols-outlined ${
                text_colors[props.color]
              }`}
            >
              event
            </span>
          </div>
          <div>
            <p className={"text-h4 w-[200px] h-[56px] font-[700]"}>
              {props.schedule.title.length <= 20 ? (
                <span>{props.schedule.title}</span>
              ) : (
                <span>{props.schedule.title.slice(0, 19)}...</span>
              )}
            </p>
            <p className={"text-h5 font-[400]"}>
              {startDateTime.getMonth() + 1}월 {startDateTime.getDate()}일{" "}
              {day_list[startDateTime.getDay()]}요일, {startDateTime.getHours()}
              :{startDateTime.getMinutes()} ~
              <br />
              {endDateTime.getMonth() + 1}월 {endDateTime.getDate()}일{" "}
              {day_list[endDateTime.getDay()]}
              요일, {endDateTime.getHours()}:{endDateTime.getMinutes()}
            </p>
          </div>
          <div
            className="ml-auto text-center flex flex-col justify-center rounded-full bg-[#C1C1C1] w-[20px] h-[20px] cursor-pointer hover:bg-red_error"
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
            <span
              className={`material-symbols-outlined ${
                text_colors[props.color]
              }`}
            >
              location_on
            </span>
          </div>
          <div>
            <p className={"text-h5 font-[400]"}>{props.schedule.place}</p>
          </div>
        </div>
        <div className={"h-[24px]"} />
        <div className={"flex gap-[10px]"}>
          <div className={"w-[24px] h-[24px]"}>
            <span
              className={`material-symbols-outlined ${
                text_colors[props.color]
              }`}
            >
              person
            </span>
          </div>
          <div>
            <p>{users.length}명</p>
          </div>
        </div>
        <div
          className={"grid grid-cols-4 gap-[3px] h-[52px] overflow-y-scroll"}
        >
          {users.map((user) => {
            return (
              <div className={"flex gap-[3px]"}>
                <img
                  src={user.profile_image_url}
                  alt={"profile"}
                  className={"rounded-full w-[24px] h-[24px]"}
                />
                {user.realname.length <= 3 ? (
                  <div className={"pt-[2px] text-h6"}>{user.realname}</div>
                ) : (
                  <div className={"pt-[2px] text-h6"}>
                    {user.realname.slice(0, 2)}..
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className={"h-[24px]"} />
        <div className={"flex gap-[10px]"}>
          <div className={"w-[24px] h-[24px]"}>
            <span
              className={`material-symbols-outlined ${
                text_colors[props.color]
              }`}
            >
              format_align_left
            </span>
          </div>
          <div className={"w-full"}>
            <div className={"text-h5 font-[400] h-[100px] overflow-y-scroll"}>
              {props.schedule.content}
            </div>
          </div>
        </div>
        <div className={"h-[24px]"} />
        {props.type === "user" ? (
          <div className={"text-center text-gray"}>
            수정/삭제는 동아리 페이지 내의 일정에서 가능합니다.
          </div>
        ) : authority <= 2 ? (
          <div className={"flex justify-end gap-[10px]"}>
            <button
              type={"button"}
              className={
                "text-h7 text-white font-[400] bg-sub w-[72px] h-[32px] rounded-xl transition hover:scale-110"
              }
              onClick={clickUpdate}
            >
              수정하기
            </button>
            <button
              type={"button"}
              className={
                "text-h7 text-white font-[400] bg-gray w-[72px] h-[32px] rounded-xl transition hover:scale-110"
              }
              onClick={handleDelete}
            >
              일정삭제
            </button>
          </div>
        ) : (
          <div className={"text-center text-gray"}>
            수정/삭제 권한이 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleDetaile;
