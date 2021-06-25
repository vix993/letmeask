import { ReactNode } from 'react';
import cx from 'classnames';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export const Question = ({
  content,
  author,
  isAnswered = false,
  isHighlighted = false,
  children,
}: QuestionProps) => {
  // const highlighted = isHighlighted ? '' : '';
  // const answered = isAnswered ? '' : '';
  return (
    <section
    className={cx('bg-gray-50 rounded-lg shadow-md p-6 my-3', {'bg-purple-100 border border-purple-500': isHighlighted && !isAnswered}, {'bg-gray-300': isAnswered})}
      // className={` ${answered} ${highlighted}`}
    >
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
        <div className='flex gap-4'>{children}</div>
      </footer>
    </section>
  );
};
