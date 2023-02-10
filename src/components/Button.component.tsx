import { ReactNode } from 'react';

interface PropTypes {
  title: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

function Button({ title, onClick, leadingIcon, trailingIcon }: PropTypes) {
  return (
    <button className='bg-orange-500 flex-1 py-2 px-4 gap-2 flex items-center justify-center' onClick={onClick}>
      {leadingIcon}
      <span>{title}</span>
      {trailingIcon}
    </button>
  );
}

export default Button;
