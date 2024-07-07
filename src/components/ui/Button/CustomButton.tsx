import { Orbitron } from 'next/font/google';
import styles from './CustomButton.module.css';

const orbitron = Orbitron({ subsets: ['latin'] });

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type?: "button" | "submit" | "reset";
    className?: string;
    children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    type = "submit",
    className = "",
    children,
    ...props
}) => (
    <button
        type={type}
        className={`${styles.button} ${orbitron.className} ${className}`}
        {...props}
    >
        {children}
    </button>
);

export default CustomButton;
