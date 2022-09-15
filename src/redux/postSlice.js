import { createSlice } from "@reduxjs/toolkit"


const PostsSlice = createSlice({
    name: "authentication",
    initialState: {
      posts: [],
      addPosts: [],
    },
    reducers: {
        getPost: (state,action) => {
          state.posts = action.payload
        },
        addPost: (state, action) => {
           state.posts =[...state.posts,action.payload]
        },
        RemovePost: (state, action) => {
            state.posts =state.posts.filter(post => post.id !== action.payload)
        }
    }
})

export const POSTS_ACTIONS = PostsSlice.actions

export const get_posts = () => {
    return async (dispatch) => {
        
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await res.json();
    console.log("log json" , json);
  
      if (json){
        dispatch(POSTS_ACTIONS.getPost(json))
      } else {
          console.log('Unable to fetch movies');
      }
        
    }
}

export const add_post = (data) => {
    return async (dispatch) => {
        dispatch(POSTS_ACTIONS.addPost())
    }
}

export const remove_post = (data) => {
    return  (dispatch) => {
        dispatch(POSTS_ACTIONS.RemovePost(data))
    }
}

export default PostsSlice.reducer