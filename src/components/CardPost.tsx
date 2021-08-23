import React,{ memo, useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Dialog, Provider } from 'react-native-paper';
import { Button, Card, Paragraph, Portal} from 'react-native-paper';
import { PostType } from '../models/post.interface';
import { HashtagType } from '../models/hashtags.interface';
import postApi from '../api/postApi';
import { Link } from '@react-navigation/native';
import SearchPost from '../screens/SearchPost';
import HashtagButton from './Hashtag';

const CardPost = () =>{
  const [posts, setPosts] = useState<PostType[]>([]);
  const [hashtagsPosts, setHashtagsPosts] = useState<HashtagType[]>([]);
	const [isError, setIsError] = useState<boolean>(false);
  const [users, setUsers] = useState();
  const [idPost, setIdPost]=useState();

  useEffect(() => {
      postApi.getPostsFormat()
                  .then((data)=>{
                          setPosts(data)
                  })
                  .catch((err)=>{
                          setIsError(true);
                  });
                 
      return () =>{};
  }, []);

  useEffect(()=>{
    postApi.getHashtagPost()
    .then((data)=>{
        setHashtagsPosts(data);
        //console.log(data);
    })
    .catch((err)=>{
            setIsError(true);
    });
return () =>{};
  },[])

  const [visible, setVisible] = React.useState(false);


  const showDialogPost = (id:any) =>{
   // console.log(id.id);
    setVisible(true);
    setIdPost(id.id);
    //console.log(idPost);
  };

  const openPost = posts.filter(post =>{
  
    //console.log(post.ID);
    //console.log(idPost);
    //console.log(post.ID === idPost);
    return post.ID === idPost ;
    
  });

  const podioPorPais =( hashtagsPosts.map(function(item,index){
    return <HashtagButton key={index} onPress={()=>_SearchHashtag({text:item.name})}>#{item.name}</HashtagButton> ;
 }));
 

 
  const hideDialog = () => setVisible(false);

  function _SearchHashtag(text){
    console.log(text);
  }
    return(
      
     <ScrollView  contentContainerStyle={{backgroundColor: 'white', padding: 2}}>
       {openPost.map((post, index)=>(
      <Portal key={index}>
      
        <Dialog  visible={visible} onDismiss={hideDialog}>
        <ScrollView>
            <Dialog.Title>{post.post_title}</Dialog.Title>
            <View style={{marginLeft:25}}>
            <Paragraph style={{fontSize:12}}>
              @{post.user_nicename} 
            </Paragraph>
            <Paragraph>
            Publicado em {post.post_date}
            </Paragraph>
            </View>
            <Dialog.Content>
              <Paragraph style={{marginTop:15,textAlign:'justify'}}>
                {post.post_content}
              </Paragraph>
              <View style={styles.hashtag}>
                
           <Text>{podioPorPais}</Text>
          
          </View>
            </Dialog.Content>
            <Dialog.Actions>
            <Button
          icon='thumb-up' onPress={()=>console.log('pressed like')}> </Button>
          <Button
          icon='heart-outline' onPress={()=>console.log('pressed amei')}> </Button>
          <Button
          icon='send-outline' onPress={()=>console.log('pressed compartilhar')}> </Button>
            </Dialog.Actions>
            </ScrollView>
        
          </Dialog>
      </Portal>
  ))}
        {posts.map((post, index)=>(
         <Card key={index} 
             style={styles.container}
           onPress={()=>showDialogPost({id:post.ID})}>
        <Card.Content>

         <Card.Title
         title={post.post_title}
         subtitle={'@' + post.user_nicename+' '+ post.post_date }
         titleStyle={{fontSize:15, fontWeight:'bold'}}
         />
         <Text numberOfLines={2} style={{marginLeft:5}}>{post.post_content} </Text>
         </Card.Content>
         
           <View style={styles.hashtag}>
           <Text>{podioPorPais}</Text>
               
          </View>
          
        <Card.Actions>
          <Button
          icon='thumb-up' onPress={()=>console.log('pressed like')}> </Button>
          <Button
          icon='heart-outline' onPress={()=>console.log('pressed amei')}> </Button>
          <Button
          icon='send-outline' onPress={()=>console.log('pressed compartilhar')}> </Button>
      </Card.Actions>
      
      </Card>
       ))}
     
     </ScrollView>
    );
};

export default memo(CardPost);

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginVertical: 10,
  },
  title:{
    margin:0,
    marginLeft:10,
    fontSize:10,
  },
  containerStyle:{
    backgroundColor: 'white',
    padding: 20
  },
  hashtag:{
    fontWeight:'bold',
    padding:20
  }
});

/**<Card.Cover style={{borderRadius:2}}source={{ uri: 'https://picsum.photos/700' }} />*/