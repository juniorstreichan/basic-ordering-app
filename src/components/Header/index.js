import styled from 'styled-components/native';
import { AppColors } from '../../config/theme';

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  height: 20%;
  border-bottom-width: 1px;
  border-bottom-color: ${AppColors.red};
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  align-items: center;
  padding-left: 30px;
  background: ${AppColors.dark};
  margin-bottom: 5px;
`;

export const Return = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const HeaderContent = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export const HeaderText = styled.Text`
  color: ${AppColors.light};
  font-size: 20px;
  font-weight: bold;
`;
