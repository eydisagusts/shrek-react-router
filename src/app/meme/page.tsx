'use client';
import type React from 'react';
import { useState } from 'react';
import Image from 'next/image';

export default function Meme() {
  const [text, setText] = useState('Get Out of My Swamp!');
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [textSize, setTextSize] = useState(24);

  const handleTextSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextSize(Number.parseInt(event.target.value));
  }

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextColor(event.target.value);
  }

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center text-black text-3xl mt-10 font-bold">
        <h1>Shrek Meme Generator</h1>
      </div>
      <div>
        <div className="bg-gray-300 rounded-md p-4 mt-6">
          <div>
            <input
              type="text"
              placeholder="input text"
              className="rounded-md text-center p-2 px-16 text-black"
              value={text}
              onChange={handleTextChange}
            />
          </div>
          <div className="flex items-center mt-4">
            <p className="mr-2 text-black">Text Color: </p>
            <input 
            type="color" 
            className="text-center w-14 h-8 p-0 border-none"
            value={textColor}
            onChange={handleColorChange}
            />
            <p className="mr-2 text-black ml-4">Text Size:</p>
            <input 
            type="number" 
            className="text-center text-black w-14"
            value={textSize}
            onChange={handleTextSizeChange} />
          </div>
          <div className="relative flex flex-col items-center justify-center">
            <Image src="/images/shrek-bgremoved.png" alt="Shrek bgremoved" className="mt-4" width={200} height={200} />
            <p className="absolute mt-52 font-bold text-center" style={{color: textColor, fontSize: `${textSize}px`}}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}