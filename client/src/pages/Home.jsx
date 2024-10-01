import React from "react";
import { useSelector } from "react-redux";
import HomeCard from "../components/HomeCard";

const Home = () => {
  const { posts } = useSelector((state) => state.posts);
  console.log("posts", posts);
  return (
    <div className="flex gap-5 items-center justify-center m-5 flex-wrap">
      {posts?.map((post, i) => (
        <HomeCard post={post} key={i} />
      ))}
    </div>
  );
};

export default Home;
