import React, {useEffect, useState} from 'react';
import {HomePrivateProps, HomeProps} from './Home.props';
import HomeScreen from './Home.screen';

const HomeContainer = (props: HomeProps) => {
  const {} = props;
  const [isRomanNumeral, setIsRomanNumeral] = useState(false);
  const generatedProps: HomePrivateProps = {
    isRomanNumeral,
    setIsRomanNumeral
  }
  return <HomeScreen {...props} {...generatedProps} />;
};

export default HomeContainer;
