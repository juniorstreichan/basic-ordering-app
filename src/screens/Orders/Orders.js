import React from 'react';
import { View, Text } from 'react-native';
import Fab from '../../components/Fab';
import { Header, HeaderContent, HeaderText } from '../../components/Header';
import OrderItem from '../../components/OrderItem';
import { Content, OrdersContainer, Actions } from './styles';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

export default function Orders({ navigation }) {
  return (
    <OrdersContainer>
      <Header>
        <View>
          {/* <Return onPress={() => navigation.navigate('Home')}>
            <Icon name="ios-arrow-back" color={AppColors.red} size={60} />
          </Return> */}
        </View>
        <HeaderContent>
          <HeaderText>10 Pedidos entregues</HeaderText>
          <HeaderText>17 Pedidos em aberto</HeaderText>
        </HeaderContent>
      </Header>
      <Content>
        <SwipeListView
          keyExtractor={(item, index) => Math.random() * index + ''}
          data={new Array(3).fill({})}
          renderItem={(data, rowMap) => (
            <SwipeRow leftOpenValue={0} rightOpenValue={-200}>
              <Actions>
                <Text>Left</Text>
                <Text>Right</Text>
              </Actions>
              <OrderItem />
            </SwipeRow>
          )}
        />
      </Content>
      <Fab />
    </OrdersContainer>
  );
}
