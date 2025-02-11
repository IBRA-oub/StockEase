import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const _layout = () => {
    return (
        <>
            <StatusBar backgroundColor="#161622" barStyle="dark-content" />
            <Stack>
                <Stack.Screen name='ProductDetails' options={{ headerShown: false }} />
            </Stack>

        </>

    )
}

export default _layout

const styles = StyleSheet.create({})