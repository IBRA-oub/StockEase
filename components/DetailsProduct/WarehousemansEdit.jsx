import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WarehousemansEdit = ({warehousemansInfo}) => {
    return (
        <View style={{ width: '100%', height: 35, flexDirection: 'row', alignItems: 'center', paddingLeft: '30' }}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>Edite By :  </Text>

            {warehousemansInfo?.map((item, index) => <Text key={index} style={{ fontSize: 16, color: 'gray' }}>{item?.warehousemanName} at {item?.editedAt} </Text>)}
        </View>
    )
}

export default WarehousemansEdit

const styles = StyleSheet.create({})