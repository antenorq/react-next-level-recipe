import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Link href="/meals"> Meals</Link>
        <Link href="/meals/share"> Share Meals</Link>
        <Link href="/community"> Community</Link>
      </div>
    </main>
  );
}
