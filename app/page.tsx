import styles from "./page.module.css";
import DrawerAppBar from "./components/app-bar";
import Home from "./home/home";
import Footer from './components/footer';

export default function Root() {
  return (
    <main className={styles.main}>
      <DrawerAppBar/>
      <Home></Home>
      <Footer/>
    </main>
  );
}
