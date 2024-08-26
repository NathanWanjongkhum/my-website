import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navContainer}>
        <h1>Links</h1>
        <nav className={styles.navbar}>
          <ul>
            <li>Link 1</li>
            <li>Link 1</li>
            <li>Link 1</li>
            <li>Link 1</li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
