import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import ProductStorage from '../service/storage/ProductStorage';

const Picker = styled.Picker`
  height: 50;
  max-width: 300;
  width: 100%;
  font-weight: bold;
  background: #ddd;
`;

export default function ProductPicker(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const storageProducts = await ProductStorage.getProducts();
      setProducts(storageProducts);
    })();
  }, []);
  return (
    <Picker {...props}>
      <Picker.Item label="Selecione um Produto" value={null} />
      {products.map(product => (
        <Picker.Item key={product} label={product} value={product} />
      ))}
    </Picker>
  );
}
