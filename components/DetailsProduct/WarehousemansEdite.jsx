import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WarehousemansEdite = ({ warehousemansInfo }) => {
    return (
        <>
            {warehousemansInfo?.map((item, index) => (
                <View key={index} style={{ width: '100%', height: 35, flexDirection: 'row', alignItems: 'center', paddingLeft: 30 }}>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>Edited By: </Text>
                    <Text style={{ fontSize: 16, color: 'gray' }}>
                        {item?.warehousemanName} at {item?.editedAt}
                    </Text>
                </View>
            ))}
        </>
    );
}


export default WarehousemansEdite

const styles = StyleSheet.create({})