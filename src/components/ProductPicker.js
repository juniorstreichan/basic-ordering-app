import React from 'react';
import styled from 'styled-components/native';

const Picker = styled.Picker`
  height: 50;
  max-width: 300;
  width: 100%;
  font-weight: bold;
  background: #ddd;
`;

export default function ProductPicker(props) {
  return (
    <Picker {...props}>
      <Picker.Item label="Selecione um Produto" value={null} />
      <Picker.Item label="Feijoada" value="Feijoada" />
      <Picker.Item label="Refrigerante" value="Refrigerante" />
    </Picker>
  );
}
