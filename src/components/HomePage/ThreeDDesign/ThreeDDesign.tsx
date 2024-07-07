import { Orbitron } from 'next/font/google';
import s from './ThreeDDesign.module.css';
import { BsArrowUpRightCircle } from "react-icons/bs";
import { threeDDesignImages } from './ThreeDDesignData';
import Image from 'next/image';
import CustomButton from '@/components/ui/Button/CustomButton';
import Grid from '@/components/ui/Grid';

const orbitron = Orbitron({ subsets: ['latin'] });

const ThreeDDesign = () => {
    return (
        <section className={s.root}>
            <div className={s.titleContainer}>
                <div className="text-secondary">
                    <h1 className={`${orbitron.className} ${s.title}`}>3D Design</h1>
                    <p>Create Your Dream Home Here – Join 30 Million <br /> Who've Downloaded Our 3D Designs!</p>
                </div>
                <div><CustomButton className={s.button}>Buy Now</CustomButton></div>
            </div>
            <div className='flex items-center justify-center'>
                <Grid layout='C'>
                    {threeDDesignImages?.map((val, i) => (
                        <div key={i} className='rounded-xl'>
                            <Image
                                src={val.path}
                                alt={val.alt}
                                width={val.width}
                                height={val.height}
                                priority
                            />
                            {(i === 1 || i === 2) && (
                                <p className={`${orbitron.className} ${s.overlayText}`}>
                                    {i === 1 ? 'Submit your design requests and upload room dimensions.' : 'Customer testimonials and case studies.'}
                                </p>
                            )}
                            {(i === 1 || i === 2) && (
                                <CustomButton className="absolute z-10 top-0 right-0 border-none p-0 m-0 bg-none"><BsArrowUpRightCircle size={50} /></CustomButton>
                            )}
                        </div>
                    ))}
                </Grid>
            </div>
        </section>
    );
};

export default ThreeDDesign;