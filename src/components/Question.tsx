import { ReactNode } from 'react';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
};

export const Question = ({ content, author, children }: QuestionProps) => {
  return (
    <section className='bg-gray-50 rounded-lg shadow-md p-6 my-3'>
      <p className='text-gray-600'>{content}</p>
      <footer className='flex justify-between items-center mt-6'>
        <div className='flex items-center'>
          <img
            className='w-8 h-8 rounded-3xl'
            src={author.avatar}
            alt={author.name}
          />
          <span className='ml-2 text-gray-600 text-sm'>{author.name}</span>
        </div>
        <div className=''>{children}</div>
      </footer>
    </section>
  );
};
