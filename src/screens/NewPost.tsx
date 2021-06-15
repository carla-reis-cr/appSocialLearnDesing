import * as React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Button';
import TextInputPP from '../components/TextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { useState } from 'react';

  const NewPost = ({ navigation }) => {
    const [titlePost, setTitlePost] = useState({ value: '', error: '' });
    const [description, setDescriptionPost] = useState({ value: '', error: '' });
    const _save =()=>{
      console.log("Save")
    }
    return (
      <View>
        <TextInputPP
        label="Titulo"
        returnKeyType="next"
        value={titlePost.value}
        onChangeText={text => setTitlePost({ value: text, error: '' })}
        error={!!titlePost.error}
        errorText={titlePost.error}

      />
       <TextInputPP
        label="Descrição"
        returnKeyType="next"
        value={description.value}
        onChangeText={text => setDescriptionPost({ value: text, error: '' })}
        error={!!description.error}
        errorText={description.error}

      />
        <Button mode="contained" icon="content-save-outline" onPress={_save}>
           Salvar
        </Button>
        
      </View>
    );
  }

  export default (NewPost);