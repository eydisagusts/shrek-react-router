import Image from 'next/image';

export default function Gallery() {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-14 text-5xl text-center font-semibold">
        <h1>Shrek & Friends Gallery</h1>
      </div>
      <div className="mt-36">
        <Image src="/images/gallery.png" alt="Gallery" width={450} height={450} />
      </div>
    </div>
  );
}
