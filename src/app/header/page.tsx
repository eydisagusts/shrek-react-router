import Link from "next/link";
import Layout from "./layout";

export default function Header() {
    return (
        <Layout>
            <header className="gap-80 flex flex-row items-center justify-center text-center text-xl">
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
            </header>
        </Layout>
    );
}