export const GET_POSTS = 'GET_MOVIES';
export const ADD_POST_ITEM = 'ADD_FAVORITE_ITEM';
export const REMOVE_POST_ITEM = 'REMOVE_FAVORITE_ITEM';

const API = 'https://jsonplaceholder.typicode.com/posts'

export const getPosts = () => {
    try {
        return async dispatch => {
            const res = await fetch(API);
            if (res.data){
                dispatch({
                    type: GET_POSTS,
                    payload: res.data
                });
            } else {
                console.log('Unable to fetch movies');
            }
        }
    } catch (error) {

    }
};

export const addPosts = post => dispatch => {
    dispatch({
        type: ADD_POST_ITEM,
        payload: post
    });
}

export const removePosts = post => dispatch => {
    dispatch({
        type: REMOVE_POST_ITEM,
        payload: post
    });
};