import Layout from "./layout";
import Image from "next/image";

export default function HomePage() {
  return (
    <Layout>
      <div className="text-center">
        <div>
          <h1 className="text-4xl font-semibold italic mt-10">
            Welcome to Shrek&apos;s Swamp!
          </h1>
        </div>
        <div>
          <p className="text-black text-lg mt-32">
            Shrek is an ogre who enjoyes his solitude, but adventure always
            finds him. Join Shrek and his friends on their funny, exciting
            adventures!
          </p>
        </div>
        <div className="flex flex-col items-center mt-20">
            <Image src="/images/shrek.png" alt="Shrek" width={150} height={150} />
        </div>
      </div>
    </Layout>
  );
}