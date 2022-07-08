import {Button, TextInput} from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;

export const NumButton = styled(Button)`
  border-radius: 8px;
  text-align: center;
`;

NumButton.defaultProps = {
  labelStyle: {
    marginTop: 28,
  },
  color: 'white',
};

export const Row = styled.View`
  flex-direction: row;
`;

export const RowNum = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-content: space-between;
`;

export const InputCalculate = styled(TextInput)``;
