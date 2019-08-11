import React, { Fragment } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { OptionsBox, Title, TitleBox } from '../components';
import Button from '../components/Button';

export default function Home({ navigation }) {
  return (
    <Fragment>
      <TitleBox>
        <Icon name="ticket" size={180} color="#FFF" />
        <Title>MEUS PEDIDOS</Title>
      </TitleBox>
      <OptionsBox>
        <Button onPress={() => navigation.navigate('Orders')} text="VER PEDIDOS" />
      </OptionsBox>
    </Fragment>
  );
}
