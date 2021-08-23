import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import { Navigation } from '../types';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '../core/utils';
import RegisterService from '../api/postApi';
import { text } from 'express';
import userApi from '../api/userApi';
import { Alert } from 'react-native';

type Props = {
  navigation: Navigation;
};

const RegisterScreen = ({ navigation }: Props) => {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [nicename, setNicename] = useState({ value: '', error: '' });
  const [userLogin, setUserLogin] = useState({ value: '', error: '' });


  /**Variaveis locais */
  let error = false;

  /**Validações */
  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      error = true;
      return;
    }
    return !error;
  };

  const ajustName = (text: any)=>{
    setName({value: text, error:''});
    const auxName = text;
    let aux_nicename = auxName.toLowerCase();
    aux_nicename = aux_nicename.replace(/\s/g,'');
    let aux_user_login =auxName.replace(/\s/g,'');
  
    setUserLogin({value:aux_user_login, error:''});
    setNicename({value:aux_nicename, error:''});
    
  }
  const _saveRegister = () =>{

    if(onSignUpPressed()){

      let data = {
        user_login: userLogin.value,
        display_name: name.value,
        user_nicename: nicename.value,
        user_email: email.value,
        user_pass:password.value,
        message:'',
        status:false,
      }
      	//add
      if(error ==false){
        userApi.createUser(data)
        .then((data) => {
          const TitleAlert = (data.status) ? "Sucesso" : "Erro" ;
          Alert.alert(TitleAlert, data.message);
          setEmail({value:'',error:''});
          setName({value:'',error:''});
          setPassword({value:'',error:''});
          setUserLogin({value:'',error:''})
          setNicename({value:'',error:''})
          navigation.navigate('Login');
        })
        .then((err) => {
          console.log(err)
        });
      }
      };
    };


  return (
    <Background>
      <Logo />
      <Header>Criar conta</Header>
      <TextInput
        label="Nome Completo"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => ajustName(text)}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      
      <TextInput
        label="Senha"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button mode="contained" onPress={_saveRegister} style={styles.button}>
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Já tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(RegisterScreen);