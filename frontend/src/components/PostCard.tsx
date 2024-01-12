import { PhotoProps } from "@/types/types";
import { Card, CardContent, CardFooter } from "./ui/card";
import ImageCarousel from "./ImageCarousel";

interface PostCardProps {
  caption: string;
  photo: PhotoProps[];
  date: string;
  _id: string;
  setApi: React.Dispatch<any>;
}

const PostCard = ({ _id, caption, photo, date, setApi }: PostCardProps) => {
  return (
    <Card key={_id} className="w-[350px] h-[450px] shadow-md">
      <CardContent className="h-3/4 p-0">
        {photo.length > 1 ? (
          <ImageCarousel photos={photo} setApi={setApi} />
        ) : (
          <img src={photo[0]?.url} alt="image" className="w-full h-full" />
        )}
      </CardContent>
      <CardFooter className="flex-col items-start gap-1 bg-[#eee] p-2 h-1/4">
        <p className="text-base">{caption}</p>
        <span className="text-xs text-right mr-10">{date}</span>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
