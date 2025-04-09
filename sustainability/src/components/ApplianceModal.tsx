import React, { useState } from 'react';
import { Modal, TextInput, Button, Text, View } from 'react-native';
import { db } from '../firebase/firebase';  // Import Firebase
type Props = {
  visible: boolean;
  appliance: string;
  onClose: () => void;
};
const ApplianceModal = ({ visible, appliance, onClose }: Props) => {
  const [input, setInput] = useState('');
  const handleSave = async () => {
    // Save the input to Firestore
    const docRef = await db.collection('appliances').add({
      appliance,
      input,
    });
    console.log('Document written with ID: ', docRef.id);
    onClose();
  };
  return (
    <Modal visible={visible} transparent>
      <View>
        <Text>{`Enter info for ${appliance}:`}</Text>
        <TextInput value={input} onChangeText={setInput} />
        <Button title="Save" onPress={handleSave} />
      </View>
    </Modal>
  );
};
export default ApplianceModal;