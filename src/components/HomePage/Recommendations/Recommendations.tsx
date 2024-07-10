import { Orbitron } from "next/font/google";
import s from './Recommendations.module.css';
import { recommendationImages } from "./RecommendationsData";
import Image from "next/image";
import CustomButton from "@/components/ui/Button/CustomButton";

const orbitron = Orbitron({ subsets: ['latin'] });

const Recommendations = () => {
    return (
        <section className={s.root}>
            <div className={s.titleContainer}>
                <div className="text-secondary">
                    <h1 className={`${orbitron.className} ${s.title}`}>Recommendaitons</h1>
                    <p>Check out our most popular products loved by customers.</p>
                </div>
                <div><CustomButton className={s.button}>Shop Now</CustomButton></div>
            </div>
            <div className={s.imageSlider}>
                {recommendationImages?.map((val, i) => (
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

export default Recommendations;