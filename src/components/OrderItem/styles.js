import styled from 'styled-components/native';
import { AppColors } from '../../config/theme';

export const CardItem = styled.View`
  background: ${AppColors.light};
  min-height: 100px;
  border-radius: 10px;
  padding: 3px 10px;
  padding-left: 30px;
  margin-bottom: 10px;

  border-width: ${({ first }) => (first ? '3px' : 0)};
  border-color: ${({ first }) => (first ? AppColors.red : AppColors.light)};

  elevation: 10;
`;

export const CardHeader = styled.Text`
  font-size: 12px;
  text-align: right;
  color: #333;
  width: 100%;
`;

export const CardText = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;
