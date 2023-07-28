const ScheduleDetaile = (props) => {
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
            <p className={"text-h5 font-[400]"}></p>
          </div>
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
        <div className={"h-[24px]"} />
        <div className={"flex flex-end"}>
          <button
            type={"button"}
            className={
              "text-h7 text-white font-[400] bg-gray w-[72px] h-[32px] rounded-xl ml-auto"
            }
          >
            일정 삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDetaile;
