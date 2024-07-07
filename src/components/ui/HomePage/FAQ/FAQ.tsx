"use client";
import { useState } from 'react';
import { Orbitron } from 'next/font/google';
import s from './FAQ.module.css';
import { FAQs } from './FAQData';
import { FaPlus, FaMinus } from 'react-icons/fa';

const orbitron = Orbitron({ subsets: ['latin'] });

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={s.root}>
            <div>
                <h1 className={`${orbitron.className} ${s.title}`}>
                    Frequently asked questions
                </h1>
            </div>
            <div className={s.questionContainer}>
                {FAQs?.map((val, i) => (
                    <div className={`${s.questionTab}`} key={i}>
                        <div className={s.question} onClick={() => toggleFAQ(i)}>
                            <h3 className={`${orbitron.className}`}>{val.question}</h3>
                            {openIndex === i ? <FaMinus className={s.icon} /> : <FaPlus className={s.icon} />}
                        </div>
                        {openIndex === i && (
                            <div className={`${s.answer}`} >
                                <p>{val.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
