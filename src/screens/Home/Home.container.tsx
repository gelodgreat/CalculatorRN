import React, {useEffect, useState} from 'react';
import {HomePrivateProps, HomeProps} from './Home.props';
import HomeScreen from './Home.screen';
import {convertToRoman} from './Home.transform';
var toArabic = require('roman-numerals').toArabic;
var toRoman = require('roman-numerals').toRoman;
const HomeContainer = (props: HomeProps) => {
  const [isRomanNumeral, setIsRomanNumeral] = useState(false);
  const [numInput, setNumInput] = useState('');
  const calculate = () => {
    try {
      if (isRomanNumeral) {
        const result = numInput
          .replace(/\b[V]\b/g, '5')
          .replace(/[A-Z]{2,}/g, toArabic);
        const arabicComputation = eval(result.replace(/[^-()\d/*+.]/g, ''));
        setNumInput(convertToRoman(arabicComputation));
      } else {
        const result = eval(numInput.replace(/[^-()\d/*+.]/g, ''));
        setNumInput(result.toString());
      }
    } catch (error) {
      setNumInput('');
    }
  };
  useEffect(() => {
    try {
      if (numInput.length > 0) {
        if (isRomanNumeral) {
          const arabicComputation = eval(numInput.replace(/[^-()\d/*+.]/g, ''));
          setNumInput(convertToRoman(arabicComputation));
        } else {
          const result = numInput
            .replace(/\b[V]\b/g, '5')
            .replace(/[A-Z]{2,}/g, toArabic);
          setNumInput(result);
        }
      }
    } catch (error) {
      setNumInput('');
    }
  }, [isRomanNumeral]);

  console.log(numInput);

  const generatedProps: HomePrivateProps = {
    isRomanNumeral,
    setIsRomanNumeral,
    calculate,
    numInput,
    setNumInput,
  };
  return <HomeScreen {...props} {...generatedProps} />;
};

export default HomeContainer;
