import { BiSearch } from 'react-icons/bi';
import styles from './Header.module.scss';

export default function Header({ handleSearchNote }) {
  const openModal = () => {
    const modal = document.getElementById('modal');
    modal.showModal();
  }

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
          onChange={(e) => handleSearchNote(e.target.value)}
        />
      </div>
      <button
        className={styles.btn}
        onClick={openModal}
      >
        Create note
      </button>
    </header>
  );
}
