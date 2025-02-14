import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Cards = ({ productDeltails, stockForCity }) => {
  return (
    <>
      
        <View style={{ width: '30%', height: 120, backgroundColor: '#F9F2ED', overflow: 'hidden', borderRadius: 20 }}>
          <View style={{ width: '100%', height: 40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Entypo name="price-tag" size={24} color="#C67C4E" />
            <Text style={{ fontSize: 17, fontWeight: '600' }}>Price</Text>
          </View>
          <View style={{ height: 80, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#313131' }}>
              {productDeltails?.price}  DH
            </Text>
          </View>
        </View>

        <View style={{ width: '30%', height: 120, backgroundColor: '#F9F2ED', overflow: 'hidden', borderRadius: 20, marginLeft: 15 }}>
          <View style={{ width: '100%', height: 40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <AntDesign name="arrowdown" size={24} color="#C67C4E" />
            <Text style={{ fontSize: 17, fontWeight: '600' }}>Solde</Text>
          </View>
          <View style={{ height: 80, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#313131' }}>
              {productDeltails?.solde ? `${productDeltails?.solde} DH` : '0 DH'}
            </Text>
          </View>
        </View>

        <View style={{ width: '30%', height: 120, backgroundColor: '#F9F2ED', overflow: 'hidden', borderRadius: 20, marginLeft: 15 }}>
          <View style={{ width: '100%', height: 40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <MaterialIcons name="production-quantity-limits" size={24} color="#C67C4E" />
            <Text style={{ fontSize: 17, fontWeight: '600' }}>Quantity</Text>
          </View>
          <View style={{ height: 80, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#313131' }}>
            {stockForCity ? stockForCity?.quantity : '0'}
            </Text>
          </View>
        </View>

    </>
  )
}

export default Cards

const styles = StyleSheet.create({})