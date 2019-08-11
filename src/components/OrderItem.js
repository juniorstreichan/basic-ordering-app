import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const CardItem = styled.View`
  background: #fff;
  min-height: 100px;
  border-radius: 10px;
  padding: 3px 10px;
  padding-left: 30px;
  margin-bottom: 10px;
  elevation: 10;
`;

const CardHeader = styled.Text`
  font-size: 12px;
  text-align: right;
  color: #333;
  width: 100%;
`;

const CardText = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

export default function OrderItem() {
  return (
    <CardItem>
      <CardHeader>17/08/2019 12:33</CardHeader>
      <CardText>2 Feijoada</CardText>
      <CardText>1 Refrigerante</CardText>
    </CardItem>
  );
}
