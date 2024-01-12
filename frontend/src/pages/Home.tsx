import { type CarouselApi } from "@/components/ui/carousel";
import PostCard from "@/components/PostCard";
import Container from "@/components/ui/container";
import { usePostContext } from "@/hooks/usePostContext";
import { useEffect, useState } from "react";
import { ResponseDataProps } from "../types/types";

const Home = () => {
  const { posts, dispatch } = usePostContext();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/v1/posts");
      const result = await res.json();

      dispatch({ type: "SET_POSTS", payload: result });
    }

    fetchData();
  }, [dispatch]);

  console.log(posts);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mt-4">
      <Container>
        <div className="flex justify-center items-center gap-3">
          {posts?.data?.map((post: ResponseDataProps) => (
            <PostCard
              key={post?._id}
              photo={post?.photos}
              caption={post.caption}
              _id={post._id}
              date={post.updatedAt}
              setApi={setApi}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
