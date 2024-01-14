import CreateEditForm from "@/components/CreateEditForm";
import { usePostContext } from "@/hooks/usePostContext";
import { ResponseDataProps } from "@/types/types";
import { SyntheticEvent } from "react";
import { useParams } from "react-router-dom";

const CreateEditPost = () => {
  const { id } = useParams();
  const { posts } = usePostContext();

  let currentPost =
    id && posts?.data?.filter((post: ResponseDataProps) => post._id === id);

  const createPost = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(posts);
  };

  const editPost = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(currentPost);
  };

  return <CreateEditForm />;
};

export default CreateEditPost;
