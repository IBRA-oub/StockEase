import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';


export default function ProductItem({ item }) {
    const stockQuantity = item?.stocks?.reduce((sum, stock) => sum + (stock?.quantity || 0), 0);
    let stockBackgroundColor;

    if (stockQuantity === 0) {
        stockBackgroundColor = 'red';
    } else if (stockQuantity > 0 && stockQuantity <= 10) {
        stockBackgroundColor = 'yellow';
    } else {
        stockBackgroundColor = '#C67C4E';
    }

    const productCity = item?.stocks?.[0]?.localisation?.city || ''; 
    const productStockName = item?.stocks?.[0]?.name || ''; 
    
    const router = useRouter()
    return ( 
        <View style={[styles.item, { width: '47%' }]}>
            <TouchableOpacity onPress={() => router.push({ pathname: '/productDetails', params: { id: item?.id, productCity, productStockName } })}
                style={{ margin: 5, borderRadius: 8, overflow: 'hidden', height: 250 }}>
                <Image source={{ uri: item?.image }} style={{ width: '100%', height: '60%', resizeMode: 'cover', borderRadius: 10 }} />
                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15, paddingTop: 5, paddingLeft: 3 }}>
                    {item?.name?.length > 10
                        ? item?.name.slice(0, 20) + "..."
                        : item?.name
                    }
                </Text>
                <Text style={{ color: 'black', fontSize: 15, paddingTop: 5, paddingLeft: 3 }}>
                    {item.price} DH
                </Text>
                <View style={{ width: '100%', height: '20%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '95%', backgroundColor: 'white', height: 45, overflow: 'hidden', borderRadius: 10, borderWidth: 1, borderColor: 'gray', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', paddingLeft: 10 }}>
                            {stockQuantity}  <Text style={{ fontSize: 12, fontWeight: '400', color: 'gray' }}>item</Text>
                        </Text>
                        <View style={{ width: '25%', height: '100%', backgroundColor: stockBackgroundColor, borderRadius: 9, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Feather name="info" size={35} color="white" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        margin: 5,
        borderRadius: 8,
        overflow: 'hidden',
        height: 250,
        backgroundColor: '#F9F2ED',
    },
});


