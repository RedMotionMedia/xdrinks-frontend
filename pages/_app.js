import { motion, AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
        <motion.div key={router.pathname}>
            <Component {...pageProps} />

            <motion.div
                className="absolute top-0 left-0 w-full h-screen bg-black origin-bottom"
                initial={{scaleY: 0}}
                animate={{scaleY: 0}}
                exit={{scaleY: 1}}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >

            </motion.div>
            <motion.div
                className="absolute top-0 left-0 w-full h-screen bg-black origin-top"
                initial={{scaleY: 1}}
                animate={{scaleY: 0}}
                exit={{scaleY: 0}}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
            </motion.div>
        </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
