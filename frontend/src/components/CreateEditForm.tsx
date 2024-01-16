import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PostFormSchema, PostFormProps } from "@/schema/postForm-schema";
import { Link } from "react-router-dom";

const CreateEditForm = () => {
  const form = useForm<PostFormProps>({
    resolver: zodResolver(PostFormSchema),
    defaultValues: {
      caption: "",
      photos: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" w-3/5 mx-auto my-12 space-y-8"
      >
        <FormField
          control={form.control}
          name="caption"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between gap-8">
              <FormLabel className="text-lg font-medium">Caption</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="photos"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between gap-8">
              <FormLabel className="text-lg font-medium">Photos</FormLabel>
              <FormControl>
                <Input type="file" {...field} multiple />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="p-4 flex justify-center items-center gap-10">
          <Button type="submit">Submit</Button>
          <Link to="/">
            <Button variant={"outline"}>Cancle</Button>
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default CreateEditForm;
