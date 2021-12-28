import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Post = ({post}) => {
    return (
        <View style={{paddingTop: 8}}>
            <PostHeader post={post} />
            <Image style={styles.postImg} source={{uri: post.largeImageURL}}/>
            <PostFooter post={post} />
        </View>
    )
}

//-------------------------------------sub components starst here including styles for them





const PostHeader = ({post}) => {
    return (
        <View style={styles.postHeader}>
            <View  style={{flexDirection: "row", alignItems: "center", padding: 8}}>
                <Image 
                style={{height: 32, width: 32, borderRadius: 80, borderColor: "red", borderWidth: 2}} 
                source={{uri: post.userImageURL}} />
                <Text style={{fontWeight: "500"}}> {post.user}</Text>
            </View>
            <TouchableOpacity>
                <Ionicons name="md-ellipsis-horizontal" size={18} color="black" />
            </TouchableOpacity>
        </View>
    )
   
}

const PostFooter = ({post})=>{
    return (

        <View>
            <View style={{flexDirection: "row", justifyContent: "space-between", padding: 8}}>
                <View style={styles.iconsRow}>
                        <TouchableOpacity>
                        <Ionicons style={styles.icon} name="heart-outline" size={24} color="black" />
                        </TouchableOpacity>
                    <AntDesign style={styles.icon} name="message1" size={20} color="black" />
                    <Ionicons style={styles.icon} name="paper-plane-outline" size={24} color="black" />
                </View>
                <Ionicons name="bookmark-outline" size={24} color="black" />
            </View>
            <View style={{paddingLeft: 8}}>
            <Text style={{fontWeight: "600", marginBottom: 8 }}>{post.likes} To se mi líbí</Text>
            <Text style={{fontWeight: "600"}}>{post.user}</Text>
            <Text>Zobrazit všechny komentáře ({post.comments})</Text>
            </View>

        </View>
       
       
    )
}



const styles = StyleSheet.create({
    postImg: {
        height: 300
    },

    postHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 20
    },

    iconsRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    icon: {
        marginRight: 8
    },
})

export default Post
