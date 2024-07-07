import React from 'react';
import s from './Partners.module.css';
import { partnerImages } from './PartnersData';
import { Orbitron } from 'next/font/google';
import Image from 'next/image';

const orbitron = Orbitron({ subsets: ['latin'] });


const Partners = () => {
    return (
        <section className={`${s.root}`}>
            <div className={`${s.partnerText}`}>
                <h1 className={`${orbitron.className} ${s.title}`}>20 Tech Companies and Partners Endorsing StudioX</h1>
            </div>
            <div className={s.imageRow}>
                {
                    partnerImages?.map((val, i) => (
                        <Image
                            src={val.path}
                            alt={val.alt}
                            key={i}
                            width={80}
                            height={80}
                            priority
                        />
                    ))
                }

            </div>
        </section>
    );
};

export default Partners;
