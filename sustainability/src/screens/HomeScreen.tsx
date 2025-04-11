import React from 'react';
import { Text } from 'react-native'
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const navigation = useNavigation(); 

    const handleRoomClick = (room: string) => { 
        navigation.navigate(room);
    };

    return (
        <View>
            <Text>I am the homescreen!</Text>
            <TouchableOpacity onPress={() => handleRoomClick('KitchenScreen')}>
                <Image source={require('../assets/favicon.png')} />
            </TouchableOpacity>
        </View>
        
    )



}



export default HomeScreen;