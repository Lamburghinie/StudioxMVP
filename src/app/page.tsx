import Featured from '@/components/ui/Featured';
import Hero from '@/components/ui/Hero';
import Partners from '@/components/ui/Partners';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="">
      {/* Hero Section */}
      <Hero headline='Discover StudioX Collections' />

      {/* Partners Section */}
      <Partners />

      {/* Featured Section */}
      <Featured />

    </main>
  );
}
