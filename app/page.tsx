'use client'
import styles from "./page.module.css";
import Button from "./components/button/Button";

import Link from "next/link";

export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button mode="fill" title= "რეგიტრაცია" className={styles.main} />
        
      </main>
    </div>
  );
}
