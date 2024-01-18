import { z } from "zod";

export const PostFormSchema = z.object({
  caption: z.string().optional(),
  photos: z.any(),
});

export type PostFormProps = z.infer<typeof PostFormSchema>;
