import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-green-800 p-8 top-0">
      <header className="gap-64 flex flex-row items-center justify-center text-center text-xl">
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/shrekquotes">Shrek Quotes</Link>
        </div>
        <div>
          <Link href="/donkey">Donkey</Link>
        </div>
        <div>
          <Link href="/gallery">Gallery</Link>
        </div>
        <div>
          <Link href="/meme">Meme</Link>
        </div>
      </header>
    </div>
  );
}
