import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import images from '../constants/images'
import {useRouter} from "expo-router";

export default function Index() {
    const router = useRouter()
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground source={images.warehouse} style={styles.backgroundImage} resizeMode="cover" >
                <View style={{ width: '100%', height: '300', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: '60', fontWeight: 'bold' }}>
                        StockEase
                    </Text>
                    <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', width: '90%', marginTop: 3 }}>
                        Gérez votre stock facilement et efficacement avec une application intuitive et rapide. 📦✨
                    </Text>
                    <TouchableOpacity onPress={() => router.push('/sign-in')} style={{ width: '95%', height: 60, backgroundColor: '#C67C4E', marginTop: 25, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', borderRadius: 20 }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}



const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },

});