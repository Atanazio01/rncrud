import React, {useContext} from 'react';
import {View, FlatList, Alert} from 'react-native';
import {ListItem, Avatar, Button, Icon} from 'react-native-elements';
import UsersContext from '../context/UserContext';

export default props => {
  const {state, dispatch} = useContext(UsersContext);

  const keyExtractor = (item, index) => index.toString();

  function confirmUserDeletion(user) {
    Alert.alert('Excluir usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'deleteUser',
            payload: user,
          });
        },
      },
      {
        text: 'Não',
      },
    ]);
  }

  const getUserItem = ({item: user}) => (
    <ListItem
      onPress={() => props.navigation.navigate('UserForm', user)}
      bottomDivider>
      <Avatar source={{uri: user.avatarUrl}} />
      <ListItem.Content>
        <ListItem.Title>{user.name}</ListItem.Title>
        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
      </ListItem.Content>
      <Button
        onPress={() => props.navigation.navigate('UserForm', user)}
        type="clear"
        icon={<Icon name="edit" size={25} color="orange" />}
      />
      <Button
        onPress={() => confirmUserDeletion(user)}
        type="clear"
        icon={<Icon name="delete" size={25} color="red" />}
      />
    </ListItem>
  );

  return (
    <View>
      <FlatList
        keyExtractor={keyExtractor}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  );
};
