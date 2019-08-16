import styled from 'styled-components/native';
import { AppColors } from '../config/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${AppColors.light};
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

export const InputNumber = styled.TextInput.attrs({
  keyboardType: 'number-pad',
})`
  border-radius: 4px;
  height: 40px;
  background: #ddd;
  max-width: 200px;
  width: 100%;
  text-align: center;
  font-weight: bold;
`;
