import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React, {useState} from "react";
import { View, TextInput } from "react-native";
import styles from './style'

const Input = () => {

    const [message, setMessage] = useState('')

    const pressMicrophone = () => {
        console.warn('Microphone')
    }

    const pressSend = () => {
        console.warn(`Sending: ${message}`)

        setMessage('');
    }

    const press = () => {
        if (!message) {
            pressMicrophone();
        } else {
            pressSend();
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.main}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey" />
                <TextInput 
                style={styles.input}
                maxLength={200}
                multiline
                value={message}
                onChangeText={setMessage}
                placeholder="Write a message" />
                <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
                {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icon} />}
            </View>
            <View style={styles.button}>
                {
                    !message ? <MaterialCommunityIcons name="microphone" size={24} color="white" />
                    : <MaterialIcons name="send" size={24} color="white" />
                }
            </View>
        </View>
    )
}

export default Input;