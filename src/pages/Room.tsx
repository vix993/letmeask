import { useParams } from 'react-router-dom'

import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";
type RoomParams = {
  id: string;
}


export const Room = () => {
  const { id } = useParams<RoomParams>();
  return (
    <div className="">
      <header className="p-6 border-b border-white">
        <div
          className="flex max-w-5xl my-0 mx-auto justify-between items-center"
        >
          <img src={logoImg} alt="LetMeAsk" className="max-h-11" />
          <RoomCode code={id} />
        </div>
      </header>
      <main className="max-w-4xl my-0 mx-auto">
        <div className="m-8 flex items-center">
          <h1 className="font-pop text-2xl text-gray-800">
            Room of some stuff
          </h1>
          <span
            className="ml-4 bg-pink-500 rounded-full py-2 px-4 text-white font-medium text-sm"
          >
            4 questions
          </span>
        </div>

        <form>
          <textarea
            className="w-full p-4 rounded-lg bg-gray-100 shadow-md resize-y min-h-md focus:border-purple-400"
            placeholder="What would you like to ask"
          />
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-400 font-medium">
              to send a question, <button className="bg-transparent border-0 text-purple-500 underline text-sm">login to your account</button>
            </span>
            <div className="w-64">

            <Button type="submit">Submit your question</Button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};
