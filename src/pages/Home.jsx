import HomeClubList from "../components/home/HomeClubList";
import HomePromotionList from "../components/home/HomePromotionList";
import HomeNoticeList from "../components/home/HomeNoticeList";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = `모든 동아리가 모이는 공간 | Core`;
  });

  return (
    <>
      <div className={"w-full min-w-home2"}>
        <div>
          <div className={"mt-[128px]"} />
          <HomeClubList />
          <div className={"mt-[56px]"} />
          <HomePromotionList />
          <div className={"mt-[70px]"} />
          <HomeNoticeList />
          <div className={"mt-[64px]"} />
        </div>
      </div>
    </>
  );
}
