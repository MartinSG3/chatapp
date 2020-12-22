import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ChatList from '../components/ChatItem'
import { View } from '../components/Themed';

import ChatBox from '../data/ChatBox';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
      data={ChatBox} 
      renderItem={({item}) => <ChatList chatBox={item} />} 
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
