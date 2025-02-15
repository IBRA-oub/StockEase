import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductImage = ({imageSource}) => {
    return (
        <View style={{ width: '100%', height: 250, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                style={{ width: '95%', height: '90%', overflow: 'hidden', borderRadius: 20 }}
                source={{uri :imageSource}}
            />
        </View>
    )
}

export default ProductImage

const styles = StyleSheet.create({})