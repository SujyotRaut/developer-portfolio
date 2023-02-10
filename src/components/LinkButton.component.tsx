import { ReactNode } from 'react';

interface PropTypes {
  title: string;
  href: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

function LinkButton({ title, href, leadingIcon, trailingIcon }: PropTypes) {
  return (
    <a className='flex-1 bg-slate-200 py-3 flex items-center justify-center gap-2' href={href}>
      {leadingIcon}
      <span>{title}</span>
      {trailingIcon}
    </a>
  );
}

export default LinkButton;
