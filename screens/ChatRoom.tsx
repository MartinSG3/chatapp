import React from 'react';
import { useRoute } from '@react-navigation/native'
import { Text, FlatList, ImageBackground, View } from 'react-native'
import ChatData from '../data/Chats'

import ChatMessage from '../components/Chat'
import Input from '../components/Input/index'
//import Background from '../assets/images/'

const ChatRoom = () => {

    const route = useRoute();

    // console.log(route.params)

    return (
        <View>
            <FlatList 
                data={ChatData.recentMessage}
                renderItem={({ item }) => <ChatMessage chatMessage={item} /> }
                inverted/>
            <Input />
        </View>
    ) 
}

export default ChatRoom;