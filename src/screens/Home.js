import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, TitleBox, Title, OptionsBox, Button, TextButton } from '../components';

export default function Home() {
  return (
    <Container>
      <TitleBox>
        <Icon name="ticket" size={180} color="#FFF" />
        <Title>MEUS PEDIDOS</Title>
      </TitleBox>
      <OptionsBox>
        <Button>
          <TextButton>VER PEDIDOS</TextButton>
        </Button>
      </OptionsBox>
    </Container>
  );
}
