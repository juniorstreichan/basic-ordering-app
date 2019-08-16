import React from 'react';
import { YellowBox } from 'react-native';

import Routes from './routes';

import './config/StatusBar';
import { Container } from './components';

YellowBox.ignoreWarnings(['UNSAFE_']);

export default function App() {
  return (
    <Container>
      <Routes />
    </Container>
  );
}
