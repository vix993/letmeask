import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

export const NewRoom = () => {
  const { user } = useAuth();
  const history = useHistory();

  const [newRoom, setNewRoom] = useState('');

  const handleCreateRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/admin/rooms/${firebaseRoom.key}`);
  };

  return (
    <div className='flex items-center h-screen '>
      <aside className='flex-7 h-full bg-purple-500 text-white flex flex-col items-center justify-center px-5 py-8'>
        <img
          className='max-w-xs'
          src={illustrationImg}
          alt='Illustration simbolizing questions and answers'
        />
        <strong className='font-pop text-semibold text-4xl leading-4 mt-6'>
          Create live Q&amp;A rooms
        </strong>
        <p className='text-3xl leading-8 mt-6'>Address your audiences doubts</p>
      </aside>
      <main className='flex-8 px-8 flex flex-col items-center justify-center'>
        <div className='flex flex-col w-full max-w-xs items-center text-center'>
          <img className='self-center' src={logoImg} alt='LetMeAsk' />
          <h2 className='text-2xl my-16 mb-6 font-pop'>Create new room</h2>
          <form className='w-full' onSubmit={handleCreateRoom}>
            <input
              className='h-12 rounded-lg px-4 bg-white border border-gray-200 w-full focus:border-purple-300'
              type='text'
              placeholder='Type the room code'
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <div className='mt-12'>
              <Button type='submit'>Create room</Button>
            </div>
          </form>
          <p className='text-md text-sm text-gray-400 mt-8'>
            Want to join an existing room?
            <Link className='text-pink-400 hover:underline' to='/'>
              click here
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};
