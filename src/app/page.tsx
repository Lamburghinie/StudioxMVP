import CustomButton from '@/components/ui/Button/CustomButton';
import Hero from '@/components/ui/Hero';
import { Orbitron } from 'next/font/google';
import Image from 'next/image';

const orbitron = Orbitron({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="">
      {/* Hero Section */}
      <Hero headline='Discover StudioX Collections' />

    </main>
  );
}
