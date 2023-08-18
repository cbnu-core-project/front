import UserApplicationForm from "../../components/clubsignup/UserApplicationForm";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl } from "../../common/global";
import { useRecoilState, useSetRecoilState } from "recoil";
import { listsState, userInfoState, viewButtonState } from "../../store";
import ViewApplicationForm from "../../components/clubsignup/ViewApplicationForm";

axios.defaults.baseURL = baseUrl;

export default function ClubSignUp() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    gender: [],
    phone_number: [],
    email: [],
    address: [],
    questions: [],
    school_number: [],
  });
  const [listData, setListData] = useRecoilState(listsState);
  const [submitData, setSubmitData] = useState({});

  //가입 신청 양식 설정한 것(form)을 데이터 가져오는 함수
  function getClubApplicationForm() {
    //주요활동내역 가져옴
    axios.get(`api/club_application_form/club_objid/${id}`).then((res) => {
      setFormData(res.data[0]);
    });
  }
  //해당 동아리 지원한 사람들의 리스트 -> 관리자 입장에서 approval로 승인, 거절 선택할 수 있음
  function getClubApplicationLists() {
    axios.get(`api/club_application_lists/${id}`).then((res) => {
      setListData(res.data);
    });
  }

  //동아리에 제출한 내용 가져옴
  function getClubApplicationSubmit() {
    axios.get(`api/club_application_submit/club_objid/${id}`).then((res) => {
      setSubmitData(res.data);
    });
  }

  useEffect(() => {
    getClubApplicationForm();
    getClubApplicationLists();
    getClubApplicationSubmit();
  }, []);

  return (
    <>
      <UserSignUp formData={formData} id={id} listData={listData} />
      {/* <UserApplicationForm
        formData={formData}
        listData={listData}
        id={id}
        objid={objid}
      /> */}
      <ManagerSignUp formData={formData} id={id} submitData={submitData} />
    </>
  );
}
//일반 유저가 동아리 신청할 때 보이는 양식
function UserSignUp(props) {
  const [realname, setRealName] = useState("");
  const [department, setDepartment] = useState("");
  const [schoolNumber, setSchoolNumber] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [questions, setQuestions] = useState([]);
  const [shortForm, setShortForm] = useState(""); //questions 주관식
  const [attachment, setAttachment] = useState(""); // questions 첨부파일
  const [post, setPost] = useState("");
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  //파일
  const [files, setFiles] = useState({ raw: "" });
  const [filesUrl, setFilesUrl] = useState([]);
  var d = new Date();

  const required = (bool_list) => {
    if (bool_list[1] == true) {
      return <span className={"text-sub"}>(필수)</span>;
    } else {
      return null;
    }
  };

  const handleChange = (e) => {
    // console.log(URL.createObjectURL(e.target.files[0]));
    // console.log(e.target.files[0]);
    if (e.target.files.length) {
      setFiles({
        raw: e.target.files[0],
      });
    }
  };

  const handleDelete = () => {
    setFiles({ raw: "" });
  };

  const uploadFile = (e, data, i) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", files.raw);

    axios
      .post("/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // console.log(res.data.image_url);
        setFilesUrl(res.data.file_url);
        console.log(res.data.file_url);
      });

    let copy = [...questions];
    copy[i] = {
      type: 1,
      question: data.question,
      answer: filesUrl,
    };
    console.log(e.target.value);
    setQuestions(copy);
  };

  const testType = (data, i) => {
    //주관식
    if (data.type == 0) {
      return (
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>
            {data.question}
            {data.required == true ? (
              <span className={"text-sub"}>(필수)</span>
            ) : null}
          </div>
          <input
            className={
              "bg-gray3 w-[550px] h-[300px] rounded-xl text-h5 overflow-y-scroll p-3"
            }
            onChange={(e) => {
              if (e.target.value.length <= 2000) {
                let copy = [...questions];
                copy[i] = {
                  type: 0,
                  question: data.question,
                  answer: e.target.value,
                };
                setQuestions(copy);
              }
            }}
          ></input>
        </div>
      );
    } else if (data.type == 1) {
      //첨부파일일 때
      return (
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>
            파일 추가
            {data.required == true ? (
              <span className={"text-sub"}>(필수)</span>
            ) : null}
          </div>
          <div>
            <div className="w-[80px] h-[80px] bg-gray3 rounded-xl text-h8 font-normal relative">
              <label
                for="input_file"
                className="block p-4 -bottom-10 w-[80px] h-[80px] bg-gray3 rounded-xl text-h8 font-normal"
              >
                <img
                  src="/images/attach_file.png"
                  className="px-[14px] mb-1"
                ></img>
                파일 추가
              </label>
            </div>
            <input
              type="file"
              accept="*.*"
              required
              id="input_file"
              className="hidden"
              onClick={uploadFile}
              // onChange={(e) => {}}
            />
          </div>
        </div>
      );
    }
  };

  useEffect(() => {});

  return (
    <div className={"text-h1 font-bold "}>
      <p className={"text-sub ml-[618px]"}> 코어 가입 신청서</p>
      <div className={"w-[780px] h-auto rounded-xl shadow-lg mx-auto"}>
        {/*이름 (보이게하는것, 필수인지 체크)*/}
        {props.formData.realname == true ? (
          <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
            <div className={"w-[150px] p-2 mt-[32px]"}>
              이름
              <span className={" text-sub"}>(필수)</span>
            </div>
            <input
              className={"bg-gray3 h-[48px] rounded-xl text-h5 p-3 mt-[32px]"}
              placeholder={"ex) 홍길동"}
              value={realname}
              onChange={(e) => {
                if (e.target.value.length <= 12) {
                  setRealName(e.target.value);
                }
              }}
            ></input>
          </div>
        ) : (
          <div></div>
        )}

        {/*학과 (보이게 하 는것, 필수인지 체크)*/}
        {props.formData.department == true ? (
          <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
            <div className={"w-[150px] p-2"}>
              학과 <span className={"text-sub"}>(필수)</span>
            </div>
            <input
              className={"bg-gray3 h-[48px] rounded-xl text-h5 p-3"}
              placeholder={"ex) OO학과"}
              value={department}
              onChange={(e) => {
                if (e.target.value.length <= 16) {
                  setDepartment(e.target.value);
                }
              }}
            ></input>
          </div>
        ) : (
          <div></div>
        )}
        {/*학번 (보이게 하는 것, 필수인지 체크)*/}
        {props.formData.school_number == true ? (
          <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
            <div className={"w-[150px] p-2"}>
              학번 <span className={"text-sub"}>(필수)</span>
            </div>
            <input
              className={"bg-gray3 h-[48px] rounded-xl text-h5 p-3"}
              placeholder={"ex) 2021070015"}
              value={schoolNumber}
              onChange={(e) => {
                if (e.target.value.length <= 10) {
                  setSchoolNumber(e.target.value);
                }
              }}
            ></input>
          </div>
        ) : (
          <></>
        )}
        {/*성별 (보이게 하는 것, 필수인지 체크)*/}
        {props.formData.gender[0] == true ? (
          <form className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
            <div className={"w-[150px] p-2 "}>
              성별 {required(props.formData.gender)}
            </div>
            <div className="">
              <input
                type="radio"
                className="form-checkbox h-5 w-5 text-black rounded-sm border-black border my-[11px]"
                value={"남자"}
                id="male"
                name="gender"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label className="text-h5 font-normal ml-[4px]" for={"male"}>
                남자
              </label>
            </div>
            <div className=" ml-[8px]">
              <input
                type="radio"
                className="form-checkbox h-5 w-5 text-black rounded-sm border-black border my-[11px]"
                value={"여자"}
                id="female"
                name="gender"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label className="text-h5 font-normal ml-[4px]" for={"female"}>
                여자
              </label>
            </div>
          </form>
        ) : (
          <></>
        )}
        {/*연락처 (보이게 하는 것, 필수인지 체크)*/}
        {props.formData.phone_number[0] == true ? (
          <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
            <div className={"w-[150px] p-2"}>
              연락처 {required(props.formData.phone_number)}
            </div>
            <input
              className={"bg-gray3 h-[48px] rounded-xl text-h5 p-3"}
              placeholder={"ex) 010-0000-0000"}
              value={phoneNumber}
              onChange={(e) => {
                if (e.target.value.length <= 13) {
                  setPhoneNumber(e.target.value);
                }
              }}
            ></input>
          </div>
        ) : (
          <div></div>
        )}

        {/*이메일 (보이게 하는 것, 필수인지 체크)*/}
        {props.formData.email[0] == true ? (
          <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
            <div className={"w-[150px] p-2"}>
              이메일 {required(props.formData.email)}
            </div>
            <input
              className={"bg-gray3 h-[48px] rounded-xl text-h5 p-3"}
              placeholder={"ex) 0000@naver.com"}
              value={email}
              onChange={(e) => {
                if (e.target.value.length <= 30) {
                  setEmail(e.target.value);
                }
              }}
            ></input>
          </div>
        ) : (
          <div></div>
        )}

        {/*주소 (보이게 하는 것, 필수인지 체크)*/}
        {props.formData.address[0] == true ? (
          <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
            <div className={"w-[150px] p-2"}>
              주소
              {required(props.formData.address)}
            </div>
            <input
              className={"bg-gray3 h-[48px] w-[550px] rounded-xl text-h5 p-3"}
              placeholder={"주소를 작성해주세요."}
              value={address}
              onChange={(e) => {
                if (e.target.value.length <= 40) {
                  setAddress(e.target.value);
                }
              }}
            ></input>
          </div>
        ) : null}
        {/*추가적으로 설정*/}
        {props.formData.questions.map((data, i) => {
          return <>{testType(data, i)}</>;
        })}

        {/*제출하면 lists에 신청서 제출하게 된다.*/}
        <button
          type={"submit"}
          className={"w-[87px] h-[40px] text-h5 text-white bg-sub rounded-md"}
          onClick={() => {
            const data = {
              title: props.formData.title,
              content: props.formData.content,
              club_objid: props.id,
              user_objid: userInfo._id.toString(),
              club_name: props.formData.club_name,
              deadline: d,
              announcement_of_acceptance: d,
              realname: realname,
              department: department,
              school_number: schoolNumber,
              gender: gender,
              phone_number: phoneNumber,
              email: email,
              address: address,
              questions: questions, //나중에 forms 넣으면 될 것 같은데,, 일단 냅두자
            };
            axios
              .post("api/club_application_lists", {
                user_objid: userInfo._id.toString(),
                club_objid: props.id,
                title: props.formData.title,
                club_name: props.formData.club_name,
                approval: 1,
                classification: 0,
                data: data,
              })
              .then((res) => {
                axios.get("/api/club_application_lists").then((response) => {
                  setPost(response.data);
                });
              });
          }}
        >
          제출하기
        </button>
      </div>
    </div>
  );
}
//동아리 관리자 가입 신청 현황
function ManagerSignUp(props) {
  let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 100, 200, 300, 400, 500];
  //가입 양식 설정하는 페이지 뜨도록 하는 state
  const [modal, setModal] = useState(false);
  //승인
  const [state, setState] = useState(false);
  const [listData, setListData] = useRecoilState(listsState);
  const [viewBtnState, setViewBtnState] = useRecoilState(viewButtonState);

  const PutApproval = () => {};

  return (
    <>
      <div
        className={
          modal == true
            ? "top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40"
            : ""
        }
      >
        <div className={" ml-[64px] w-[1306px] h-[40px] flex"}>
          <div className={"text-h1 font-bold text-sub ml-[580px] "}>
            가입신청 현황
          </div>

          <button
            className={
              "ml-auto w-[155px] h-[40px] rounded-md bg-sub text-white flex py-[10px] pl-[14px]"
            }
            onClick={() => {
              setModal(!modal);
            }}
          >
            <p className="text-h3 font-semibold">가입 양식 설정</p>
            <button className="material-symbols-outlined">chevron_right</button>
          </button>
        </div>
        <div className={"h-[26px]"} />
        <div className="relative">
          {state == true ? <ViewApplicationForm /> : null}
          {modal == true ? (
            <UserApplicationForm
              formData={props.formData}
              id={props.id}
              objid={props.objid}
            />
          ) : null}
          <div
            className={
              "w-[1306px] h-[648px] ml-[64px] rounded-xl overflow-hidden overflow-y-scroll shadow-xl "
            }
          >
            <div
              className={
                "h-[72px] border-b-[2px] border-gray2 grid justify-center"
              }
            >
              <div
                className={
                  "my-[16px] mx-[40px] w-[1226px] h-[40px] py-[6px] flex text-h5"
                }
              >
                <div className={"w-[38px]"}>
                  <p className="">순번</p>
                </div>
                <div className={"w-[164px]"}>
                  <p className="text-center">승인 현황</p>
                </div>
                <div className="w-[85px]">
                  <p className="text-center">이름</p>
                </div>
                <div className="w-[160px]">
                  <p className={"text-center"}>학과</p>
                </div>
                <div className="w-[155px] ">
                  <p className="text-center">학번</p>
                </div>
                <div className="w-[178px] r">
                  <p className="text-center">전화번호</p>
                </div>
                <div className="w-[151px]">
                  <p className="text-center">신청 일자</p>
                </div>
                <div className="w-[156px] ">
                  <p className="text-center">신청서</p>
                </div>
                <div className="ml-auto w-[120px] ">
                  <p className="text-center">승인</p>
                </div>
              </div>
            </div>
            {/*정보 가져오기*/}
            {listData.map((post, i) => {
              return (
                // <>
                //
                // </>
                <>
                  <li
                    className={
                      post === 10
                        ? "px-[45px] py-[16px] flex justify-between hover:bg-gray3 rounded-[20px]"
                        : "px-[45px] py-[16px] flex justify-between border-b-[0.5px] border-gray2 hover:bg-gray3 "
                    }
                  >
                    <div className={"flex w-[1216px] h-[40px]"}>
                      <div className={"w-[36px]"}>
                        <input type="checkbox" className="py-[6px]"></input>
                      </div>
                      <div className={"w-[36px]"}>
                        <div className={"py-[6px]"}>{i}</div>
                      </div>
                      <div className="w-[164px] grid justify-center">
                        <button
                          className={
                            post.approval == 1 ? "signup_wait" : "signup_done"
                          }
                        >
                          {post.approval == 1 ? "승인 대기" : "승인 완료"}
                        </button>
                      </div>
                      <div className={"w-[85px]"}>
                        <p className={"text-h5 py-[6px] text-center text-gray"}>
                          {post.data.realname}
                        </p>
                      </div>
                      <div className={"w-[160px]"}>
                        <p className={"text-h5 text-center py-[6px]"}>
                          {post.data.department}
                        </p>
                      </div>
                      <div className={"w-[155px]"}>
                        <p className={"text-h5 text-center py-[6px]"}>
                          {post.data.school_number}
                        </p>
                      </div>
                      <div className={"w-[178px]"}>
                        <p className={"text-h5 py-[6px] text-center"}>
                          {post.data.phone_number}
                        </p>
                      </div>
                      <div className={"w-[151px]"}>
                        <p className={"text-h5 text-center py-[6px]"}>
                          2023.07.06
                        </p>
                      </div>
                      <div className={"w-[156px] grid justify-center"}>
                        <button
                          className={
                            "border border-[#C1C1C1] rounded-md w-[100px] h-[40px]"
                          }
                          onClick={() => {
                            setState(!state);
                            setViewBtnState(i);
                          }}
                        >
                          신청서보기
                        </button>
                      </div>
                      <div className={"w-[128px] grid justify-end"}>
                        <button
                          className={
                            post.approval == 1 ? "signup_accept" : "signup_deny"
                          }
                          onClick={() => {}}
                        >
                          {post.approval == 0 ? "승인 취소" : "승인"}
                        </button>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </div>
          <div className="flex content-between">
            <button className="w-[129px] h-[40px] bg-[#C1C1C1] rounded-md text-white text-h3 ">
              전체 선택
            </button>
            <button className="w-[129px] h-[40px] bg-[#C1C1C1] rounded-md text-white text-h3">
              선택 삭제
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
