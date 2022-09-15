import React, { useEffect } from 'react'
import {View, FlatList, Text, StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// import { addPosts, getPosts, removePosts } from '../redux/actions';
import { get_posts } from '../redux/postSlice';

export const Posts = () => {
    const {posts , add, remove} = useSelector(state => state.PostsSlice);
    const dispatch = useDispatch();

    // const fetchMovies = () => dispatch(getPosts());
    // const addPost = posts => dispatch(addPosts(posts));
    // const removePost = posts => dispatch(removePosts(posts));

    // const handleAddPost = post => {
    //   addPost(post);
    // }
    // const handleRemovePost = post => {
    //   removePost(post);
    // }
    // const exists = post => {
    //   if (add.filter(item => item.id === post.id).length > 0) {
    //     return true;
        
    //   }
    //   return false;

    // }

    useEffect(() => {
      dispatch(get_posts())
    }, []);
  

  return (
    <View style={{flex: 1, marginTop: 44, paddingHorizontal: 20}}>
    <Text style={{fontSize: 22}}>Posts</Text>
    <View style={{flex: 1, marginTop: 12}}>
        <FlatList
            data = {posts}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return (
                <View>
                     <Text style={{fontSize: 22, paddingRight: 16}}>
                      {item.title}
                    </Text>
                    <Text style={{fontSize: 22, paddingRight: 16}}>
                      {item.body}
                    </Text>
                  
                </View>
              )

            }}
            />
        
     
    </View>
  </View>

 
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
