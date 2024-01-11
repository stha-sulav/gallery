import { ApiResponseProps, ResponseDataProps } from "@/types/types";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

interface PostCardProps {
  caption: string;
  imageURL: string;
  date: string;
  _id: string;
}

const PostCard = ({ _id, caption, imageURL, date }: PostCardProps) => {
  return (
    <Card key={_id} className="w-[350px] h-[450px]">
      <CardContent className="h-3/4 p-0">
        <img src={imageURL} alt="image" className="w-full h-full" />
      </CardContent>
      <CardFooter className="flex-col items-start gap-1 bg-gray-200 p-2 h-1/4">
        <p className="text-base">{caption}</p>
        <span className="text-xs text-right mr-10">{date}</span>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
