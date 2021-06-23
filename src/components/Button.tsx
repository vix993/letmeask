import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  return (
    <button className="disabled:opacity-60 disabled:cursor-not-allowed w-full hover:bg-purple-400 transition h-12 rounded-lg font-medium bg-purple-500 text-white flex flex-row justify-center items-center p-1" {...props} />
  );
};
