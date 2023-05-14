import HomeClubList from "../components/HomeClubList";
import SideBar from "../components/SideBar";
import HomePromotionList from "../components/HomePromotionList";

export default function Home() {
  return (
    <>
      <div className={"w-full min-w-home2"}>
        <div>
          <div className={"mt-32"} />
          <HomeClubList />
          <div className={"mt-14"} />
          <HomePromotionList />
        </div>
      </div>
    </>
  );
}
