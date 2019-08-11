import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import OrderItem from '../../components/OrderItem';

const OrdersContainer = styled.View`
  justify-content: space-around;
  flex: 1;
  width: 100%;
`;

const Content = styled.View`
  flex: 1;
  margin: 5px 15px;
  /* background: red; */
`;

const Header = styled.View`
  flex-direction: row;
  width: 100%;
  height: 100px;
  border-bottom-width: 4px;
  border-bottom-color: tomato;
  color: tomato;
  align-items: center;
  padding-left: 30px;
  background: #fff;
  margin-bottom: 5px;
`;

const Return = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

const HeaderContent = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export default function Orders({ navigation }) {
  return (
    <OrdersContainer>
      <Header>
        {/* <Button  text="VOLTAR" /> */}
        <View>
          <Return onPress={() => navigation.navigate('Home')}>
            <Icon name="ios-arrow-back" color="tomato" size={60} />
          </Return>
        </View>
        <HeaderContent>
          <Text>10 Pedidos entregues</Text>
          <Text>17 Pedidos em aberto</Text>
        </HeaderContent>
      </Header>
      <Content>
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </Content>
      <Text>FAB</Text>
    </OrdersContainer>
  );
}
