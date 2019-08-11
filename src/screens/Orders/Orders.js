import React from 'react';
import { Text } from 'react-native';
import Button from '../../components/Button';
import styled from 'styled-components/native';
import OrderItem from '../../components/OrderItem';

const OrdersContainer = styled.View`
  justify-content: space-around;
  flex: 1;
  width: 100%;
`;

const Content = styled.View`
  flex: 1;
  margin: 5px 20px;
`;

export default function Orders({ navigation }) {
  return (
    <OrdersContainer>
      <Button onPress={() => navigation.navigate('Home')} text="VOLTAR" />
      <Content>
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </Content>
      <Text>FAB</Text>
    </OrdersContainer>
  );
}
