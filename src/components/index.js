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
export const OptionsBox = styled.View`
  align-items: flex-start;
  min-height: 20%;
`;
