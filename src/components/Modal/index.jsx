import { useState } from 'react';
import { BiX } from 'react-icons/bi';
import styles from './Modal.module.scss';

export default function Modal({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = event => {
    setNoteText(event.target.value);
  }

  const handleSave = () => {
    const radios = Array.from(document.getElementsByName('color'));
    const color = radios.find(item => item.checked).value;

    if (noteText.trim().length > 0) {
      handleAddNote(noteText, color);
      setNoteText("");
    }
  }

  const closeModal = () => {
    const modal = document.getElementById('modal');
    modal.close();
  }

  return (
    <dialog className={styles.modal} id="modal">
      <button
        className={styles.closeBtn}
        aria-label="Close modal"
        onClick={closeModal}
        autoFocus
      >
        <BiX
          className={styles.icon}
          size="1.5rem"
          aria-hidden="true"
        />
      </button>
      <h2 className={styles.title}>Create note</h2>
      <form className={styles.form} method="dialog">
        <label className={styles.label} htmlFor="desc">Enter text</label>
        <div className={styles.textWrapper}>
          <textarea
            className={styles.textarea}
            name="desc"
            id="desc"
            maxLength="200"
            placeholder="Type something..."
            value={noteText}
            onChange={handleChange}
          ></textarea>
          <p className={styles.advice}>{characterLimit - noteText.length} remaining</p>
        </div>
        <p className={styles.label}>Select color</p>
        <div className={styles.inputsWrapper}>
          <input
            className={styles.input}
            type="radio"
            name="color"
            value="yellow"
            id="rd1"
            defaultChecked={true}
          />
          <label className={`${styles.color} ${styles.yellow}`} htmlFor="rd1"></label>
          <input
            className={styles.input}
            type="radio"
            name="color"
            value="orange"
            id="rd2"
          />
          <label className={`${styles.color} ${styles.orange}`} htmlFor="rd2"></label>
          <input
            className={styles.input}
            type="radio"
            name="color"
            value="purple"
            id="rd3"
          />
          <label className={`${styles.color} ${styles.purple}`} htmlFor="rd3"></label>
          <input
            className={styles.input}
            type="radio"
            name="color"
            value="blue"
            id="rd4"
          />
          <label className={`${styles.color} ${styles.blue}`} htmlFor="rd4"></label>
          <input
            className={styles.input}
            type="radio"
            name="color"
            value="green"
            id="rd5"
          />
          <label className={`${styles.color} ${styles.green}`} htmlFor="rd5"></label>
          <input
            className={styles.input}
            type="radio"
            name="color"
            value="red"
            id="rd6"
          />
          <label className={`${styles.color} ${styles.red}`} htmlFor="rd6"></label>
        </div>
        <button className={styles.btn} onClick={handleSave}>Save</button>
      </form>
    </dialog>
  );
}
