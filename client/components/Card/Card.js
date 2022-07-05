import {React, useState} from 'react';
import { Dimensions, StyleSheet, View , Text, Image, ImageBackground} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { Container, CardAuthor, CardTitle, CardImage, CardReadingTime, CardContentWrapper } from './Card_Styles';
import images from '../../assets/coverPictures';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

export default function Card({ story }) {
  const activeColor = '#FED433';
  const inactiveColor = '#b8bece';
  const title = story.title.replace(/_/g, " ");

  const [starColor, setStarColor] = useState(inactiveColor);
  
  const onClickStar = (() => {
    if (starColor == activeColor) {
      setStarColor(inactiveColor);
    } else {
      setStarColor(activeColor);
    }
  })
  const readingTime = story.readingTime+" דק'"
  return (
    <View>
      <Container screenWidth={screenWidth}>
        <CardImage source={(images[story.title])} style={{width: 100, height:90, resizeMode:"center"}}/>
        <CardContentWrapper>
          <AntDesign name="star" size={22} color={starColor} onPress={onClickStar} />
          <CardTitle>{title}</CardTitle>
          <CardAuthor>{story.author}</CardAuthor>
          <CardReadingTime>
          {readingTime}
          {/* <Entypo name="time-slot" size={20} color="#FED433"/> */}
          </CardReadingTime>
        </CardContentWrapper>
        {/* <Image source={(images[story.title])} style={{width: 100, height:100, resizeMode:"center", marginLeft: "10px", marginTop: "10px"}}/> */}
    </Container>
    </View>
  );
}