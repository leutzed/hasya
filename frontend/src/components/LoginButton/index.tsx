import styles from './styles.module.scss'

export function LoginButton() {
  return (
    <button
      type="button"
      className={styles.loginButton}
    >
      login
    </button>
  )
}