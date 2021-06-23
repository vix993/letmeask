import { useHistory } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';

export const Home = () => {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  const handleCreateRoom = async () => {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  };

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exist.');
      return;
    }

    history.push(`rooms/${roomCode}`);
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
          <button
            onClick={handleCreateRoom}
            className='w-full hover:bg-red-400 transition mt-24 h-12 rounded-lg font-medium bg-red-500 text-white flex flex-row justify-center items-center p-1'
          >
            <img className='mr-2' src={googleIconImg} alt='Google logo' />
            Create your room with Google
          </button>
          <section className='flex flex-row justify-center w-full my-8 items-center'>
            <span className='w-3/12 h-1 bg-gray-300 rounded-3xl' />
            <div className='text-md text-gray-400 flex mx-4'>
              or join a room
            </div>
            <span className='w-3/12 h-1 bg-gray-300 rounded-3xl' />
          </section>
          <form className='w-full' onSubmit={handleJoinRoom}>
            <input
              className='h-12 rounded-lg px-4 bg-white border border-gray-200 w-full focus:border-purple-300'
              type='text'
              placeholder='Type the room code'
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />

            <div className='mt-12'>
              <Button type='submit'>Enter room</Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};
