
import { useNavigation } from '@react-navigation/native';
import {  Text, View ,Button, Pressable} from 'react-native';


export const AddPosts = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>AddPosts</Text>
      <Pressable>
      <Button title = "go" onPress={() => navigation.goBack("Product")}/>

      </Pressable>
   
    </View>
  )
}

