import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const CardPost = () =>{
    return(
        <View>
       <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle"  />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
      </View>
    );
};

export default memo(CardPost);