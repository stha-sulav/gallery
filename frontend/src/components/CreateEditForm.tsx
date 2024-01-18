import { PostFormProps } from "@/schema/postForm-schema";
import { SubmitHandler, useForm } from "react-hook-form";

const CreateEditForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormProps>();

  // console.log(watch("caption"));

  const handleChange = (e: any) => {
    console.log(e.target);
  };

  const onSubmit: SubmitHandler<PostFormProps> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="m-auto h-[80vh] flex justify-center text-center"
    >
      <div className="w-3/4 mt-8 p-10 flex flex-col gap-8">
        {/* register your input into the hook by invoking the "register" function */}

        <div className="w-full flex gap-5 items-center p-2">
          <label htmlFor="caption" className="w-1/6 text-xl">
            Captions
          </label>
          <input
            id="caption"
            {...register("caption")}
            className="w-4/5 border-2 border-black px-3 py-1 rounded-md"
          />
        </div>

        <div className="w-full flex gap-5 items-center p-2">
          <label htmlFor="photos" className="w-1/6 text-xl">
            Photos
          </label>
          <input
            id="photos"
            {...register("photos", { required: true })}
            className=" w-4/5 border-2 border-black px-3 py-1 rounded-md"
            type="file"
            onChange={handleChange}
            multiple
          />
        </div>

        {errors.photos && (
          <span className="text-red-500">Select 1 or upto 8 photos.</span>
        )}
        <input type="submit" />
      </div>
    </form>
  );
};

export default CreateEditForm;
