import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { useValidate } from '../../hooks/useValidate';


const AddProduct = () => {
    const router = useRouter()
    //  data
    const [form, setForm] = useState({
        name: "",
        type: "",
        barCode: "",
        price: "",
        discount: "",
        supplier: "",
        image: "",
        city: "",
        quantity: "",
    })
    // validat hook
    const { validateForm, getError, hasError, resetForm } = useValidate()

    // submit function
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validateForm(form)) {
            console.log('hey')
            resetForm();
            setForm({  name: "",type: "",barCode: "",price: "", discount: "",supplier: "",image: "", city: "",quantity: "",});
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: '100%', height: 44, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => router.back()} style={{ width: '16%', paddingLeft: 3 }}>
                    <AntDesign name="left" size={34} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '16%', paddingLeft: 3 }}>
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
                                style={[{ height: 50, borderColor: '#C67C4E', borderWidth: 1, borderRadius: 7, paddingLeft: 10, fontSize: 15, },hasError("name") && { borderColor: 'red' },]}
                                placeholder={'Clavier mecanique'}
                                placeholderTextColor={'gray'}
                                value={form.name}
                                onChangeText={(e) => setForm({ ...form, name: e })}
                            />
                            {hasError("name") && <Text style={styles.errorText}>{getError("name")}</Text>}
                        </View>

                        <View style={{ width: '95%', marginBottom: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5, color: '#C67C4E' }}>Type</Text>
                            <TextInput
                                style={[{ height: 50, borderColor: '#C67C4E', borderWidth: 1, borderRadius: 7, paddingLeft: 10, fontSize: 15, },hasError("type") && { borderColor: 'red' },]}
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
                                style={[{ height: 50, borderColor: '#C67C4E', borderWidth: 1, borderRadius: 7, paddingLeft: 10, fontSize: 15, },hasError("barCode") && { borderColor: 'red' },]}
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
                                style={[{ height: 50, borderColor: '#C67C4E', borderWidth: 1, borderRadius: 7, paddingLeft: 10, fontSize: 15, },hasError("price") && { borderColor: 'red' },]}
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
                                style={[{ height: 50, borderColor: '#C67C4E', borderWidth: 1, borderRadius: 7, paddingLeft: 10, fontSize: 15, },hasError("discount") && { borderColor: 'red' },]}
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
                                style={[{ height: 50, borderColor: '#C67C4E', borderWidth: 1, borderRadius: 7, paddingLeft: 10, fontSize: 15, },hasError("supplier") && { borderColor: 'red' },]}
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
                                style={[{ height: 50, borderColor: '#C67C4E', borderWidth: 1, borderRadius: 7, paddingLeft: 10, fontSize: 15, },hasError("image") && { borderColor: 'red' }]}
                                placeholder={'https://www.image.com'}
                                placeholderTextColor={'gray'}
                                value={form.image}
                                onChangeText={(e) => setForm({ ...form, image: e })}
                            />
                            {hasError("image") && <Text style={styles.errorText}>{getError("image")}</Text>}
                        </View>

                        <View style={{ width: '95%', marginBottom: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5, color: '#C67C4E' }}>City</Text>
                            <TextInput
                                style={[{ height: 50, borderColor: '#C67C4E', borderWidth: 1, borderRadius: 7, paddingLeft: 10, fontSize: 15, },hasError("city") && { borderColor: 'red' }]}
                                placeholder={'Marrakech'}
                                placeholderTextColor={'gray'}
                                value={form.city}
                                onChangeText={(e) => setForm({ ...form, city: e })}
                            />
                            {hasError("city") && <Text style={styles.errorText}>{getError("city")}</Text>}
                        </View>

                        <View style={{ width: '95%', marginBottom: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5, color: '#C67C4E' }}>Quantity</Text>
                            <TextInput
                                style={[{ height: 50, borderColor: '#C67C4E', borderWidth: 1, borderRadius: 7, paddingLeft: 10, fontSize: 15, },hasError("quantity") && { borderColor: 'red' }]}
                                placeholder={'22222'}
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