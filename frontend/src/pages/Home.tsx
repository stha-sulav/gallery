import PostCard from "@/components/PostCard";
import Container from "@/components/ui/container";
import { usePostContext } from "@/hooks/usePostContext";
import { useEffect } from "react";
import { ResponseDataProps } from "../types/types";

const Home = () => {
  const { posts, dispatch } = usePostContext();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/v1/posts");
      const result = await res.json();

      dispatch({ type: "SET_POSTS", payload: result });
    }

    fetchData();
  }, [dispatch]);

  console.log(posts);

  return (
    <div className="mt-4">
      <Container>
        <div className="flex justify-center items-center gap-3">
          {posts?.data?.map((post: ResponseDataProps) => (
            <PostCard
              key={post?._id}
              imageURL={post?.photos[0].url}
              caption={post.caption}
              _id={post._id}
              date={post.updatedAt}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
