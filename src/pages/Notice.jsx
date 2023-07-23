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
    getCountPosts();
  }, []);

  useEffect(() => {
    getPosts();
  },[page]);


  return (
    <>
      <div className={"w-[1434px]"}>
        <div className={"mt-[164px] mb-8 text-center text-main font-[Pv] text-h1"}>
          서비스 
          <span className={'font-bold'}> 공지사항</span>
        </div>
        <form className={'mt-2'}>
          <select className={'ml-16 w-[200px] h-[44px] font-bold rounded-2xl border border-gray text-h5'}>
            <option value={"1"}>제목</option>
            <option value={"2"}> 작성자</option>
            <option value={"3"}> 제목 + 작성자</option>
          </select>
          <input 
            className={'ml-[32px] w-[1038px] h-[44px] border border-gray rounded-2xl text-h5'}
            placeholder={"  검색어를 입력해보세요."}
          />
          <button 
            type={"submit"}
            className={"ml-2 w-[44px] h-[44px] rounded-3xl bg-main_mid text-h3 text-white"}>
            🔍︎
          </button>
        </form>
        <div>
          {posts.map((post) => {
            console.log(post);
            return (
              <div>
                {DateFromObject(post._id).toISOString()};
              </div>
            )
          })}
        </div>
        <div className={""}>
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
