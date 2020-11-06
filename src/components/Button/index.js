import React from 'react';
import {  ContainerButton  } from './Button';

function Button({ onClick, text }) {
  return (
    <ContainerButton onClick={onClick}>{text}</ContainerButton>
  );
}

export default Button;