import { Orbitron } from 'next/font/google';
import s from './LiveStore.module.css';
import Image from 'next/image';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import CustomButton from '@/components/ui/Button/CustomButton';

const orbitron = Orbitron({ subsets: ['latin'] });

const LiveStore = () => {
    return (
        <section className={s.root}>
            <div className={s.container}>
                <div>
                    <div className={s.text}>
                        <h1 className={`${orbitron.className}`}>Find Live Store</h1>
                        <p>Click the button below to find live store.</p>
                    </div>
                    <CustomButton className={s.button}>Show More</CustomButton>
                </div>
                <div className={s.image}>
                    <Image
                        src="/assets/live-store/image-0.png"
                        alt="Live Store Image"
                        width={500}
                        height={500}
                        priority
                    />
                    <CustomButton className="absolute z-10 -top-2.5 -right-3.5 border-none p-0 m-0 bg-none">
                        <BsArrowUpRightCircle size={50} />
                    </CustomButton>
                </div>
            </div>
        </section>
    );
};
export default LiveStore;
