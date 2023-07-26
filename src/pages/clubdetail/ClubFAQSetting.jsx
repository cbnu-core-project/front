import axios from "axios"
import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";


export default function ClubFAQSetting() {
    const { id } = useParams();
    const [post, setPost] = useState({faqs:[]});
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get('/api/club_faq/' + id).then((res) => {
          if(res.data.length === 0){
            axios.post('api/club_faq', {
                "club_objid": id,
                "open_url": "ex) 문의 가능한 링크를 등록해주세요. (오픈채팅방 등)",
                "faqs": [
                  {
                    "question": "질문을 입력하세요.",
                    "answer": "답변을 입력하세요."
                  }
                ]
              }).then((res) => {
                axios.get('api/club_faq/' + id).then((res) => {
                    setPost(res.data); //콜백 지옥
                })
              })
          }
          else{
            setPost(res.data);
          }
        });
      }, [])

    return (
        <>
            <div className={'text-[32px] font-bold text-sub flex ml-[628px]'}>FAQ 설정</div>
            <div className={"w-[1306px] mt-6 px-[24px] py-[32px] m-auto shadow shadow-gray2 hover:bg-gray3 rounded-[20px]"}>
                <div className={'font-[Pv] font-bold text-h3'}>링크 등록</div>
                <input
                    className={'w-[1226px] px-[10px] py-[14px] mt-2 font-[Pv] bg-gray2 rounded-md'}
                    placeholder={" ex) 문의 가능한 링크를 등록해주세요. (오픈채팅방 등)"}
                />
                <div className={'mt-10 font-[Pv] font-bold text-h3'}>질문 & 답변 추가
                    <button className={'w-[36px] h-[36px] ml-3 bg-gray2 rounded-full font-[Pv] font-bold text-darkgray'}
                        onClick={() => {

                        }}
                    > + </button>
                </div>
            </div>
        </>

    )
}