import { PostContext } from "@/context/PostContext";
import { useContext } from "react";

export const usePostContext = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw Error("Post context used outside of Provider");
  }

  return context;
};
