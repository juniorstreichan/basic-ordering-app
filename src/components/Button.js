import React from 'react';
import styled from 'styled-components/native';

const StyledButton = styled.TouchableOpacity`
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

const TextButton = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export default function Button({ text = 'OK', ...props }) {
  return (
    <StyledButton {...props}>
      <TextButton>{text}</TextButton>
    </StyledButton>
  );
}
