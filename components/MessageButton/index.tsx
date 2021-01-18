import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import styles from "./style";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const messageButton = () => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Contacts')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <MaterialCommunityIcons 
                    name="message-reply-text"
                    size={26}
                    color="white"
                />
            </TouchableOpacity>
        </View>
    )
} 

export default messageButton;