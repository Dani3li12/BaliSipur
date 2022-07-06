import {React, useState} from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { Container, CardAuthor, CardTitle, CardImage, CardReadingTime, CardContentWrapper, StarWrapper } from './Card_Styles';
import images from '../../assets/coverPictures';
import { AntDesign, Entypo } from '@expo/vector-icons';
import StoryScreen from '../StoryScreen/StoryScreen';

const screenWidth = Dimensions.get('window').width;

export default function Card({ story }) {
  const activeColor = '#FED433';
  const inactiveColor = '#b8bece';
  const title = story.title.replace(/_/g, " ");

  const [starColor, setStarColor] = useState(inactiveColor);
  const [showStory, setShowStory] = useState(false);
  const [currentStory, setCurrentStory] = useState("");
  
  const onClickStar = (() => {
    if (starColor == activeColor) {
      setStarColor(inactiveColor);
    } else {
      setStarColor(activeColor);
    }
  })

  const openStory = ((storyName) => {
    setCurrentStory(storyName);
    setShowStory(true);

  })
  const readingTime = story.readingTime + " דק'";

  return (
    <>
      <TouchableOpacity onPress={()=>openStory(story.title)}>
        <Container screenWidth={screenWidth}>
          <CardImage source={(images[story.title])}/>
          <CardContentWrapper>
            <CardTitle>{title}</CardTitle>
            <CardAuthor>{story.author}</CardAuthor>
            <CardReadingTime>{readingTime}</CardReadingTime>
          </CardContentWrapper>
          <StarWrapper>
            <AntDesign name="star" size={22} color={starColor} onPress={onClickStar}/>
          </StarWrapper>
      </Container>
      </TouchableOpacity>
      {showStory ?
        <StoryScreen />
      :null}
    </>
  );
}