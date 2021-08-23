import * as React from 'react'
import { Text, View } from 'react-native'
import Button from '../components/Button'
import TextInputPP from '../components/TextInput'
import { useState } from 'react'
import postApi from '../api/postApi'

const NewPost = () => {
  const [titlePost, setTitlePost] = useState({ value: '', error: '' })
  const [description, setDescriptionPost] = useState({ value: '', error: '' })
  const [hashtag, setHashtag] = useState({ value: '', error: '' })

  const _save = () => {
	
  if(titlePost.value!=''){
    let value ={
      post_title: titlePost.value,
      post_description: description.value,
      post_content: ''
    }
		//add
		postApi.createPost(value)
			.then((data) => {
				console.log(data)
        setTitlePost({value:'',error:''})
        setDescriptionPost({value:'',error:''})
        setHashtag({value:'',error:''})
			})
			.then((err) => {
				console.log(err)
			});
    }
	};

  return (
    <View style={{ margin: 25 }}>
      <TextInputPP
        label="Titulo"
        returnKeyType="next"
        value={titlePost.value}
        onChangeText={text => setTitlePost({ value: text, error: '' })}
        error={!!titlePost.error}
        errorText={titlePost.error}
      />
      <TextInputPP
        label="Conteudo"
        returnKeyType="next"
        value={description.value}
        onChangeText={text => setDescriptionPost({ value: text, error: '' })}
        error={!!description.error}
        errorText={description.error}
        multiline={true}
        numberOfLines={5}
      />
      <TextInputPP
        label="Hashtag"
        returnKeyType="next"
        value={hashtag.value}
        onChangeText={text => setHashtag({ value: text, error: '' })}
        error={!!hashtag.error}
        errorText={hashtag.error}
        multiline={true}
        numberOfLines={2}
      >
      </TextInputPP>
      <Button mode="contained" icon="content-save-outline" onPress={_save}>
        Salvar
      </Button>
    </View>
  )
}

export default NewPost
