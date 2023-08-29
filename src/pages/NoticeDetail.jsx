import { useRecoilState } from "recoil";
import axios from 'axios';
import { baseUrl } from '../common/global';
import { noticesState } from '../store';

axios.defaults.baseURL = baseUrl;

const NoticeDetail = () => {
    const [posts, setPosts] = useRecoilState(noticesState);
    return (
        <>
            <div className={"w-[1434px]"}>
                <div className={"mt-[160px] mb-8 text-center text-main font-[Pv] text-h1"}>
                    서비스
                    <span className={'font-bold'}> 공지사항</span>
                </div>

                <div className={"w-[1306px] rounded-2xl bg-background ml-16"}>
                    <div className={'ml-[32px] mt-[50px] py-[8px] font-[Pv] font-bold text-h3 text-black '}> 제목 </div>

                </div>
            </div>
        </>
    )
}

export default NoticeDetail;