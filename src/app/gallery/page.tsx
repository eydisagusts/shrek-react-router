import Footer from "../footer/page";
import Header from "../header/page";
import Layout from "./layout";

export default function Gallery() {
  return (
    <>
      <Header />
      <Layout>
        <div className="flex flex-col items-center">
          <div className="mt-14 text-5xl text-center font-semibold">
            <h1>Shrek & Friends Gallery</h1>
          </div>
          <div className="mt-36">
            <img src="/images/gallery.png" alt="Gallery" width={450} height={450} />
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
}
