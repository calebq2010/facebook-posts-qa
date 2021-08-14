export type Action = { type: "ADD_POST"; payload: string }

export const addPost = (post: string): Action => ({
  type: "ADD_POST",
  payload: post
})