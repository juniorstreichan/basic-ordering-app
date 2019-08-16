import React, { useCallback } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CardHeader, CardItem, CardText, ActionsContainer, ActionButton } from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function OrderItem({ first, onRemove, onCheck }) {
  const renderOptions = useCallback(
    (progress, dragX) => {
      return (
        <ActionsContainer>
          <ActionButton success onPress={onCheck}>
            <Icon name="check" color="#FFF" size={40} />
          </ActionButton>
          <ActionButton danger onPress={onRemove}>
            <Icon name="trash" color="#FFF" size={30} />
          </ActionButton>
        </ActionsContainer>
      );
    },
    [onCheck, onRemove],
  );

  return (
    <Swipeable renderLeftActions={renderOptions}>
      <CardItem first={first}>
        <CardHeader>17/08/2019 12:33</CardHeader>
        <CardText>2 Feijoada</CardText>
        <CardText>1 Refrigerante</CardText>
      </CardItem>
    </Swipeable>
  );
}
