import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextDetail = ({titre , description}) => {
    return (
        <View style={{ width: '100%', height: 35, flexDirection: 'row', alignItems: 'center', paddingLeft: '30' }}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>{titre} :  </Text>
            <Text style={{ fontSize: 16, color: 'gray' }}> {description}</Text>
        </View>
    )
}

export default TextDetail

const styles = StyleSheet.create({})