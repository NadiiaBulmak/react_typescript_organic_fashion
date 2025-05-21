import React from 'react';
import './Button.scss';

type ButtonFormType =
  | 'rounded'
  | 'with-light-radius-filled'
  | 'with-light-radius-bordered';
type ButtonFillType = 'filled' | 'bordered';

type ButtonPropsType = {
  type: ButtonFormType;
  fill: ButtonFillType;
  children: string;
};

export const Button: React.FC<ButtonPropsType> = ({ type, fill, children }) => {
  return (
    <a href="#shop" className={`button button--${type} button--${fill}`}>
      {children}
    </a>
  );
};
