import { Suspense } from "react";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";
import GlobalLoading from "./loading";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<GlobalLoading />}>
        <Hero />
        <Projects />
        <Newsletter />
      </Suspense>
    </main>
  );
}
