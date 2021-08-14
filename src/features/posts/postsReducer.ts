export interface PostsState {
  posts: string[];
}

const initialState = {
  posts: []
}

export type Action = { type: "ADD_POST"; payload: string }

export const postsReducer = (
  state: PostsState = initialState,
  action: Action
) => {
  switch(action.type) {
    case "ADD_POST": {
      return { ...state, posts: [...state.posts, action.payload] }
    }
    default:
      return state
  }
}