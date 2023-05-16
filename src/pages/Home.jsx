import HomeClubList from "../components/HomeClubList";
import SideBar from "../components/SideBar";
import HomePromotionList from "../components/HomePromotionList";
import Navigation from "../components/Navigation";
import HomeNoticeList from "../components/HomeNoticeList";

export default function Home() {
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
