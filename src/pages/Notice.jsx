import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { noticesState } from '../store';
import { readAllNotices, readSomeNotices } from '../api/notice';
import { useNavigate } from 'react-router-dom';
import { usePagination } from '@mantine/hooks';
import axios from 'axios';
import { baseUrl } from '../common/global';
import { Pagination } from '@mantine/core';

axios.defaults.baseURL = baseUrl;

const Notice = () => {
  const [posts, setPosts] = useRecoilState(noticesState);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const [page, onChange] = useState(1);
  const [Selected, setSelected] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  let today = new Date();
  let timeCompare = parseInt(today);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const getPosts = () => {
    readSomeNotices((page - 1) * 9, 9).then((res) => {
      setPosts(res.data);
    })
  };

  const getCountPosts = () => { //전체 게시물 계산
    readAllNotices().then((res) => {
      setCount(res.data.length);
    });
  }

  const pagination = usePagination({
    total: Math.ceil(count / 9),
    page,
    onChange,
  })

  useEffect(() => {
    axios.get('/api/user/info').then((res) => {
      setUserInfo(res.data);
    })
  })

  useEffect(() => {
    getCountPosts();
  }, []);

  useEffect(() => {
    getPosts();
  }, [page]);




  return (
    <>
      <div className={"w-[1434px]"}>
        <div className={"mt-[160px] mb-8 text-center text-main font-[Pv] text-h1"}>
          서비스
          <span className={'font-bold'}> 공지사항</span>
        </div>
        {userInfo.admin === true ?
          <form className={'mt-2'}>
            <select className={'ml-16 w-[200px] h-[44px] font-bold rounded-2xl border border-gray text-h5'}>
              <option value={"1"}>   제목</option>
              <option value={"2"}>   작성자</option>
              <option value={"3"}>   제목 + 작성자</option>
            </select>
            <input
              className={'ml-[32px] w-[1038px] h-[44px] border border-gray rounded-2xl text-h5'}
              placeholder={"  검색어를 입력해보세요."}
            />
            <button
              type={"submit"}
              className={"ml-2 w-[33px] h-[33px] rounded-3xl bg-main_mid text-h4 text-white"}>
              🔍︎
            </button>
          </form>
          :
          <div className={'flex justify-between'}>
            <form className={'mt-2'}>
              <select className={'ml-16 w-[100px] h-[44px] font-bold rounded-2xl border border-gray text-h5'}>
                <option value={"1"}>   제목</option>
                <option value={"2"}>   작성자</option>
                <option value={"3"}>   제목 + 작성자</option>
              </select>
              <input
                className={'ml-[20px] w-[221px] h-[44px] border border-gray rounded-2xl text-h5'}
                placeholder={"  검색어를 입력해보세요."}
              />
              <button
                type={"submit"}
                className={"ml-2 w-[33px] h-[33px] rounded-3xl bg-main_mid text-h4 text-white"}>
                🔍︎
              </button>
            </form>
            <div className={'flex justify-between'}>
            <button className={'font-[Pv] px-[10px] py-[8px] rounded-md border border-sub text-h5 text-sub'}>임시저장 목록 ></button>
            <button className={'font-[Pv] ml-5 mr-[64px] px-[10px] py-[8px] bg-sub rounded-md text-h5 text-white'}
              onClick={() => {
                navigate('../noticePost');
              }}>공지사항 작성하기 ></button>
            </div>
          </div>
        }

        <div className={"w-[1306px] rounded-2xl bg-background ml-16 mt-8"}>
          {posts.map((post, index) => {
            return (
              <div className={'font-[Pv] px-[30px] py-[22px] flex justify-between ' + (index < 8 ? ' border-b border-gray2' : '')}>
                {/* {DateFromObject(post._id) - today >= -10 ? <span> [New] </span>: "" } <<- new 붙이는 곳인데 나중에 함수 추가하겠음.*/} 
                <button
                  onClick={() => {
                    alert("아직 개발 안됐어요")
                  }}>
                  {post.title.length > 70
                    ? post.title.slice(0, 70) + "..."
                    : post.title}
                </button>
                <div>
                  {DateFromObject(post._id).toISOString().substring(0, 10)}
                </div>
              </div>
            )
          })}
        </div>
        <div className={"ml-[653px] mt-6"}>
          <Pagination
            total={Math.ceil((count) / 9)}
            boundaries={1}
            onChange={onChange}
          />
          {/*<button className={"font-bold "}>{page}</button>*/}
        </div>
      </div>
    </>
  )
};

function DateFromObject(objid) { //오브젝트 아이디로부터 시간 받아오는 함수
  return new Date(parseInt(objid.substring(0, 8), 16) * 1000);
}

export default Notice;
