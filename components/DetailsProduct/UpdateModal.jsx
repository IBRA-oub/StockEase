import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

const UpdateModal = ({ visible, onClose, quantity, setQuantity, onSubmit }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1d1d1dd1' }}>
        <View style={{ width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>
            Update Quantity
          </Text>
          <View style={{ width: '95%', marginBottom: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5, color: '#C67C4E' }}>Quantity</Text>
            <TextInput
              style={{ height: 50, borderColor: '#C67C4E', borderWidth: 1, borderRadius: 7, paddingLeft: 10, fontSize: 15 }}
              placeholder="22222"
              placeholderTextColor="gray"
              keyboardType="numeric"
              value={quantity}
              onChangeText={(e) => setQuantity(e)}
            />
          </View>
          <TouchableOpacity onPress={onSubmit} style={{ width: '95%', height: 55, backgroundColor: '#C67C4E', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', borderRadius: 10 }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default UpdateModal;
