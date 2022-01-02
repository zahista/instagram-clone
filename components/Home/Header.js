import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text, } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.header}>
            
            <TouchableOpacity>
                <Image 
                source ={require("../../assets/ig.png")}
                style = {styles.logo}
                />
            </TouchableOpacity>
            
            <View style={styles.icons}>


                <TouchableOpacity style={styles.icon}>
                    <Ionicons name="add-circle-outline" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.icon}>

                    <View 
                        style={{
                        height: 8, 
                        width: 8, 
                        position: "absolute", 
                        zIndex: 100,
                        backgroundColor: "red",
                        borderRadius: 100,
                        left: 20,
                        bottom: 16
                        }}>
                    </View>

                    <Ionicons name="heart-outline" size={24} color="black" />

                </TouchableOpacity>

                <TouchableOpacity style={styles.icon}>

                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>43</Text>
                        </View>
                        <Ionicons name="paper-plane-outline" size={24} color="black" />

                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    header: {
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }, 

    logo: {
        width: 100, 
        height: 50,
        resizeMode: "contain"
    }, 

    icons: {
        flexDirection: "row",
    },

    icon: {
        paddingHorizontal: 4
    },

    badge: {
       backgroundColor: "red",
       position: "absolute",
       zIndex: 100,
       borderRadius: 8, 
       paddingHorizontal: 4,
       left: 18,
       bottom: 14,
      
    },

    badgeText: {
       color: "white", 
       fontWeight: "700",
       fontSize: 11
    },
})


export default Header
