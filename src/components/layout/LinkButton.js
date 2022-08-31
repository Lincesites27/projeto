import styles from './LinkButton.module.css'

const LinkButton = () => {
  return (
   <div className={styles.btn}>
    <a href="/newproject">Criar projeto</a>
   </div>
  )
}

export default LinkButton