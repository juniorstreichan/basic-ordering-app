import React from 'react';
import styled from 'styled-components/native';
import { AppColors } from '../config/theme';

const StyledButton = styled.TouchableOpacity`
  background: ${AppColors.dark};
  padding: 5px 15px;
  min-width: 100px;
  min-height: 44px;
  margin: 5px 0;

  border-radius: 4px;
  border-width: 3px;
  border-color: ${AppColors.red};

  flex-direction: row;
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const TextButton = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: ${AppColors.light};
`;

export default function Button({ text = 'OK', ...props }) {
  return (
    <StyledButton activeOpacity={0.7} {...props}>
      <TextButton>{text}</TextButton>
    </StyledButton>
  );
}
