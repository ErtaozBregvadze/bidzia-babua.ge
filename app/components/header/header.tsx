import Link from "next/link";
import styles from "./header.module.css"

export default function Header () {
    return (
        <header className={styles.container}>
        <Link href="/"> main page</Link>
        <Link href="/contuctus"> contuct us</Link>
        <Link href="/aboutus"> about us</Link>
        </header>
    )
}