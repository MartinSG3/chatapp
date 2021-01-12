import moment from "moment";
import React from "react";
import { View, Text, Image, TouchableWithoutFeedback  } from "react-native";
import { ChatBox } from "../../types";
import styles from './style'
import { useNavigation } from '@react-navigation/native';

export type chatListProps = {
    chatBox: ChatBox; 
}

const ChatItem = (props: chatListProps) => {
    const { chatBox } = props; 

    const user = chatBox.users[1];

    const navigation = useNavigation();

    const onClick = () => {
        console.warn(`Clicked on ${user.name}`)
        navigation.navigate('ChatRoom', { id: chatBox.id, name: user.name })
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: user.imageurl }} style={styles.avatar}/>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.recentMessage}>{chatBox.recentMessage.content}</Text>
            </View>
            </View>

            <Text style={styles.date}>
                {moment(chatBox.recentMessage.createdAt).format("DD/MM/YYYY")}
            </Text>
        </View>
        </TouchableWithoutFeedback>
    )
};

export default ChatItem