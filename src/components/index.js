import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 4px;
  background-color: #f5f5f5;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: bold;
  background: tomato;
  width: 100%;
  font-size: 24px;
`;

export const TitleBox = styled.View`
  background: tomato;
  color: #fff;
  align-items: center;
  padding: 15px;
  border-radius: 5px;
  border-width: 2px;
  border-color: #999;
  elevation: 10;
`;

export const Button = styled.TouchableOpacity`
  background: transparent;
  padding: 5px 15px;
  min-width: 300px;
  min-height: 44px;
  margin: 5px 0;

  border-radius: 4px;
  border-width: 3px;
  border-color: tomato;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const OptionsBox = styled.View`
  align-items: flex-start;
  min-height: 20%;
`;
