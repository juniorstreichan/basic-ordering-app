import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import Fab from '../../components/Fab';
import { Header, HeaderContent, HeaderText } from '../../components/Header';
import { ModalOrderForm } from '../../components/ModalOrderForm';
import OrderItem from '../../components/OrderItem';
import OrderStorage from '../../service/storage/OrderStorage';
import { Content, OrdersContainer } from './styles';

export default function Orders({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [orders, setOrders] = useState([]);

  const load = useCallback(async () => {
    const storageOrders = await OrderStorage.getOpenOrders();
    setOrders(storageOrders);
  }, []);

  const addOrder = useCallback(
    async order => {
      await OrderStorage.addOrder(order);
      await load();
    },
    [load],
  );

  const removeOrder = useCallback(
    async id => {
      await OrderStorage.removeOrder(id);
      await load();
    },
    [load],
  );

  useEffect(() => {
    load();
  }, [load]);

  return (
    <OrdersContainer>
      <Header>
        <HeaderContent>
          <HeaderText>FEIJOADA</HeaderText>
          <HeaderText>IBPAZ SANTA ISABEL</HeaderText>
        </HeaderContent>
      </Header>
      <Content>
        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <OrderItem onCheck={() => removeOrder(item.id)} data={item} />}
        />
      </Content>
      <Fab onPress={() => setModalOpen(true)} />
      <ModalOrderForm
        modalOpen={modalOpen}
        onSubmit={items => {
          setModalOpen(false);
          const order = { items };
          addOrder(order);
        }}
        onCancel={() => setModalOpen(false)}
      />
    </OrdersContainer>
  );
}
