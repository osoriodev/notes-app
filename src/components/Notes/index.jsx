import Note from '../Note';
import styles from './Notes.module.scss';

export default function Notes({ notes, handleDeleteNote }) {
  return (
    <main className={styles.main}>
      <h2 className={styles.hidden}>Notes</h2>
      <div className={styles.layout}>
        {
          notes.map(item => (
            <Note
              id={item.id}
              key={item.id}
              text={item.text}
              date={item.date}
              color={item.color}
              handleDeleteNote={handleDeleteNote}
            />
          ))
        }
      </div>
    </main>
  );
}
