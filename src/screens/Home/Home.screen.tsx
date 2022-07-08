import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Switch, Text} from 'react-native-paper';
import {HomeProps} from './Home.props';
import {Container, InputCalculate, NumButton, Row, RowNum} from './Home.style';

const HomeScreen = (props: HomeProps) => {
  const {isRomanNumeral, setIsRomanNumeral} = props;

  return (
    <Container>
      <InputCalculate mode="outlined" label="numbers" />
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
      <RowNum style={{marginTop: 16}}>
        <NumButton mode="contained">7</NumButton>
        <NumButton mode="contained">8</NumButton>
        <NumButton mode="contained">9</NumButton>
        <NumButton mode="contained">/</NumButton>
      </RowNum>
      <RowNum style={{marginTop: 16}}>
        <NumButton mode="contained">4</NumButton>
        <NumButton mode="contained">5</NumButton>
        <NumButton mode="contained">6</NumButton>
        <NumButton mode="contained">x</NumButton>
      </RowNum>
      <RowNum style={{marginTop: 16}}>
        <NumButton mode="contained">1</NumButton>
        <NumButton mode="contained">2</NumButton>
        <NumButton mode="contained">3</NumButton>
        <NumButton mode="contained">-</NumButton>
      </RowNum>
      <RowNum style={{marginTop: 16}}>
        <NumButton mode="contained">0</NumButton>
        <NumButton mode="contained">.</NumButton>
        <NumButton mode="contained">+</NumButton>
        <NumButton mode="contained">=</NumButton>
      </RowNum>
    </Container>
  );
};

export default HomeScreen;
