import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ClubDetail() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  function getPost() {
    axios.get("/api/post/" + id).then((res) => {
      setPost(res.data[0]);
      console.log(res.data);
    });
  }

  useEffect(getPost, []);

  return (
    <div className={"w-full min-w-home2"}>
      <div
        className={
          "border-4 border-slate-500 p-4 rounded-3xl mt-20 ml-28 mr-28 h-96"
        }
      >
        <div
          className={
            "border-b-4 border-slate-500 text-slate-700 grid grid-cols-2"
          }
        >
          <div className={""}>
            {post.title}{" "}
            <span className={"text-slate-400"}>({post.author})</span>
          </div>
          <div className={"place-self-end"}>
            <button
              className="text-slate-100 font-bold rounded-xl bg-red-400 p-1 w-24 mb-3 shadow-md shadow-red-500/50 transition ease-in-out hover:bg-blue-500 hover:shadow-blue-500"
              // onClick={onClick}
            >
              삭제
            </button>
          </div>
        </div>
        <div className={"whitespace-pre-wrap text-slate-700"}>
          {post.content}
        </div>
      </div>
    </div>
  );
}
