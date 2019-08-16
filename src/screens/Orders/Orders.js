import React, { useState } from 'react';
import { Modal, Text, View } from 'react-native';
import { InputNumber } from '../../components';
import Button from '../../components/Button';
import Fab from '../../components/Fab';
import { Header, HeaderContent, HeaderText } from '../../components/Header';
import OrderItem from '../../components/OrderItem';
import ProductPicker from '../../components/ProductPicker';
import {
  Content,
  ModalActions,
  ModalContainer,
  ModalContent,
  ModalHeader,
  OrdersContainer,
} from './styles';

export default function Orders({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
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
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </Content>
      <Fab onPress={() => setModalOpen(true)} />
      <Modal animationType="fade" transparent visible={modalOpen}>
        <ModalContainer>
          <ModalContent>
            <ModalHeader>NOVO PEDIDO</ModalHeader>
            <Text>Quantidade:</Text>
            <InputNumber />
            <Text>Produto:</Text>
            <ProductPicker selectedValue={null} />
          </ModalContent>
          <ModalActions>
            <Button />
            <Button text="CANCELAR" onPress={() => setModalOpen(false)} />
          </ModalActions>
        </ModalContainer>
      </Modal>
    </OrdersContainer>
  );
}
