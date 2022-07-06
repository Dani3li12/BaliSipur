import styled from 'styled-components/native';

export const Container = styled.View`
// width: ${({ screenWidth }) => screenWidth-50};
  width: 90%  
  background: white;
  height: 110px;
  border-radius: 12px;
  flexDirection: row;
  flex-wrap: wrap;
  marginRight: 5%;
  marginLeft: 5%;
  marginBottom: 7px;
}
`;

export const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  max-width: 200px;
`;

export const CardAuthor = styled.Text`
color: grey;
font-size: 13px;
`;

export const CardReadingTime = styled.Text`
  color: grey;
  font-size: 12px;
  text-align: right;
  marginTop: 5px; 
`;

export const CardImage = styled.Image`
  position: absolute;
  height: 60px;
  height: 80px;
  left: 10px;
  width: 100px;
  top: 15px;
  resizeMode: center;
`;

export const CardContentWrapper = styled.View`
  // border: 1px solid red;
  position: absolute;
  right: 60px;
  top: 25%;
`;

export const StarWrapper = styled.View`
  position: absolute;
  right: 15px;
  top: 44px;
`;

