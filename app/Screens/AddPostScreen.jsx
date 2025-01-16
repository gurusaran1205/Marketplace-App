import { View, Text } from 'react-native'
import React from 'react'
import { app } from '../../firebaseConfig';
import { getFirestore,getDocs, collection } from 'firebase/firestore';

export default function AddPostScreen() {
  const db = getFirestore(app); 
  const getCategoryList = () => {
  const querySnapshot = await getDocs(collection(db,'category'))
  
}
  return (
    <View>
      <Text>AddPostScreen</Text>
    </View>
  )
}