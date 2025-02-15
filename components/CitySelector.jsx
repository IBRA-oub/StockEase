import React, { useState } from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const CitySelector = ({ value, onSelect, error }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCity, setSelectedCity] = useState("");

    const cities = [
        "Casablanca", "Rabat", "Fès", "Marrakesh", "Tangier", "Agadir", "Oujda",
        "Tetouan", "Essaouira", "Meknes", "Safi", "Kenitra", "Beni Mellal", "Nador", "Ifrane"
    ];

    const cityStockNames = {
        "Marrakesh": "Gueliz B2",
        "Oujda": "Lazari H2"
      };

      const handleSelectCity = (city) => {
        setSelectedCity(city);
        setModalVisible(false);
    
        const stockName = cityStockNames[city] || null;
        onSelect(city, stockName);
      };

    return (
        <View style={{ width: '95%', marginBottom: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5, color: '#C67C4E' }}>City</Text>

            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={[
                    { height: 50, borderColor: '#C67C4E', borderWidth: 1, borderRadius: 7, paddingLeft: 10, justifyContent: 'center' },
                    error && { borderColor: 'red' }
                ]}
            >
                <Text style={{ color: value ? 'black' : 'gray' }}>
                    {value || "Choisir une ville..."}
                </Text>
            </TouchableOpacity>

            {error && <Text style={{ color: 'red', marginTop: 5 }}>{error}</Text>}

            <Modal visible={modalVisible} animationType="slide" transparent>
                <View style={{ flex: 1, justifyContent: "center",alignItems:'center', backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <View style={{ width:'80%',backgroundColor: "white", padding: 20, borderRadius: 10, maxHeight: 400 }}>
                        <ScrollView>
                            {cities.map((city) => (
                                <TouchableOpacity
                                    key={city}
                                    onPress={() => handleSelectCity(city)}
                                    style={{ padding: 10, borderBottomWidth: 1,borderColor: '#E3E3E3' }}
                                >
                                    <Text>{city}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default CitySelector;
