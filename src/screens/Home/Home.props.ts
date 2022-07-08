import {Dispatch, SetStateAction} from 'react';

export interface HomePublicProps {}
export interface HomePrivateProps {
  isRomanNumeral: boolean;
  setIsRomanNumeral: Dispatch<SetStateAction<boolean>>;
  calculate: () => void;
  numInput: string;
  setNumInput: Dispatch<SetStateAction<string>>;
}
export interface HomeProps extends HomePublicProps, HomePrivateProps {}
