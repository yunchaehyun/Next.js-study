import AppLayout from "../components/AppLayout";
import React from "react";
import { useSelector } from "react-redux";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

const Home = () => {
  // useSelector를 사용해 redux에 있는 상태 가져오기
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <AppLayout>
      {/* 게시물 작성 폼은 로그인한 사용자에게만 보이게 한다. */}
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default Home;

// next가 pages 폴더를 인식해서 이걸 다 page component로 만들어줌
// code spliting된 page로 만들어주는거임
