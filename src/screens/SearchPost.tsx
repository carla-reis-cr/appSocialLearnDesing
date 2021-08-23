import * as React from 'react';
import { View } from 'react-native';
import Button from '../components/Button';
import TextInputPP from '../components/TextInput';
import { useState } from 'react';
import SearchBarPaper from '../components/SearchPaper';
import CardPost from '../components/CardPost';

  const SearchPost = ( { navigation }) => {
    const [description, setDescriptionPost] = useState({ value: '', error: '' });
    const _save =()=>{
      console.log("Save")
    }
    return (
      <View>
        <SearchBarPaper/>
        <CardPost/>
      </View>
    );
  }

  export default SearchPost;

  /** <TextInputPP
        label="Procurar"
        returnKeyType="next"
        value={description.value}
        onChangeText={text => setDescriptionPost({ value: text, error: '' })}
        error={!!description.error}
        errorText={description.error}

        <Button mode="contained" icon="content-save-outline" onPress={_save}>
           Buscar
        </Button>
      /> */