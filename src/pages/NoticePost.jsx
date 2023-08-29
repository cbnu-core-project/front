import axios from 'axios';
import { baseUrl } from '../common/global';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../store';

axios.defaults.baseURL = baseUrl;

const NoticePost = () => {
    const [userInfo, setUserInfo] = useRecoilState(userInfoState);
    const [post, setPost] = useState([]);
    const navigate = useNavigate();
    const [formdata, setFormData] = useState("");
    const [filename, setFilename] = useState([]);

    const uploadPost = (e) => {
        e.preventDefault();

        axios.post('/api/notice', {
            "title": e.target.title.value,
            "content": e.target.content.value,
            "user_objid": userInfo._id,
            "realname": userInfo.realname,
            "last_updated": new Date(),
        }).then((res) => {
            axios.get('/api/notices').then((res) => {
                setPost(res.data);
                navigate('/notice');
            })
        })

    };

    const uploadFile = (e, data, i) => {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
    
        axios
          .post("/upload/file", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            let copy = [...filename];
            copy[i] = res.data.filename;
            setFilename(copy);
          });
      };

    return (
        <>
        <div className={'mt-[128px] text-center font-[Pv] text-h1 text-sub font-bold'}> 공지사항 작성</div>
        <form className={"w-[1306px] mt-6 px-[24px] py-[32px] m-auto shadow shadow-gray2 hover:bg-gray3 rounded-[20px]"} onSubmit = {(e) => uploadPost(e)}>
            <div className={'flex font-[Pv] mt-5 text-h3'}>
                <div className={'mt-3 font-bold'}> 제목 </div>
                <input
                    className={'w-[1126px] ml-12 py-[14px] font-[Pv] bg-gray2 rounded-md'}
                    placeholder={" 제목을 입력하세요."}
                    name='title'
                    required
                />
            </div>

            <div className={'mt-[32px] flex font-[Pv] mt-5 text-h3'}>
                <div className={'mt-[185px] font-bold'}> 내용 </div>
                <textarea
                    className={'w-[1126px] ml-12 h-[550px] py-[14px] font-[Pv] bg-gray2 rounded-md'}
                    placeholder={" 내용을 입력하세요."}
                    name='content'
                    required
                />
            </div>

            <div className={'mt-[32px] ml-[16px] flex'}>
                <div className={'mt-[60px] font-bold'}> 파일 </div>
                <figure>
                <img
                      src="/images/attach_file.png"
                      className="mt-[45px] px-[24px] py-[24px] rounded-md ml-[32px] bg-gray2"
                >
                </img>
                <figcaption className={'font-bold font-[Pv] ml-[34px]'}>파일 추가</figcaption>
                </figure>
            </div>

            <div className={'mt-5 flex justify-end'}>
                <button type='button' className={'mt-[64px] font-[Pv] px-[10px] py-[8px] rounded-md border border-sub text-h5 text-sub'}
                    onClick={() => {
                        navigate('../notice');
                    }}>뒤로 가기</button>
                <button type='submit'className={'mt-[64px] font-[Pv] ml-5 mr-[64px] px-[10px] py-[8px] bg-sub rounded-md text-h5 text-white'}>공지사항 업로드</button>
            </div>
            
        </form>
        </>
    );
}

export default NoticePost;