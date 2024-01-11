export interface ApiResponseProps {
  data: ResponseDataProps[] | [];
  message: string;
  statusCode: number;
  success: boolean;
}

export interface ResponseDataProps {
  caption: string;
  photos: PhotoProps[];
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface PhotoProps {
  public_id: string;
  url: string;
  _id: string;
}
