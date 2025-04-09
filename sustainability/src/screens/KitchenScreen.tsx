import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import ApplianceModal from '../components/ApplianceModal'; // Import the appliance modal
const KitchenScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [appliance, setAppliance] = useState('');
  // Handle appliance click (e.g., sink, fridge)
  const handleApplianceClick = (applianceName: string) => {
    setAppliance(applianceName);
    setModalVisible(true); // Open the modal when an appliance is clicked
  };
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Kitchen</Text>
      {/* Image of the kitchen with tappable appliances */}
      <TouchableOpacity onPress={() => handleApplianceClick('Sink')}>
        <Image
          source={require('../assets/kitchenImage.png')} // Image of the kitchen
          style={{ width: '100%', height: 300 }} // Adjust style as needed
        />
      </TouchableOpacity>
      {/* Appliance Modal that pops up when an appliance is clicked */}
      <ApplianceModal
        visible={modalVisible}
        appliance={appliance}
        onClose={() => setModalVisible(false)} // Close the modal
      />
    </View>
  );
};
export default KitchenScreen;