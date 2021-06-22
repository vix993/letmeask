import { useContext } from 'react';
import { Link } from 'react-router-dom';

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import { Button } from "../components/Button";

export const NewRoom = () => {
  return (
    <div className="flex items-center h-screen ">
      <aside
        className="flex-7 h-full bg-purple-500 text-white flex flex-col justify-center px-5 py-8"
      >
        <img
          className="max-w-xs"
          src={illustrationImg}
          alt="Illustration simbolizing questions and answers"
        />
        <strong className="font-pop text-semibold text-4xl leading-4 mt-6">
          Create live Q&amp;A rooms
        </strong>
        <p className="text-3xl leading-8 mt-6">Address your audiences doubts</p>
      </aside>
      <main className="flex-8 px-8 flex flex-col items-center justify-center">
        <div className="flex flex-col w-full max-w-xs items-center text-center">
          <img className="self-center" src={logoImg} alt="LetMeAsk" />
          <h2 className="text-2xl my-16 mb-6 font-pop">Create new room</h2>
          <form className="w-full">
            <input
              className="h-12 rounded-lg px-4 bg-white border border-gray-200 w-full focus:border-purple-300"
              type="text"
              placeholder="Type the room code"
            />
            <Button type="submit">
              Create room
            </Button>
          </form>
          <p className="text-md text-sm text-gray-400 mt-8">
            Want to join an existing room?
            <Link className="text-pink-400" to="/">click here</Link>
          </p>
        </div>
      </main>
    </div>
  );
};
