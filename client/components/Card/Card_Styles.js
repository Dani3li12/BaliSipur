import styled from 'styled-components/native';

export const Container = styled.View`
// width: ${({ screenWidth }) => screenWidth - 150};
  background: white;
  height: 120px;
  margin-bottom: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 2;
  flex-shrink: 2;
  justify-content: space-between;
  // border: 1px solid blue;
  padding: 5px;
}
`;

export const Cover = styled.View`
  overflow: hidden;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  background: cadetblue;
`;

export const CardTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  max-width: 200px;
`;

export const CardAuthor = styled.Text`
color: grey;
font-size: 15px;
`;
export const CardReadingTime = styled.Text`
color: grey;
font-size: 15px;
text-align: right;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;
export const CardImage = styled.Image`
border: 1px solid black;
  position: relative;
  top: 50%;
`;

export const CardContentWrapper = styled.View`
  // border: 1px solid red;
  // width: 00px;
  right: 0px;
  position: relative;
`;

