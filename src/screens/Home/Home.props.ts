import {Dispatch, SetStateAction} from 'react';

export interface HomePublicProps {}
export interface HomePrivateProps {
//   searchTerm: string;
//   setSearchTerm: Dispatch<SetStateAction<string>>;
//   loading: boolean;
}
export interface HomeProps extends HomePublicProps, HomePrivateProps {}
