import styles from './styles.module.scss';

export default function Header() {
  return (
    <>
      <h1 className={styles.title}>Hasya</h1>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <nav>
            <a>Issues</a>
            <a>Open Issue</a>
          </nav>
        </div>
      </header>
    </>
  )
}
