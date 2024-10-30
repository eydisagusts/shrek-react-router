import Image from "next/image";

export default function Donkey() {
  return (
    <div>
      <div>
        <h1 className="mt-6 text-4xl font-bold italic">
          Fun Facts About Donkey
        </h1>
      </div>
      <div className="text-black text-lg mt-20">
        <p>Donkey loves waffles.</p>
        <p>He's voiced by Eddie Murphy.</p>
        <p>He married a dragon and had flying donkey-dragon babies</p>
        <p>Donkey's catchphrase is: I'm making waffles!</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <Image src="/images/donkey.png" alt="Donkey" width={150} height={150} />
      </div>
    </div>
  );
}
