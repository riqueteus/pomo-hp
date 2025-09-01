import styles from './styles.module.css';
import pomoDeOuro from '../../assets/Pomo_de_Ouro.webp'

export function Logo() {

  return <div className={styles.logo}>
    <img height={140} src={pomoDeOuro} alt='LogoPomo'/>
    <span className={styles.logoNome}>Pomo</span>
  </div>;
}
