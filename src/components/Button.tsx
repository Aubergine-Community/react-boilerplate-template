import React from 'react';

export const Button: React.FC<React.ComponentProps<'button'>> = ({
  ...props
}) => {
  return <button {...props}></button>;
};
