import React from 'react';
import {Switch, Text} from 'react-native-paper';
import {HomeProps} from './Home.props';
import {Container, InputCalculate, NumButton, Row, RowNum} from './Home.style';
import {convertToRoman} from './Home.transform';

const HomeScreen = (props: HomeProps) => {
  const {isRomanNumeral, setIsRomanNumeral, calculate, numInput, setNumInput} =
    props;

  const sevenRow = [7, 8, 9];
  const fourRow = [4, 5, 6];
  const oneRow = [1, 2, 3];

  return (
    <Container>
      <InputCalculate mode="outlined" label="numbers" value={numInput} />
      <Row
        style={{
          marginTop: 16,
          alignContent: 'flex-end',
          justifyContent: 'flex-end',
        }}>
        <Text style={{marginTop: 4}}>
          {isRomanNumeral ? 'Roman' : 'Arabic'} Numeral
        </Text>
        <Switch
          value={isRomanNumeral}
          onChange={() => {
            setIsRomanNumeral(!isRomanNumeral);
          }}
        />
      </Row>
      <NumButton
        mode="contained"
        onPress={() => {
          setNumInput('');
        }}>
        AC
      </NumButton>
      <RowNum style={{marginTop: 16}}>
        {sevenRow.map(num => {
          return (
            <NumButton
              mode="contained"
              key={num}
              onPress={() => {
                const numeralConversion = numInput + `${convertToRoman(num)}`;
                setNumInput(
                  isRomanNumeral ? numeralConversion : numInput + num,
                );
              }}>
              {isRomanNumeral ? convertToRoman(num) : num}
            </NumButton>
          );
        })}
        <NumButton
          mode="contained"
          onPress={() => {
            setNumInput(numInput + '/');
          }}>
          /
        </NumButton>
      </RowNum>
      <RowNum style={{marginTop: 16}}>
        {fourRow.map(num => {
          return (
            <NumButton
              mode="contained"
              key={num}
              onPress={() => {
                const numeralConversion = numInput + `${convertToRoman(num)}`;
                setNumInput(
                  isRomanNumeral ? numeralConversion : numInput + num,
                );
              }}>
              {isRomanNumeral ? convertToRoman(num) : num}
            </NumButton>
          );
        })}
        <NumButton
          mode="contained"
          onPress={() => {
            setNumInput(numInput + '*');
          }}>
          *
        </NumButton>
      </RowNum>
      <RowNum style={{marginTop: 16}}>
        {oneRow.map(num => {
          return (
            <NumButton
              mode="contained"
              key={num}
              onPress={() => {
                const numeralConversion = numInput + `${convertToRoman(num)}`;
                setNumInput(
                  isRomanNumeral ? numeralConversion : numInput + num,
                );
              }}>
              {isRomanNumeral ? convertToRoman(num) : num}
            </NumButton>
          );
        })}
        <NumButton mode="contained">-</NumButton>
      </RowNum>
      <RowNum style={{marginTop: 16}}>
        <NumButton
          mode="contained"
          onPress={() => {
            setNumInput(numInput + '0');
          }}>
          0
        </NumButton>
        <NumButton
          mode="contained"
          onPress={() => {
            setNumInput(numInput + '.');
          }}>
          .
        </NumButton>
        <NumButton
          mode="contained"
          onPress={() => {
            setNumInput(numInput + '+');
          }}>
          +
        </NumButton>
        <NumButton
          mode="contained"
          onPress={() => {
            calculate();
          }}>
          =
        </NumButton>
      </RowNum>
    </Container>
  );
};

export default HomeScreen;
