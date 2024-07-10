import Link from 'next/link';
import s from './Navbar.module.css';
import Image from 'next/image';
import { LuHeart, LuSearch, LuShoppingCart } from 'react-icons/lu';
import { navBarLinks } from './NavbarData';

interface Link {
    link: string;
    label: string;
}

const Navbar = () => {
    return (
        <div className={s.root}>
            <div className={`mx-auto max-w-8xl px-16`}>
                <div className={s.nav}>
                    <div className="flex items-center justify-between flex-1">
                        <Link href="/" className={s.logo} aria-label="Logo">
                            <Image
                                src="/studio-x.svg"
                                alt="Studio X Logo"
                                width={100}
                                height={50}
                                priority
                            />
                        </Link>
                        <div className={`${s.flexDiv} gap-10`}>
                            <nav className={s.navMenu}>
                                <Link href="#" className={s.link}>
                                    3D Studio
                                </Link>
                                {navBarLinks?.map((val, i) => (
                                    <Link href={val.link} key={i} className={s.link}>
                                        {val.label}
                                    </Link>
                                ))}
                            </nav>
                            <div
                                className={`${s.flexDiv} justify-between text-secondary`}
                            >
                                <LuSearch size={20} className="cursor-pointer" />
                                <div className="flex items-center h-7 w-0.5 mx-7 bg-primary"></div>
                                <Link href="/contact" className={`${s.link}`}>
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                        <div className={`${s.flexDiv} justify-center gap-4 text-secondary`}>
                            <LuShoppingCart size={20} className={`${s.icon}`} />
                            <LuHeart size={20} className={`${s.icon}`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
