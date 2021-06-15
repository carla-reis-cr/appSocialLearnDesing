import * as React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { Navigation } from '../types';

  const Profile = ({ navigation }) => {

    
    const _logout = () => {
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
          <Text>Carla Reis</Text>
          
        </View>
        <Button mode="contained" icon="exit-to-app" onPress={_logout}>
           Sair
        </Button>
      
        
      </View>
    );
  }

  export default (Profile);