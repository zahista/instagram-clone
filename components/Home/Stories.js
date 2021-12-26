import React from 'react'
import { View, Text } from 'react-native'
import axios from "axios"

const Stories = () => {

    const axios = require('axios');


    axios.get('https://randomuser.me/api/?results=50')
    .then( (response) => {
    const users = response.data.results;
    })

    return (
        <View>
            <Text>Storiessdfd</Text>
        </View>
    )
}

export default Stories
