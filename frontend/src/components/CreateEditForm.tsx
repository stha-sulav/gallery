import { ApiResponseProps } from "@/types/types";
import Container from "./ui/container";
import { FormSchemaProps } from "@/schema/form-schema";
import { useForm } from "react-hook-form";

interface CreateEditFormProps {
  createPost?: (id: string) => Promise<void>;
  editPost?: (id: string) => Promise<void>;
  posts?: ApiResponseProps;
}

const CreateEditForm = ({}: //   posts,
//   createPost,
//   editPost,
CreateEditFormProps) => {
  const form = useForm<FormSchemaProps>();
  return <Container>Test</Container>;
};

export default CreateEditForm;
