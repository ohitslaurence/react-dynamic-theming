import React from 'react';

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  onClick = () => {},
}: ButtonProps) => {
  const baseClasses: string =
    'border-2 outline-none focus:outline-none normal-case tracking-wide font-semibold rounded shadow-xl text-xs px-4 py-2';

  const colourClasses: string =
    'border-primary active:bg-primary-background text-primary bg-sec-background';

  /**
   * Render the button
   */
  return (
    <button className={`${baseClasses} ${colourClasses}`} type="button" onClick={() => onClick()}>
      {children}
    </button>
  );
};
