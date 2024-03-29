//동아리 관리자 가입 신청 양식 설정
import DropdownMenu from "../../components/DropDownMenu";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../common/global";
import { useRecoilState } from "recoil";
import { listsState } from "../../store";

export default function UserApplicationForm(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [forms, setForms] = useState([]);
  const [type, setType] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  //////////////////////////
  const [phoneNumber, setPhoneNumber] = useState([false, false]);
  const [phoneNumberChecked, setPhoneNumberChecked] = useState(false);
  const [phoneNumberRequiredChecked, setPhoneNumberRequiredChecked] =
    useState(false);
  const [gender, setGender] = useState([false, false]);
  const [genderChecked, setGenderChecked] = useState(false);
  const [genderRequiredChecked, setGenderRequiredChecked] = useState(false);
  const [email, setEmail] = useState([false, false]);
  const [emailChecked, setEmailChecked] = useState(false);
  const [emailRequiredChecked, setEmailRequiredChecked] = useState(false);
  const [address, setAddress] = useState([false, false]);
  const [addressRequiredChecked, setAddressRequiredChecked] = useState(false);
  const [addressChecked, setAddressChecked] = useState(false);

  const handleMenuClick = (props) => {
    setIsOpen(!isOpen);
  };

  const [data, setData] = useState({
    title: "",
    content: "",
    questions: [{}],
  });
  const k = [1, 2, 3, 4, 5];
  var d = new Date();

  function updateApplicationForm() {
    axios
      .put(`api/club_application_form/club_objid/${props.id}`, {
        title: title,
        content: content,
        club_objid: props.id,
        club_name: "1",
        deadline: d,
        announcement_of_acceptance: d,
        realname: true,
        department: true,
        school_number: true,
        gender: gender,
        phone_number: phoneNumber,
        email: email,
        address: address,
        questions: forms,
      })
      .then((res) => {
        axios
          .get(`api/club_application_form/club_objid/${props.id}`)
          .then((response) => {
            setData(response.data[0]);
            console.log(response.data[0]);
          });
      });
  }

  function createApplicationForm() {
    axios
      .post("api/club_application_form", {
        title: title,
        content: content,
        club_objid: props.id,
        club_name: "1",
        deadline: d,
        announcement_of_acceptance: d,
        realname: true,
        department: true,
        school_number: true,
        gender: gender,
        phone_number: phoneNumber,
        email: email,
        address: address,
        questions: forms,
      })
      .then((res) => {
        axios
          .get(`api/club_application_form/club_objid/${props.id}`)
          .then((response) => {
            setData(response.data[0]);
            console.log(response.data[0]);
          });
      });
  }

  function getClubApplicationForm() {
    //주요활동내역 가져옴
    axios
      .get(`api/club_application_form/club_objid/${props.id}`)
      .then((res) => {
        setData(res.data[0]);
      });
  }

  //  //해당 동아리 지원한 사람들의 리스트 -> 관리자 입장에서 approval로 승인, 거절 선택할 수 있음
  //  function getClubApplicationLists() {
  //   axios.get(`api/club_application_lists/${id}`).then((res) => {
  //     setListData(res.data);
  //     console.log(res.data);
  //   });
  // }

  useEffect(() => {
    getClubApplicationForm();
  }, []);

  //   useEffect(() => {
  //     console.log(phoneNumber);
  //   }, [phoneNumber, phoneNumberRequiredChecked]);

  // useEffect(()=> {
  //     console.log(forms)
  // }, [forms])

  return (
    <div className={"text-h1 font-bold absolute z-10 left-1/4 right-1/4"}>
      {/* <p className={"text-sub text-center"}> 가입 신청서 양식 설정</p> */}
      <div className={"w-[780px] rounded-xl shadow-lg mx-auto bg-white"}>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2 mt-[32px]"}>제목</div>
          <input
            className={
              "bg-gray3 h-[48px] w-[550px] rounded-xl text-h5 p-3 mt-[32px]"
            }
            value={title}
            onChange={(e) => {
              if (e.target.value.length <= 40) {
                setTitle(e.target.value);
              }
            }}
            placeholder={"ex) OOO 3기 팀원 모집"}
          ></input>
        </div>

        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>설명</div>
          <input
            className={"bg-gray3 h-[48px] w-[550px] rounded-xl text-h5 p-3"}
            placeholder={"ex) 가입신청 관련 유의사항 및 공지내용"}
            value={content}
            onChange={(e) => {
              if (e.target.value.length <= 40) {
                setContent(e.target.value);
              }
            }}
          ></input>
        </div>
        <div
          className={
            "w-[700px] h-auto mx-auto mt-[32px] text-h3 flex font-bold"
          }
        >
          신청서로 받아볼 항목들을 선택해주세요.
        </div>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>
            이름 <span className={"text-sub"}>(필수)</span>
          </div>
          <div className={"w-[150px] p-2"}>
            <input
              type="checkbox"
              checked
              disabled
              className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
              value={true}
            />
          </div>
        </div>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>
            학과 <span className={"text-sub"}>(필수)</span>
          </div>
          <div className={"w-[150px] p-2"}>
            <input
              type="checkbox"
              checked
              disabled
              className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
              value={true}
            />
          </div>
        </div>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>
            학번 <span className={"text-sub"}>(필수)</span>
          </div>
          <div className={"w-[150px] p-2"}>
            <input
              type="checkbox"
              checked
              disabled
              className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
              value={true}
            />
          </div>
        </div>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>연락처</div>
          <div className={"w-[150px] p-2"}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
              checked={phoneNumberChecked}
              onChange={(e) => {
                let copy = [...phoneNumber];
                copy[0] = !phoneNumberChecked;
                setPhoneNumber(copy);
                setPhoneNumberChecked(!phoneNumberChecked);
              }}
            />
          </div>
          <div className={"w-[150px] p-2"}>필수 여부</div>
          <div className={"w-[150px] p-2"}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
              checked={phoneNumberRequiredChecked}
              onChange={(e) => {
                let copy = [...phoneNumber];
                copy[1] = !phoneNumberRequiredChecked;
                setPhoneNumber(copy);
                setPhoneNumberRequiredChecked(!phoneNumberRequiredChecked);
              }}
            />
          </div>
        </div>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>성별</div>
          <div className={"w-[150px] p-2"}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
              checked={genderChecked}
              onChange={(e) => {
                let copy = [...gender];
                copy[0] = !genderChecked;
                setGender(copy);
                setGenderChecked(!genderChecked);
              }}
            />
          </div>
          <div className={"w-[150px] p-2"}>필수 여부</div>
          <div className={"w-[150px] p-2"}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
              checked={genderRequiredChecked}
              onChange={(e) => {
                let copy = [...gender];
                copy[1] = !genderRequiredChecked;
                setGender(copy);
                setGenderRequiredChecked(!genderRequiredChecked);
              }}
            />
          </div>
        </div>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>이메일</div>
          <div className={"w-[150px] p-2"}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
              checked={emailChecked}
              onChange={(e) => {
                let copy = [...email];
                copy[0] = !emailChecked;
                setEmail(copy);
                setEmailChecked(!emailChecked);
              }}
            />
          </div>
          <div className={"w-[150px] p-2"}>필수 여부</div>
          <div className={"w-[150px] p-2"}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
              checked={emailRequiredChecked}
              onChange={(e) => {
                let copy = [...email];
                copy[1] = !emailRequiredChecked;
                setEmail(copy);
                setEmailRequiredChecked(!emailRequiredChecked);
              }}
            />
          </div>
        </div>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>주소</div>
          <div className={"w-[150px] p-2"}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
              checked={addressChecked}
              onChange={(e) => {
                let copy = [...address];
                copy[0] = !addressChecked;
                setAddress(copy);
                setAddressChecked(!addressChecked);
              }}
            />
          </div>
          <div className={"w-[150px] p-2"}>필수 여부</div>
          <div className={"w-[150px] p-2"}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
              checked={addressRequiredChecked}
              onChange={(e) => {
                let copy = [...address];
                copy[1] = !addressRequiredChecked;
                setAddress(copy);
                setAddressRequiredChecked(!addressRequiredChecked);
              }}
            />
          </div>
        </div>

        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2 flex"}>
            질문 추가
            <button
              className="bg-gray2 h-7 w-7 rounded-full flex items-center justify-center text-black ml-[10px] mt-[3px]"
              onClick={() => {
                let copy = [...forms];
                copy.push({
                  type: 0,
                  required: false,
                  question: "제목을 입력해주세요.",
                });
                setForms(copy);
              }}
            >
              +
            </button>
          </div>
        </div>
        {forms.map((form, index) => {
          return (
            <div className="">
              <div
                className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex "}
              >
                {/*주관식인지 첨부파일인지 선택하는 드롭박스*/}
                <div className="relative inline-block">
                  <button
                    className="py-2 px-4 bg-gray3 text-black text-h5 rounded-lg focus:outline-none"
                    onClick={handleMenuClick}
                  >
                    형식 선택 ▾
                  </button>
                  {isOpen && (
                    <div className="absolute mt-2 bg-gray3 rounded-lg shadow-lg">
                      <a
                        href="#"
                        className="block rounded-lg  py-2 px-4 text-h5 hover:bg-gray"
                        onClick={() => {
                          let copy = [...forms];
                          copy[index].type = 0;
                          setForms(copy);
                        }}
                      >
                        주관식
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg  py-2 px-4 text-h5 hover:bg-gray"
                        onClick={() => {
                          let copy = [...forms];
                          copy[index].type = 1;
                          setForms(copy);
                        }}
                      >
                        첨부파일
                      </a>
                    </div>
                  )}
                </div>
                <div className={"w-[150px] p-2 text-h5 ml-[20px]"}>
                  필수 여부
                </div>
                <div className={"w-[150px] p-2"}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-black rounded-sm border"
                    checked={forms[index].required}
                    onChange={(e) => {
                      let copy = [...forms];
                      copy[index].required = !forms[index].required;
                      setForms(copy);
                    }}
                  />
                </div>
              </div>
              <div
                className={"w-[700px] h-auto mx-auto mt-[16px] text-h3 flex"}
              >
                <input
                  className={
                    "bg-gray3 h-[48px] w-[1000px] rounded-xl text-h5 p-3"
                  }
                  placeholder={"제목을 입력해주세요."}
                  value={form.question}
                  onChange={(e) => {
                    let copy = [...forms];
                    copy[index].question = e.target.value;
                    setForms(copy);
                  }}
                ></input>
              </div>
            </div>
          );
        })}

        <div
          className={
            "w-[700px] h-auto mx-auto mt-[16px] text-h3 flex justify-end mb-[10px] "
          }
        >
          <button
            type={"submit"}
            className={
              "w-[87px] h-[40px] text-h5 text-black border border-sub bg-white rounded-md mr-[10px]"
            }
          >
            미리보기
          </button>
          <button
            type={"button"}
            className={"w-[87px] h-[40px] text-h5 text-white bg-sub rounded-md"}
            onClick={() => {
              console.log(props.formData)
              if (props.formData === undefined)
              {
                createApplicationForm();
                alert("제출되었습니다.");
              }
              else{
                updateApplicationForm();
                alert("변경되었습니다.");
              }
            }}
          >
            제출하기
          </button>
        </div>
      </div>
    </div>
  );
}
