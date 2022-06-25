import styled from 'styled-components/native';

export const Container = styled.View`
// width: ${({ screenWidth }) => screenWidth - 150};
  background: white;
  height: 120px;
  margin-bottom: 10px;
  border-radius: 15px;
  display: flex;
}
`;

export const Cover = styled.View`
  overflow: hidden;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  background: cadetblue;
`;

export const StoryImage = styled.View`
  width: 100px;
  background: #3c4560;
`;

export const CardTitle = styled.Text`
  color: black;
  font-size: 15px;
  font-weight: bold;
`;

export const CardAuthor = styled.Text`
color: grey;
font-size: 15px;
`;
export const CardReadingTime = styled.Text`
color: grey;
font-size: 15px;
`;

export const Wrapper = styled.View`
  margin-left: 10px;
`;

export const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`;

export const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
`;
