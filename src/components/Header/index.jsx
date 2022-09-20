import { BiSearch } from 'react-icons/bi';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Notes App</h1>
      <div className={styles.finder}>
        <BiSearch
          className={styles.searchIcon}
          size="1.5rem"
          aria-hidden="true"
        />
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
      >
        Create note
      </button>
    </header>
  );
}
