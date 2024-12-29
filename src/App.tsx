import React, { useState } from "react";

const nicknames = [
  {
    name: "Mimmi 🐱",
    description: "A delicate kitten with sparkly eyes. ✨",
    message: "You are the sparkle in my life, Mimmi 💫.",
    emoji: "😊",
  },
  {
    name: "Mano 🐰",
    description: "A cheerful rabbit hopping around. 🌟",
    message: "You make my heart hop with joy, Mano 🌈.",
    emoji: "😃",
  },
  {
    name: "Mayu 🦄",
    description: "A magical unicorn with glitter trails. 🌟",
    message: "You are the magic that makes my life special, Mayu 🔮.",
    emoji: "😍",
  },
  {
    name: "Panda 🐼",
    description: "A cuddly panda hugging a heart. ❤️",
    message: "You are the cuddle that I want 🤗.",
    emoji: "😘",
  },
  {
    name: "Brucely 🐲",
    description: "A tiny kung-fu panda performing funny moves. 🤣",
    message: "You are the fun that I need 🎉.",
    emoji: "😆",
  },
  {
    name: "Baby Elephant 🐘",
    description: "A lovable baby elephant splashing water hearts. 💦",
    message: "You are the shadow to my light❤️.",
    emoji: "😊",
  },
  {
    name: "My Queen",
    description: "A Crown. 👑",
    message: "You are my princess till, we have a princess together 😉.",
    emoji: "😊",
  },
];

const ApologyApp = () => {
  const [nickname, setNickname] = useState(nicknames[0]);
  const [forgiven, setForgiven] = useState(false);
  const [answer, setAnswer] = useState(null);

  const handleNicknameChange = (nickname) => {
    setNickname(nickname);
  };

  const handleAnswer = (answer) => {
    setAnswer(answer);
    setForgiven(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-pink-200 to-purple-300">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-2xl font-bold text-pink-600">
            Apology App for Marium Saif 🤗
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Because saying sorry should always be cute! 💕
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Choose a nickname:
          </label>
          <select
            value={nickname.name}
            onChange={(e) =>
              handleNicknameChange(
                nicknames.find((n) => n.name === e.target.value)
              )
            }
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            {nicknames.map((nickname) => (
              <option key={nickname.name} value={nickname.name}>
                {nickname.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col items-center mb-6">
          <div className="bg-gray-100 border-2 border-dashed rounded-full w-20 h-20 flex items-center justify-center mb-3">
            <span className="text-2xl">{nickname.emoji}</span>
          </div>
          <p className="text-lg font-bold text-center text-pink-700">
            {nickname.message}
          </p>
        </div>

        <div className="flex justify-around mb-4">
          <button
            onClick={() => handleAnswer(true)}
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg transition transform hover:scale-105"
          >
            Forgive Me 🙂
          </button>
          <button
            onClick={() => handleAnswer(false)}
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg transition transform hover:scale-105"
          >
            Never 😭
          </button>
        </div>

        {forgiven && (
          <div className="mt-4 text-center">
            {answer ? (
              <div>
                <p className="text-lg font-bold text-green-600">
                  Thank you for forgiving me! 💖
                </p>
                <div className="bg-gray-100 border-2 border-dashed rounded-full w-16 h-16 mx-auto mt-2"></div>
                <div className="flex justify-center mt-4">
                  <span className="text-4xl animate-bounce">💖✨💕✨💖</span>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-lg font-bold text-red-600">
                  Oh no, I’ll try harder next time... 😔
                </p>
                <div className="bg-gray-100 border-2 border-dashed rounded-full w-16 h-16 mx-auto mt-2"></div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApologyApp;
