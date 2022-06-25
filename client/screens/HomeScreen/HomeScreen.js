import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import StoryService from "../../services/story.service";
import { RootView, SearchContainer, StoryCardsContainer, Header } from "./HomeScreen_Styles";
import Card from '../../components/Card/Card';
import SearchTool from '../../components/Card/SearchTool';

export default function HomeScreen() {
  const [stories, setStories] = useState([]);
  const [fetching, setFetching] = useState(true);

 function getAllStories() {
    StoryService.getAll().then((res) => {
      setStories(res.data);
      setFetching(false);
    }).catch(err => {  
      console.log(err)  
    }); 
  };

  useEffect(() => {
    getAllStories();
  }, []);
  
  return (
    <RootView>
      <Header />
      <SearchContainer>
        <SearchTool/>
      </SearchContainer>
      <StoryCardsContainer>
        {!fetching ?
            <View>
                {stories.map(story =>
                // <Text key={story}>{story.content}</Text>
                  <Card key={story.id} story={story} />
                )}
            </View>
        : null}
        </StoryCardsContainer>
      </RootView>
  );
}

