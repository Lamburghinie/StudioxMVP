
import { BedAndSofa, BlogPost, FAQ, Featured, Hero, LiveStore, Partners, Recommendations, ThreeDDesign } from '@/components/ui/HomePage';
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

      {/* Recommendations Section */}
      <Recommendations />

      {/* 3D Design Section */}
      <ThreeDDesign />

      {/* Bed And Sofa Section */}
      <BedAndSofa />

      {/* Blog Post Section */}
      <BlogPost />

      {/* FAQ */}
      <FAQ />

      {/* Live Store Section */}
      <LiveStore />
    </main>
  );
}
