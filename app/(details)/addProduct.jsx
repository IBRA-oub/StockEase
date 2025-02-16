import { KeyboardAvoidingView, Modal, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { useValidate } from '../../hooks/useValidate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/features/addProductSlice';
import CitySelector from '../../components/CitySelector';
import { Camera, CameraView } from 'expo-camera';
import useCameraPermission from '../../hooks/useCameraPermission';
import useBarcodeScanner from '../../hooks/useBarcodeScanner';
import { Ionicons } from "@expo/vector-icons";


const AddProduct = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    //  data
    const [stockName, setStockName] = useState('')
    const [form, setForm] = useState({
        productName: "",
        type: "",
        barCode: "",
        price: "",
        discount: "",
        supplier: "",
        image: "",
        city: "",
        quantity: "",
    })
    
    const handleSelectCity = (city, stockName) => {
        setStockName(stockName)
        setForm({ ...form, city });
    };

    const hasPermission = useCameraPermission();
    const cameraRef = useRef(null);
    const { scanning, setScanning, handleBarCodeScanned } = useBarcodeScanner(setForm);
    // validat hook
    const { validateForm, getError, hasError, resetForm } = useValidate()

    // submit function
    const handleSubmit = async() => {
        const warehousemanIdString = await AsyncStorage.getItem('id');
        const warehousemanId = warehousemanIdString ? parseInt(warehousemanIdString, 10) : null;
        const date = new Date().toISOString().split('T')[0]

        if (validateForm(form) == true) {
            const newProduct = {
                id: Date.now().toString(),
                name: form.productName,
                type: form.type,
                barcode: form.barCode,
                price: parseInt(form.price, 10),
                solde: parseInt(form.discount, 10),
                supplier: form.supplier,
                image: form.image,
                stocks: [
                    {
                        id: Date.now(),
                        name: stockName ? stockName : 'stok of ' + form.city,
                        quantity: parseInt(form.quantity, 10),
                        localisation: {
                            city: form.city,
                            latitude: '0',
                            longitude: '0',
                        }

                    }
                ],
                editedBy: [
                    {
                        warehousemanId,
                        at: date
                    }
                ]
            }


            const response = await dispatch(addProduct(newProduct))
            resetForm();
            setForm({ productName: "", type: "", barCode: "", price: "", discount: "", supplier: "", image: "", city: "", quantity: "", });
            if (response.meta.requestStatus === "fulfilled") {
                router.back()
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: '100%', height: 44, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => router.back()} style={{ width: '16%', paddingLeft: 3 }}>
                    <AntDesign name="left" size={34} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setScanning(true)} style={{ width: '16%', paddingLeft: 3 }}>
                    <AntDesign name="qrcode" size={44} color="#C67C4E" />
                </TouchableOpacity>

            </View>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                    <Text style={{ width: '100%', textAlign: 'center', fontSize: 26, fontWeight: '600', marginTop: 10, marginBottom: 20 }}>Add Product</Text>
                    <View style={{ width: '100%', alignItems: 'center' }}>

                        <View style={{ width: '95%', marginBottom: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5, color: '#C67C4E' }}>Name</Text>
                            <TextInput
                                style={[{ height: 50, borderColor: '#C67C4E', borderWidth: 1, borderRadius: 7, paddingLeft: 10, fontSize: 15, }, hasError("productName") && { borderColor: 'red' },]}
                                placeholder={'Clavier mecanique'}
                                placeholderTextColor={'gray'}
                                value={form.productName}
                                onChangeText={(e) => setForm({ ...form, productName: e })}
                            />
                            {hasError("productName") && <Text style={styles.errorText}>{getError("productName")}</Text>}
                        </View>

                        <View style={{ width: '95%', marginBottom: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5, color: '#C67C4E' }}>Type</Text>
                            <TextInput
                                style={[{ height: 50, borderColor: '#C67C4E', borderWidth: 1, borderRadius: 7, paddingLeft: 10, fontSize: 15, }, hasError("type") && { borderColor: 'red' },]}
                                placeholder={'Informatique'}
                                placeholderTextColor={'gray'}
                                value={form.type}
                                onChangeText={(e) => setForm({ ...form, type: e })}
                            />
                            {hasError("type") && <Text style={styles.errorText}>{getError("type")}</Text>}
                        </View>

                        <View style={{ width: '95%', marginBottom: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5, color: '#C67C4E' }}>Bar-Code</Text>
                            <TextInput
                                style={[{ height: 50, borderColor: '#C67C4E', borderWidth: 1, borderRadius: 7, paddingLeft: 10, fontSize: 15, }, hasError("barCode") && { borderColor: 'red' },]}
                                placeholder={'12345678999'}
                                placeholderTextColor={'gray'}
                                keyboardType="numeric"
                                value={form.barCode}
                                onChangeText={(e) => setForm({ ...form, barCode: e })}
                            />
                            {hasError("barCode") && <Text style={styles.errorText}>{getError("barCode")}</Text>}
                        </View>

                        <View style={{ width: '95%', marginBottom: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5, color: '#C67C4E' }}>Price</Text>
                            <TextInput
                                style={[{ height: 50, borderColor: '#C67C4E', borderWidth: 1, borderRadius: 7, paddingLeft: 10, fontSize: 15, }, hasError("price") && { borderColor: 'red' },]}
                                placeholder={'200'}
                                placeholderTextColor={'gray'}
                                keyboardType="numeric"
                                value={form.price}
                                onChangeText={(e) => setForm({ ...form, price: e })}
                            />
                            {hasError("price") && <Text style={styles.errorText}>{getError("price")}</Text>}
                        </View>

                        <View style={{ width: '95%', marginBottom: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5, color: '#C67C4E' }}>Discount</Text>
                            <TextInput
                                style={[{ height: 50, borderColor: '#C67C4E', borderWidth: 1, borderRadius: 7, paddingLeft: 10, fontSize: 15, }, hasError("discount") && { borderColor: 'red' },]}
                                placeholder={'120'}
                                placeholderTextColor={'gray'}
                                keyboardType="numeric"
                                value={form.discount}

                                onChangeText={(e) => setForm({ ...form, discount: e })}
                            />
                            {hasError("discount") && <Text style={styles.errorText}>{getError("discount")}</Text>}
                        </View>

                        <View style={{ width: '95%', marginBottom: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5, color: '#C67C4E' }}>supplier</Text>
                            <TextInput
                                style={[{ height: 50, borderColor: '#C67C4E', borderWidth: 1, borderRadius: 7, paddingLeft: 10, fontSize: 15, }, hasError("supplier") && { borderColor: 'red' },]}
                                placeholder={'Hp'}
                                placeholderTextColor={'gray'}
                                value={form.supplier}
                                onChangeText={(e) => setForm({ ...form, supplier: e })}
                            />
                            {hasError("supplier") && <Text style={styles.errorText}>{getError("supplier")}</Text>}
                        </View>

                        <View style={{ width: '95%', marginBottom: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5, color: '#C67C4E' }}>Image</Text>
                            <TextInput
                                style={[{ height: 50, borderColor: '#C67C4E', borderWidth: 1, borderRadius: 7, paddingLeft: 10, fontSize: 15, }, hasError("image") && { borderColor: 'red' }]}
                                placeholder={'https://www.image.com'}
                                placeholderTextColor={'gray'}
                                value={form.image}
                                onChangeText={(e) => setForm({ ...form, image: e })}
                            />
                            {hasError("image") && <Text style={styles.errorText}>{getError("image")}</Text>}
                        </View>

                        <CitySelector
                            value={form.city}
                            onSelect={handleSelectCity}
                            error={hasError("city") ? getError("city") : null}
                        />

                        <View style={{ width: '95%', marginBottom: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5, color: '#C67C4E' }}>Quantity</Text>
                            <TextInput
                                style={[{ height: 50, borderColor: '#C67C4E', borderWidth: 1, borderRadius: 7, paddingLeft: 10, fontSize: 15, }, hasError("quantity") && { borderColor: 'red' }]}
                                placeholder={'2000'}
                                placeholderTextColor={'gray'}
                                keyboardType="numeric"
                                value={form.quantity}
                                onChangeText={(e) => setForm({ ...form, quantity: e })}
                            />
                            {hasError("quantity") && <Text style={styles.errorText}>{getError("quantity")}</Text>}
                        </View>

                        <TouchableOpacity onPress={handleSubmit} style={{ width: '95%', height: 55, backgroundColor: '#C67C4E', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', borderRadius: 10 }}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {scanning && hasPermission && (
                        <Modal visible={scanning} animationType="slide" transparent={false}>
                            <View style={{flex: 1, justifyContent: "center",alignItems: "center",backgroundColor: "black",}}>
                                <CameraView
                                    ref={cameraRef}
                                    style={StyleSheet.absoluteFillObject}
                                    onBarcodeScanned={handleBarCodeScanned}
                                    ratio="16:9"
                                />
                                <TouchableOpacity style={{position: "absolute",top: 50,right: 20,}} onPress={() => setScanning(false)}>
                                    <Ionicons name="close-circle-outline" size={40} color="white" />
                                </TouchableOpacity>
                            </View>
                        </Modal>
                    )}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default AddProduct

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white'
    },
    errorText: {
        color: "red",
        marginTop: 5,
        fontSize: 14,
        textAlign: 'left',
        width: '100%'
    },
})