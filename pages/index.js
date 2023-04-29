import { Ubuntu } from "next/font/google";
import Main from "../components/Home";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Home() {
  return (
    <main className={inter.className}>
      <Header />
      <Main />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
