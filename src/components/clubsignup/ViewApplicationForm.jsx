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
    questions: [{}],
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
    if (data.type == 0) {
      return (
        <div className={"w-[620px] h-auto mx-auto text-h3 border"}>
          {data.question}
          {data.required == true ? (
            <span className={"text-sub"}>(필수)</span>
          ) : null}
          <div
            className={
              "bg-gray3 w-[620px] h-[300px] rounded-xl text-h5 overflow-y-scroll p-3 mt-[10px]"
            }
          >
            {listData[viewBtnState].data.questions[i].answer}
          </div>
        </div>
      );
    } else if (data.type == 1) {
      return (
        <div className={"w-[620px] h-auto mx-auto text-h3 border"}>
          {data.question}
          {data.required == true ? (
            <span className={"text-sub"}>(필수)</span>
          ) : null}

          <div>
            <div className="w-[80px] h-[80px] mt-[10px] bg-gray3 rounded-xl text-h8 font-normal relative cursor-pointer hover:scale-110"
            onClick={() =>
              handleDownload(
                listData[viewBtnState].data.questions[i].answer
              )}>

                {listData[viewBtnState].data.questions[i].answer.split('/').slice(-1)[0]}

            </div>
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    getClubApplicationForm();
  }, []);

  return (
    <>
      <div className="w-[700px] bg-white rounded-xl border absolute z-10 left-1/4 right-1/4 px-[40px] py-[32px] grid gap-10">
        {/* {listsState.map((post, i) => {
          return <></>;
        })} */}
        {/*formData에 realname이 필수이면 이름을 띄워줌*/}
        {formData.realname == true ? (
          <div className="w-[620px] h-[92px] border">
            <p className="text-[20px]">
              이름 <span className="text-sub">(필수)</span>
            </p>
            <div className="h-[48px] w-[620px] bg-gray3 rounded-md mt-[10px] text-darkgray text-h5 px-[14px] py-[12px]">
              {listData[viewBtnState].data.realname}
            </div>
          </div>
        ) : null}

        {/*formData에 department가 필수이면 이름을 띄워줌*/}
        {formData.department == true ? (
          <div className="w-[620px] h-[92px] border">
            <p className="text-[20px]">
              학과 <span className="text-sub">(필수)</span>
            </p>
            <div className="h-[48px] w-[620px] bg-gray3 rounded-md mt-[10px] text-darkgray text-h5 px-[14px] py-[12px]">
              {listData[viewBtnState].data.department}
            </div>
          </div>
        ) : null}

        {/*formData에 school_number가 필수이면 이름을 띄워줌*/}
        {formData.school_number == true ? (
          <div className="w-[620px] h-[92px] border">
            <p className="text-[20px]">
              학번 <span className="text-sub">(필수)</span>
            </p>
            <div className="h-[48px] w-[620px] bg-gray3 rounded-md mt-[10px] text-darkgray text-h5 px-[14px] py-[12px]">
              {listData[viewBtnState].data.school_number}
            </div>
          </div>
        ) : null}

        {formData.gender[0] == true ? (
          <div className="w-[620px] h-[33px] border flex">
            <p className="text-[20px]">성별 {required(formData.gender)}</p>
            {listData[viewBtnState].data.gender == "남자" ? (
              <div className="flex">
                <input
                  type="radio"
                  className="form-checkbox h-5 w-5 text-black rounded-sm border-black border "
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
                  className="form-checkbox h-5 w-5 text-black rounded-sm border-black border"
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
        ) : null}

        {formData.phone_number[0] == true ? (
          <div className="w-[620px] h-[92px] border">
            <p className="text-[20px]">연락처 {required(formData.gender)}</p>
            <div className="h-[48px] w-[620px] bg-gray3 rounded-md mt-[10px] text-darkgray text-h5 px-[14px] py-[12px]">
              {listData[viewBtnState].data.phone_number}
            </div>
          </div>
        ) : null}
        {formData.email[0] == true ? (
          <div className="w-[620px] h-[92px] border">
            <p className="text-[20px]">이메일 {required(formData.gender)}</p>
            <div className="h-[48px] w-[620px] bg-gray3 rounded-md mt-[10px] text-darkgray text-h5 px-[14px] py-[12px]">
              {listData[viewBtnState].data.email}
            </div>
          </div>
        ) : null}
        {formData.address[0] == true ? (
          <div className="w-[620px] h-[92px] border">
            <p className="text-[20px]">주소 {required(formData.gender)}</p>
            <div className="h-[48px] w-[620px] bg-gray3 rounded-md mt-[10px] text-darkgray text-h5 px-[14px] py-[12px]">
              {listData[viewBtnState].data.address}
            </div>
          </div>
        ) : null}
        {/*추가적으로 설정*/}
        {formData.questions.map((data, i) => {
          return <>{testType(data, i)}</>;
        })}
      </div>
    </>
  );
}
