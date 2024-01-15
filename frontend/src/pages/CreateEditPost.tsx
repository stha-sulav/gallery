import CreateEditForm from "@/components/CreateEditForm";
import { usePostContext } from "@/hooks/usePostContext";
import { PostFormProps } from "@/schema/postForm-schema";
import { ResponseDataProps } from "@/types/types";
import { useParams } from "react-router-dom";

const CreateEditPost = () => {
  const { id } = useParams();
  const { posts } = usePostContext();

  let currentPost =
    id && posts?.data?.filter((post: ResponseDataProps) => post._id === id)[0];

  return <CreateEditForm />;
};

export default CreateEditPost;
