import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import images from '../../constants/images'
import { StatusBar } from 'expo-status-bar'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/features/loginSlice'

const signIn = () => {
    const router = useRouter()
    const [secretKey, setSecretKey] = useState('')
    const [error, setError] = useState(false)

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await dispatch(login(secretKey))
            if (response.meta.requestStatus === 'fulfilled') {
                const city = response.payload.city
                router.push(`/home?city=${city}`)
            } else {
                setError(true)
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground source={images.background} style={styles.backgroundImage} resizeMode="cover"   >
                <View style={{ width: '100%', height: '300', justifyContent: 'center', alignItems: 'center', marginTop: 190 }}>
                    <ImageBackground
                        resizeMode='contain'
                        source={images.logo}
                        style={{ height: 300, width: 300 }}
                    />
                    <Text style={{ color: '#313131', fontSize: 17, fontWeight: 500, textAlign: 'center', width: '90%', marginTop: 3 }}>
                        Log in to your account
                    </Text>
                    <View style={[{ width: '97%', height: 70, backgroundColor: 'white', marginTop: 10, flexDirection: 'row', overflow: 'hidden', borderRadius: 20, alignItems: 'center', borderWidth: 1, borderColor: '#C67C4E' }, error && { borderColor: 'red' }]}>
                        <Image
                            resizeMode='contain'
                            source={images.profile}
                            style={{ height: '40%', width: '10%' }}
                        />
                        <TextInput
                            value={secretKey}
                            onChangeText={(e) => setSecretKey({ ...secretKey, secretKey: e })}
                            placeholder='1234575784'
                            placeholderTextColor={'#E3E3E3'}
                            style={{ height: '100%', width: '70%', backgroundColor: 'white', paddingLeft: 3, color: '#C67C4E' }}
                        />
                        <TouchableOpacity
                            onPress={handleSubmit}
                            style={{ height: '100%', width: '20%', backgroundColor: '#F9F2ED', justifyContent: 'center', borderRadius: 20 }}
                        >
                            <Image
                                resizeMode='contain'
                                source={images.rightRow}
                                style={{ height: '40%', width: '100%' }}
                            />

                        </TouchableOpacity>

                    </View>
                    {error &&
                        <Text style={{ color: 'red', textAlign: 'left', width: '95%' }}>
                            Invalid secretKey
                        </Text>
                    }
                </View>
            </ImageBackground>
        </View>
    )
}

export default signIn

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',

    },
})