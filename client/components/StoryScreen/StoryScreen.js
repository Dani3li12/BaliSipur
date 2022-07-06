import {React, useState} from 'react';
import { View, Text } from 'react-native';
import { Wrapper } from './StoryScreen_Styles';

export default function StoryScreen({ storyName }) {
    return (
        <Wrapper>
            <Text style={{color: "white"}}>
                {storyName}
            </Text>
        </Wrapper>
    )
}