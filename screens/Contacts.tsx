import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ContactList from '../components/ContactsItem'
import { useEffect, useState } from "react";

import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../src/graphql/queries';

export default function Contacts() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await API.graphql(
                    graphqlOperation (
                        listUsers
                    )
                )
                setUsers(userData.data.listUsers.items);
            } catch (e) {
                console.log(e)
            }
        }
        fetchUser();
    }, [])

    return (
        <View style={styles.container}>
            <FlatList 
            data={users} 
            renderItem={({item}) => <ContactList user={item} />} 
            keyExtractor={(item) => item.id}
            style={{width: '100%'}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });