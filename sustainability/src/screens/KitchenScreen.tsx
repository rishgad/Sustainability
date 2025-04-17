import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ApplianceModal from '../components/ApplianceModal'; 

const KitchenScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [appliance, setAppliance] = useState('');
    const [applianceInfoOne, setApplianceInfoOne] = useState('Nothing set yet...');

    const handleApplianceClick = (applianceName: string) => {
        setAppliance(applianceName);
        setModalVisible(true);
        

    }

    return (
        <View style={{flex: 1, flexDirection: 'column', position: 'relative'}}>
            <Text>I am the kitchen screen!</Text>
            <Image 
                source={require('../assets/splash-icon.png')}
                style={{width: '100%', height: 300}}
            />
            <TouchableOpacity onPress={() => handleApplianceClick("Sink")} style={styles.touchableArea}>
                <View style={styles.transparentOverlay} />
            </TouchableOpacity>
            <ApplianceModal 
                visible={modalVisible}
                appliance={appliance}
                onClose={() => setModalVisible(false)}
                input={applianceInfoOne}
                setInput={setApplianceInfoOne}
                
            />
            <Text>{`${applianceInfoOne}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    touchableArea: {
        position: 'absolute', 
        top: 50,  
        left: 100,  
        width: 100, 
        height: 50,
        color: 'red'
      },
      transparentOverlay: {
        flex: 1, 
        backgroundColor: 'red'
      },
})


export default KitchenScreen