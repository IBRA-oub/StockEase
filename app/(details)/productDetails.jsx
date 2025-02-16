import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Line from '../../components/DetailsProduct/Line';
import ProductImage from '../../components/DetailsProduct/ProductImage';
import LocationInfo from '../../components/DetailsProduct/LocationInfo';
import TextDetail from '../../components/DetailsProduct/TextDetail';
import Cards from '../../components/DetailsProduct/Cards';
import UpdateModal from '../../components/DetailsProduct/UpdateModal';
import useProductAndWarehouseData from '../../hooks/useProductAndWarehouseData ';
import WarehousemansEdite from '../../components/DetailsProduct/WarehousemansEdite';
import { useDispatch } from 'react-redux';
import { updateStock } from '../../redux/features/updateQuantitySlice';
import Ionicons from '@expo/vector-icons/Ionicons';
import { printProductDetails } from '../../components/DetailsProduct/Print';




const ProductDetails = () => {

  // get data from params 
  const params = useLocalSearchParams();
  const id = params.id;
  const productCity = params.productCity;
  const productStockName = params.productStockName;
  
  
  //  dispatch data  hook
  const dispatch = useDispatch()
  const { productDetail, warehousemansInfo, stockForCity } = useProductAndWarehouseData(id, productCity)
 
  useEffect(() => {
    if (stockForCity?.quantity !== undefined) {
      setQuantity(stockForCity?.quantity.toString());
    }else{
      setQuantity('0')
    }
  }, [stockForCity?.quantity]);

  const [editeQuantity, setEditeQuantity] = useState(false);
  const [quantity, setQuantity] = useState('');
  const router = useRouter()

  // update function
  const handleSubmit = async (e) => {
   
    const data = {
      id: productDetail?.id,
      city: productCity,
      quantity
    }
    const response = await dispatch(updateStock(data))

    if (response.meta.requestStatus === "fulfilled") {
      setEditeQuantity(false)
    }
  }



  // print alert 
  const handlePrint = () => {
    Alert.alert(
      "Confirm Print",
      "Are you want to print this product?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Confirm",
          onPress: async () => {
            if (productDetail) {
              try {
                  await printProductDetails(productDetail,productCity);
              } catch (error) {
                  console.error(error);
              }
          }

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

        <ProductImage imageSource={productDetail?.image} />

        <LocationInfo productCity={productCity} productStockName={productStockName} productDetailsName={productDetail?.name} productDetailsType={productDetail?.type} />

        <Line />

        <View style={{ width: '100%', height: 150, flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
          <Cards productDetail={productDetail} stockForCity={stockForCity} />
        </View>

        <TextDetail titre={'Barcode'} description={productDetail?.barcode} />
        <TextDetail titre={'Supplier'} description={productDetail?.supplier} />

        <Line />

        <WarehousemansEdite warehousemansInfo={warehousemansInfo} />

        <Line />

        <View style={{ width: '100%', height: 75, flexDirection: 'row', alignItems: 'center', paddingLeft: 10, marginTop: 10 }}>
          <TouchableOpacity onPress={handlePrint} style={{ width: '30%', height: '80%', overflow: 'hidden', borderRadius: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E3E3E3' }}>
            <Ionicons name="print" size={34} color="#C67C4E" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setEditeQuantity(true)} style={{ width: '65%', height: '80%', backgroundColor: '#C67C4E', overflow: 'hidden', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
            <Text style={{ fontSize: 27, fontWeight: 'bold', color: 'white' }}>
              Update
            </Text>
          </TouchableOpacity>
        </View>

        {/* update modal */}
        <UpdateModal
          visible={editeQuantity}
          onClose={() => setEditeQuantity(false)}
          quantity={quantity}
          setQuantity={setQuantity}
          onSubmit={handleSubmit}
        />

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