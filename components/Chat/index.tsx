import moment from 'moment';
import React from 'react';
import { View, Text, Image  } from "react-native";
import { MessageChannel } from "../../types";
import styles from './style';

export type ChatProps = {
    chatMessage: MessageChannel;
}

const Chat = (props: ChatProps) => {

    const { chatMessage } = props;

    const selfMessage = () => {
        return chatMessage.user.id === 'u1';
    }

    return (
        <View style={styles.container}>
            <View style={[styles.box,
                {
                    backgroundColor: selfMessage() ? '#DCF8C3' : 'white',
                    marginLeft: selfMessage() ? 50 : 0,
                    marginRight: selfMessage() ? 0 : 50 
                }
            ]}>
                {!selfMessage() && <Text style={styles.name}>{chatMessage.user.name}</Text>}
                <Text style={styles.text}>{chatMessage.content}</Text>
                <Text style={styles.date}>{moment(chatMessage.createdAt).fromNow()}</Text>
            </View>
        </View>
    )
}

export default Chat;