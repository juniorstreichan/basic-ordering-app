import React, { useState, useCallback } from 'react';
import { Modal, Text, FlatList } from 'react-native';
import { InputNumber } from '..';
import Button from '../Button';
import ProductPicker from '../ProductPicker';
import { ModalActions, ModalContainer, ModalContent, ModalHeader } from './styles';

export default function ModalOrderForm({ modalOpen = false, onSubmit, onCancel }) {
  const [items, setItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState('1');

  const reset = useCallback(() => {
    setSelectedProduct(null);
    setItems([]);
    setQuantity(1);
  }, []);

  return (
    <Modal animationType="slide" transparent visible={modalOpen}>
      <ModalContainer>
        <ModalContent>
          <ModalHeader>NOVO PEDIDO</ModalHeader>
          <Text>Quantidade:</Text>
          <InputNumber value={String(quantity)} onChangeText={n => setQuantity(n)} />
          <Text>Produto:</Text>
          <ProductPicker
            selectedValue={selectedProduct}
            onValueChange={itemValue => {
              setSelectedProduct(itemValue);
            }}
          />
          <Button
            disabled={selectedProduct === null || !quantity || quantity === '0'}
            text="Adicionar Produto"
            onPress={() => {
              setItems([...items, { quantity, product: selectedProduct }]);
              setSelectedProduct(null);
              setQuantity(1);
            }}
          />
          <Text>Itens do pedido:</Text>
          <FlatList
            data={items}
            keyExtractor={(item, index) => 'items' + Math.random() * index * item.quantity}
            renderItem={({ item }) => (
              <Text>
                {item.quantity} {item.product}
              </Text>
            )}
          />
        </ModalContent>
        <ModalActions>
          <Button
            disabled={items.length === 0}
            onPress={() => {
              onSubmit(items);
              reset();
            }}
          />
          <Button
            text="CANCELAR"
            onPress={() => {
              onCancel();
              reset();
            }}
          />
        </ModalActions>
      </ModalContainer>
    </Modal>
  );
}
