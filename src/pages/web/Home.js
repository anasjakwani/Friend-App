import React from "react";
import Nav from "../../components/Nav/Nav";
import PostCard from "../../components/Post/PostCard"
import PostList from "../../components/Post/PostList";

const Home = () => {
  return (
    <>
    <Nav />
    <PostCard />
    <PostList/>
    </>
  );
};

export default Home;
