import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  isAdminRoom?: boolean;
};

export const Button = ({
  isOutlined = false,
  isAdminRoom = false,
  ...props
}: ButtonProps) => {
  const width = isAdminRoom ? 'w-1/3' : 'w-full';
  const height = isAdminRoom ? 'h-10' : 'h-12';
  const outlined = isOutlined
    ? 'bg-white border border-purple-500 text-purple-500 hover:bg-purple-100'
    : 'bg-purple-500 text-white hover:bg-purple-400';
  return (
    <button
      className={`${height} ${width} disabled:opacity-60 disabled:cursor-not-allowed transition rounded-lg font-medium flex flex-row justify-center items-center p-1 ${outlined}`}
      {...props}
    />
  );
};
