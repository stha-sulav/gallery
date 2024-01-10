import Container from "@/components/ui/container";
import { usePostContext } from "@/hooks/usePostContext";
import { useEffect } from "react";

const Home = () => {
  const { posts, dispatch } = usePostContext();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/v1/posts");
      const result = await res.json();

      dispatch({ type: "SET_POSTS", payload: result });
    }

    fetchData();
  }, []);

  console.log(posts);

  return <Container>Home</Container>;
};

export default Home;
