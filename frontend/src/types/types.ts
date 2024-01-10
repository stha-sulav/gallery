export interface ApiResponseProps {
  data: ResponseDataProps[] | [];
  message: String;
  statusCode: Number;
  success: Boolean;
}

export interface ResponseDataProps {
  caption: String;
  photos: PhotoProps[];
  _id: String;
  createdAt: String;
  updatedAt: String;
  __v: Number;
}

export interface PhotoProps {
  public_id: String;
  url: String;
  _id: String;
}
