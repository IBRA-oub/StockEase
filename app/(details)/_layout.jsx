import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const _layout = () => {
    return (
        <>
            <StatusBar style="dark-content" />
            <Stack>
                <Stack.Screen name='productDetails' options={{ headerShown: false }} />
                <Stack.Screen name='addProduct' options={{ headerShown: false }} />
            </Stack>

        </>

    )
}

export default _layout

const styles = StyleSheet.create({})