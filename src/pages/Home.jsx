import HomeClubList from "../components/HomeClubList";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <>
      <div className={"w-full flex"}>
        <div>
          <HomeClubList />
          <div className={"mt-14"} />
        </div>
        <SideBar />
      </div>
    </>
  );
}
