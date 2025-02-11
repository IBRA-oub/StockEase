import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Octicons from '@expo/vector-icons/Octicons';
import Entypo from '@expo/vector-icons/Entypo';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{

                    tabBarShowLabel: true,
                    tabBarActiveTintColor: '#313131',
                    tabBarInactiveTintColor: 'white',
                    tabBarStyle: {
                        backgroundColor: '#C67C4E',
                        borderTopWidth: 1,
                        borderTopColor: 'white',
                        height: 59,

                    }
                }}
            >

                <Tabs.Screen
                    name='home'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <Entypo name="home" size={focused ? 30 : 24} color={color} />
                        )
                    }}
                />
                <Tabs.Screen
                    name='statistics'
                    options={{
                        title: 'Statistics',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <Octicons name="graph" size={focused ? 30 : 24} color={color} />

                        )
                    }}
                />

            </Tabs>

        </>

    )
}

export default TabsLayout

const styles = StyleSheet.create({})