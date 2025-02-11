import { Alert, Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import images from '../../constants/images';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

const ProductDetails = () => {
  const [editeQuantity, setEditeQuentity] = useState(false)
  const [quantity, setquantity] = useState('')
  const router = useRouter()

  // update function
  const handleSubmit = async (e) => {
    setEditeQuentity(false)
    console.log(quantity)
    e.preventDefault()
  }

  // delete alert 
  const handleDelete = () => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this product?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Confirm",
          onPress: () => {
            console.log("Product deleted");
            
          }
        }
      ]
    );
  }
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

        <View style={{ width: '100%', height: 75, flexDirection: 'row', alignItems: 'center', paddingLeft: 10, marginTop: 10 }}>
          <TouchableOpacity onPress={handleDelete} style={{ width: '30%', height: '80%', overflow: 'hidden', borderRadius: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E3E3E3' }}>
            <FontAwesome name="trash" size={34} color="#C67C4E" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setEditeQuentity(true)} style={{ width: '65%', height: '80%', backgroundColor: '#C67C4E', overflow: 'hidden', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
            <Text style={{ fontSize: 27, fontWeight: 'bold', color: 'white' }}>
              Update
            </Text>
          </TouchableOpacity>
        </View>

        {/* update modal */}
        <Modal visible={editeQuantity} animationType='slide' transparent={true} onRequestClose={''}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1d1d1dd1' }}>
            <View style={{ width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>
                Update Quantity
              </Text>
              <View style={{ width: '95%', marginBottom: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5, color: '#C67C4E' }}>Quantity</Text>
                <TextInput
                  style={{ height: 50, borderColor: '#C67C4E', borderWidth: 1, borderRadius: 7, paddingLeft: 10, fontSize: 15, }}
                  placeholder={'22222'}
                  placeholderTextColor={'gray'}
                  keyboardType="numeric"
                  value={quantity}
                  onChangeText={(e) => setquantity({ ...quantity, quantity: e })}
                />
              </View>
              <TouchableOpacity onPress={handleSubmit} style={{ width: '95%', height: 55, backgroundColor: '#C67C4E', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', borderRadius: 10 }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

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