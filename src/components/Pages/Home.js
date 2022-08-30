import styles from './Home.module.css'
import saving from '../../img/savings.svg'

const Home = () => {
  return (

    <section className={styles.home_container}>
      <h1>Bem vindo ao <span>Coasts</span></h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <a href="/">Criar Projeto</a>
      <img src={saving} alt="Coast" />


    </section>
   
  )
}

export default Home