import React, { FC } from 'react';
import s from './Hero.module.css';
import { Orbitron } from 'next/font/google';
import Image from 'next/image';
import CustomButton from '../Button/CustomButton';

const orbitron = Orbitron({ subsets: ['latin'] });

interface HeroProps {
    className?: string;
    headline: string;
    description?: string;
}

const Hero: FC<HeroProps> = ({ headline, description }) => {
    return (
        <section className={`${s.root}`}>
            <div className={`${s.heroText}`}>
                <h1 className={`${orbitron.className} ${s.title}`}>{headline}</h1>
                <p>{description}</p>
            </div>
            <div className="w-fit grid grid-cols-2 grid-rows-2 gap-3">
                <Image
                    src="/assets/home-banner-image-0.png"
                    alt="banner image"
                    width={430}
                    height={200}
                    priority
                    className='row-span-2'
                />
                <Image
                    src="/assets/home-banner-image-1.png"
                    alt="banner image"
                    width={430}
                    height={100}
                    priority
                />
                <Image
                    src="/assets/home-banner-image-2.png"
                    alt="banner image"
                    width={430}
                    height={100}
                    priority
                />
            </div>
            <CustomButton>
                Buy Now
            </CustomButton>
        </section>
    );
};

export default Hero;
