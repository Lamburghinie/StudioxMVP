import React, { FC } from 'react';
import s from './Hero.module.css';
import { Orbitron } from 'next/font/google';
import Image from 'next/image';
import CustomButton from '../Button/CustomButton';
import Grid from '../Grid';
import { heroImages } from './HeroData';

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
            <div className='flex items-center justify-center'>
                <Grid layout='A'>
                    {
                        heroImages?.map((val, i) => (
                            <Image
                                src={val.path}
                                alt={val.alt}
                                key={i}
                                width={val.width}
                                height={val.height}
                                priority
                            />
                        ))
                    }
                </Grid>
            </div>


            <CustomButton className={s.button}>
                Buy Now
            </CustomButton>
        </section>
    );
};

export default Hero;
