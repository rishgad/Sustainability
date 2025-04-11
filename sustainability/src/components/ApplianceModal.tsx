import React, { useState } from 'react';
import { Modal, TextInput, Button, Text, View, StyleSheet } from 'react-native';

type Props = {
    visible: boolean;
    appliance: string;
    onClose: () => void;
    input: string;
    setInput: (val: string) => void;
};

const ApplianceModal = ({ visible, appliance, onClose, input, setInput} : Props) => {

    return (
        <Modal visible={visible} transparent>
            <View style={styles.centeredView}>
                <View style={styles.modalBox}>
                    <Text>{`Enter info for ${appliance}: `}</Text>
                    <TextInput value={input} onChangeText={setInput} style={styles.input} placeholder="get on with it..."/>
                    <Button title="Save" onPress={onClose}/>
                </View>
                
            </View>
        </Modal>
    );
};
//
//

const styles = StyleSheet.create({
    backdrop: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)', 
      position: 'absolute',
      top: 0, bottom: 0, left: 0, right: 0,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalBox: {
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#333',
      elevation: 5, // shadow on Android
      shadowColor: '#000', // shadow on iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    title: {
      marginBottom: 10,
      fontSize: 16,
      fontWeight: '600',
    },
    input: {
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 12,
      paddingHorizontal: 10,
      height: 40,
    },
  });

export default ApplianceModal;