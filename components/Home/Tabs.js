import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Tabs = () => {
    return (
        <View style={styles.container}>
            <Text>Tabs</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        height: 80
    },
})

export default Tabs
