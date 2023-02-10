import { ReactNode } from 'react';

interface PropTypes {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'textarea';
  leadingIcon?: ReactNode;
}

function InputField({ label, name, type = 'text', leadingIcon }: PropTypes) {
  if (type === 'textarea') return <textarea name={name} placeholder={label} rows={5} className='p-2'></textarea>;
  return <input name={name} type={type} placeholder={label} className='px-4 py-2' />;
}

export default InputField;
