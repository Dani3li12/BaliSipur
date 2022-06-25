import React from 'react';
import { Dimensions, StyleSheet, View , Text, Image, ImageBackground} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Container, Cover, StoryImage, Title, CardAuthor, CardTitle, Caption, Subtitle, CardReadingTime } from './Card_Styles';
import images from '../../assets/coverPictures';

const screenWidth = Dimensions.get('window').width;

export default function Card({ story }) {
  const title = story.title.replace(/_/g, " ");

  return (
    <View>
      <Container screenWidth={screenWidth}>
        <CardTitle>{title}</CardTitle>
        <CardAuthor>{story.author}</CardAuthor>
        {/* <CardReadingTime>{story.readingTime}</CardReadingTime>/* */}
        {/* <Image source={(images[story.title])} style={{width: 100, height:100, resizeMode:"center", marginLeft: "10px", marginTop: "10px"}}/> */}
        <Image source={(images[story.title])} style={{width: 100, height:90, resizeMode:"center", marginLeft: 10}}/>
    </Container>
    </View>
  );
}