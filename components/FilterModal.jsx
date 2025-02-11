import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

const FilterModal = ({ isVisible, onClose, onCreateProduct, onFilterChange }) => {
  return (
    <Modal visible={isVisible} animationType="fade" transparent={true} onRequestClose={onClose}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1d1d1dd1' }}>
        <View style={{ width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>
            Filter and Actions
          </Text>

          <TouchableOpacity
            style={{ backgroundColor: '#C67C4E', padding: 10, borderRadius: 5, alignItems: 'center', marginBottom: 10 }}
            onPress={onCreateProduct}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>Create New Product</Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 15 }}>Sort by:</Text>
          <TouchableOpacity style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' }} onPress={() => onFilterChange('A-Z')}>
            <Text style={{ fontSize: 16, color: 'black' }}>A-Z</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' }} onPress={() => onFilterChange('quantity')}>
            <Text style={{ fontSize: 16, color: 'black' }}>Quantity</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' }} onPress={() => onFilterChange('price')}>
            <Text style={{ fontSize: 16, color: 'black' }}>Price</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 20, backgroundColor: '#E3E3E3', padding: 10, borderRadius: 5, alignItems: 'center' }}
            onPress={onClose}
          >
            <Text style={{ color: 'black', fontSize: 16 }}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
