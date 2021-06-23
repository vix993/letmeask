import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";

import logoImg from "../assets/images/logo.svg";

type FireBaseQuestions = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}>

type RoomParams = {
  id: string;
};

export const Room = () => {
  const { user } = useAuth();
  const { id } = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState('');

  useEffect(() => {
    const roomRef = database.ref(`rooms/${id}`);

    roomRef.once('value', room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FireBaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered
        }
      });
      console.log(parsedQuestions);
    })
  }, [id]);

  const handleSendQuestion = async (event: FormEvent) => {
    event.preventDefault();

    if (newQuestion.trim() === "") {
      return;
    }

    if (!user) {
      toast.error("Please login to send a question!");
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

    setNewQuestion("");
  };

  return (
    <div className="">
      <div>
        <Toaster position="top-center" reverseOrder={false}></Toaster>
      </div>
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

        <form onSubmit={handleSendQuestion}>
          <textarea
            className="w-full p-4 rounded-lg bg-gray-100 shadow-md resize-y min-h-md focus:border-purple-400"
            placeholder="What would you like to ask"
            onChange={(event) => setNewQuestion(event.target.value)}
            value={newQuestion}
          />
          <div className="flex justify-between items-center mt-4">
            {!user
              ? (
                <span className="text-sm text-gray-400 font-medium">
                  to send a question,{" "}
                  <button
                    className="bg-transparent border-0 text-purple-500 underline text-sm"
                  >
                    login to your account
                  </button>
                </span>
              )
              : (
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-3xl"
                    src={user.avatar}
                    alt={user.name}
                  />
                  <span className="ml-2 text-gray-700 font-medium text-sm">
                    {user.name}
                  </span>
                </div>
              )}

            <div className="w-64 ml-auto">
              <Button type="submit" disabled={!user}>
                Submit your question
              </Button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};
