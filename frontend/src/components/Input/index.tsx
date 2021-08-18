import styles from './styles.module.scss'

export function Input(placeholder) {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}>
    </input>
  )
}