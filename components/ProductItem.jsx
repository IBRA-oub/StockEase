import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

const ProductItem = ({ item }) => (
    <View style={[styles.item, { width: '47%' }]}>
        <TouchableOpacity style={{ margin: 5, borderRadius: 8, overflow: 'hidden', height: 250 }}>
            <Image source={item.image} style={{ width: '100%', height: '60%', resizeMode: 'cover', borderRadius: 10 }} />
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, paddingTop: 5, paddingLeft: 3 }}>
                {item?.titre?.length > 10
                    ? item?.titre.slice(0, 20) + "..."
                    : item?.titre
                }
            </Text>
            <Text style={{ color: 'black', fontSize: 15, paddingTop: 5, paddingLeft: 3 }}>
                {item.price} DH
            </Text>
            <View style={{ width: '100%', height: '20%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '95%', backgroundColor: 'white', height: 45, overflow: 'hidden', borderRadius: 10, borderWidth: 1, borderColor: 'gray', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', paddingLeft: 10 }}>
                        23000
                    </Text>
                    <View style={{ width: '25%', height: '100%', backgroundColor: '#C67C4E', borderRadius: 9, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Feather name="info" size={35} color="white" />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    item: {
        margin: 5,
        borderRadius: 8,
        overflow: 'hidden',
        height: 250,
        backgroundColor: '#F9F2ED',
    },
});

export default ProductItem;
