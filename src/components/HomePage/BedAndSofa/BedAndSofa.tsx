import { Orbitron } from 'next/font/google';
import s from './BedAndSofa.module.css';
import { BsArrowUpRightCircle } from "react-icons/bs";
import Image from 'next/image';
import { bedAndSofaImages } from './BedAndSofaData';
import CustomButton from '@/components/ui/Button/CustomButton';
import Grid from '@/components/ui/Grid';

const orbitron = Orbitron({ subsets: ['latin'] });

const ThreeDDesign = () => {
    return (
        <section className={s.root}>
            <div className={s.titleContainer}>
                <div className="text-primary">
                    <h1 className={`${orbitron.className} ${s.title}`}>Bed And Sofa</h1>
                    <p>Check out our most popular products loved by <br /> customers.</p>
                </div>
                <div><CustomButton className={s.button}>Buy Now</CustomButton></div>
            </div>
            <div className='flex items-center justify-center'>
                <Grid layout='D'>
                    {bedAndSofaImages?.map((val, i) => (
                        <div key={i} className='rounded-xl'>
                            <Image
                                src={val.path}
                                alt={val.alt}
                                width={val.width}
                                height={val.height}
                                priority
                            />
                            {(i === 0 || i === 1) && (
                                <div className={`${orbitron.className} ${s.overlayTopText} absolute z-10`}>
                                    <p>
                                        {i === 0 ? 'Sofa' : 'Bed'}
                                    </p>
                                    <CustomButton className=" border-none p-0 m-0 bg-none"><BsArrowUpRightCircle size={50} /></CustomButton>
                                </div>
                            )}
                            {(i === 2 || i === 3) && (
                                <div className={`${orbitron.className} ${s.overlayBottomText} absolute z-10`}>
                                    <p>
                                        {i === 2 ? 'Smart Home' : 'Automation Setup'}
                                    </p>
                                    <CustomButton className="bg-none">Shop Now</CustomButton>
                                </div>
                            )}
                        </div>
                    ))}
                </Grid>
            </div>
        </section>
    );
};

export default ThreeDDesign;