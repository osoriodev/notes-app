import { BiTrash } from 'react-icons/bi';
import styles from './Note.module.scss';

export default function Note({ id, text, date, color, handleDeleteNote }) {
  const colorStyles = {
    backgroundColor: `var(--clr-${color})`,
    borderColor: `var(--clr-${color}-dk)`
  }

  return (
    <article className={styles.card} style={colorStyles}>
      <h3 className={styles.hidden}>Note</h3>
      <p className={styles.text}>{text}</p>
      <footer className={styles.footer}>
        <time className={styles.date}>{date}</time>
        <button
          aria-label="Delete note"
          onClick={() => handleDeleteNote(id)}
        >
          <BiTrash
            className={styles.icon}
            size="1.5rem"
            aria-hidden="true"
          />
        </button>
      </footer>
    </article>
  );
}
