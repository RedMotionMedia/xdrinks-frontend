import Link from "next/link";
import { React, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
];
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const menuVars = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };
    const containerVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1,
            },
        },
    };

    return (
        <header>
            <div className="fixed w-full flex justify-between h-1/12 pr-12">
                <div>
                    <Link href="/" className="flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            className="w-10 pt-1"
                        >
                            <path
                                d="m 21.384 7.128 L 42.768 49.896 L 21.384 92.664 L 42.768 92.664 L 57.024 64.152 L 71.28 92.664 L 92.664 92.664 L 71.28 49.896 L 92.664 7.128 L 71.28 7.128 L 57.024 35.64 L 42.768 7.128 L 21.384 7.128"
                                className="fill-[#00FF00FF]"
                            />
                        </svg>
                        <div className="font-bold">
                            <p>Drinks</p>
                        </div>
                    </Link>
                </div>
                <p
                    className="lg:hidden flex justify-center items-center"
                    onClick={toggleMenu}
                >
                    Menu
                </p>
                <div className="lg:flex hidden justify-center items-center">
                    <div className="pl-4 pr-8">
                        <Link href="/">Home</Link>
                    </div>
                    <div className="pl-4 pr-8">
                        <Link href="/about">About</Link>
                    </div>
                    <div className="pl-4 pr-8">
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed left-0 top-0 w-full h-screen origin-top bg-black text-white"
                    >
                        <div className="flex h-full flex-col pt-5 pl-4 pr-4">
                            <div className="flex justify-between">
                                <div>
                                    <Link href="/" className="flex justify-center items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 100 100"
                                            className="w-10 pt-1"
                                        >
                                            <path
                                                d="m 21.384 7.128 L 42.768 49.896 L 21.384 92.664 L 42.768 92.664 L 57.024 64.152 L 71.28 92.664 L 92.664 92.664 L 71.28 49.896 L 92.664 7.128 L 71.28 7.128 L 57.024 35.64 L 42.768 7.128 L 21.384 7.128"
                                                className="fill-[#00FF00FF]"
                                            />
                                        </svg>
                                        <div className="font-bold text-white">
                                            <p>Drinks</p>
                                        </div>
                                    </Link>
                                </div>
                                <p
                                    className="cursor-pointer text-md flex justify-center items-center pr-5"
                                    onClick={toggleMenu}
                                >
                                    Close
                                </p>
                            </div>
                            <motion.div
                                variants={containerVars}
                                initial="initial"
                                animate="open"
                                exit="initial"
                                className="flex flex-col h-full justify-center font-lora items-center gap-4 pb-20"
                            >
                                {navLinks.map((link, index) => {
                                    return (
                                        <div className="overflow-hidden">
                                            <MobileNavLink
                                                key={index}
                                                title={link.title}
                                                href={link.href}
                                            />
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
const mobileLinkVars = {
    initial: {
        textColor: "white",
        y: "30vh",
        transition: {
            duration: 0.5,
            ease: [0.37, 0, 0.63, 1],
        },
    },
    open: {
        textColor: "white",
        y: 0,
        transition: {
            ease: [0, 0.55, 0.45, 1],
            duration: 0.7,
        },
    },
};
const MobileNavLink = ({ title, href }) => {
    return (
        <motion.div
            variants={mobileLinkVars}
            className="text-4xl uppercase"
        >
            <Link href={href} className="text-white">{title}</Link>
        </motion.div>
    );
};