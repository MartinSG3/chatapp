import moment from "moment";
import React from "react";
import { View, Text, Image, TouchableWithoutFeedback  } from "react-native";
import { User } from "../../types";
import styles from './style'
import { useNavigation } from '@react-navigation/native';

import { API, graphqlOperation } from "aws-amplify";
import { createChatRoom, createChatUser } from '../../src/graphql/mutations'

export type ContactsListProps = {
    user: User; 
}

const ContactItem = (props: ContactsListProps) => {
    const { user } = props;

    const navigation = useNavigation();

    const onClick = async () => {
        try {
            
        const newChatRoomData = await API.graphql(
            graphqlOperation(
                CreateChatRoom, {
                    input: {}
                }
            )
        )

        if (!newChatRoomData.data) {
            console.log("Failed to create to make a chatroom")
            return;
        }

        const newChatRoom = newChatRoomData.data.CreateChatRoom

        console.log(newChatRoom)
        
    } catch(e) {
        console.log(e)
    } 
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: user.imageurl }} style={styles.avatar}/>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.recentMessage}>{user.status}</Text>
            </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
};

export default ContactItem;