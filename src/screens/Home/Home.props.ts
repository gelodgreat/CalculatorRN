import {Dispatch, SetStateAction} from 'react';

export interface HomePublicProps {}
export interface HomePrivateProps {
  isRomanNumeral: boolean;
  setIsRomanNumeral: Dispatch<SetStateAction<boolean>>;
}
export interface HomeProps extends HomePublicProps, HomePrivateProps {}
