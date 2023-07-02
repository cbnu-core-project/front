import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { readOneClub } from "../../api/club";
import ClubTabBar from "../../components/ClubTabBar";

export default function ClubDetail() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  function getPost() {
    readOneClub(id).then((res) => setPost(res.data[0]));
  }

  useEffect(getPost, []);

  return (
    <>
      <div className={"p-10 ml-[10px]"}>
        <ClubTabBar />
      </div>

      <Outlet />
    </>
  );
}
