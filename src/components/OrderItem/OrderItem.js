import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CardHeader, CardItem, CardText, ActionsContainer, ActionButton } from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function OrderItem({ data, first, onRemove, onCheck }) {
  const renderOptions = useCallback(
    (progress, dragX) => {
      return (
        <ActionsContainer>
          <ActionButton success onPress={onCheck}>
            <Icon name="check" color="#FFF" size={40} />
          </ActionButton>
        </ActionsContainer>
      );
    },
    [onCheck],
  );
  const { date, items } = data;
  return (
    <Swipeable renderLeftActions={renderOptions}>
      <CardItem first={first}>
        <CardHeader>{date}</CardHeader>
        {items.map((item, index) => (
          <CardText key={data.id + '-item-' + index}>
            {`${item.quantity}  ${item.product}`}
          </CardText>
        ))}
      </CardItem>
    </Swipeable>
  );
}
