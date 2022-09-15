import Header from "../components/Header";
import PostList from "../components/PostList";
import { IoRocketOutline } from "react-icons/io5";
import {RiLightbulbLine} from "react-icons/ri"

export default function Home() {
  return (
    <div className="h-screen w-full bg-black-rgba text-white overflow-auto">
      <Header />
      <div className="flex mx-80 my-16 flex-col">
        <div className="flex mb-8 space-x-8 ">
          <button className="flex items-center font-extrabold text-[2.5rem] rounded-full bg-[#303030] p-2 text-emerald-400 hover:bg-[#202020]">
            <IoRocketOutline className="mr-2"/>
            Trending
          </button>
          <button className="flex items-center font-extrabold text-[2.5rem] rounded-full hover:bg-[#202020] p-2">
            <RiLightbulbLine className="mr-2"/>
            New
          </button>
        </div>
        <PostList></PostList>
      </div>
    </div>
  );
}
