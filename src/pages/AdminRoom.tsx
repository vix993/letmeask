import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';

import logoImg from '../assets/images/logo.svg';
import { useRoom } from '../hooks/useRoom';

type AdminRoomParams = {
  id: string;
};

export const AdminRoom = () => {
  const { user } = useAuth();
  const { id } = useParams<AdminRoomParams>();
  const [newQuestion, setNewQuestion] = useState('');
  const { questions, title } = useRoom(id);

  const handleSendQuestion = async (event: FormEvent) => {
    event.preventDefault();

    if (newQuestion.trim() === '') {
      return;
    }

    if (!user) {
      toast.error('Please login to send a question!');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user?.name,
        avatar: user?.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${id}/questions`).push(question);

    setNewQuestion('');
  };

  return (
    <div className=''>
      <div>
        <Toaster position='top-center' reverseOrder={false}></Toaster>
      </div>
      <header className='p-6 border-b border-white'>
        <div className='flex max-w-5xl my-0 mx-auto justify-between items-center'>
          <img src={logoImg} alt='LetMeAsk' className='max-h-11' />
          <div className='flex gap-2'>
            <RoomCode code={id} />
            <Button isAdminRoom={true} isOutlined={true}>
              Close Room
            </Button>
          </div>
        </div>
      </header>
      <main className='max-w-4xl my-0 mx-auto'>
        <div className='m-8 flex items-center'>
          <h1 className='font-pop text-2xl text-gray-800'>Topic: {title}</h1>
          {questions.length > 0 && (
            <span className='ml-4 bg-pink-500 rounded-full py-2 px-4 text-white font-medium text-sm'>
              {questions.length} questions
            </span>
          )}
        </div>

        <div className='mt-8'>
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};
