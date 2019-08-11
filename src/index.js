import React from 'react';

import Routes from './routes';

import './config/StatusBar';
import { Container } from './components';

export default function App() {
  return (
    <Container>
      <Routes />
    </Container>
  );
}
