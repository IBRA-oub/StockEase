import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../constants/images'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



const Statistics = () => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={{ width: '90%', height: 170, backgroundColor: '#F9F2ED', marginTop: 10, overflow: 'hidden', borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={images.warehouse}
          style={{ width: '20%', height: '45%', overflow: 'hidden', borderRadius: 50 }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: '500' }}>Amine Boutaleb</Text>
          <View style={{ flexDirection: 'row', paddingTop: 4 }}>
            <Text style={{ fontSize: 15 }}>secretKey : </Text>
            <Text style={{ color: 'gray' }}> AH90907J</Text>
          </View>
        </View>
        <View style={{ marginLeft: 50 }}>
          <MaterialCommunityIcons name="logout" size={34} color="red" />
        </View>

      </View>

      <View style={{ width: '90%', height: 70, backgroundColor: '#EDD6C8', marginTop: 40, overflow: 'hidden', borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#C67C4E' }}>
        <FontAwesome name="product-hunt" size={34} color="#C67C4E" />
        <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: '500', color: '#313131', paddingLeft: 10 }}>
            Product
          </Text>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
            23 000
          </Text>
        </View>
      </View>

      <View style={{ width: '90%', height: 70, backgroundColor: '#EDD6C8', marginTop: 10, overflow: 'hidden', borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#C67C4E' }}>
        <FontAwesome5 name="city" size={26} color="#C67C4E" />
        <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: '500', color: '#313131', paddingLeft: 10 }}>
            City
          </Text>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
            144
          </Text>
        </View>
      </View>

      <View style={{ width: '90%', height: 70, backgroundColor: '#EDD6C8', marginTop: 10, overflow: 'hidden', borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#C67C4E' }}>
        <MaterialIcons name="storage" size={34} color="#C67C4E" />
        <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: '500', color: '#313131', paddingLeft: 10 }}>
            Stock
          </Text>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
            144 00
          </Text>
        </View>
      </View>

      <View style={{ width: '90%', height: 70, backgroundColor: '#EDD6C8', marginTop: 10, overflow: 'hidden', borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#C67C4E' }}>
        <MaterialIcons name="price-change" size={34} color="#C67C4E" />
        <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: '500', color: '#313131', paddingLeft: 10 }}>
            Total Value
          </Text>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
            144 00
          </Text>
        </View>
      </View>

      <View style={{ width: '90%', height: 70, backgroundColor: '#EDD6C8', marginTop: 10, overflow: 'hidden', borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#C67C4E' }}>

        <MaterialIcons name="receipt-long" size={34} color="#C67C4E" />
        <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: '500', color: '#313131', paddingLeft: 10 }}>
            added/removed
          </Text>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
            144 
          </Text>
        </View>
      </View>




    </SafeAreaView>
  )
}

export default Statistics

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent:'center'
  },
})