import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import users from '../data/users';

export default props => {
  const keyExtractor = (item, index) => index.toString();
  const getUserItem = ({item: user}) => (
    <ListItem
      bottomDivider
      onPress={() => props.navigation.navigate('UserForm')}>
      <Avatar source={{uri: user.avatarUrl}} />
      <ListItem.Content>
        <ListItem.Title>{user.name}</ListItem.Title>
        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View>
      <FlatList
        keyExtractor={keyExtractor}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  );
};
