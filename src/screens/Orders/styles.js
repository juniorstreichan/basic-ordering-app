import styled from 'styled-components/native';
import { AppColors } from '../../config/theme';

export const OrdersContainer = styled.View`
  justify-content: space-around;
  flex: 1;
  width: 100%;
`;

export const Content = styled.View`
  flex: 1;
  padding: 5px 0px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  background: rgba(3, 3, 3, 0.8);
  padding: 20px;
`;

export const ModalContent = styled.View`
  flex: 1;
  align-items: center;
  border-radius: 5px;
  background: ${AppColors.light};
`;

export const ModalActions = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
  height: 80px;
  justify-content: space-around;
  align-items: center;
`;

export const ModalHeader = styled.Text`
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  background: ${AppColors.red};
  color: ${AppColors.light};
  text-align: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-bottom: 10px;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;
