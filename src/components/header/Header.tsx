import logo from '../../assets/logo.png';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={ styles.headerContainer }>
      <img className={ styles.imgLogo } src={ logo } alt="logo" />
    </header>
  );
}
