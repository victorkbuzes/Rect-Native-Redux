
import {  Button, Text, View } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export const Product = () => {
  const navigation  = useNavigation();
  return (
    <View>
      <Button  title = "go to category" 
      onPress={() => navigation.navigate("Category")}
      />
      <Text>Product</Text>
    </View>
  )
}
