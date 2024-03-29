import { ResponseDataProps } from "@/types/types";
import { ReactNode, createContext, useReducer } from "react";

export const PostContext = createContext<any>(null);

const postReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        posts: action.payload,
      };

    case "DELETE_POST":
      return {
        posts: state.posts.data.filter(
          (item: ResponseDataProps) => item._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const PostContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(postReducer, { posts: {} });

  return (
    <PostContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
