import axios from "axios";
import { createElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { viewButtonState, listsState } from "../../store";

export default function ViewApplicationForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    gender: [],
    phone_number: [],
    email: [],
    address: [],
    questions: [],
    school_number: [],
    questions: [],
  });
  const [viewBtnState, setViewBtnState] = useRecoilState(viewButtonState);
  //가입 신청 제출한 정보 들어있는 lists, 동아리 현황 데이터
  const [listData, setListData] = useRecoilState(listsState);

  function getClubApplicationForm() {
    //주요활동내역 가져옴
    axios.get(`api/club_application_form/club_objid/${id}`).then((res) => {
      setFormData(res.data[0]);
    });
  }
  const required = (bool_list) => {
    if (bool_list[1] == true) {
      return <span className={"text-sub"}>(필수)</span>;
    } else {
      return null;
    }
  };

  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.click();
  };

  const testType = (data, i) => {
    //주관식 신청서 보기
    if (data.type == 0) {
      return (
        <div className={"w-[620px] h-auto mx-auto text-h3"}>
          {data.question}
          {data.required == true ? (
            <span className={"text-sub"}>(필수)</span>
          ) : null}
          <div
            className={
              "bg-gray3 w-[620px] h-[300px] rounded-xl text-h5 overflow-y-scroll p-3 mt-[10px]"
            }
          >
            {/*주관식 답이 없을 때는 null처리, 그게 아니면 answer대답*/}
            {listData[viewBtnState].data.questions.length === 0
              ? "에러"
              : listData[viewBtnState].data.questions[i].answer}
          </div>
        </div>
      );
    } else if (data.type == 1) {
      //첨부파일 신청서 보기
      return (
        <div className={"w-[620px] h-auto mx-auto text-h3 border"}>
          {data.question}
          {data.required == true ? (
            <span className={"text-sub"}>(필수)</span>
          ) : null}

          <div>
            <div
              className="w-[80px] h-[80px] mt-[10px] bg-gray3 rounded-xl text-h8 font-normal relative cursor-pointer hover:scale-110"
              // onClick={() =>
              //   // {listData[viewBtnState].data.questions[i].answer === undefined?(<></>):<div>에러 안날껄</div>}

              //   // handleDownload(listData[viewBtnState].data.questions[i].answer)
              // }
            >
              {listData[viewBtnState].data.questions.length === 0
                ? "에러"
                : listData[viewBtnState].data.questions[i].answer
                    .split("/")
                    .slice(-1)[0]}
            </div>
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    getClubApplicationForm();
  }, [listData[viewBtnState].questions]);

  return (
    <>
      <div className="w-[700px] bg-white rounded-xl absolute z-10 left-1/4 right-1/4 px-[40px] py-[32px] grid gap-10 shadow-xl">
        {/* {listsState.map((post, i) => {
          return <></>;
        })} */}
        {/*formData에 realname이 필수이면 이름을 띄워줌*/}

        <div className="w-[620px] h-[92px]">
          <p className="text-[20px]">이름</p>
          <div className="h-[48px] w-[620px] bg-gray3 rounded-md mt-[10px] text-darkgray text-h5 px-[14px] py-[12px]">
            {listData[viewBtnState].data.realname}
          </div>
        </div>

        {/*formData에 department가 필수이면 이름을 띄워줌*/}

        <div className="w-[620px] h-[92px]">
          <p className="text-[20px]">학과</p>
          <div className="h-[48px] w-[620px] bg-gray3 rounded-md mt-[10px] text-darkgray text-h5 px-[14px] py-[12px]">
            {listData[viewBtnState].data.department}
          </div>
        </div>

        {/*formData에 school_number가 필수이면 이름을 띄워줌*/}

        <div className="w-[620px] h-[92px]">
          <p className="text-[20px]">학번</p>
          <div className="h-[48px] w-[620px] bg-gray3 rounded-md mt-[10px] text-darkgray text-h5 px-[14px] py-[12px]">
            {listData[viewBtnState].data.school_number}
          </div>
        </div>

        <div className="w-[620px] h-[33px] flex">
          <p className="text-[20px]">성별</p>
          {listData[viewBtnState].data.gender == "남자" ? (
            <div className="flex my-[3px] ml-[10px]">
              <input
                type="radio"
                className="form-checkbox h-5 w-5 text-black rounded-sm border-black border my-[3px]"
                value={"남자"}
                id="male"
                name="gender"
                checked
              />
              <label className="text-h5 font-normal ml-[4px]" for={"male"}>
                남자
              </label>
              <input
                type="radio"
                className="form-checkbox h-5 w-5 text-black rounded-sm border-black border my-[3px] ml-[8px]"
                value={"여자"}
                id="female"
                name="gender"
              />
              <label className="text-h5 font-normal ml-[4px]" for={"female"}>
                여자
              </label>
            </div>
          ) : (
            <div className="flex">
              <input
                type="radio"
                className="form-checkbox h-5 w-5 text-black rounded-sm border-black border "
                value={"남자"}
                id="male"
                name="gender"
              />
              <label className="text-h5 font-normal ml-[4px]" for={"male"}>
                남자
              </label>
              <input
                type="radio"
                className="form-checkbox h-5 w-5 text-black rounded-sm border-black border"
                value={"여자"}
                id="female"
                name="gender"
                checked
              />
              <label className="text-h5 font-normal ml-[4px]" for={"female"}>
                여자
              </label>
            </div>
          )}
        </div>

        <div className="w-[620px] h-[92px]">
        <p className="text-[20px]">연락처</p>
          <div className="h-[48px] w-[620px] bg-gray3 rounded-md mt-[10px] text-darkgray text-h5 px-[14px] py-[12px]">
            {listData[viewBtnState].data.phone_number}
          </div>
        </div>

        <div className="w-[620px] h-[92px]">
        <p className="text-[20px]">이메일</p>
          <div className="h-[48px] w-[620px] bg-gray3 rounded-md mt-[10px] text-darkgray text-h5 px-[14px] py-[12px]">
            {listData[viewBtnState].data.email}
          </div>
        </div>

        <div className="w-[620px] h-[92px]">
        <p className="text-[20px]">주소</p>
          <div className="h-[48px] w-[620px] bg-gray3 rounded-md mt-[10px] text-darkgray text-h5 px-[14px] py-[12px]">
            {listData[viewBtnState].data.address}
          </div>
        </div>

        {/*추가적으로 설정*/}
        {listData[viewBtnState].data.questions.length === 0
          ? null
          : listData[viewBtnState].data.questions.map((data, i) => {
              return <>{data===null? (null):(testType(data, i))}</>;
            })}
      </div>
    </>
  );
}
