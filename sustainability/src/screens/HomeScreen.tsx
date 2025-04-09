import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();
  const handleRoomClick = (room: string) => {
    navigation.navigate(room);
  };
  return (
    <View>
      <TouchableOpacity onPress={() => handleRoomClick('Kitchen')}>
        <Image source={require('../assets/houseImage.png')} />
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;