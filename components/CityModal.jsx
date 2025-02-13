import React from 'react';
import { Modal, View, Text, TouchableOpacity, ScrollView } from 'react-native';

const CityModal = ({ isVisible, onClose, onSelectCity }) => {
  const cities = [
    'All',
    'Casablanca',
    'Rabat',
    'Fès',
    'Marrakesh',
    'Tangier',
    'Agadir',
    'Oujda',
    'Tetouan',
    'Essaouira',
    'Meknes',
    'Safi',
    'Kenitra',
    'Beni Mellal',
    'Nador',
    'Ifrane',
];
  return (
    <Modal visible={isVisible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1d1d1dd1' }}>
        <View style={{ width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>
            Select a City
          </Text>
          <ScrollView style={{ maxHeight: 300 }}>
            {cities.map((city, index) => (
              <TouchableOpacity key={index} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' }} onPress={() => onSelectCity(city)}>
                <Text style={{ fontSize: 16, color: 'black' }}>{city}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity
            style={{ marginTop: 20, backgroundColor: '#C67C4E', padding: 10, borderRadius: 5, alignItems: 'center' }}
            onPress={onClose}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CityModal;
