import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const _layout = () => {
    return (
        <>
              <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Stack>
                <Stack.Screen name='sign-in' options={{ headerShown: false }} />
            </Stack>

        </>

    )
}

export default _layout

const styles = StyleSheet.create({})