import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';
import { AppColors } from '../config/theme';

const Shape = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background: ${AppColors.red};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  position: absolute;
  left: 10px;
  bottom: 20;
`;

export default function Fab({ icon = 'plus' }) {
  return (
    <Shape activeOpacity={0.7}>
      <Icon name={icon} size={20} color={AppColors.light} />
    </Shape>
  );
}
