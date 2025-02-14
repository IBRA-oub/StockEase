import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';

const UpdateModal = ({ visible, onClose, quantity, setQuantity, onSubmit }) => {
  const handleIncrement = () => {
    setQuantity((prevState) =>(parseInt(prevState) + 1).toString())
  }

  const handleDecrement = () => {
    if(quantity > '0'){
      setQuantity((prevState) => (parseInt(prevState) - 1).toString())
    }
  }
  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1d1d1dd1' }}>
        <View style={{ width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
          <TouchableOpacity onPress={onClose} style={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }}>
            <Feather name="x-circle" size={27} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>
            Update Quantity
          </Text>

          <View style={{ width: '95%', marginBottom: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5, color: '#C67C4E' }}>Quantity</Text>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <TouchableOpacity onPress={handleDecrement} style={{ width: 44, height: 44, backgroundColor: 'white', overflow: 'hidden', borderRadius: 7, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'gray' }}>
                <Text style={{ fontSize: 28, color: '#313131' }}>-</Text>
              </TouchableOpacity>
              <TextInput
                style={{ height: 50, borderColor: '#C67C4E', borderWidth: 1, borderRadius: 7, paddingLeft: 10, fontSize: 15, width: '60%' }}
                placeholder="1000"
                placeholderTextColor="gray"
                keyboardType="numeric"
                value={quantity}
                onChangeText={(e) => setQuantity(e)}
              />
              <TouchableOpacity onPress={handleIncrement} style={{ width: 44, height: 44, backgroundColor: '#C67C4E', overflow: 'hidden', borderRadius: 7, alignItems: 'center', justifyContent: 'center', }}>
                <Text style={{ fontSize: 28, color: 'white' }}>+</Text>
              </TouchableOpacity>
            </View>
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
