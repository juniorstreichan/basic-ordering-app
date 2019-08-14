import React from 'react';
import { CardHeader, CardItem, CardText } from './styles';

export default function OrderItem({ first }) {
  return (
  <CardItem first={first}>
      <CardHeader>17/08/2019 12:33</CardHeader>
      <CardText>2 Feijoada</CardText>
      <CardText>1 Refrigerante</CardText>
    </CardItem>
  );
}
