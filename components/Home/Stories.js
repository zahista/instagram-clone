import {React, useEffect, useState }from 'react'
import { View, Text, StyleSheet, ScrollView, Image, } from 'react-native'
import axios from "axios"
import { Ionicons } from '@expo/vector-icons';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const Stories = () => {
    
    const axios = require("axios");
    const [ users, setUsers] = useState([])
    const [ username, setUsername] = useState("")
    
    useEffect (()=>{
        axios.get("https://randomuser.me/api/?results=50").then((res)=>{
            setUsers(res.data.results)
        })

        axios.get("https://randomuser.me/api/").then((res)=>{
            setUsername(res.data.results[0])
            console.log(username)
        })
    }, [])
       

    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.stories}>

            <View style={styles.AddStory}>
                <Image
                  style={styles.AddAvatar}
                  source={{uri: username.picture.medium}}
                />
                <View style={styles.addicon} >
                    <Ionicons name="ios-add-circle" size={24} color="#147EFB" />
                </View>
                <Text style={styles.Adduser}>Váš příběh</Text>
            </View>

            {users.map((user, index)=>
               <View key={index} style={styles.story}>
                   <Image
                      style={styles.avatar}
                      source={{uri: user.picture.medium}}
                    />
                    <Text style={styles.user}>
                        {
                        user.login.username.length > 8 
                        ? user.login.username.slice(0, 10) + "..." 
                        : user.login.username
                        }
                    </Text>
               </View> 
            )}
        </ScrollView>
    )
}


const styles = StyleSheet.create({

    stories: {
       flexDirection: "row",
       paddingHorizontal: 10,
       paddingBottom: 4,
       borderBottomWidth: 1,
       borderBottomColor: "#E5E5E5",
    }, 
    user: {
       paddingHorizontal: 4,
       fontSize: 11,
       marginTop: 4
    }, 
    Adduser: {
       paddingHorizontal: 4,
       fontSize: 11,
       marginTop: 4,
       color: "gray"
    }, 
    addicon:{
       position: "absolute",
       left: 38,
       bottom: 16,
       backgroundColor: "white",
       borderRadius: 999,
        padding: 2
    },

    story: {
        justifyContent: "center",
        alignItems: "center"
    },
    AddStory: {
        justifyContent: "center",
        alignItems: "center"
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 999,
        borderColor: "#FF5341",
        borderWidth: 2
    },
    AddAvatar: {
        width: 60,
        height: 60,
        borderRadius: 999,
    },
})


export default Stories
