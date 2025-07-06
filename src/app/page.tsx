import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import LoginButton from "@/components/LoginButton";
import CommonFooter from "@/components/CommonFooter";

export default function Home() {
  return (
    <main className="app">
      <Header />
      <LoginButton />
      <Hero />
      <Features />
      <CommonFooter />
    </main>
  );
}
