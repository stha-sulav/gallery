import { z } from "zod";

export const PostFormSchema = z
  .object({
    caption: z.string(),
    photos: z.string(),
    // .array(z.custom())
    // .min(1, {
    //   message: "No photo to post. Please select 1 or upto 8 photos.",
    // })
    // .max(8, {
    //   message: "No photo to post. Please select 1 or upto 8 photos.",
    // }),
  })
  .partial();

export type PostFormProps = z.infer<typeof PostFormSchema>;
