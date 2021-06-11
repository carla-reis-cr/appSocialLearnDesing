import * as React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { Navigation } from '../types';

type Props = {
    navigation: Navigation;
  };
  const Profile = ({ navigation }: Props) => {

    const logout = (navigation) => {
        AsyncStorage.setItem("TOKEN","").then(() => {
            navigation.reset({
                index: 0,
                routes: [{name: "LoginScreen"}]
            })
        }).catch((error) => {
            console.log(error)
            Alert.alert("Erro ao sair")
        })
    }

    return (
      <View>
        <Button
              icon={
                <Icon
                  name="check"
                  size={15}
                  color="white"
                />
              }
              title="Sair"
              onPress={() => logout(navigation)}
            />
      
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
          <Text>Carla Reis</Text>
          
        </View>
      </View>
    );
  }

  export default (Profile);