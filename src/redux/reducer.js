import { ADD_POST_ITEM, GET_POSTS, REMOVE_POST_ITEM } from "./actions";


const initialState = {
    posts: [],
    addPosts: [],
    
}
function postsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_POSTS:
        return {...state, posts: action.payload};
      case ADD_POST_ITEM:
        return {...state, addPosts: [...state.addPosts, action.payload]};
      case REMOVE_POST_ITEM:
        return {...state, addPosts: state.addPosts.filter(post => post.id !== action.payload)};
      default:
        return state;
    }
  }
  export default postsReducer;