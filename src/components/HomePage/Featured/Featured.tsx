import React from 'react';
import s from './Featured.module.css';
import { Orbitron } from 'next/font/google';
import Image from 'next/image';
import { featuredImages } from './FeaturedData';
import { LuFiles } from "react-icons/lu";
import Grid from '@/components/ui/Grid';
import CustomButton from '@/components/ui/Button/CustomButton';

const orbitron = Orbitron({ subsets: ['latin'] });

const Featured = () => {
    return (
        <section className={`${s.root}`}>
            <div className='flex items-center justify-center'>
                <Grid layout='B'>
                    {
                        featuredImages?.map((val, i) => (
                            <Image
                                src={val.path}
                                alt={val.alt}
                                key={i}
                                width={val.width}
                                height={val.height}
                                className={s.featuredImages}
                                priority
                            />
                        ))
                    }
                </Grid>
            </div>


            <CustomButton className={`${orbitron.className} ${s.button}`}>
                Download Brochure
                <LuFiles size={20} />
            </CustomButton>
        </section>
    );
};

export default Featured;
