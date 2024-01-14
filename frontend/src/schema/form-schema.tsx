import { z } from "zod";

const formSchema = z.object({
  caption: z.string(),
  photos: z
    .array(z.custom())
    .min(1, {
      message: "No photo to post. Please select 1 or upto 8 photos.",
    })
    .max(8, {
      message: "No photo to post. Please select 1 or upto 8 photos.",
    }),
});

export type FormSchemaProps = z.infer<typeof formSchema>;
