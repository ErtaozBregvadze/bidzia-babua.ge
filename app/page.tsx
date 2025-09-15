'use client'
import styles from "./page.module.css";
import Button from "./components/button/Button";

import Link from "next/link";
import Counter from "./components/counter/counter";
import TextInput from "./components/TextInput/TextInput";
import Checkbox from "./components/checkbox/Checkbox";
import Todo from "./components/Todo/Todo"

export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button icon={true} mode="fill" title= "რეგიტრაცია" className={styles.main} />
        
        <Counter />
        <TextInput />
        <Checkbox />
        <Todo />
        
      </main>
    </div>
  );
}
