import moment from "moment";
import React from "react";
import { View, Text, Image } from "react-native";
import { ChatBox } from "../../types";
import styles from './style'

export type chatListProps = {
    chatBox: ChatBox; 
}

const ChatItem = (props: chatListProps) => {
    const { chatBox } = props; 

    const user = chatBox.users[0]; 

    return (
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
    )
};

export default ChatItem