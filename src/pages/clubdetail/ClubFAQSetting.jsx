import axios from "axios"
import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export default function ClubFAQSetting() {
  const { id } = useParams();
  const [post, setPost] = useState({ faqs: [{question: "", answer: ""}] });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/club_faq/' + id).then((res) => {
      if (res.data.length === 0) {
        axios.post('api/club_faq', {
          "club_objid": id,
          "open_url": "",
          "faqs": [ //post.faqs.question
            {
              "question": "",
              "answer": ""
            }
          ]
        }).then((res) => {
          axios.get('api/club_faq/' + id).then((res) => {
            setPost(res.data[0]); //콜백 지옥
          })
        })
      }
      else {
        setPost(res.data[0]);
      }
    });
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`/api/club_faq/${post._id}`, // 고유 아이디
    {
      "club_objid": post.club_objid,
      "open_url": post.open_url,
      "faqs": post.faqs
    }).then((res) => {
      axios.get(`/api/club_faq/${id}`)//클럽 아이디(클럽번호)
      .then((res)=>{setPost(res.data)}) 
    })
    .catch(err => {console.log(err)})

    navigate("../clubfaq");
  }

  return (
    <>
      <div className={'text-[32px] font-bold text-sub flex ml-[628px]'}>FAQ 설정</div>
      <form className={"w-[1306px] mt-6 px-[24px] py-[32px] m-auto shadow shadow-gray2 hover:bg-gray3 rounded-[20px]"}
      onSubmit={handleSubmit}>
        <div className={'font-[Pv] font-bold text-h3'}>링크 등록</div>
        <input
          className={'w-[1226px] px-[10px] py-[14px] mt-2 font-[Pv] bg-gray2 rounded-md whitespace-normal'}
          placeholder={" ex) 문의 가능한 링크를 등록해주세요. (오픈채팅방 등)"}
          value={post.open_url}
          onChange={(e)=>{
            let copy = {...post}
            copy.open_url = e.target.value
            setPost(copy)
          }}
        />
        <div className={'mt-10 font-[Pv] font-bold text-h3'}>질문 & 답변 추가
          <button className={'w-[36px] h-[36px] ml-3 bg-gray2 rounded-full font-[Pv] font-bold text-darkgray'}
            onClick={() => {
              let copy = {...post}
              copy.faqs.push({question: "", answer: ""});
              setPost(copy)
            }}
          > + </button>
        </div>
        
        {post.faqs.map((faq, idx) => <QnaBox idx={idx} faq={faq} post={post} setPost={setPost} />)}
        
        <button className={'mt-8 ml-[1042px] w-[87px] px-[10px] py-[16px] font-[Pv] text-black text-h5 rounded-md border border-gray2'}
          onClick={() => {
            navigate("../clubfaq");
          }}> 취소 </button>
        <button className={'mt-8 ml-4 w-[87px] px-[10px] py-[16px] font-[Pv] text-white text-h5 rounded-md border border-gray2 bg-sub'}
        type={"submit"}>저장하기</button>
      </form>
    </>

  )
}

function QnaBox({ idx, faq, post, setPost}) {

  return (
    <>
      <div className={'flex font-[Pv] mt-5 text-h3'}>
        <div> 질문 {idx + 1}</div>
        <input
            className={'w-[1126px] ml-12 py-[14px] font-[Pv] bg-gray2 rounded-md'}
            placeholder={" 질문을 입력하세요."}
            value={faq.question}
            onChange={(e)=>{
              let copy = {...post}
              copy.faqs[idx].question = e.target.value
              setPost(copy)
            }}
            required
          />
      </div>

      <div className={'flex font-[Pv] mt-5 text-h3'}>
        <div> 답변 {idx + 1}</div>
        <textarea
          className={'w-[1126px] ml-12 h-[115px] py-[14px] font-[Pv] bg-gray2 rounded-md'}
          placeholder={" 답변을 입력하세요."}
          value={faq.answer}
          onChange={(e)=>{
            let copy = {...post}
            copy.faqs[idx].answer = e.target.value
            setPost(copy)
          }}
          required
        />
      </div>

      <button type="button" className={'mt-5 w-[60px] px-[8px] py-[12px] text-h7 font-[Pv] font-bold ml-[1166px] bg-gray rounded-md text-white'}
        onClick={() => {
          let copy = {...post}
              copy.faqs.splice(idx, 1);
              setPost(copy)
        }}>삭제</button>
    </>
  );
}
