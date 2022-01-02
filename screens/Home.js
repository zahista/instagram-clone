import {React, useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import Header from "../components/Home/Header"
import Stories from "../components/Home/Stories"
import Post from "../components/Home/Post"
import axios from 'axios'

const home = () => {
  const [posts, setPosts] = useState([])
  const axios = require("axios")
  useEffect(()=>{
    axios.get("https://pixabay.com/api/?key=25013376-795498b9033358df535099a08&q=desk+setup&image_type=photo&pretty=true")
    .then((res)=>{
      setPosts(res.data.hits)

    })
  }, [] )

    return (
        <View>
          <Header />
          <ScrollView>
          <Stories />
            {posts.map((post)=><Post post={post} />)}
          </ScrollView>
        </View>
    )
}

export default home
