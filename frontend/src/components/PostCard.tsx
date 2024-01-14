import { ApiResponseProps, ResponseDataProps } from "@/types/types";
import { Card, CardContent, CardFooter } from "./ui/card";
import ImageCarousel from "./ImageCarousel";
import { Button } from "./ui/button";
import { Pencil } from "lucide-react";
import { Trash2 } from "lucide-react";

interface PostCardProps {
  posts: ApiResponseProps;
  setApi: React.Dispatch<any>;
  handleDelete: (id: string) => Promise<void>;
}

const PostCard = ({ posts, setApi, handleDelete }: PostCardProps) =>
  posts?.data?.map((post: ResponseDataProps) => {
    const { _id, caption, photos, createdAt } = post;

    return (
      <Card key={_id} className="w-[350px] h-[450px] shadow-md">
        <CardContent className="h-3/5 p-0">
          {photos.length > 1 ? (
            <ImageCarousel photos={photos} setApi={setApi} />
          ) : (
            <img src={photos[0]?.url} alt="image" className="w-full h-full" />
          )}
        </CardContent>
        <CardFooter className="flex-col items-start gap-1 bg-[#eee] p-2 h-2/5">
          <div className="h-3/4 p-4 w-full">
            <p className="text-base">{caption}</p>
            <span className="text-xs text-right mr-10">{createdAt}</span>
          </div>
          <div className="flex w-full items-center justify-evenly">
            <Button>
              <Pencil />
            </Button>
            <Button variant={"destructive"} onClick={() => handleDelete(_id)}>
              <Trash2 />
            </Button>
          </div>
        </CardFooter>
      </Card>
    );
  });

export default PostCard;
