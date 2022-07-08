import React, {useEffect, useState} from 'react';
import {HomePrivateProps, HomeProps} from './Home.props';
import HomeScreen from './Home.screen';

const HomeContainer = (props: HomeProps) => {
  const {} = props;

  const generatedProps: HomePrivateProps = {};
  return <HomeScreen {...props} {...generatedProps} />;
};

export default HomeContainer;
