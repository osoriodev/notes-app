import { BiPlus, BiSearch } from 'react-icons/bi';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Notes App</h1>
      <div className={styles.content}>
        <div className={styles.finder}>
          <BiSearch className={styles.searchIcon} />
          <input
            className={styles.input}
            type="search"
            name="finder"
            id="search"
            placeholder="Search note..."
          />
        </div>
        <button
          className={styles.btn}
          aria-label="Create Note"
        >
          <BiPlus className={styles.addIcon} />
        </button>
      </div>
    </header>
  );
}
