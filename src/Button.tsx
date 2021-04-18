import React, { HTMLProps } from 'react';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  label: string;
}

export function Button({ label, type = 'button', ...otherProps }: ButtonProps) {
  return <button {...otherProps}>{label}</button>;
}
