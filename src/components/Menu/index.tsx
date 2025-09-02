import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {

  return <nav className={styles.menu}>
    <a className={styles.menuIcon} href='#'>
      <HomeIcon />
    </a>
    <a className={styles.menuIcon} href='#'>
      <HistoryIcon />
    </a>
    <a className={styles.menuIcon} href='#'>
      <SettingsIcon />
    </a>
    <a className={styles.menuIcon} href='#'>
      <SunIcon />
    </a>
  </nav>;
}
