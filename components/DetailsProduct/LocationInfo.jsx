import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';

const LocationInfo = ({productCity,productStockName,productDeltailsName ,productDeltailsType }) => {
    console.log(productStockName)
    return (
        <>
            <View style={{ width: '100%', height: 45, flexDirection: 'row', alignItems: 'center', paddingLeft: '10' }}>
                <Entypo name="location-pin" size={34} color="#C67C4E" />
                <Text style={{ fontSize: 16, fontWeight: '600' }}>  {productCity?`${productCity}`:'No stock'} , {productStockName? `${productStockName}`:'For This'}</Text>
            </View>
            <View style={{ width: '100%', height: 35, flexDirection: 'row', alignItems: 'center', paddingLeft: '30' }}>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>{productDeltailsName} </Text>
                <Text style={{ fontSize: 16, color: 'gray' }}> ({productDeltailsType} )</Text>
            </View>
        </>
    )
}

export default LocationInfo

const styles = StyleSheet.create({})