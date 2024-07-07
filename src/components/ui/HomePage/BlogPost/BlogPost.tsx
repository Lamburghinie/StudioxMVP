import { Orbitron } from 'next/font/google';
import s from './BlogPost.module.css';
import CustomButton from '../../Button/CustomButton';
import Image from 'next/image';
import { blogPostImages } from './BlogPostData';

const orbitron = Orbitron({ subsets: ['latin'] });

const BlogPost = () => {
    return (
        <section className={s.root}>
            <div className={s.titleContainer}>
                <div className="text-secondary">
                    <h1 className={`${orbitron.className} ${s.title}`}>Blog Post</h1>
                    <p className={s.description}>
                        Creating a cozy living room is all about combining <br />
                        comfort with style. Here are five tips to help you <br /> transform
                        your living space into a warm and <br /> inviting haven
                    </p>
                </div>
                <div>
                    <CustomButton className={s.button}>Learn More</CustomButton>
                </div>
            </div>
            <div className={s.imageSlider}>
                {blogPostImages?.map((val, i) => (
                    <Image
                        src={val.path}
                        alt={val.alt}
                        width={val.width}
                        height={val.height}
                        key={i}
                        priority
                    />
                ))}
            </div>
        </section>
    );
};

export default BlogPost;
