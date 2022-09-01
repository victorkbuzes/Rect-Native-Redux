
import { useNavigation } from '@react-navigation/native';
import {  Text, View ,Button, Pressable} from 'react-native';


export const Category = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Category</Text>
      <Pressable>
      <Button title = "go" onPress={() => navigation.goBack("Product")}/>

      </Pressable>
   
    </View>
  )
}

