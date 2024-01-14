import { type CarouselApi } from "@/components/ui/carousel";
import PostCard from "@/components/PostCard";
import Container from "@/components/ui/container";
import { usePostContext } from "@/hooks/usePostContext";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/v1/posts/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    dispatch({ type: "DELETE_POST", payload: data.data._id });
  };

  console.log(posts);

  return (
    <div className="mt-4">
      <Container>
        <div className="p-3">
          <Link to="/create">
            <Button>
              <Plus />
              Add Posts
            </Button>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-3">
          {posts?.data?.length === 0 ? (
            <h2 className="text-3xl font-medium">No Posts</h2>
          ) : (
            <PostCard
              posts={posts}
              setApi={setApi}
              handleDelete={handleDelete}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default Home;
