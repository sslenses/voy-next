import Image from "next/image";
import Head from "./head";
import Sec1 from "./section1";
import Sec2 from "./section2";
import Sec3 from "./section3";
import Footer from "./footer";
import Partners from "./partners";

export default function Home() {
  return (
    <main className="items-center bg-slate-50">
      <Head />
      <Sec1 />
      <Partners />
      <Sec2 />
      <Sec3 />
      <Footer />
    </main>
  );
}
