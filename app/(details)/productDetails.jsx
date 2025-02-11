import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import images from '../../constants/images';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

const ProductDetails = () => {
  const router = useRouter()
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: '100%', height: 44, flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => router.back()} style={{ width: '16%', paddingLeft: 3 }}>
          <AntDesign name="left" size={34} color="black" />
        </TouchableOpacity>
        <Text style={{ width: '70%', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Detail</Text>
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ width: '100%', height: 250, justifyContent: 'center', alignItems: 'center' }}>

          <Image
            style={{ width: '95%', height: '90%', overflow: 'hidden', borderRadius: 20 }}
            source={images.warehouse}
          />
        </View>
        <View style={{ width: '100%', height: 45, flexDirection: 'row', alignItems: 'center', paddingLeft: '10' }}>
          <Entypo name="location-pin" size={34} color="#C67C4E" />
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Marrakesh  , Gueliz B2</Text>
        </View>
        <View style={{ width: '100%', height: 35, flexDirection: 'row', alignItems: 'center', paddingLeft: '30' }}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Laptop HP Pavilion </Text>
          <Text style={{ fontSize: 16, color: 'gray' }}> ( Informatique )</Text>
        </View>
        <View style={{ width: '100%', height: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: '93%', height: 2, borderBottomWidth: 1, borderColor: '#E3E3E3' }}>
          </View>
        </View>

        <View style={{ width: '100%', height: 150, flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
          <View style={{ width: '30%', height: 120, backgroundColor: '#F9F2ED', overflow: 'hidden', borderRadius: 20 }}>
            <View style={{ width: '100%', height: 40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Entypo name="price-tag" size={24} color="#C67C4E" />
              <Text style={{ fontSize: 17, fontWeight: '600' }}>Price</Text>
            </View>
            <View style={{ height: 80, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: '600', color: '#313131' }}>
                230 DH
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
                200 DH
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
                11200
              </Text>

            </View>
          </View>
        </View>

        <View style={{ width: '100%', height: 35, flexDirection: 'row', alignItems: 'center', paddingLeft: '30' }}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Barcode :  </Text>
          <Text style={{ fontSize: 16, color: 'gray' }}> 1234567890123</Text>
        </View>
        <View style={{ width: '100%', height: 35, flexDirection: 'row', alignItems: 'center', paddingLeft: '30' }}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Supplier :  </Text>
          <Text style={{ fontSize: 16, color: 'gray' }}> HP</Text>
        </View>

        <View style={{ width: '100%', height: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: '93%', height: 2, borderBottomWidth: 1, borderColor: '#E3E3E3' }}>
          </View>
        </View>

        <View style={{ width: '100%', height: 35, flexDirection: 'row', alignItems: 'center', paddingLeft: '30' }}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Edite By :  </Text>
          <Text style={{ fontSize: 16, color: 'gray' }}>Amine Boutaleb at 2025-02-02</Text>
        </View>

        <View style={{ width: '100%', height: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: '93%', height: 2, borderBottomWidth: 1, borderColor: '#E3E3E3' }}>
          </View>
        </View>

        <View style={{ width: '100%', height: 75, flexDirection: 'row', alignItems: 'center', paddingLeft: 10,marginTop:10 }}>
          <TouchableOpacity style={{ width: '30%', height: '80%', overflow:'hidden',borderRadius:10,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#E3E3E3' }}>
            <FontAwesome name="trash" size={34} color="#C67C4E" />
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '65%', height: '80%', backgroundColor: '#C67C4E' , overflow:'hidden',borderRadius:10,justifyContent:'center',alignItems:'center' , marginLeft:10 }}>
            <Text style={{fontSize:27,fontWeight:'bold',color:'white'}}>
              Edite
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white'
  },
})