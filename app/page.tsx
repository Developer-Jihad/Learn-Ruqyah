import styles from "./page.module.css";
import Home from "./home/page";

export default function Root() {
  return (
    <main className={styles.main}>
      <Home></Home>
    </main>
  );
}
