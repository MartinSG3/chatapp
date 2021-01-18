import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ChatList from '../components/ChatItem'

import ChatBox from '../data/ChatBox';
import MessageButton from '../components/MessageButton'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
      data={ChatBox} 
      renderItem={({item}) => <ChatList chatBox={item} />} 
      keyExtractor={(item) => item.id}
      style={{width: '100%'}}
      />
      <MessageButton />
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
