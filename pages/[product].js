import styles from "../styles/Home.module.css";
import {useRouter} from "next/router";
import {motion} from "framer-motion";
import Link from "next/link";
import Page from "./components/page";

export default function Product() {
    const {
        query: {product},
    } = useRouter();
    return (
        <Page>
            <div className={styles.container}>
                <motion.h2 layoutId="header">{product}</motion.h2>
                <Link href="/">
                    <motion.img
                        layoutId={product}
                        className={styles["big-image"]}
                        src={product + ".jpg"}
                    />
                </Link>
            </div>
        </Page>
    );
}