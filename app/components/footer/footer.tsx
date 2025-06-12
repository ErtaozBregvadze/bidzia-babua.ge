import Link from "next/link";
import styles from "./footer.module.css"

export default function Footer () {
    return (
        <footer className={styles.container}>
        <Link href="/"> მთავარი გვერდი</Link>
        </footer>
    )
}